---
title: Google Drive Organization Standard
type: reference
department: Company
owner: People Operations
status: approved
version: 1.0
last_reviewed: 2026-08-19
review_cycle: annual
tags:
  - google-drive
  - documentation
  - file-management
  - organization
related:
  - library-standard
---

# Google Drive Organization Standard

## Purpose

Define the canonical top-level organization and file-placement rules for Blinto's shared Google Drive resources.

This document is a reference standard, not a step-by-step SOP. It explains **where information belongs** and how to avoid duplicate or misplaced operational content.

## Core Rule

Store each file in the location that best matches its primary purpose.

Do not duplicate the same working file across multiple folders merely to make it easier to find. Prefer shortcuts, links, or the canonical source location.

## Top-Level Structure

| Area | Purpose |
| --- | --- |
| Administration | Official company records, HR, finance, legal, office administration, company assets, and controlled internal records |
| Sales & Marketing | Sales, marketing, lead generation, business development, proposals, campaigns, and related reporting |
| Design & Creative | Reusable design assets, creative production, brand/design resources, multimedia, and templates |
| Tech & Development | Engineering resources, infrastructure, scripts, technical documentation, reusable development assets, and experiments |
| Operations | Client delivery, project execution, client success, delivery records, and client-facing operational resources |
| Projects & SaaS | Blinto-owned products, internal ventures, websites, and SaaS projects |
| SOP Library | **Backup/shortcut access only.** GitHub `main` is the canonical source of SOP Library content |
| Knowledge & Training | Training, onboarding learning resources, research, learning materials, and knowledge-sharing content |
| BOSS / Company Operating System | Strategy, leadership, management systems, company operating frameworks, and high-level company handbook/operating resources |

Folder names may evolve as the organization changes. The **purpose-based placement rules** are more important than preserving every historical folder name indefinitely.

## Canonical Source Rules

### SOPs and operational knowledge

The GitHub-based Blinto SOP Library is the canonical source for SOPs, checklists, templates, policies, guides, and references that define how work is performed.

Google Drive may contain:

- backups;
- generated exports;
- working evidence/forms used by an SOP;
- shortcuts to canonical SOP content.

Do not maintain an independently edited second version of a canonical SOP in Drive.

### Working documents

A project/client/team working file should have one primary owner/location. If another area needs access, use sharing or a shortcut instead of creating another authoritative copy.

### Sensitive records

Employee, financial, legal, client-confidential, credential, and other sensitive information must remain in access-controlled locations appropriate to the information type.

Do not store passwords or secrets in ordinary Drive documents or spreadsheets. Use the approved password manager.

## Naming Principles

Use clear names that help a teammate understand the document without opening it.

Prefer:

- descriptive subject;
- client/project name when needed;
- document purpose;
- date only when the date is genuinely part of the record.

Avoid:

- `final-final`;
- unexplained abbreviations;
- excessive version suffixes when version history already exists;
- duplicate copies such as `Copy of Copy of...` as working standards.

## Folder Selection Rules

Use **Administration** for company/people/finance/legal/admin records.

Use **Sales & Marketing** when the primary purpose is acquiring, nurturing, or marketing to customers.

Use **Design & Creative** for reusable creative assets and design-production resources.

Use **Tech & Development** for reusable/internal engineering resources and technical assets that are not specific delivery records for one client.

Use **Operations** for client delivery, project execution, status/meeting records, and client-success resources.

Use **Projects & SaaS** for Blinto-owned products/ventures.

Use **Knowledge & Training** for learning resources, research, training, and non-canonical educational material.

Use **BOSS / Company Operating System** for strategy, operating frameworks, leadership systems, and company-management resources.

When a file genuinely serves more than one area, choose one canonical location and use shortcuts elsewhere.

## Client & Project Files

Client/project execution records should live under the appropriate delivery/project location rather than being scattered across departmental folders.

Reusable methods discovered during delivery should be proposed to the SOP Library rather than copied from one client folder to another.

Client-specific evidence, deliverables, approvals, and working documents should remain with the client/project record.

## Archive & Obsolete Files

Archive files when they are no longer active but still need to be retained for historical, legal, operational, or reference reasons.

Do not leave obsolete files mixed with active standards when doing so could cause the team to follow outdated information.

Where a newer canonical resource supersedes an older file, clearly mark or move the old file so users do not confuse it with the current version.

## Ownership & Maintenance

People Operations owns the company-wide Drive organization standard. Functional leads are responsible for keeping their areas usable and preventing uncontrolled duplication.

Material structural changes should preserve discoverability and should not break known links/shortcuts without a migration plan.

## Related Resources

- [Library Standard](./library-standard.md)
