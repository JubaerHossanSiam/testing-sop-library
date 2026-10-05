---
title: Project Kickoff
type: sop
department: Project Delivery
owner: Project Delivery
status: approved
version: 1.0
last_reviewed: 2026-08-20
review_cycle: 6-months
tags:
  - client
  - kickoff
  - delivery
  - scope
  - milestones
related:
  - client-onboarding
  - access-provisioning-and-deprovisioning
  - credential-and-password-management-policy
  - incident-escalation
---

# Project Kickoff

## Purpose

Define how Blinto turns a delivery-ready client engagement into an actively aligned project with clear scope, outcomes, ownership, milestones, communication, dependencies, and risks.

This SOP starts after [Client Onboarding](./client-onboarding.md) has reached delivery-ready status.

It does not own:

- commercial contracting or sales approval;
- client onboarding setup;
- detailed client-access collection;
- ongoing client communication standards;
- delivery execution or deliverable QA;
- project/client offboarding.

Those belong to their respective canonical documents.

## Kickoff Outcome

A project is considered successfully kicked off when the delivery team and client/stakeholders have a shared understanding of:

- what is being delivered;
- what success looks like;
- who owns what;
- major milestones and timing;
- communication and decision-making structure;
- access/dependency readiness;
- known risks, assumptions, and constraints;
- immediate next actions.

Kickoff is not merely a meeting. It is an alignment checkpoint that makes execution safe to begin.

## Preconditions

Before kickoff, confirm that Client Onboarding has established at minimum:

- commercially confirmed engagement;
- delivery owner/lead;
- delivery workspace/project location;
- delivery-facing scope summary;
- identified stakeholders;
- known dependencies/access needs;
- known blockers/risks requiring discussion;
- proposed next-step/kickoff path.

If the engagement is not sufficiently delivery-ready, return it to Client Onboarding rather than using kickoff to repair an incomplete commercial handoff.

## Roles

### Project / Delivery Lead

Owns kickoff preparation and completion. Responsible for making sure scope, success criteria, owners, milestones, risks, dependencies, and next actions are aligned.

### Delivery Team

Reviews the engagement before kickoff, identifies technical/operational questions, validates feasibility, and confirms ownership of workstreams.

### Client / Partner Stakeholder

Confirms priorities, business context, decision-makers, constraints, dependencies, and required client-side actions.

### Sales / Commercial Owner

May join where commercial context or scope history needs clarification. They should not remain the long-term delivery owner unless explicitly assigned.

## Step 1 — Review the Handoff

The Project/Delivery Lead reviews the Client Onboarding output before scheduling or conducting kickoff.

Verify:

- contracted/approved scope is understood;
- deliverables are identifiable;
- exclusions/assumptions are visible;
- timeline or target dates are known where committed;
- client stakeholders are identified;
- internal team capacity/ownership is feasible;
- unresolved questions are captured;
- dependencies/access needs are listed without storing credentials.

Escalate scope or feasibility concerns before promising execution dates.

## Step 2 — Define Kickoff Agenda

The agenda should be proportional to the engagement, but normally covers:

1. introductions and roles;
2. business context and goals;
3. scope and deliverables;
4. success criteria;
5. major milestones/timing;
6. client and Blinto responsibilities;
7. communication/decision flow;
8. dependencies/access needs;
9. risks, constraints, assumptions;
10. immediate next actions.

A retainer or long-term partner engagement may use a lighter recurring kickoff/realignment format, while a complex project may require a deeper session.

## Step 3 — Confirm Business Context & Success Criteria

Do not start with tasks alone. Confirm why the project matters.

Capture:

- primary business objective;
- target audience/user/customer context where relevant;
- business or operational problem being solved;
- expected outcome;
- measurable success criteria where available;
- critical constraints or non-negotiables.

If success cannot be objectively measured, define at least a clear acceptance outcome or decision criterion.

## Step 4 — Confirm Scope, Deliverables & Boundaries

Review the delivery-facing scope with the client/stakeholders.

Confirm:

- what is included;
- what is explicitly excluded;
- major deliverables/workstreams;
- assumptions;
- client-provided inputs;
- dependencies;
- major approval points.

Kickoff must not silently expand scope. New or changed requirements should be documented and routed through the applicable commercial/change-control process rather than absorbed informally.

## Step 5 — Confirm Ownership

For each major workstream, identify:

- Blinto owner;
- client/partner owner where applicable;
- decision-maker/approver;
- backup/escalation owner where needed.

Avoid ambiguous shared ownership. One person should be clearly accountable for each important deliverable or decision path.

## Step 6 — Confirm Milestones & Timing

Define the project at milestone level before detailed task execution.

Where applicable, confirm:

- target start;
- major delivery milestones;
- review/approval points;
- target launch/completion;
- client-dependent dates;
- dependencies that can move the timeline.

Do not present a date as committed if key scope, access, input, or dependency conditions are unresolved.

If a date depends on client action, make that dependency explicit.

## Step 7 — Confirm Communication & Decision Structure

Until the canonical Client Communication & Escalation document is published, kickoff should establish at minimum:

- primary client contact;
- primary Blinto contact;
- approved communication channel(s);
- expected meeting cadence where needed;
- where project decisions/actions are recorded;
- who can approve deliverables/scope decisions;
- escalation contact for urgent/blocking issues.

Do not create multiple competing channels without a reason.

Once the canonical Client Communication & Escalation SOP exists, this section should link to it rather than own detailed communication rules.

## Step 8 — Identify Access & Dependencies

Kickoff confirms **what access is needed and by when**. It does not collect/store passwords in meeting notes or project documents.

For access:

- identify systems/resources required;
- identify who owns each access request;
- identify needed permission level;
- identify target date for access readiness;
- follow [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md) and [Credential & Password Management Policy](./credential-and-password-management-policy.md).

A later canonical Client Access Collection SOP should own the detailed client-facing collection/verification process.

## Step 9 — Identify Risks, Assumptions & Constraints

Capture material risks such as:

- unclear/volatile scope;
- missing client content/data;
- delayed approvals;
- third-party/vendor dependency;
- unavailable access;
- technical uncertainty;
- launch/seasonal deadline;
- compliance/security constraints;
- limited client availability;
- cross-team dependency.

Each material risk should have an owner and mitigation/next action where possible.

If a risk is already an active serious incident, use [Incident Escalation](./incident-escalation.md) rather than treating it only as a project note.

## Step 10 — Record Decisions & Next Actions

At the end of kickoff, record:

- confirmed scope/boundaries;
- success criteria;
- owners;
- milestones;
- communication structure;
- dependencies/access actions;
- major risks;
- decisions made;
- unanswered questions;
- immediate next actions with owner and due date.

The authoritative project/delivery system should hold these operational records. The SOP Library should not become a duplicate project tracker.

## Kickoff Completion Criteria

The Project/Delivery Lead marks kickoff complete only when:

- scope is sufficiently clear to begin execution;
- success/acceptance outcome is understood;
- internal and client owners are identified;
- milestones/timeline assumptions are visible;
- communication/decision path is established;
- critical access/dependencies have owners and dates;
- known risks/blockers are recorded;
- next actions are assigned;
- material contradictions are resolved or explicitly escalated.

A project may begin some preparatory work before every dependency is complete, but it should not proceed blindly into blocked or materially ambiguous execution.

## Kickoff Statuses

Use simple statuses such as:

- `READY FOR KICKOFF`
- `KICKOFF SCHEDULED`
- `KICKOFF COMPLETE`
- `BLOCKED / ALIGNMENT REQUIRED`

Avoid using kickoff status as a substitute for the broader project delivery status.

## Existing Clients, Retainers & Partner Work

Not every engagement requires a full formal kickoff meeting.

For an existing client, retainer, white-label partner, or recurring workstream, use the same **kickoff outcomes** but scale the ceremony appropriately.

A lightweight kickoff/realignment may be enough when:

- relationship/communication structure already exists;
- access is already valid;
- delivery roles are known;
- only a new scope/workstream needs alignment.

Do not skip scope, ownership, timing, or dependency alignment merely because the client is familiar.

## When to Escalate

Escalate before or during kickoff when:

- commercial scope and client expectation conflict;
- committed timeline appears infeasible;
- project cannot start safely without missing critical access/input;
- client/partner lacks a clear decision-maker;
- ownership is disputed;
- a major risk threatens delivery or client trust;
- a security/production/client-critical issue requires incident handling.

Use [Incident Escalation](./incident-escalation.md) for active serious incidents.

## Related Resources

- [Client Onboarding](./client-onboarding.md)
- [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md)
- [Credential & Password Management Policy](./credential-and-password-management-policy.md)
- [Incident Escalation](./incident-escalation.md)
- Client Access Collection — planned canonical document
- Client Communication & Escalation — planned canonical document
- Deliverable QA & Approval — planned canonical document
