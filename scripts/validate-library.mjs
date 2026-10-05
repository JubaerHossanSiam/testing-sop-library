import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const EXCLUDED = new Set(["README.md", "AI-INSTRUCTIONS.md"]);
const REQUIRED_FIELDS = [
  "title",
  "type",
  "department",
  "owner",
  "status",
  "version",
  "last_reviewed",
  "review_cycle",
  "tags",
  "related",
];

const files = fs
  .readdirSync(ROOT)
  .filter((name) => name.endsWith(".md"))
  .filter((name) => !EXCLUDED.has(name));

const fileSet = new Set(files);
const errors = [];

for (const filename of files) {
  const raw = fs.readFileSync(path.join(ROOT, filename), "utf8");
  const parsed = matter(raw);

  for (const field of REQUIRED_FIELDS) {
    if (!(field in parsed.data)) {
      errors.push(`${filename}: missing frontmatter field '${field}'`);
    }
  }

  const localLinks = [...parsed.content.matchAll(/\]\((?:\.\/)?([a-z0-9][a-z0-9-]*\.md)(?:#[^)]+)?\)/gi)];
  for (const match of localLinks) {
    const target = match[1];
    if (!fileSet.has(target) && !EXCLUDED.has(target)) {
      errors.push(`${filename}: broken local Markdown link -> ${target}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Library validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Library validation passed for ${files.length} operational Markdown files.`);
