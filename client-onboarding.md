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
  - client-onboarding
  - delivery
  - handoff
  - project-setup
related:
  - project-kickoff
  - client-access-collection
  - client-communication-and-escalation
  - access-provisioning-and-deprovisioning
  - credential-and-password-management-policy
  - incident-escalation
---

# Client Onboarding

## Purpose

Define the process for moving a newly confirmed client engagement from commercial approval into a **delivery-ready** state.

This SOP starts after the engagement is commercially confirmed and ends when the internal delivery setup is complete and the project is ready for the canonical [Project Kickoff](./project-kickoff.md) process.

This SOP does **not** own:

- the sales/contracting process;
- detailed project kickoff activities;
- secure collection of client credentials/access;
- ongoing client communication standards;
- project execution or deliverable QA.

Those belong to their own canonical documents and should be linked rather than duplicated here.

## Definition of Ready

A client is considered **delivery-ready** when Blinto has, at minimum:

- a confirmed engagement/scope source;
- an identified internal delivery owner;
- a defined primary client contact;
- a working project/task-management location;
- a documented scope summary and known constraints;
- an initial delivery team/roles identified;
- known access dependencies recorded;
- known commercial or operational blockers recorded;
- an initial kickoff path/date or next step agreed internally.

A client should not be treated as fully onboarded merely because the contract is signed or payment is received.

## Trigger

Start this SOP when the responsible commercial/leadership owner confirms that the client is approved to move into delivery.

The handoff should identify the authoritative commercial source, such as the approved proposal, statement of work, contract, order, or another formally accepted scope record.

## Roles

### Commercial / Relationship Owner

Provides the confirmed engagement context and ensures material commitments made during sales are visible to delivery.

### Project / Delivery Lead

Owns the onboarding process from handoff through delivery-readiness.

### Team / Department Lead

Confirms appropriate delivery resources, capability, and technical/functional ownership where needed.

### Client Communicator / Primary Client Contact Owner

Owns or coordinates client-facing communication during onboarding and kickoff preparation.

### Finance / Operations

Confirms any operational prerequisites that affect delivery readiness where applicable, such as billing setup, purchase-order requirements, or approved commercial dependencies.

## Step 1 — Validate the Commercial Handoff

The Project/Delivery Lead reviews the authoritative engagement source and confirms:

- client/company name;
- service(s) purchased;
- scope and explicit exclusions;
- important deliverables/outcomes;
- commercial start date or target launch/timeline where applicable;
- recurring vs project-based engagement;
- material promises or expectations established during sales;
- client stakeholders/contacts already known;
- known constraints, assumptions, or dependencies;
- any special compliance/security/client requirements.

If the scope source is unclear, contradictory, or materially incomplete, escalate before promising execution dates.

Do not rely on memory, chat history, or verbal sales context as the sole source of scope.

## Step 2 — Assign Internal Ownership

Assign at least:

- Project/Delivery Lead;
- responsible Team/Department Lead(s) where applicable;
- primary client communicator/contact owner;
- core delivery roles required for the first phase.

One person must be clearly accountable for moving onboarding forward. Avoid shared ownership where everyone assumes someone else is handling setup.

## Step 3 — Create the Delivery Workspace

Create or confirm the approved project-management location for the engagement.

The workspace should contain or link to:

- authoritative scope/contract reference;
- client contact information;
- internal owners;
- project/service type;
- key dates/milestones already committed;
- known blockers/dependencies;
- access requirements/status;
- kickoff task/next action;
- relevant internal/client documentation locations.

Do not copy passwords, API keys, private keys, or secrets into the project workspace. Credential handling must follow [Credential & Password Management Policy](./credential-and-password-management-policy.md).

## Step 4 — Create the Initial Scope Summary

Translate the commercial scope into a concise delivery-facing summary that answers:

- What are we responsible for?
- What is explicitly out of scope?
- What outcome is the client expecting?
- What has already been promised?
- What dependencies are outside Blinto's control?
- What assumptions need confirmation at kickoff?
- What decisions are still open?

This summary does not replace the contract or SOW; it helps the delivery team execute against it correctly.

Any material discrepancy between the delivery summary and the signed/approved scope must be resolved against the authoritative commercial source.

## Step 5 — Identify Access & Dependency Requirements

Identify systems, environments, data, assets, accounts, domains, repositories, analytics platforms, design files, brand assets, or other dependencies required to begin delivery.

Record **what access is needed and why**, not the credentials themselves.

Detailed secure collection belongs to the planned canonical [Client Access Collection](./client-access-collection.md) process.

Where Blinto needs internal access for team members, follow [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md).

## Step 6 — Identify Risks & Blockers

Before kickoff, record known issues that could prevent or materially delay delivery, such as:

- missing client decision-maker;
- unavailable access/credentials;
- unclear scope;
- dependency on a third-party vendor;
- technical unknowns requiring discovery;
- missing content/assets;
- unrealistic or conflicting dates;
- compliance/security constraints;
- capacity/resource concern.

Do not hide known risk simply to make onboarding appear complete.

A blocker that prevents responsible kickoff should be escalated rather than silently pushed into execution.

## Step 7 — Prepare the Client Welcome / Next-Step Communication

The client should receive a clear next-step message through the approved communicator/channel.

At minimum, communicate:

- who owns delivery/client communication;
- what happens next;
- what Blinto needs from the client before or during kickoff;
- how/when kickoff will be arranged where applicable;
- where the client should direct questions during onboarding.

Do not introduce unapproved scope, dates, response-time promises, or technical commitments in the welcome message.

The canonical Client Communication & Escalation process will later own ongoing channel and response standards.

## Step 8 — Confirm Kickoff Readiness

Before moving to Project Kickoff, verify:

- commercial scope source is available;
- internal ownership is clear;
- client stakeholders are known enough to proceed;
- delivery workspace exists;
- major access/dependencies are identified;
- known blockers are visible;
- the delivery team has enough context for kickoff;
- kickoff owner/date/next action is defined.

Not every access dependency must necessarily be resolved before kickoff; unresolved items should be explicit and assigned.

## Onboarding Status

Use a clear operational status rather than informal assumptions.

Recommended states:

### Handoff Received

Commercial confirmation received; delivery has not yet validated/setup the engagement.

### Onboarding In Progress

Internal ownership/workspace/context/dependencies are being established.

### Blocked

A material issue prevents responsible progress. Record blocker, owner, and next action.

### Delivery-Ready

The Definition of Ready is satisfied and the engagement can move into Project Kickoff/execution planning.

## Special Cases

### Existing / Expanding Client

For an existing client adding a new service/project, do not recreate the entire client relationship unnecessarily. Apply this SOP to the **new engagement/scope** while reusing valid existing client records and access where appropriate.

Revalidate old access and assumptions rather than assuming they are still correct.

### Retainer / Ongoing Service

For recurring services, onboarding should define recurring scope, owners, operating rhythm, reporting expectations, access dependencies, and the transition into ongoing delivery.

### Partner / White-Label Engagement

Where another agency/partner owns the end-client relationship, clearly identify:

- who Blinto communicates with;
- whether Blinto may contact the end client directly;
- branding/white-label restrictions;
- approval path;
- access ownership;
- escalation path.

The stricter partner/client requirement applies where it does not conflict with law or company security requirements.

## Handoff Quality Rule

Delivery may return the handoff for clarification when material commercial information is missing or contradictory.

This is not a refusal to onboard the client; it is a control to prevent delivery teams from inventing scope, commitments, or assumptions after the sale.

## Escalation

Escalate when:

- commercial scope is materially unclear or contradictory;
- requested work appears outside the approved engagement;
- a promised deadline appears infeasible;
- client security/compliance requirements are unclear;
- key access/dependencies are blocked;
- no responsible delivery owner can be assigned;
- a client-critical issue arises during onboarding.

Use [Incident Escalation](./incident-escalation.md) where the issue qualifies as an operational/security/client-critical incident rather than an ordinary onboarding blocker.

## Related Resources

- Project Kickoff — planned canonical SOP
- Client Access Collection — planned canonical SOP
- Client Communication & Escalation — planned canonical SOP
- [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md)
- [Credential & Password Management Policy](./credential-and-password-management-policy.md)
- [Incident Escalation](./incident-escalation.md)
