import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type SopDocument = {
  slug: string;
  filename: string;
  title: string;
  type: string;
  department: string;
  owner: string;
  status: string;
  version: string;
  lastReviewed: string;
  reviewCycle: string;
  tags: string[];
  related: string[];
  excerpt: string;
  searchText: string;
};

export type DocumentHeading = {
  id: string;
  text: string;
  depth: 2 | 3;
};

const ROOT = process.cwd();
const EXCLUDED = new Set(["README.md", "AI-INSTRUCTIONS.md"]);

function normalizeList(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  return [String(value)];
}

function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^\)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/[|*_~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanExcerpt(markdown: string): string {
  return plainText(markdown).slice(0, 180);
}

function buildDocument(filename: string): SopDocument {
  const raw = fs.readFileSync(path.join(ROOT, filename), "utf8");
  const parsed = matter(raw);
  const data = parsed.data;
  const bodyText = plainText(parsed.content);

  return {
    slug: filename.replace(/\.md$/, ""),
    filename,
    title: String(data.title || filename.replace(/\.md$/, "")),
    type: String(data.type || "reference"),
    department: String(data.department || "Company"),
    owner: String(data.owner || "Unassigned"),
    status: String(data.status || "draft"),
    version: String(data.version || ""),
    lastReviewed: String(data.last_reviewed || ""),
    reviewCycle: String(data.review_cycle || ""),
    tags: normalizeList(data.tags),
    related: normalizeList(data.related),
    excerpt: cleanExcerpt(parsed.content),
    searchText: bodyText,
  };
}

export function getDocumentFiles(): string[] {
  return fs
    .readdirSync(ROOT)
    .filter((name) => name.endsWith(".md"))
    .filter((name) => !EXCLUDED.has(name));
}

export function getAllDocuments(): SopDocument[] {
  return getDocumentFiles()
    .map(buildDocument)
    .filter((doc) => doc.status !== "deprecated")
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getDocument(slug: string) {
  const filename = `${slug}.md`;
  const fullPath = path.join(ROOT, filename);
  if (!fs.existsSync(fullPath) || EXCLUDED.has(filename)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  return { document: buildDocument(filename), markdown: parsed.content };
}

function headingSlug(value: string): string {
  const cleaned = plainText(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return cleaned || "section";
}

export function getDocumentHeadings(markdown: string): DocumentHeading[] {
  const seen = new Map<string, number>();
  const headings: DocumentHeading[] = [];

  for (const line of markdown.split("\n")) {
    const match = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);
    if (!match) continue;

    const depth = match[1].length as 2 | 3;
    const text = plainText(match[2]);
    if (!text) continue;

    const base = headingSlug(text);
    const occurrence = seen.get(base) ?? 0;
    seen.set(base, occurrence + 1);
    const id = occurrence === 0 ? base : `${base}-${occurrence + 1}`;

    headings.push({ id, text, depth });
  }

  return headings;
}

function rewriteInternalMarkdownLinks(html: string): string {
  return html.replace(
    /href="(?:\.\/)?([a-z0-9][a-z0-9-]*)\.md(?:#[^"]*)?"/gi,
    (_match, slug: string) => `href="/sop/${slug}"`,
  );
}

function addHeadingIds(html: string, markdown: string): string {
  const headings = getDocumentHeadings(markdown);
  let index = 0;

  return html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (match, depth: string, content: string) => {
    const heading = headings[index++];
    if (!heading) return match;
    return `<h${depth} id="${heading.id}">${content}</h${depth}>`;
  });
}

function wrapTables(html: string): string {
  return html
    .replace(/<table>/g, '<div class="table-scroll"><table>')
    .replace(/<\/table>/g, "</table></div>");
}

export async function renderMarkdown(markdown: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml).process(markdown);
  const withLinks = rewriteInternalMarkdownLinks(result.toString());
  const withHeadingIds = addHeadingIds(withLinks, markdown);
  return wrapTables(withHeadingIds);
}

export function getFacetValues(documents: SopDocument[]) {
  const unique = (values: string[]) => [...new Set(values.filter(Boolean))].sort();
  return {
    types: unique(documents.map((doc) => doc.type)),
    departments: unique(documents.map((doc) => doc.department)),
    owners: unique(documents.map((doc) => doc.owner)),
    statuses: unique(documents.map((doc) => doc.status)),
  };
}
