---
title: Library Index & Roadmap
type: reference
department: Company
owner: SOP Library Team
status: approved
version: 2.3
last_reviewed: 2026-09-28
review_cycle: monthly
tags:
  - index
  - roadmap
  - governance
related:
  - library-standard
  - contribution-and-approval
  - ai-authoring-workflow
  - migration-register
---

# Library Index & Roadmap

## Purpose

Provide a human-readable map of the Blinto SOP Library, identify the canonical document for each operating domain, and maintain the prioritized list of missing documents without creating blank placeholder files.

GitHub `main` is the canonical source. This index is navigation and planning metadata; it must not duplicate the operating instructions owned by the linked documents.

## Document Types

- **SOP** — repeatable process: how work is performed.
- **Policy** — company rule or required boundary.
- **Checklist** — execution/verification aid linked to a governing SOP or standard.
- **Template** — reusable structure for creating a recurring artifact.
- **Guide** — instructional guidance where judgment/adaptation is expected.
- **Reference** — stable information, taxonomy, standard, map, migration register, or lookup resource.

## Governance & Authoring

| Canonical document | Type | Domain |
| --- | --- | --- |
| [Library Standard](./library-standard.md) | Reference | Library architecture, metadata, quality and anti-duplication rules |
| [Contribution & Approval](./contribution-and-approval.md) | SOP | Contribution, review and approval workflow |
| [AI Authoring Workflow](./ai-authoring-workflow.md) | Guide | AI-assisted search-before-create and drafting workflow |
| [AI Instructions](./AI-INSTRUCTIONS.md) | Reference | Machine-facing repository authoring instructions |
| [Migration Register](./migration-register.md) | Reference | Legacy-source reconciliation and migration boundary |

## People Lifecycle

| Canonical document | Type | Domain |
| --- | --- | --- |
| [People Lifecycle](./people-lifecycle.md) | Reference | Map of the employee lifecycle and canonical handoffs |
| [Hiring](./hiring.md) | SOP | Hiring process and approval flow |
| [Job Description Template](./job-description-template.md) | Template | Role definition for recruitment |
| [Interview Scorecard Template](./interview-scorecard-template.md) | Template | Evidence-based candidate assessment |
| [Employee Onboarding](./employee-onboarding.md) | SOP | New-joiner onboarding process |
| [Employee Onboarding Checklist](./employee-onboarding-checklist.md) | Checklist | Onboarding execution verification |
| [Performance Review](./performance-review.md) | SOP | Performance-review operating process |
| [Corrective Action & Performance Improvement Policy](./corrective-action-and-performance-improvement-policy.md) | Policy | Progressive coaching, warnings, PIPs and formal corrective escalation |
| [Internship Program](./internship-program.md) | SOP | Paid/unpaid internship lifecycle |
| [Employee Offboarding](./employee-offboarding.md) | SOP | Departure and access/ownership closeout |
| [Employee Offboarding Checklist](./employee-offboarding-checklist.md) | Checklist | Offboarding execution verification |

## Workday & Leave Policies

| Canonical document | Type | Domain |
| --- | --- | --- |
| [Office Hours Policy](./office-hours-policy.md) | Policy | Normal workday, breaks and schedule routine |
| [Attendance Policy](./attendance-policy.md) | Policy | Attendance, punctuality and attendance records |
| [Overtime Policy](./overtime-policy.md) | Policy | Approved work beyond normal hours and compensation |
| [Leave & Time-Off Policy](./leave-and-time-off-policy.md) | Policy | Leave entitlements, auto/manual approval boundaries and carry-forward rules |
| [Leave Request & Handover](./leave-request-and-handover.md) | SOP | HRMS request, notification, exception review and work handover workflow |

## Security & Access

| Canonical document | Type | Domain |
| --- | --- | --- |
| [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md) | SOP | Company/client access lifecycle, least privilege, reviews and removal |
| [Credential & Password Management Policy](./credential-and-password-management-policy.md) | Policy | Password managers, MFA, credential storage/sharing, rotation, recovery and compromise response |
| [WordPress Security Standard](./wordpress-security-standard.md) | Policy | Baseline WordPress security requirements |
| [WordPress Security Checklist](./wordpress-security-checklist.md) | Checklist | Baseline implementation/verification |
| [WordPress Monthly Security Maintenance Checklist](./wordpress-monthly-security-maintenance-checklist.md) | Checklist | Recurring WordPress security maintenance |

## Operations & Assets

| Canonical document | Type | Domain |
| --- | --- | --- |
| [Company Equipment & Asset Management](./company-equipment-and-asset-management.md) | SOP | Physical asset intake, assignment, custody, repair, transfer, return and disposal |
| [Incident Escalation](./incident-escalation.md) | SOP | Severity, ownership, escalation, communication, resolution and post-incident review |

## Client Delivery

| Canonical document | Type | Domain |
| --- | --- | --- |
| [Client Onboarding](./client-onboarding.md) | SOP | Confirmed engagement to delivery-ready client setup |
| [Project Kickoff](./project-kickoff.md) | SOP | Delivery-ready engagement to aligned active project with scope, owners, milestones, risks and next actions |
| [Client Access Collection](./client-access-collection.md) | SOP | Secure identification, request, receipt, verification and closeout of client system access |
| [Client Communication & Escalation](./client-communication-and-escalation.md) | SOP | Client communication ownership, response expectations, decision logging and delivery escalation |
| [Deliverable QA & Approval](./deliverable-qa-and-approval.md) | SOP | Risk-based QA, findings, approval and client/release readiness gate |
| [Project / Client Offboarding](./project-client-offboarding.md) | SOP | Final delivery, ownership/access handoff, recurring-work closeout, records and formal engagement closure |

## Information Organization

| Canonical document | Type | Domain |
| --- | --- | --- |
| [Google Drive Organization Standard](./google-drive-organization-standard.md) | Reference | Drive placement, organization and canonical-source rules |

## SEO

| Canonical document | Type | Domain |
| --- | --- | --- |
| [SEO Client Intake & Routing](./seo-client-intake-and-routing.md) | SOP | Initial SEO opportunity classification and routing |
| [SEO Client Intake Checklist](./seo-client-intake-checklist.md) | Checklist | Intake information and routing verification |

## Integrity Audit Status

The first structural integrity audit was completed after Priority 2.

The audit:

- removed superseded duplicate office-hours/attendance and WordPress security documents;
- aligned the Library Standard's frontmatter and relationship examples with the live taxonomy;
- indexed the Migration Register;
- reconciled stale migration references;
- confirmed GitHub `main` as the canonical source for the future website and Google Drive mirror.

Future audits should check broken links, metadata values, duplicate concepts, orphaned documents, stale roadmap entries, and website-build validation automatically where possible.

## Legacy Migration Status

The original SOP Library migration baseline is substantially complete. Legacy files should not remain as competing operational documents merely for history; Git history preserves prior Markdown versions.

The Employee Handbook remains an additional migration/reference source, not an approved source of truth. Its useful content should be migrated concept-by-concept and reconciled with approved decisions.

The two deleted security spreadsheets remain explicitly excluded from the migration/reference set.

## Missing SOP Roadmap

A roadmap item means **the capability should exist**; it does not authorize inventing company rules. Before creating any item, search the library for an existing canonical owner and gather the actual operating decisions required.

### Priority 1 — Company-wide operational foundations

**Complete.**

### Priority 2 — Client delivery foundations

**Complete.**

### Priority 3 — Website delivery

1. **Website Project Intake & Technical Discovery**.
2. **Staging-to-Production Website Launch**.
3. **Website Launch QA Checklist**.
4. **DNS Change & Domain Launch**.
5. **Website Backup & Restore**.
6. **Website Maintenance / Update Process**.
7. **Website Incident / Emergency Response**.

### Priority 4 — SEO delivery

8. **Website SEO Audit** — currently referenced by SEO Intake but not yet canonicalized.
9. **Website Architecture & SEO Planning** — currently referenced by SEO Intake but not yet canonicalized.
10. **Keyword Research & Mapping**.
11. **On-Page SEO Implementation**.
12. **Technical SEO QA**.
13. **SEO Reporting & Review**.

### Priority 5 — People supporting processes

14. **Probation Review** — only if operationally distinct from the canonical Performance Review process.
15. **Leave Handover Checklist** — only if the leave process demonstrates independent reusable value.
16. **Employment/Internship document templates** — offer, appointment, internship agreement, certificate or recommendation templates only after current legal/HR wording is approved.

## Do Not Create Yet

Do not create a document merely because it appears on the roadmap. Specifically avoid:

- blank placeholder Markdown files;
- separate SOPs for each tool when one process can own the behavior;
- client/company-specific duplicates of a generic process;
- policy wording inferred from old habits without approval;
- templates containing legal, compensation, or employment promises without current approved wording;
- downstream SEO SOPs solely from references in another document.

## Roadmap Maintenance

When a roadmap item is created and approved:

1. remove it from the missing list;
2. add it to the appropriate canonical index section;
3. link related documents rather than duplicating their rules;
4. update documents that currently reference the capability only generically;
5. verify no older document still claims ownership of the same concept.
