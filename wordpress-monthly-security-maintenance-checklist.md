---
title: WordPress Monthly Security Maintenance Checklist
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
  - maintenance
  - checklist
related:
  - wordpress-security-standard
  - wordpress-security-checklist
---

# WordPress Monthly Security Maintenance Checklist

## Purpose

Provide a reusable monthly security-maintenance check for WordPress websites where Blinto's maintenance scope includes ongoing security oversight.

This checklist does not mean every client receives the same maintenance scope. Contract/scope determines which controls Blinto owns.

## Backup & Recovery

- [ ] Automated backups are running as expected.
- [ ] Recent backup/recovery point is available.
- [ ] Backup failures are assigned/escalated.
- [ ] Restore capability has not become unknown or inaccessible.

## Updates & Vulnerabilities

- [ ] WordPress core security/update status reviewed.
- [ ] Plugin update/vulnerability status reviewed.
- [ ] Theme update/vulnerability status reviewed.
- [ ] Unsupported/abandoned components identified and escalated.
- [ ] Critical/high-risk vulnerabilities are remediated or have an accountable action plan.
- [ ] Virtual patching/WAF protections are functioning where used.

## Malware & Security Monitoring

- [ ] Malware/security scan status reviewed.
- [ ] Security alerts reviewed for unresolved issues.
- [ ] Suspicious administrator/user changes reviewed where monitoring supports it.
- [ ] Uptime/security-monitoring status reviewed where in scope.
- [ ] No unresolved suspected compromise remains without an owner.

## Users & Access

- [ ] Administrator/user list reviewed for obviously stale or unauthorized access.
- [ ] Privileged access still matches current responsibility where known.
- [ ] Departed team/vendor access has been removed where applicable.
- [ ] Shared/compromised credential concern is escalated and credential changed when individual revocation is insufficient.

## Site Health & Security Configuration

- [ ] HTTPS/certificate status is healthy.
- [ ] Security plugin/service is active and not reporting a critical configuration problem.
- [ ] WAF/edge/security controls are active where applicable.
- [ ] Remote maintenance/monitoring connection is healthy where used.
- [ ] Unexpected security-tool deactivation or licensing failure is addressed.

## Post-Update Verification

Where updates were performed:

- [ ] Website loads normally.
- [ ] Critical forms/commerce/login flows relevant to the site are checked as appropriate.
- [ ] Material errors/regressions are assigned for resolution.

## Reporting & Exceptions

- [ ] Material security issue is communicated to the responsible delivery/client owner.
- [ ] Client-controlled blockers are documented rather than marked complete.
- [ ] Exceptions have an owner and next action/date.
- [ ] Monthly maintenance completion is recorded in the applicable task/system.

## Completion Record

**Website:**  
**Month:**  
**Maintained by:**  
**Date completed:**  
**Issues found:**  
**Actions / owners:**  
**Client-controlled exceptions:**
