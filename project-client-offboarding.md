---
title: Project / Client Offboarding
type: sop
department: Project Delivery
owner: Project Delivery
status: approved
version: 1.0
last_reviewed: 2026-08-20
review_cycle: 6-months
tags:
  - client-offboarding
  - project-closure
  - handoff
  - access-removal
  - archive
related:
  - client-onboarding
  - client-access-collection
  - client-communication-and-escalation
  - deliverable-qa-and-approval
  - access-provisioning-and-deprovisioning
  - credential-and-password-management-policy
---

# Project / Client Offboarding

## Purpose

Define how Blinto formally closes a project, service, retainer, or client relationship so that deliverables, ownership, access, records, responsibilities, and unresolved items are intentionally handed over or closed.

Offboarding prevents a commercially or operationally finished engagement from remaining technically open, undocumented, or dependent on individual team members.

## Scope

Use this SOP when:

- a fixed-scope project is complete;
- a retainer/service agreement ends;
- a client relationship ends;
- a project is cancelled or terminated;
- responsibility is transferred away from Blinto;
- a material project phase closes and requires formal handoff.

For an ongoing client moving from one project/phase to another, use the relevant closure steps proportionately rather than unnecessarily offboarding the entire client relationship.

Employee offboarding is governed separately by [Employee Offboarding](./employee-offboarding.md).

## Core Principles

### Closure is a process, not a status change

Marking a project complete does not by itself close access, transfer ownership, resolve open commitments, or preserve records.

### Transfer before removal

Where Blinto controls an asset, account, file, integration, or administrative ownership that the client needs after closure, transfer or confirm ownership before removing the access needed to perform the transfer.

### Do not retain access without a business need

Client access should not remain active indefinitely after Blinto's responsibility ends.

### Do not delete evidence needed for continuity

Close unnecessary access while retaining appropriate business/project records according to contractual, legal, operational, and security requirements.

### No surprise closure

The client and internal owners should understand what is complete, what is being handed over, what remains open, and when Blinto's active responsibility ends.

## Roles

### Project / Delivery Owner

Owns the offboarding process and confirms that closure criteria are met.

Responsible for:

- defining the closure date/scope;
- coordinating final deliverables and handoff;
- identifying unresolved items;
- coordinating client communication;
- triggering access cleanup;
- ensuring the project record is closed/archived appropriately.

### Deliverable / Technical Owners

Responsible for:

- finalizing assigned work;
- documenting technical/operational handoff information;
- transferring ownership where required;
- identifying access/integrations that must be changed or removed.

### Client Communication / Account Owner

Responsible for coordinating the client-facing closure communication and any commercial/relationship handoff.

### System / Access Owners

Responsible for removing, transferring, or reducing Blinto/client access in accordance with the applicable access and credential rules.

### Finance / Commercial Owner

Where applicable, handles final billing, credits, contractual closeout, renewal/cancellation, or other commercial matters. This SOP does not define accounting or contractual policy.

## Offboarding Triggers

Start offboarding when there is a confirmed trigger such as:

- final deliverables accepted/completed;
- agreed service end date;
- cancellation/termination notice;
- leadership/commercial decision to end the engagement;
- project transfer;
- replacement vendor/team transition.

Do not begin destructive actions based on an informal assumption that the client/project is finished.

## Offboarding Workflow

### Step 1 — Confirm closure basis and effective date

The Project/Delivery Owner confirms:

- what is ending: project, phase, service, retainer, or full client relationship;
- effective closure/end date;
- contractual or client-specific closure obligations;
- responsible internal owners;
- whether a transition period is required;
- whether any systems/services must intentionally remain active after project closure.

Record the closure decision in the project/client system.

### Step 2 — Review scope and open commitments

Review the engagement record for:

- contracted/approved deliverables;
- incomplete tasks;
- open client requests;
- approved change requests;
- outstanding QA/rework;
- known defects/issues;
- unresolved blockers;
- pending client approvals;
- upcoming recurring work that must be stopped or transferred.

Classify each open item as:

- complete before closure;
- handed over;
- intentionally excluded/not proceeding;
- separately retained/continued;
- unresolved exception requiring explicit owner/decision.

Do not allow open work to disappear merely because the project is being archived.

### Step 3 — Complete final QA and acceptance

Material final deliverables should pass [Deliverable QA & Approval](./deliverable-qa-and-approval.md) before final handoff unless the closure is an abnormal termination where completion is not possible.

Where client acceptance/sign-off is required:

1. identify what is being accepted;
2. obtain and record the decision;
3. capture any accepted limitations/exceptions;
4. distinguish final acceptance from a request for future/new work.

If the client does not provide required acceptance, follow the engagement's agreed acceptance/contract terms rather than inventing an approval-by-silence rule.

### Step 4 — Prepare the handoff package

Provide only the materials appropriate to the engagement. Depending on the work, this may include:

- final deliverables/files;
- source/design files where included;
- documentation;
- deployment/release information;
- operational instructions;
- account/asset ownership information;
- known limitations/open issues;
- backup/export where contractually or operationally required;
- links to client-owned resources;
- future maintenance/support recommendations where appropriate.

Do not include internal-only notes, unrelated company IP, credentials in plaintext, or assets the client is not entitled to receive.

### Step 5 — Transfer ownership and dependencies

Identify resources that could become stranded after Blinto leaves, including where applicable:

- domains/DNS;
- hosting/cloud resources;
- repositories;
- analytics/tag-management properties;
- design assets;
- email/marketing systems;
- app/platform ownership;
- integrations/API applications;
- automation;
- documentation/storage;
- third-party subscriptions or vendor relationships.

Confirm the appropriate client/partner owner has the required ownership/admin capability before Blinto relinquishes control.

Never transfer ownership to an unverified personal account merely for convenience when an authorized client/company identity should own the asset.

### Step 6 — Reconcile credentials and access

Use [Client Access Collection](./client-access-collection.md), [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md), and [Credential & Password Management Policy](./credential-and-password-management-policy.md) as the governing security documents.

At closure:

- identify Blinto users/accounts with client access;
- remove access no longer required;
- reduce access where a continuing limited service requires less privilege;
- revoke temporary users/tokens/keys where appropriate;
- transfer administrative ownership first where required;
- rotate shared credentials when Blinto should no longer know/use them and individual revocation is not possible;
- remove client credentials from Blinto's password manager when retention is no longer required;
- update the authoritative access record.

Do not ask a client to send replacement passwords through ordinary email/chat merely to complete offboarding.

### Step 7 — Stop or transfer recurring activity

Review recurring operational dependencies such as:

- scheduled tasks;
- monitoring;
- backups;
- automated reports;
- deployments;
- integrations/webhooks;
- recurring meetings;
- subscriptions/licenses;
- maintenance routines;
- support channels;
- notifications/alerts.

For each, deliberately stop, transfer, or retain it according to the post-closure responsibility.

This prevents both unintended service continuation and accidental service interruption.

### Step 8 — Close commercial/admin items

Where applicable, coordinate with the responsible owner for:

- final invoice/billing;
- outstanding payment status;
- contract/service end date;
- renewal/cancellation record;
- vendor/license ownership;
- credits/refunds/other commercial decisions;
- contact/CRM status.

Do not delay necessary security access removal solely because a commercial item remains unresolved unless continued access is specifically required and approved.

### Step 9 — Send closure communication

The client-facing closeout should clearly state, as applicable:

- what has been completed/handed over;
- where final materials are located;
- any open/known items;
- ownership/access changes;
- active responsibility/support end date;
- any intentionally continuing service;
- next contact/path if a new request arises.

Follow [Client Communication & Escalation](./client-communication-and-escalation.md) for communication and decision-recording principles.

### Step 10 — Archive and close the operational record

Once closure is complete:

- mark the project/engagement closed in the operational system;
- preserve required project records;
- archive working areas according to the applicable organization standard;
- remove obsolete reminders/recurring tasks;
- ensure unresolved retained items have an active owner outside the closed project;
- record the final closure date.

Do not create duplicate archives when the authoritative system already preserves the necessary record.

## Fixed-Scope Project Closure

For a completed project where the client relationship continues:

- close only the completed project/phase;
- retain client-level access only where another active engagement justifies it;
- hand off project-specific assets;
- create/transition to the next approved project rather than keeping the completed project artificially open.

## Retainer / Ongoing Service Closure

Retainer offboarding requires special attention to recurring activity.

Confirm:

- last service date;
- recurring tasks stopped/transferred;
- monitoring/reporting/support ownership;
- ongoing credentials/access;
- subscription/license responsibility;
- unfinished work at the end date;
- post-retainer support expectations.

## Cancellation / Early Termination

When work ends before normal completion:

1. confirm the authorized termination decision and effective date;
2. preserve current work/evidence;
3. identify what can and cannot be completed;
4. coordinate contractual/commercial obligations with the authorized owner;
5. hand over entitled work/assets;
6. secure/remove access according to risk and effective date;
7. document unresolved items and known consequences;
8. avoid destructive deletion during a dispute or uncertain ownership situation.

Escalate material disputes through the appropriate leadership/commercial channel. Security or critical incidents follow [Incident Escalation](./incident-escalation.md).

## Client Does Not Respond

Lack of client response does not justify indefinite access or an indefinitely open project.

The Project/Delivery Owner should:

- make reasonable follow-up attempts through agreed channels;
- document outstanding client actions;
- escalate where the lack of response creates material risk;
- apply contractual/approved closure rules;
- secure systems/access appropriately;
- record any items that could not be transferred because the client did not respond.

Do not invent contractual rights or dispose of client assets solely because communication stopped.

## Post-Closure Requests

After closure, a new client request should be classified before work begins:

- warranty/defect obligation under the existing engagement;
- approved continuing support;
- new scope/project;
- emergency/security matter;
- informational request.

Do not silently reopen a closed engagement or perform unapproved scope because a former project contact sends a message.

## Lessons Learned

For material projects, difficult engagements, significant failures, or strategically important work, conduct a proportionate closeout review.

Capture reusable lessons such as:

- what worked;
- recurring blockers;
- estimation/scope issues;
- quality patterns;
- client communication lessons;
- technical/process improvements;
- SOP/checklist changes needed.

Do not create a post-project meeting solely for ceremony when there is no meaningful learning to capture.

## Closure Checklist

Before declaring the engagement/project fully closed, verify as applicable:

- [ ] closure scope and effective date confirmed;
- [ ] open commitments reviewed and dispositioned;
- [ ] final deliverables passed required QA;
- [ ] client acceptance recorded where required;
- [ ] final handoff completed;
- [ ] asset/account ownership transferred;
- [ ] Blinto/client access reconciled;
- [ ] shared credentials/tokens handled securely;
- [ ] recurring activities stopped, transferred, or intentionally retained;
- [ ] commercial/admin closeout routed to responsible owner;
- [ ] client closure communication sent;
- [ ] project records preserved/archived;
- [ ] unresolved retained items have owners;
- [ ] final closure recorded.

This embedded checklist is the minimum closure gate. Create a separate reusable checklist only if operational use demonstrates a need for one.

## Completion Standard

Project/client offboarding is complete when:

- the scope of closure is unambiguous;
- final work and known exceptions are accounted for;
- the client has the assets/ownership they are entitled to receive;
- Blinto retains only access justified by an ongoing responsibility;
- recurring activities match the post-closure responsibility;
- material records and decisions are preserved;
- remaining obligations have explicit owners;
- the project/client operational record accurately reflects closure.

## Related Resources

- [Client Onboarding](./client-onboarding.md)
- [Client Access Collection](./client-access-collection.md)
- [Client Communication & Escalation](./client-communication-and-escalation.md)
- [Deliverable QA & Approval](./deliverable-qa-and-approval.md)
- [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md)
- [Credential & Password Management Policy](./credential-and-password-management-policy.md)
- [Incident Escalation](./incident-escalation.md)
- [Google Drive Organization Standard](./google-drive-organization-standard.md)
