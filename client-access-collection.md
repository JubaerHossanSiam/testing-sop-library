---
title: Client Access Collection
type: sop
department: Client Delivery
owner: Project Delivery
status: approved
version: 1.0
last_reviewed: 2026-08-20
review_cycle: 6-months
tags:
  - client
  - access
  - delivery
  - credentials
  - onboarding
related:
  - client-onboarding
  - project-kickoff
  - access-provisioning-and-deprovisioning
  - credential-and-password-management-policy
  - incident-escalation
---

# Client Access Collection

## Purpose

Define how Blinto identifies, requests, receives, verifies, stores, tracks, and hands off access required to deliver client work securely and consistently.

This SOP governs the **collection workflow**. It does not redefine who should receive access, what privilege level should be granted, or how credentials must be secured. Those rules belong to [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md) and [Credential & Password Management Policy](./credential-and-password-management-policy.md).

## Scope

Applies whenever Blinto needs access to a client-controlled system, including but not limited to:

- website/CMS;
- hosting/server;
- domain/DNS/CDN;
- analytics/tag-management/search-console systems;
- advertising/marketing platforms;
- ecommerce/app stores;
- repositories/deployment platforms;
- CRM/email/automation tools;
- design/content systems;
- client cloud storage;
- APIs, tokens, keys, or integrations;
- other delivery-critical client systems.

## Core Principles

### Ask only for what is needed

Do not request broad access "just in case." Identify the minimum system and permission level required for the confirmed scope.

### Prefer client-created individual access

Where supported, ask the client to invite the required Blinto user(s) or approved team identity rather than sending master credentials.

### Never collect secrets in ordinary communication channels

Passwords, API keys, recovery codes, tokens, or similar secrets must not be intentionally stored in email threads, Telegram/WhatsApp, ClickUp comments, ordinary documents, spreadsheets, or the SOP Library.

### Separate access tracking from secret storage

The project workspace may record **what access is required, status, owner, and verification date**, but the secret itself belongs in the approved credential-management system.

### Verify before work depends on it

Do not assume access is usable because the client said it was shared. Verify the actual login/role/permissions required for the task.

### Client requirements may be stricter

Where a client imposes stronger security, approval, MFA, SSO, VPN, device, or access-handling requirements, follow the stricter requirement.

## Roles

### Project / Delivery Lead

Owns the access requirement list and ensures missing access is identified early enough not to block delivery.

### Technical / Functional Owner

Confirms what system and permission level are actually required and verifies access once received.

### Client Contact

Provides or coordinates the required access according to the client's internal process.

### Authorized Credential Administrator

Handles secrets in the approved credential-management system where shared credentials are unavoidable.

## Access Requirement Identification

During Client Onboarding and/or Project Kickoff, identify every known access dependency.

For each required system, record:

- system/resource name;
- purpose/business need;
- required permission level;
- who on Blinto needs access;
- client-side owner/contact;
- requested date;
- needed-by date;
- current status;
- verification status;
- blocker/exception notes.

Do not put passwords or secrets in this tracker.

## Access Collection Methods

Use the safest practical method in this priority order.

### 1. Client invitation / delegated access — preferred

Ask the client to invite the specific Blinto user(s) with the minimum required role.

Examples:

- collaborator/user invitation;
- organization/team membership;
- delegated partner access;
- agency/business-manager access;
- repository/project membership.

This is preferred because the client retains ownership and access can be revoked individually.

### 2. Temporary or role-based access

Where the platform supports temporary, scoped, role-based, or time-limited access, use it instead of master credentials.

### 3. Shared credential — only when technically necessary

If the platform cannot provide individual/delegated access:

- receive/store the credential through the approved password manager or secure method allowed by the credential policy;
- restrict sharing to the people who need it;
- enable MFA where supported;
- avoid copying the secret into project documentation;
- mark the access tracker as received/verified without exposing the secret.

## Requesting Access From the Client

Keep requests specific and action-oriented.

A good request states:

- the exact platform/system;
- why access is needed;
- who should be invited;
- minimum permission/role required;
- preferred secure method;
- when access is needed;
- what to do if the client's internal policy requires a different process.

Avoid vague requests such as "Please send all website credentials."

## Receiving Access

### If invited directly

The recipient should:

1. accept the invitation using the approved work identity;
2. enable/complete MFA if required;
3. verify the assigned role/permissions;
4. inform the Project/Delivery Lead that access is ready.

### If a credential is shared

The recipient/authorized credential administrator should:

1. move/store it in the approved credential manager immediately;
2. remove avoidable copies from temporary/unmanaged locations where possible;
3. verify the credential works;
4. verify the permission level is sufficient but not excessive;
5. update the access tracker without exposing the secret.

If the client sends a secret through an insecure channel, do not shame the client. Secure it promptly, minimize residual copies where practical, and guide future sharing toward the approved method.

## Access Verification

Verification means more than successful login.

Confirm, as applicable:

- correct environment/account;
- correct client/site/property;
- required role/permissions;
- access to the specific function/data needed;
- MFA/SSO/VPN requirements complete;
- no unnecessary administrative access;
- no unexpected access to unrelated client resources.

If access is excessive, request reduction where practical.

If access is insufficient, document the exact missing permission rather than asking for "full admin" without justification.

## Access Statuses

Use clear statuses in the authoritative project tracker:

- **Not Required Yet** — identified but not currently needed.
- **To Request** — requirement confirmed; request not yet sent.
- **Requested** — client has been asked.
- **Client Action Pending** — waiting on client-side action/approval.
- **Received — Unverified** — invitation/credential received but not yet tested.
- **Verified** — access confirmed sufficient for delivery.
- **Blocked** — unable to proceed because access cannot be obtained/used.
- **No Longer Required** — dependency removed or workstream changed.
- **Revoked/Closed** — access intentionally removed at project/engagement closeout.

## Missing or Delayed Access

Do not let access blockers remain hidden.

If required access is missing:

1. record the blocker and impacted deliverable/workstream;
2. notify the Project/Delivery Lead;
3. follow up with the client through the agreed communication channel;
4. state the impact on timing/sequence if material;
5. resequence work where possible;
6. escalate if the dependency threatens a major commitment.

Use [Incident Escalation](./incident-escalation.md) if the missing/revoked access is part of a serious client-critical or security incident rather than a routine dependency.

## Client-Owned Shared Accounts

Where the client insists on a shared/master account:

- confirm there is no reasonable individual/delegated alternative;
- store credentials only in the approved password manager;
- restrict access internally;
- ensure MFA/recovery handling is appropriate;
- document who is authorized to use the account;
- coordinate rotation/recovery if staff or engagement changes create exposure risk.

Do not create additional unmanaged shared copies for convenience.

## API Keys, Tokens & Secrets

Treat API keys, OAuth secrets, private keys, access tokens, webhook secrets, and similar values as credentials.

Where possible:

- request scoped keys/tokens;
- restrict permissions;
- use separate production/non-production credentials;
- use expiry/rotation where supported;
- store secrets in the appropriate password/secrets-management system;
- never place live secrets in GitHub Markdown, screenshots, tickets, chat logs, or ordinary documentation.

## Access During Delivery

If project scope or team membership changes, do not simply add more access.

Follow the canonical access lifecycle to:

- add only newly required access;
- remove no-longer-required access;
- reduce privilege where possible;
- review temporary access;
- keep the tracker current.

## Client Access at Offboarding / Project Close

When a project, workstream, or engagement ends:

1. identify which Blinto access is no longer required;
2. return/revoke client invitations where appropriate;
3. remove Blinto users from client systems where Blinto controls the membership;
4. remove shared credentials from internal access where no longer needed;
5. coordinate credential rotation where exposure warrants it;
6. update the tracker to Revoked/Closed;
7. preserve only records needed for business/legal/operational continuity.

The broader client/project closeout process belongs to the canonical Project/Client Offboarding SOP once published.

## Exceptions

If the client cannot use the preferred secure method:

- choose the safest practical compensating method;
- document the limitation;
- minimize who receives the secret;
- move the credential into approved storage as soon as possible;
- escalate material security concerns to the appropriate owner.

## Related Resources

- [Client Onboarding](./client-onboarding.md)
- [Project Kickoff](./project-kickoff.md)
- [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md)
- [Credential & Password Management Policy](./credential-and-password-management-policy.md)
- [Incident Escalation](./incident-escalation.md)
