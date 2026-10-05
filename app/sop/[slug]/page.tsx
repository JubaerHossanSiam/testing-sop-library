import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllDocuments, getDocument, getDocumentHeadings, renderMarkdown } from "@/lib/content";

export function generateStaticParams() {
  return getAllDocuments().map((doc) => ({ slug: doc.slug }));
}

export default async function SopPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getDocument(slug);
  if (!result || result.document.status === "deprecated") notFound();

  const { document, markdown } = result;
  const html = await renderMarkdown(markdown);
  const headings = getDocumentHeadings(markdown).filter((heading) => heading.depth === 2);
  const allDocuments = getAllDocuments();
  const related = document.related
    .map((relatedSlug) => allDocuments.find((doc) => doc.slug === relatedSlug))
    .filter(Boolean);

  return (
    <div className="shell reader-shell">
      <aside className="reader-sidebar">
        <Link href="/" className="back-link">← Back to library</Link>
        <dl className="meta-list">
          <Meta label="Type" value={document.type} />
          <Meta label="Department" value={document.department} />
          <Meta label="Owner" value={document.owner} />
          <Meta label="Status" value={document.status} />
          <Meta label="Version" value={document.version} />
          <Meta label="Last reviewed" value={document.lastReviewed} />
          <Meta label="Review cycle" value={document.reviewCycle} />
        </dl>
        {document.tags.length > 0 && (
          <div className="tag-list">
            {document.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}
        {headings.length > 2 && (
          <nav className="page-toc" aria-label="On this page">
            <p>On this page</p>
            <div>
              {headings.map((heading) => (
                <a key={heading.id} href={`#${heading.id}`}>{heading.text}</a>
              ))}
            </div>
          </nav>
        )}
      </aside>

      <article className="reader-article">
        <div className="reader-title-row">
          <div>
            <p className="eyebrow">{document.type} · {document.department}</p>
            <h1>{document.title}</h1>
          </div>
          <a
            className="contribute-link"
            href={`https://github.com/hifazlerabbi/Blinto-SOP-Library/edit/main/${document.filename}`}
            target="_blank"
            rel="noreferrer"
          >
            Suggest edit
          </a>
        </div>

        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />

        {related.length > 0 && (
          <section className="related-section">
            <p className="eyebrow">Related documents</p>
            <div className="related-grid">
              {related.map((doc) => doc && (
                <Link key={doc.slug} href={`/sop/${doc.slug}`}>
                  <span>{doc.type}</span>
                  <strong>{doc.title}</strong>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
