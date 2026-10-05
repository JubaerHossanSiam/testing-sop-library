---
title: Deliverable QA & Approval
type: sop
department: Project Delivery
owner: Project Delivery
status: approved
version: 1.0
last_reviewed: 2026-08-20
review_cycle: 6-months
tags:
  - quality-assurance
  - approval
  - deliverables
  - release
  - client-delivery
related:
  - project-kickoff
  - client-communication-and-escalation
  - incident-escalation
---

# Deliverable QA & Approval

## Purpose

Define the quality and approval gate between **work completed internally** and **work approved for client delivery, publication, launch, release, or handoff**.

This SOP provides a common QA framework across Blinto delivery work. Discipline-specific checklists may define additional technical checks, but they must link to this process rather than replace its ownership and approval rules.

## Core Rule

**Completion by the person who produced the work does not automatically make the work client-ready.**

Before a material deliverable is released externally, the team must establish that:

1. the intended work is complete;
2. applicable QA has been performed;
3. known issues are understood;
4. the correct person has approved release/delivery;
5. the delivered artifact/version is the approved one.

The rigor of QA should be proportionate to the impact and reversibility of the deliverable.

## Scope

Applies to client-facing deliverables including, as applicable:

- website/design deliverables;
- development releases;
- production changes;
- reports and analyses;
- SEO deliverables;
- content or campaign assets;
- technical configurations;
- data or migration outputs;
- documentation;
- other work represented to a client as complete or ready.

Routine conversational answers and low-risk work-in-progress sharing do not require the full release gate unless the engagement or task specifically requires it.

## Roles

### Deliverable Owner

The person primarily responsible for producing the deliverable.

Responsible for:

- completing the agreed work;
- performing self-review;
- resolving obvious defects before requesting QA;
- providing enough context for an independent reviewer;
- addressing QA findings;
- identifying known limitations or unresolved issues.

### QA Reviewer

A competent person other than the Deliverable Owner when independent review is required.

Responsible for:

- reviewing against scope, acceptance criteria, applicable standards and risk;
- testing/verifying rather than assuming completion;
- recording material findings clearly;
- confirming whether the deliverable passes, passes with an approved exception, or requires rework.

The reviewer should have enough subject-matter competence to evaluate the work. Independence does not require organizational seniority.

### Approval Owner

The person authorized to decide that the deliverable is ready for the client/release. Depending on the engagement and risk, this may be a Project Lead, Delivery Lead, Project Manager, Technical Lead, designated discipline lead, or another explicitly assigned owner.

The QA Reviewer and Approval Owner may be the same person for normal-risk work when appropriate. For high-risk changes, separate technical review and release approval should be used where practical.

### Client

Client approval is required only when the scope, acceptance process, contract, launch plan, or nature of the deliverable requires client sign-off.

Internal approval must not be confused with client acceptance.

## QA Levels

Use the lowest level that adequately controls the risk.

### Level 1 — Self-QA

Appropriate for low-risk, easily reversible, routine deliverables where independent review adds little value.

The Deliverable Owner verifies their own work against the applicable requirements before delivery.

### Level 2 — Independent QA

Default for material client deliverables.

A competent second person reviews the deliverable before approval/release.

Examples may include client reports, important designs, content intended for publication, meaningful configuration changes, and ordinary development releases.

### Level 3 — High-Risk / Release QA

Required where an error could cause material production, revenue, security, data, legal/compliance, reputation, or client-impact risk.

Use stronger controls appropriate to the work, such as:

- independent technical review;
- staging/test validation;
- backup/rollback readiness;
- approval by the designated release/technical owner;
- client approval where required;
- controlled release window where appropriate.

A discipline-specific SOP may define mandatory Level 3 controls for a particular type of release.

## QA Workflow

### Step 1 — Confirm the deliverable and acceptance basis

Before QA, identify what is actually being approved.

Use the applicable source of truth, such as:

- approved scope;
- task/deliverable definition;
- acceptance criteria;
- approved design/content;
- client instruction/decision;
- technical specification;
- applicable checklist or standard.

Do not QA against an assumed requirement when the requirement can be verified.

### Step 2 — Deliverable Owner performs self-review

Before requesting another person's QA, the Deliverable Owner should confirm:

- required work is complete;
- obvious errors have been corrected;
- links/files/build/version are the intended ones;
- required supporting information is available;
- known limitations/issues are disclosed;
- the deliverable is genuinely ready for review.

QA is not a substitute for the owner's basic responsibility for quality.

### Step 3 — Determine QA level

Consider:

- client/business impact;
- reversibility;
- production impact;
- security/data implications;
- complexity;
- contractual/client approval requirements;
- novelty or uncertainty;
- discipline-specific standards.

When uncertain between two levels, use the higher level for material or difficult-to-reverse work.

### Step 4 — Perform QA

The reviewer verifies the deliverable against the acceptance basis and applicable standards/checklists.

At minimum, consider where relevant:

- scope/completeness;
- functional correctness;
- accuracy;
- presentation/clarity;
- consistency;
- usability;
- links/files/assets;
- device/browser/environment behavior;
- security/privacy implications;
- data integrity;
- accessibility/SEO/performance requirements where applicable;
- release/rollback readiness;
- client-specific requirements.

Do not mechanically apply irrelevant checks. Discipline-specific checklists should provide the detailed controls for recurring deliverable types.

### Step 5 — Record findings

Classify material findings by impact rather than creating excessive bureaucracy.

Suggested categories:

- **Blocking** — must be corrected before release/delivery;
- **Non-blocking** — should be corrected but does not prevent the current approved release;
- **Observation / improvement** — useful future improvement with no current acceptance impact.

A blocking issue cannot be silently ignored by the Deliverable Owner.

### Step 6 — Rework and re-verify

The Deliverable Owner resolves blocking findings and reports completion.

The reviewer re-checks the affected areas. Material changes made during rework should be checked for regression or new impact where relevant.

Do not treat the first QA pass as approval when blocking issues were found.

### Step 7 — Approve or reject release

The Approval Owner makes one of the following decisions:

- **Approved** — ready to deliver/release;
- **Approved with documented exception** — known issue accepted by an authorized owner;
- **Not approved** — further work/QA required.

The approval should be visible in the project/task/release record for material deliverables.

### Step 8 — Deliver / release the approved version

Ensure the artifact or version sent/published/released is the version that passed QA.

Avoid last-minute unreviewed changes after approval. If a material change is made after approval, re-run the appropriate QA for the changed area before release.

### Step 9 — Confirm delivery/release

Where appropriate:

- verify the client received/can access the deliverable;
- verify the production/release result;
- record the release/delivery status;
- communicate known approved exceptions;
- route any release incident into [Incident Escalation](./incident-escalation.md).

## Approval Matrix

The engagement/team may define a more specific matrix, but the following default applies:

| Risk | Minimum QA | Release/Delivery Approval |
| --- | --- | --- |
| Low / routine / easily reversible | Self-QA | Deliverable Owner or authorized task owner |
| Material client deliverable | Independent QA | Project/Delivery/discipline owner |
| High-risk production/security/data/client-impact change | High-Risk / Release QA | Designated technical/release/delivery owner; client approval where required |

No title automatically grants approval authority for every type of deliverable. Approval should follow the assigned responsibility and competence for the work.

## Client Approval

When client approval is required:

1. internal QA occurs first unless the deliverable is intentionally being shared as an early review draft;
2. clearly identify what the client is approving;
3. record the approval/decision;
4. capture requested changes as new work/rework;
5. re-run relevant QA after material changes;
6. do not infer approval from silence unless the engagement explicitly defines such an acceptance mechanism.

For material decisions, follow [Client Communication & Escalation](./client-communication-and-escalation.md).

## Drafts & Work-in-Progress

A draft may be shared before full QA when collaborative client input is intentionally required.

Clearly label it as **draft / work in progress / for review**, as appropriate, so it cannot reasonably be mistaken for an approved final deliverable.

Do not use the draft label to bypass QA for work that is effectively being delivered as final.

## Exceptions

A known defect or unmet criterion may be accepted only when an authorized Approval Owner understands the impact and explicitly approves the exception.

Document material exceptions with:

- issue/limitation;
- impact/risk;
- reason for accepting;
- approver;
- follow-up owner/date if remediation remains required.

Security, legal/compliance, data-integrity, or critical production risks should not be accepted casually. Escalate when authority or risk is unclear.

## Failed QA / Repeated Quality Issues

QA findings should primarily improve the deliverable and process, not become a blame mechanism.

Repeated patterns should trigger root-cause review, which may identify needs such as:

- clearer requirements;
- better checklist/standard;
- training;
- tooling/automation;
- workload/capacity correction;
- stronger peer review;
- process redesign.

Individual performance concerns, where applicable, belong in the appropriate People/performance process rather than being adjudicated inside the QA SOP.

## Emergency Release

Where an urgent incident requires action before the normal QA sequence can be completed:

1. follow [Incident Escalation](./incident-escalation.md);
2. use the safest practical review/approval available under the circumstances;
3. preserve rollback/recovery capability where relevant;
4. document the emergency decision;
5. complete retrospective verification after stabilization.

Emergency conditions reduce process latency, not accountability.

## Records

For material deliverables, the project/task/release record should make it possible to determine:

- what was reviewed;
- who performed QA;
- material findings;
- whether blocking findings were resolved;
- who approved release/delivery;
- client approval where required;
- approved exceptions;
- release/delivery date/version where relevant.

Do not create a separate QA record merely to duplicate information already captured adequately in the operational system.

## Completion Standard

A deliverable is ready to leave the QA process when:

- applicable requirements have been checked;
- blocking findings are resolved;
- known material exceptions are explicitly approved;
- the correct approval owner has authorized delivery/release;
- any required client approval has been obtained or is intentionally the next step;
- the team can identify the approved artifact/version;
- release/delivery is recorded where material.

## Related Resources

- [Project Kickoff](./project-kickoff.md)
- [Client Communication & Escalation](./client-communication-and-escalation.md)
- [Incident Escalation](./incident-escalation.md)
- Website Launch QA Checklist — planned discipline-specific checklist; once published, link it here.
