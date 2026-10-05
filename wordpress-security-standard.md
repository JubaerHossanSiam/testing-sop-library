---
title: WordPress Security Standard
type: policy
department: Engineering
owner: Technical Lead
status: approved
version: 1.0
last_reviewed: 2026-08-19
review_cycle: 6-months
tags:
  - wordpress
  - security
  - websites
  - access
related:
  - wordpress-security-checklist
  - wordpress-monthly-security-maintenance-checklist
---

# WordPress Security Standard

## Purpose

Define the minimum security controls Blinto follows and recommends for WordPress websites it builds, manages, or maintains.

This is the canonical security standard. Execution is verified through the linked checklists rather than duplicating the requirements in client-specific documents.

## Scope

Apply this standard to WordPress websites where Blinto has responsibility for build, launch, maintenance, security, or administrative access. Client-owned environments may require documented exceptions when Blinto does not control a required platform or setting.

## Core Principles

- Use least privilege.
- Use unique named accounts rather than unnecessary shared/generic administrator accounts.
- Do not use `admin` as the default administrator username.
- Protect privileged accounts with MFA/2FA where supported.
- Store credentials in an approved password manager such as **1Password or LastPass**, according to the organization/client environment.
- Do not store passwords in browser password stores, ordinary documents, spreadsheets, chat, or task comments as a substitute for the approved password manager.
- Keep WordPress core, themes, plugins, PHP/runtime, and hosting components within supported/security-maintained versions.
- Maintain recoverable backups independent enough to support restoration after failure or compromise.
- Minimize installed software and privileged access.

## Hosting & Transport

- Use a reputable, actively maintained hosting platform appropriate to the website.
- Enforce HTTPS with a valid SSL/TLS certificate.
- Use secure DNS/edge controls where available and appropriate.
- Enable hosting/platform backups and an appropriate independent backup layer where required by the maintenance model.

## WordPress Hardening

- Keep WordPress core updated.
- Disable the built-in theme/plugin file editor in production.
- Use a non-default database table prefix for new builds where practical; do not perform a risky prefix change on an existing production site merely for cosmetic compliance.
- Use a non-default login path where the approved stack supports it, while recognizing that obscuring the login URL is a supplemental control—not a substitute for strong authentication and access controls.
- Apply login-attempt/rate-limiting protection.
- Remove unused plugins/themes and avoid abandoned or untrusted extensions.
- Use only trusted themes/plugins from reputable sources with active maintenance.

## Accounts & Access

- Create only the accounts required for current responsibilities.
- Assign the lowest WordPress role/capability that enables the person's work.
- Review administrator accounts periodically and remove stale access.
- Remove access promptly when a team member/client/vendor no longer requires it.
- Do not share one administrator identity among multiple people when individual accounts are feasible.
- Use secure access-sharing methods rather than sending passwords in plaintext.

## Security Layers & Monitoring

The exact vendor may vary by client/hosting environment. The control is mandatory; the named tool is not always mandatory.

Where applicable, use:

- web application firewall / edge protection;
- vulnerability monitoring and virtual patching (for example Patchstack or an equivalent approved control);
- malware/security scanning (for example MalCare, Sucuri, or an equivalent approved control);
- uptime/security alerts;
- remote maintenance/monitoring such as WP Remote, ManageWP, or an approved equivalent;
- automated backups with restoration capability.

Do not install multiple overlapping security tools without considering conflicts, performance, licensing, and who will respond to alerts.

## Updates & Change Safety

Security updates should be applied promptly according to risk. Before material updates on important production sites:

- confirm a usable backup/recovery point;
- consider staging/testing when compatibility risk is material;
- verify critical site functionality after changes;
- record/escalate failures rather than leaving a site partially updated without ownership.

## Client-Owned Constraints

If Blinto cannot implement a required control because the client controls hosting, DNS, accounts, licensing, or another dependency:

1. document the gap;
2. communicate the security recommendation and risk to the responsible client contact;
3. implement the strongest safe controls available within Blinto's authority;
4. track material unresolved risk through the applicable delivery/security process.

Do not silently mark a control complete when Blinto lacks access or permission.

## Incident Handling

Suspected compromise, malware, credential exposure, unauthorized administrator access, or serious vulnerability exploitation should be escalated immediately to the Technical Lead and responsible delivery/client owner.

Containment actions should prioritize protecting the website, data, credentials, and evidence while avoiding unnecessary destructive changes before the incident is understood.

## Exceptions

Any material exception to this standard should have:

- reason;
- risk/impact;
- compensating control where available;
- responsible owner;
- client/management acknowledgement where appropriate;
- review or remediation date when applicable.

## Related Resources

- [WordPress Security Checklist](./wordpress-security-checklist.md)
- [WordPress Monthly Security Maintenance Checklist](./wordpress-monthly-security-maintenance-checklist.md)
