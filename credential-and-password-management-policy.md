---
title: Credential & Password Management Policy
type: policy
department: Company
owner: People Operations
status: approved
version: 1.0
last_reviewed: 2026-08-19
review_cycle: 6-months
tags:
  - credentials
  - passwords
  - mfa
  - security
  - password-manager
related:
  - access-provisioning-and-deprovisioning
  - employee-onboarding
  - employee-offboarding
  - wordpress-security-standard
---

# Credential & Password Management Policy

## Purpose

Define how Blinto creates, stores, shares, protects, rotates, recovers, and retires passwords and other authentication credentials used for company and client systems.

This policy owns **credential security**. Who should receive access, what permission level they receive, and when access is removed are governed by [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md).

## Scope

Applies to passwords, passphrases, recovery codes, API keys, access tokens, secret keys, client credentials, shared credentials, administrative credentials, and other authentication secrets used by employees, interns, contractors, consultants, and authorized collaborators.

Where a client or platform requires stricter controls, follow the stricter requirement.

## Approved Password Manager

Company/client credentials that must be stored or shared must be handled through an **approved organization-managed password manager**, such as **1Password or LastPass**, depending on the organization/client environment.

Do not maintain a parallel credential store in spreadsheets, ordinary Google Docs, ClickUp tasks/comments, email, Telegram, chat, browser notes, wiki pages, or local text files.

## Core Principles

### Unique credentials

Each account should use a unique password/passphrase. Do not reuse the same password across multiple systems.

### Individual accounts first

Where a platform supports named users, use individual accounts rather than sharing a single login.

Shared credentials are allowed only when technically necessary or operationally justified.

### Strong generated passwords

Use the approved password manager's generator for passwords whenever possible.

Prefer long, randomly generated passwords/passphrases rather than memorable variants based on company names, projects, seasons, years, or predictable patterns.

### MFA / 2FA

Enable multi-factor authentication wherever supported and appropriate for the system.

For privileged, administrative, financial, infrastructure, source-code, domain/DNS, company identity, and other sensitive systems, MFA is required unless the platform does not support it.

Where multiple MFA methods are available, prefer stronger phishing-resistant methods when practical.

### Secrets are not documentation

Passwords, recovery codes, API keys, and secret tokens must not be copied into SOPs, handover documents, client notes, project documentation, or other ordinary knowledge resources.

Documentation may link to the approved password-manager item or describe where the credential is stored without exposing the credential itself.

## Personal vs Shared Credentials

### Personal credentials

Credentials tied to an individual account must not be shared with another person.

If another person requires access, provision their own account through the canonical access process.

### Shared credentials

Where a platform genuinely requires a shared login:

- store the credential in the approved password manager;
- restrict vault/item access to people with a legitimate business need;
- avoid sending the password directly in chat/email;
- enable MFA where practical;
- maintain an identifiable owner for the credential;
- rotate/change the credential when exposure or access changes require it.

Shared credentials should not become the default simply because they are faster to set up.

## Browser-Saved Passwords

Do not use browser-native password storage as the authoritative company credential store where the credential should be controlled by the organization.

Company/client credentials should be stored in the approved password manager so access can be centrally controlled, audited, transferred, and revoked.

If credentials were previously saved in a browser, migrate them to the approved password manager and remove the unmanaged browser copy where practical.

## Credential Sharing

Use password-manager sharing/vault permissions rather than exposing the secret itself whenever the platform supports that model.

Never share credentials through:

- plain-text email;
- Telegram/WhatsApp/chat messages;
- ClickUp comments/tasks;
- Google Docs/Sheets;
- screenshots;
- SOPs/wiki pages;
- unsecured local files.

If a one-time transfer outside the normal password manager is unavoidable, use an approved secure method and move the credential into the canonical store immediately afterward.

## Recovery Codes & Backup Authentication

Recovery codes and backup authentication secrets should be stored securely in the approved password manager or another approved protected location accessible to the appropriate owner.

Do not leave recovery codes printed, photographed, or saved in ordinary files where unauthorized people may access them.

For highly sensitive company systems, recovery ownership should not depend on only one person.

## API Keys, Tokens & Secret Keys

Treat API keys, tokens, SSH/private keys, application secrets, and similar values as credentials.

- Store them in the appropriate secure secret/password-management system.
- Do not commit secrets to Git repositories.
- Do not place secrets in documentation or issue/task descriptions.
- Limit scope/permissions where the provider supports scoped tokens.
- Use separate credentials by environment/use case where practical.
- Revoke unused keys/tokens rather than leaving them active indefinitely.

## Rotation Policy

Blinto does **not require arbitrary password changes solely because a fixed calendar period has passed**, unless a client, regulator, platform, contract, or system-specific policy requires scheduled rotation.

Credentials must be changed/rotated when there is a meaningful security or access event, including:

- confirmed or suspected compromise;
- credential exposed in chat, email, docs, code, screenshots, logs, or another unmanaged location;
- shared credential known by a person whose access is being removed and individual revocation is not possible;
- credential discovered to be weak/reused;
- platform/provider security incident requires reset;
- role/ownership transition where shared knowledge creates ongoing risk;
- security review identifies a specific reason to rotate.

High-risk shared or privileged credentials may have a defined periodic rotation requirement if the system owner decides that the risk justifies it.

## Compromise / Exposure Response

If a credential may have been exposed:

1. **Do not wait for proof of misuse.** Treat credible exposure as a security event.
2. Notify the appropriate Team Lead/system owner/security owner promptly.
3. Revoke or rotate the affected credential/token.
4. Invalidate active sessions where appropriate.
5. Review related access for misuse or unauthorized changes.
6. Remove exposed copies from uncontrolled locations where feasible.
7. Update the canonical password-manager item.
8. Record/escalate the incident through the applicable incident process once published.

Do not paste the exposed secret into an incident ticket while documenting the incident.

## Onboarding

During onboarding:

- create/invite individual accounts through [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md);
- give access only to required password-manager vaults/items;
- require MFA where applicable;
- explain that credentials must not be stored in ordinary notes/chats/documents;
- verify the employee knows how to request additional access rather than asking colleagues to send passwords.

## Role / Project Changes

When a person's responsibilities change:

- review which password-manager vaults/items remain required;
- remove access to credentials no longer needed;
- avoid leaving historical client/project credentials accessible merely because the person once worked on the account;
- rotate shared credentials when access removal alone cannot reliably prevent future use.

## Offboarding

At or before the effective exit time:

- remove the person's access to the approved password manager;
- revoke individual system credentials through the access-deprovisioning process;
- invalidate relevant sessions/tokens where required;
- rotate shared credentials the person knew or could retrieve when individual revocation cannot protect the credential;
- transfer ownership/recovery responsibility where necessary.

Do not rotate every company password automatically when individual access can be safely revoked.

## Client Credentials

Client credentials remain client-sensitive information.

- Follow client-specific security requirements when stricter.
- Do not copy client secrets into Blinto documentation beyond the approved password manager.
- Remove/reduce team access when the client project or responsibility ends.
- Return/transfer credential ownership appropriately during project/client offboarding.

## Password Manager Administration

The organization should maintain appropriate administrative/recovery ownership so the password manager itself does not become a single-person dependency.

Administrative access to the password manager should be limited, protected with MFA, reviewed periodically, and treated as highly sensitive access under [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md).

## Exceptions

A system limitation does not automatically justify insecure credential handling.

Where an exception is necessary, the responsible system/business owner should define a compensating control, limit exposure, and remove the exception when the limitation no longer applies.

## Related Resources

- [Access Provisioning & Deprovisioning](./access-provisioning-and-deprovisioning.md)
- [Employee Onboarding](./employee-onboarding.md)
- [Employee Offboarding](./employee-offboarding.md)
- [WordPress Security Standard](./wordpress-security-standard.md)
