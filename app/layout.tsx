import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blinto SOP Library",
  description: "Internal operating system for Blinto policies, SOPs, checklists, templates, guides and references.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell header-inner">
            <Link href="/" className="brand">
              <span className="brand-mark">B</span>
              <span>
                <strong>Blinto</strong>
                <small>SOP Library</small>
              </span>
            </Link>
            <nav className="header-nav" aria-label="Primary navigation">
              <Link href="/">Library</Link>
              <a href="https://github.com/hifazlerabbi/Blinto-SOP-Library" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <span>GitHub main is the source of truth.</span>
            <span>Blinto SOP Library</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
