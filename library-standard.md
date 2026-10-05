---
title: Blinto SOP Library Standard
type: reference
department: Company
owner: SOP Library Team
status: approved
version: 1.1
last_reviewed: 2026-08-20
review_cycle: annual
tags:
  - sop-library
  - documentation
  - governance
related:
  - contribution-and-approval
  - ai-authoring-workflow
  - library-index
  - migration-register
---

# Blinto SOP Library Standard

## Purpose

Define how operational knowledge is structured, named, linked, and maintained in the Blinto SOP Library.

## Canonical Knowledge Rule

Every process, rule, reusable resource, or standard should have one canonical home.

Before creating a document:

1. Search the library for the process or concept.
2. If it already exists, improve the canonical document or link to it.
3. Create a new document only when it represents a genuinely distinct piece of operational knowledge.

Do not copy a procedure, checklist, policy, or template into another document merely for convenience. Link to the canonical document instead.

## Document Types

Use one of these types:

- `sop` — repeatable process and execution steps.
- `checklist` — items that must be completed or verified.
- `template` — reusable content or structure.
- `policy` — mandatory rules, boundaries, or requirements.
- `guide` — instructional knowledge that is not a strict repeatable process.
- `reference` — standards, definitions, conventions, maps, inventories, or quick-reference information.

Do not create a new type unless the existing types cannot accurately represent the document.

## Repository Structure

Operational knowledge remains flat at the repository root. Do not create department or document-type folders for content.

Technical infrastructure may use folders such as `.github/`, `scripts/`, or website-specific directories when required.

## File Naming

Use lowercase kebab-case filenames that describe the canonical subject.

Examples:

- `client-onboarding.md`
- `website-launch-checklist.md`
- `project-kickoff-template.md`
- `credential-and-password-management-policy.md`

Avoid dates, version numbers, department prefixes, and words such as `final` in filenames.

## Required Frontmatter

Every operational document must begin with YAML frontmatter.

```yaml
---
title: Client Onboarding
type: sop
department: Project Delivery
owner: Project Delivery
status: approved
version: 1.0
last_reviewed: 2026-08-20
review_cycle: 6-months
tags:
  - client
  - onboarding
related:
  - project-kickoff
  - client-communication-and-escalation
---
```

### Required fields

- `title`
- `type`
- `department`
- `owner`
- `status`
- `version`
- `last_reviewed`
- `review_cycle`
- `tags`
- `related`

Allowed statuses are `draft`, `in-review`, `approved`, and `deprecated`.

The `related` field uses repository slugs without `.md`. Every related slug should resolve to an existing canonical document unless it intentionally points to an explicitly planned resource described in the body.

## SOP Structure

A typical SOP should contain:

1. Purpose
2. When to Use
3. Owner
4. Preconditions or Requirements
5. Procedure
6. Exceptions / Escalation
7. Related Resources

Use only the sections that improve execution. Do not add empty sections simply to satisfy a template.

## Linking Standard

Use relative Markdown links when referring to another document.

```md
Follow the [Deliverable QA & Approval](./deliverable-qa-and-approval.md) before release.
```

A related document should be linked rather than reproduced.

## Relationship Model

Documents may depend on one another. For example:

`Client Onboarding SOP` → `Project Kickoff SOP` → `Client Access Collection SOP` → `Client Communication & Escalation SOP` → `Deliverable QA & Approval SOP` → `Project / Client Offboarding SOP`

These are independent canonical documents connected through links and metadata.

## Updating Documents

Update the existing canonical document when:

- a process changes;
- a missing step is discovered;
- a rule changes;
- a better method replaces an existing method;
- additional context is necessary to execute the same process.

Create a new document only when the subject has a distinct purpose and should be independently discoverable or reusable.

When a document is superseded, merge any still-valid knowledge into the canonical owner, update inbound links/metadata, and remove or explicitly deprecate the obsolete document. Do not leave competing approved or in-review versions discoverable without a clear reason.

## Indexing & Discoverability

Every canonical operational document intended for team use should be represented in [Library Index & Roadmap](./library-index.md) under its owning domain.

Migration-control documents may also be indexed where they remain operationally useful. Superseded legacy files should not remain in the active root merely as historical evidence; Git history already preserves them.

## Website Compatibility

Markdown files and frontmatter should remain machine-readable so the internal website can automatically provide:

- full-text search;
- filters by document type, department, owner, and status;
- related-document relationships;
- backlinks/navigation;
- review information;
- automatic indexing.

The website is a generated/read interface. GitHub `main` remains the canonical source.

## Backup Principle

GitHub `main` is the source of truth. Google Drive backups and generated websites are downstream copies and must not be edited as alternative sources.
