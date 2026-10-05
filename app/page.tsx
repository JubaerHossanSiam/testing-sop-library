import { LibraryBrowser } from "@/components/library-browser";
import { getAllDocuments, getFacetValues } from "@/lib/content";

export default function HomePage() {
  const documents = getAllDocuments();
  const facets = getFacetValues(documents);
  const approved = documents.filter((doc) => doc.status === "approved").length;

  return (
    <div className="shell page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Internal knowledge system</p>
          <h1>Find the right process. Follow one source of truth.</h1>
          <p className="hero-copy">
            Policies, SOPs, checklists, templates, guides and references—generated directly from the canonical Markdown library.
          </p>
        </div>
        <div className="hero-stats" aria-label="Library summary">
          <div><strong>{documents.length}</strong><span>Documents</span></div>
          <div><strong>{approved}</strong><span>Approved</span></div>
          <div><strong>{facets.departments.length}</strong><span>Departments</span></div>
        </div>
      </section>

      <LibraryBrowser documents={documents} facets={facets} />
    </div>
  );
}
