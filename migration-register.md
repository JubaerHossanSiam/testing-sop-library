---
title: SOP Library Migration Register
type: reference
department: Company
owner: SOP Library Team
status: approved
version: 2.0
last_reviewed: 2026-08-20
review_cycle: as-needed
tags:
  - sop-library
  - migration
  - inventory
related:
  - library-standard
  - contribution-and-approval
  - library-index
---

# SOP Library Migration Register

## Purpose

Track the legacy SOP Library sources that were reviewed and how they were reconciled into the canonical Markdown library.

This is a migration-control document, not a second copy of SOP content. GitHub `main` is the source of truth for the canonical documents.

## Source Boundary

For this project, legacy migration evidence is limited to the approved **SOP Library** source area in Google Drive plus the Employee Handbook content explicitly supplied for migration/reference.

Other Drive folders are not source material for this project unless explicitly approved later.

The previously identified security spreadsheets were deleted and are **excluded** from the migration/reference set.

## Migration Rules

For every legacy document:

1. Treat the legacy file as source evidence, not as the standard.
2. Search the repository for an existing canonical document covering the same process or concept.
3. Decide whether to **merge**, **update**, **split**, **link**, **create**, or **retire** the source content.
4. Reclassify surviving content using the canonical document types.
5. Rewrite to the current [Library Standard](./library-standard.md); do not preserve weak legacy structure merely for fidelity.
6. Add required metadata and interlinks.
7. Review before publishing to `main`.
8. After migration, the canonical GitHub document owns future edits; legacy copies are archive/backup evidence only.

## Reconciled Legacy Sources

| Legacy source | Canonical replacement | Decision | Status | Notes |
| --- | --- | --- | --- | --- |
| SOP Template: Blinto WorkWise | `.github/document-templates/*`, [Library Standard](./library-standard.md), [AI Authoring Workflow](./ai-authoring-workflow.md) | Merge + Retire | Complete | Useful principles retained selectively; the old all-in-one template mixed several document types. |
| SOP: Blinto Internship Program | [Internship Program](./internship-program.md) plus linked People resources | Rewrite + Split + Link | Complete | Rebuilt as a focused lifecycle SOP instead of combining hiring, onboarding, performance, policy and templates. |
| SOP: Blinto Office Time & Punctuality | [Office Hours Policy](./office-hours-policy.md), [Attendance Policy](./attendance-policy.md), [Overtime Policy](./overtime-policy.md) | Rewrite + Split | Complete | The legacy combined document was retired; each policy now owns one rule domain. |
| SOP: WordPress Website Security | [WordPress Security Standard](./wordpress-security-standard.md), [WordPress Security Checklist](./wordpress-security-checklist.md), [WordPress Monthly Security Maintenance Checklist](./wordpress-monthly-security-maintenance-checklist.md) | Rewrite + Split | Complete | Superseded in-review duplicates were removed during the integrity audit. |
| SOP: Team Member Exit Process | [Employee Offboarding](./employee-offboarding.md) + [Employee Offboarding Checklist](./employee-offboarding-checklist.md) | Rebuild | Complete | Legacy source was insufficient; rebuilt from approved current operations and linked access/security controls. |
| SOP: Hiring Process | [Hiring](./hiring.md) + linked templates | Rebuild | Complete | Rebuilt from the approved hiring process and reusable role/interview resources. |
| SOP: Onboarding Process | [Employee Onboarding](./employee-onboarding.md) + [Employee Onboarding Checklist](./employee-onboarding-checklist.md) | Rebuild | Complete | Rebuilt from current onboarding practice and linked access/equipment/security resources. |
| SOP: Performance Review Process | [Performance Review](./performance-review.md) | Rebuild | Complete | Rebuilt from the current Blinto performance framework rather than the legacy shell. |
| SOP: SEO Client Type Identification | [SEO Client Intake & Routing](./seo-client-intake-and-routing.md) + [SEO Client Intake Checklist](./seo-client-intake-checklist.md) | Rewrite + Split | Complete | Intake logic simplified and separated from the reusable execution checklist. |
| Employee Handbook | Multiple canonical People policies/SOPs | Migrate concept-by-concept | In progress | Reference source only; handbook text is not automatically approved and is checked against current decisions before migration. |

## Excluded / Retired Sources

The following are not active canonical documents and should not be restored merely for history:

- deleted security spreadsheets;
- superseded combined Office Hours, Attendance & Punctuality policy;
- superseded WordPress Website Security SOP;
- superseded WordPress pre-launch and recurring security checklists.

Git history preserves prior Markdown versions when historical review is needed.

## Decision Definitions

- **Create** — no canonical document exists; create a new one.
- **Update** — the source adds useful information to an existing canonical document.
- **Merge** — multiple legacy documents cover the same subject and should become one canonical document.
- **Split** — one legacy document improperly combines multiple independently reusable canonical documents.
- **Link** — the source contains information already owned elsewhere; reference it instead of copying it.
- **Retire** — obsolete, superseded, empty, or no longer useful as an operational source.

## Migration Status

The original SOP Library migration baseline is substantially complete. Future migration work should focus on:

1. remaining Employee Handbook concepts not yet canonicalized;
2. any newly approved legacy source explicitly added to this project's source boundary;
3. replacing downstream Google Drive copies with generated/synced Markdown backups once the GitHub-to-Drive process is configured.

New SOP creation should now follow the roadmap in [Library Index & Roadmap](./library-index.md), not this migration register.
