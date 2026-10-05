---
title: WordPress Security Checklist
type: checklist
department: Engineering
owner: Technical Lead
status: approved
version: 1.0
last_reviewed: 2026-08-19
review_cycle: 6-months
tags:
  - wordpress
  - security
  - checklist
  - launch
related:
  - wordpress-security-standard
  - wordpress-monthly-security-maintenance-checklist
---

# WordPress Security Checklist

## Purpose

Verify the baseline controls in [WordPress Security Standard](./wordpress-security-standard.md) before launch, handoff, or acceptance of ongoing maintenance responsibility.

Use **N/A + reason** when a control genuinely does not apply. Do not mark inaccessible client-owned controls as complete.

## Hosting & Transport

- [ ] Hosting platform is reputable/supported for the website's needs.
- [ ] HTTPS is enabled with a valid certificate.
- [ ] Production redirects/URL configuration enforce HTTPS appropriately.
- [ ] Hosting/platform backups are enabled.
- [ ] Independent/third-party backup requirement is addressed where applicable.
- [ ] Restore path/responsibility is understood.

## WordPress Hardening

- [ ] WordPress core is on a supported/current secure version.
- [ ] Required themes/plugins are supported and updated.
- [ ] Unused plugins/themes are removed.
- [ ] Built-in theme/plugin file editor is disabled in production.
- [ ] New-build database prefix is non-default where practical.
- [ ] Login path is hardened/customized where supported by the approved stack.
- [ ] Login attempt/rate limiting protection is enabled.

## Accounts & Authentication

- [ ] No default `admin` administrator account is used.
- [ ] Administrator accounts are individually attributable where feasible.
- [ ] Administrator access is limited to people who require it.
- [ ] MFA/2FA is enabled for privileged accounts where supported.
- [ ] Credentials are stored/shared through the approved password manager (for example 1Password or LastPass).
- [ ] Credentials are not intentionally stored in ordinary documents/spreadsheets/chat/task comments.
- [ ] Browser-saved privileged credentials have been removed where required by company/client security practice.

## Security Controls

- [ ] WAF/edge protection is configured where applicable.
- [ ] Vulnerability monitoring/virtual patching is configured where applicable.
- [ ] Malware/security scanning is configured.
- [ ] Security alerts have an accountable recipient/owner.
- [ ] Uptime monitoring is configured where maintenance scope requires it.
- [ ] Remote maintenance/monitoring is configured where applicable.

## Access & Ownership

- [ ] Blinto/team access matches current responsibilities.
- [ ] Client/vendor accounts have appropriate roles.
- [ ] Old/stale users have been removed or disabled.
- [ ] Hosting/DNS/CDN/backup/security-tool ownership is known.
- [ ] Client-owned controls Blinto cannot access are documented.

## Validation

- [ ] Backup/recovery point confirmed before material security changes.
- [ ] Critical site functionality verified after hardening/updates.
- [ ] No known critical security issue remains unowned.
- [ ] Exceptions are documented with owner/risk/next action.

## Completion Record

**Website:**  
**Environment:**  
**Checked by:**  
**Date:**  
**Technical owner:**  
**Client/delivery owner:**  
**Exceptions / N/A reasons / follow-up:**
