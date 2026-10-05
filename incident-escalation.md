---
title: Incident Escalation
type: sop
department: Company
owner: Operations
status: approved
version: 1.0
last_reviewed: 2026-08-19
review_cycle: 6-months
tags:
  - incident
  - escalation
  - security
  - outage
  - client
related:
  - access-provisioning-and-deprovisioning
  - credential-and-password-management-policy
  - wordpress-security-standard
  - company-equipment-and-asset-management
---

# Incident Escalation

## Purpose

Define how Blinto identifies, classifies, owns, escalates, communicates, resolves, and reviews material incidents across client delivery, technology, security, operations, and company systems.

This is the **generic incident-response operating layer**. Domain-specific procedures may link to this SOP for specialized technical steps, but they should not recreate severity, escalation, ownership, or communication rules already defined here.

## What Counts as an Incident

An incident is an unplanned event that materially threatens or disrupts one or more of the following:

- client delivery or service availability;
- production websites, applications, infrastructure, or data;
- information security or credentials;
- company systems or operations;
- financial or business continuity;
- employee safety or company assets;
- contractual, privacy, compliance, or reputational obligations.

Routine bugs, normal support requests, minor task delays, and ordinary quality issues should remain in the normal workflow unless their impact or urgency reaches incident level.

## Core Principles

### Protect first, diagnose second

When an incident is actively causing harm, take the minimum safe action necessary to contain or reduce impact before pursuing a perfect diagnosis.

### One Incident Owner

Every material incident must have one clearly named **Incident Owner** responsible for coordination until formal handoff or closure.

Multiple people may execute work, but responsibility for coordination must not be ambiguous.

### Severity is based on impact, not emotion

Classify according to business/client/security impact, scope, urgency, and recoverability—not who reported the issue or how loudly it was raised.

### Escalate early when uncertain

If severity is unclear between two levels, start at the higher reasonable level and downgrade after assessment rather than delaying response.

### Preserve evidence

Do not destroy logs, records, access history, messages, screenshots, files, or other evidence needed to understand a serious incident.

### Do not hide mistakes

Promptly reporting an error is expected. Concealing, delaying, or falsifying incident information materially increases risk and is itself an escalation concern.

## Severity Levels

### SEV-1 — Critical

A critical incident has immediate or potentially catastrophic impact.

Examples:

- major production outage affecting a critical client service;
- confirmed active compromise of privileged credentials or infrastructure;
- ransomware, destructive malware, or material data exfiltration;
- loss of control of a domain, hosting account, source-code organization, payment/financial system, or similarly critical asset;
- widespread client/customer impact with no practical workaround;
- material safety event;
- incident likely to create serious legal, contractual, financial, or reputational exposure.

**Response:** immediate.

**Escalation:** Incident Owner + responsible Team/Department Lead + relevant technical/security owner + CEO/executive owner + People Operations/Operations where applicable.

Client/partner communication owner must be assigned immediately when external impact exists.

### SEV-2 — High

A high-severity incident causes substantial impact but remains contained enough that critical business continuity is not yet lost.

Examples:

- significant production degradation or outage with partial workaround;
- suspected compromise requiring urgent containment;
- critical client deliverable blocked by a material system failure;
- privileged account misuse without confirmed broader compromise;
- significant data integrity issue;
- repeated failure affecting an important service or multiple users/clients.

**Response:** urgent, same working period; outside hours where delay would materially increase impact.

**Escalation:** Incident Owner + Team/Department Lead + relevant system/security owner; CEO/executive visibility where material client, security, financial, or reputational risk exists.

### SEV-3 — Moderate

A moderate incident has limited but meaningful impact requiring coordinated response.

Examples:

- localized service disruption;
- one client/project materially affected with workaround available;
- security concern with no evidence of active compromise;
- equipment/system failure affecting delivery but not business continuity;
- operational breakdown requiring cross-team coordination.

**Response:** prioritized within the normal workday unless impact is increasing.

**Escalation:** responsible Team/Department Lead and appropriate owner. Escalate upward if impact grows or resolution is blocked.

### SEV-4 — Minor / Operational

A minor incident is low impact and normally handled within the responsible team's standard workflow.

Examples:

- isolated issue with minimal impact;
- non-critical tool disruption;
- minor process failure with easy workaround;
- low-risk incident worth tracking for pattern analysis.

**Response:** normal priority according to team workflow.

SEV-4 should not become a mechanism for labeling every bug/support issue as an incident.

## Initial Response Workflow

### Step 1 — Detect and report

The first person who becomes aware of a potential material incident should report it promptly through the current approved operational channel and provide known facts.

Include, where known:

- what happened;
- when it started/was discovered;
- systems/clients/people affected;
- current impact;
- actions already taken;
- evidence/links/screenshots/log references;
- whether the incident is ongoing.

Do not delay reporting while attempting to fully solve the problem alone.

### Step 2 — Assign Incident Owner

The responsible Team/Department Lead or appropriate system/operational owner assigns one Incident Owner.

For urgent incidents, the first qualified responder may act as temporary Incident Owner until formally handed over.

### Step 3 — Classify severity

The Incident Owner assigns an initial SEV level based on the best available information.

Severity may be raised or lowered as facts change.

### Step 4 — Contain immediate harm

Take safe, reversible containment actions where possible.

Examples may include:

- disabling compromised access;
- reverting a failed deployment;
- putting a service in maintenance mode;
- blocking malicious traffic;
- isolating a device/system;
- pausing a risky automation/integration;
- switching to a known-safe backup/fallback.

Containment must respect the canonical [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md) and [Credential & Password Management Policy](./credential-and-password-management-policy.md) where access/credential actions are involved.

### Step 5 — Escalate according to severity

Notify the required owners/stakeholders promptly.

Do not wait for a scheduled meeting or routine status update when the severity requires immediate escalation.

### Step 6 — Establish response plan

The Incident Owner coordinates:

- containment;
- diagnosis;
- recovery;
- validation;
- stakeholder/client communication;
- owner for each action;
- next update/checkpoint.

## Incident Roles

### Incident Owner

Responsible for:

- maintaining a single coordinated response;
- severity classification;
- assigning actions/owners;
- escalating when needed;
- ensuring updates occur;
- confirming recovery validation;
- closing or handing over the incident;
- ensuring follow-up actions are captured.

The Incident Owner does not need to be the person performing the technical fix.

### Technical / Functional Owner

Diagnoses and executes the domain-specific recovery actions.

### Team / Department Lead

Ensures appropriate resources are assigned, removes blockers, and escalates organizational impact.

### Communication Owner

For client/partner-facing incidents, one person owns external communication so messages are consistent and factual.

### Executive Owner

Engaged for critical company/client/security/financial/reputational exposure and material business decisions.

### People Operations / Operations

Engaged when the incident involves employees, safety, workplace operations, employment action, company assets, or cross-company coordination.

## Communication Rules

Incident communication should be:

- factual;
- concise;
- timestamped where useful;
- explicit about known vs unknown information;
- free from speculation/blame;
- clear about current impact and next action.

### Internal update format

A useful update contains:

**Status:** Investigating / Contained / Recovering / Monitoring / Resolved  
**Severity:** SEV-X  
**Impact:** What is affected  
**Known:** Confirmed facts  
**Action:** What is being done  
**Owner:** Incident Owner  
**Next update:** Expected checkpoint

### Client / partner communication

Where external impact exists:

- assign one Communication Owner;
- acknowledge meaningful impact promptly;
- do not provide unverified root-cause claims;
- communicate mitigation/recovery progress at reasonable intervals;
- confirm restoration when validated;
- provide a post-incident explanation when appropriate.

Legal, contractual, privacy, regulatory, or insurance notifications must be escalated to the appropriate company owner rather than improvised by the incident team.

## Security Incident Requirements

For suspected credential/account/security compromise:

1. contain affected access;
2. preserve evidence/logs;
3. rotate/revoke exposed credentials/tokens as required;
4. terminate suspicious sessions where practical;
5. assess scope and affected systems/data;
6. review related access permissions;
7. avoid communicating sensitive incident details in insecure channels;
8. escalate severity if privileged access, client data, company-critical systems, or active exploitation is involved.

Do not erase or reset affected systems before evidence needed for investigation/recovery has been considered.

## Client-Critical / Production Incident Requirements

For a production/client-critical incident:

1. confirm actual client/user impact;
2. assign Incident Owner and Communication Owner;
3. protect data/integrity before making risky changes;
4. use rollback/fallback where safer than live experimentation;
5. document changes made during response;
6. validate service from an end-user/client perspective before declaring resolution;
7. monitor after restoration for recurrence.

## Resolution Criteria

An incident is not resolved merely because a change was deployed.

Resolution requires appropriate confirmation that:

- active harm has stopped;
- affected service/process is operating acceptably;
- critical data/integrity is validated where relevant;
- temporary containment does not leave unacceptable residual risk;
- required client/internal stakeholders have received a resolution update;
- follow-up work is recorded.

The incident may move from **Resolved** to **Monitoring** before final closure when recurrence risk remains.

## Post-Incident Review

A structured post-incident review is required for:

- every SEV-1;
- material SEV-2 incidents;
- repeated SEV-3 incidents with the same/similar cause;
- incidents leadership specifically designates for review.

The review should focus on learning and system improvement rather than blame.

Capture:

- timeline;
- impact;
- detection method;
- root cause and contributing factors where known;
- what worked well;
- what delayed or worsened response;
- preventive/corrective actions;
- owners and due dates;
- SOP/checklist/system changes required.

Do not create a second permanent document containing rules already owned by the SOP Library. If the incident reveals a reusable process improvement, update the canonical SOP/policy/checklist.

## Recurring Incidents

Repeated incidents indicate a system/process problem, even when each event individually appears minor.

Team/Department Leads should escalate recurring patterns for root-cause work, capacity/process changes, technical remediation, training, or policy updates rather than repeatedly applying the same temporary fix.

## After-Hours Response & Overtime

SEV-1 and material SEV-2 incidents may require work outside normal office hours when delaying response would materially increase harm.

Any overtime treatment follows [Overtime Policy](./overtime-policy.md). Incident severity does not make overtime unpaid or bypass required recording/compensation treatment.

## Incident Records

Material incidents should be recorded in the current operational system with enough information to support accountability and learning.

At minimum, record:

- title/summary;
- date/time detected;
- severity;
- affected system/client/domain;
- Incident Owner;
- key actions/timeline;
- resolution status/time;
- follow-up actions;
- post-incident review link where required.

Do not store secrets, passwords, full private keys, or other live credentials inside incident records.

## Exceptions & Escalation

Escalate immediately when:

- severity is uncertain but potentially critical;
- the incident may involve client/company data exposure;
- privileged credentials or critical infrastructure may be compromised;
- there is a safety, legal, contractual, financial, or significant reputational dimension;
- the team cannot contain the incident;
- there is no qualified owner available;
- a client/partner demands an action outside the team's authority.

## Related Resources

- [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md)
- [Credential & Password Management Policy](./credential-and-password-management-policy.md)
- [WordPress Security Standard](./wordpress-security-standard.md)
- [Company Equipment & Asset Management](./company-equipment-and-asset-management.md)
- [Overtime Policy](./overtime-policy.md)
