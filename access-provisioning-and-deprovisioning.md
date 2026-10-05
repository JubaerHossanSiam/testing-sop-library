---
title: Access Provisioning & Deprovisioning
type: sop
department: Company
owner: People Operations
status: approved
version: 1.1
last_reviewed: 2026-08-19
review_cycle: 6-months
tags:
  - access
  - security
  - onboarding
  - offboarding
  - least-privilege
related:
  - credential-and-password-management-policy
  - employee-onboarding
  - employee-offboarding
  - employee-onboarding-checklist
  - employee-offboarding-checklist
  - wordpress-security-standard
---

# Access Provisioning & Deprovisioning

## Purpose

Define how Blinto requests, approves, grants, reviews, changes, suspends, and removes access to company and client systems throughout a person's working relationship with Blinto.

This SOP governs **access lifecycle**. Password creation, password-manager configuration, credential sharing, recovery, and compromise handling are governed by [Credential & Password Management Policy](./credential-and-password-management-policy.md).

## Scope

Applies to employees, interns, contractors, consultants, and other authorized collaborators who require access to company or client systems, infrastructure, repositories, communication/project-management platforms, hosting/domain/DNS systems, business/administrative systems, data stores, or other digital resources controlled or accessed by Blinto.

Where a client's security/access requirements are stricter than this SOP, follow the stricter client requirement.

## Core Principles

- **Least privilege:** grant only the minimum access required for current responsibilities.
- **Individual identity:** use individual named accounts whenever supported.
- **No unmanaged credential sharing:** shared credentials, where unavoidable, must follow the canonical credential policy.
- **MFA:** enable/require MFA where applicable, especially for privileged/sensitive access.
- **Access has an owner:** every material grant has an identifiable business/system owner and reason.
- **Temporary access is time-bound:** contractor, consultant, intern, project-specific, and emergency access should have an expiry/review point where supported.

## Roles

### Requester
Normally the Team Lead, Project/Delivery Lead, or another authorized owner requests privileged, client, or material access.

### System / Data Owner
Determines whether access is appropriate and what permission level is required.

### Team Lead / Project Lead
Confirms the business need and fit with actual responsibilities.

### People Operations / HR
Coordinates onboarding, role change, contract change, and offboarding triggers and ensures required actions are tracked.

### CEO / Executive Owner
Approves only highly sensitive or material company-level access where designated. CEO approval is not routine for ordinary operational access.

## Access Classification

### Standard Access
Routine operational access with limited administrative/security impact.

**Approval:** appropriate system/data owner or authorized operational owner.

### Privileged / Administrative Access
Access that can materially change configuration, users, permissions, production systems, security settings, billing, sensitive data, or other high-impact resources.

**Approval:** Team/Project Lead business confirmation + system/data owner approval.

### Highly Sensitive Access
Ownership/root/super-admin or equivalent access where misuse or loss could create material financial, security, legal, organizational, or business-continuity risk.

**Approval:** designated system/executive owner and any required company-level approval.

Specific tools should be classified in the authoritative access register/system rather than hard-coded here.

## Provisioning Workflow

### 1. Establish business need
Record person, system/resource, reason, permission level, permanent/temporary status, and expiry/review date where applicable.

### 2. Obtain approval
Apply the approval level appropriate to the access classification.

### 3. Create/invite individual account
Use the authorized work identity/email, minimum required role, and applicable MFA. Do not transfer another person's account.

If individual accounts are technically impossible, follow [Credential & Password Management Policy](./credential-and-password-management-policy.md).

### 4. Verify access
Confirm the person can access what is required without unnecessary additional privileges.

### 5. Record the grant
Record material access in the authoritative operational access register/system, including person, resource, role, reason, approver/owner, grant date, and expiry/review date where applicable.

The SOP Library must not become a duplicate access register.

## Onboarding

Provision access as part of [Employee Onboarding](./employee-onboarding.md), based on actual role requirements rather than cloning another employee's access profile. Highly sensitive access should be granted only when actually required.

## Contractors, Consultants & Interns

Access should be narrower and time-bound by default. Grant only required systems, set expiry/review dates where possible, avoid persistent privileged access without justification, and remove access when the assignment/engagement ends.

## Role, Team, Project or Responsibility Change

A responsibility change triggers an access review. Add newly required access and remove/reduce access that is no longer justified. Do not allow access to accumulate indefinitely across old projects or roles.

## Temporary & Emergency Access

Temporary elevated access must have a specific purpose, minimum necessary privilege, expiry/review point where possible, and post-use review. Emergency access does not waive accountability.

## Periodic Access Review

### Privileged and client access
Review at least **quarterly**.

### Routine company access
Review at least **every 6 months**, or sooner when a lifecycle event occurs.

Do not wait for the scheduled review to remove access known to be unnecessary.

## Deprovisioning / Offboarding

Access removal is a mandatory part of [Employee Offboarding](./employee-offboarding.md).

Before the effective exit time, transfer required ownership of files, repositories, client assets, automations/integrations, administrative ownership, and other continuity-critical resources.

At or before the effective exit time, remove/suspend access according to the approved plan. Verify revocation, invalidate relevant sessions/tokens, and rotate shared credentials only when individual revocation cannot adequately protect them, following [Credential & Password Management Policy](./credential-and-password-management-policy.md).

## Emergency Suspension / Revocation

Where there is a credible security, employment, client, or business-continuity risk, an authorized Team Lead, People Operations representative, system/security owner, or executive owner may trigger immediate suspension/revocation. Actions should be proportionate and documented as soon as practical.

## Access Register Requirements

The authoritative access register/system should answer:

- who has access;
- to what resource;
- at what level;
- why;
- who owns/approved it;
- when granted;
- when last reviewed;
- whether temporary and when it expires.

Do not store passwords/secrets in the access register unless the approved credential-management system itself is serving that function.

## Exceptions

Exceptions must be justified, time-bound where possible, approved by the appropriate owner, and supported by compensating controls when a system limitation prevents the normal control.

## Related Resources

- [Credential & Password Management Policy](./credential-and-password-management-policy.md)
- [Employee Onboarding](./employee-onboarding.md)
- [Employee Onboarding Checklist](./employee-onboarding-checklist.md)
- [Employee Offboarding](./employee-offboarding.md)
- [Employee Offboarding Checklist](./employee-offboarding-checklist.md)
- [WordPress Security Standard](./wordpress-security-standard.md)
