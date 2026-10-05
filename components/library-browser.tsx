"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SopDocument } from "@/lib/content";

type Facets = {
  types: string[];
  departments: string[];
  owners: string[];
  statuses: string[];
};

export function LibraryBrowser({ documents, facets }: { documents: SopDocument[]; facets: Facets }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [department, setDepartment] = useState("");
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState("");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return documents.filter((doc) => {
      const haystack = [
        doc.title,
        doc.searchText,
        doc.type,
        doc.department,
        doc.owner,
        ...doc.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!needle || haystack.includes(needle)) &&
        (!type || doc.type === type) &&
        (!department || doc.department === department) &&
        (!owner || doc.owner === owner) &&
        (!status || doc.status === status)
      );
    });
  }, [documents, query, type, department, owner, status]);

  const clear = () => {
    setQuery("");
    setType("");
    setDepartment("");
    setOwner("");
    setStatus("");
  };

  return (
    <section className="library-browser">
      <div className="browser-toolbar">
        <label className="search-field">
          <span>Search the library</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search any SOP, policy, topic, owner or tag…"
          />
        </label>

        <div className="filters" aria-label="Library filters">
          <Filter label="Type" value={type} values={facets.types} onChange={setType} />
          <Filter label="Department" value={department} values={facets.departments} onChange={setDepartment} />
          <Filter label="Owner" value={owner} values={facets.owners} onChange={setOwner} />
          <Filter label="Status" value={status} values={facets.statuses} onChange={setStatus} />
          <button type="button" className="clear-button" onClick={clear}>Clear</button>
        </div>
      </div>

      <div className="results-heading">
        <div>
          <p className="eyebrow">Library</p>
          <h2>{filtered.length} document{filtered.length === 1 ? "" : "s"}</h2>
        </div>
        <a
          className="contribute-link"
          href="https://github.com/hifazlerabbi/Blinto-SOP-Library/issues/new"
          target="_blank"
          rel="noreferrer"
        >
          Suggest update
        </a>
      </div>

      <div className="document-grid">
        {filtered.map((doc) => (
          <Link key={doc.slug} href={`/sop/${doc.slug}`} className="document-card">
            <div className="card-topline">
              <span className={`type-badge type-${doc.type}`}>{doc.type}</span>
              <span className={`status-dot status-${doc.status}`}>{doc.status}</span>
            </div>
            <h3>{doc.title}</h3>
            <p>{doc.excerpt || "Open this document to view the full operating guidance."}</p>
            <div className="card-meta">
              <span>{doc.department}</span>
              <span>{doc.owner}</span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <h3>No matching documents</h3>
          <p>Try a broader search or clear one of the filters.</p>
          <button type="button" className="clear-button" onClick={clear}>Clear filters</button>
        </div>
      )}
    </section>
  );
}

function Filter({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">All {label.toLowerCase()}s</option>
        {values.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </label>
  );
}
