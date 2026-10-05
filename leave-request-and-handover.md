---
title: Leave Request & Handover
type: sop
department: People Operations
owner: People Operations
status: approved
version: 1.0
last_reviewed: 2026-08-19
review_cycle: 6-months
tags:
  - leave
  - hrms
  - handover
  - auto-approval
related:
  - leave-and-time-off-policy
  - attendance-policy
---

# Leave Request & Handover

## Purpose

Define how employees submit leave through the HRMS, how the system determines auto-approval versus manual review, how stakeholders are notified, and how work is aligned before an absence.

Leave entitlements, notice periods, duration limits, and special-leave rules are owned by [Leave & Time-Off Policy](./leave-and-time-off-policy.md). This SOP must not redefine those rules.

## Primary System

Leave requests should be submitted through Blinto's current HRMS/approved leave-management system.

Email, chat, or verbal conversation should not replace the official HRMS record for planned leave. Emergency communication may happen outside the HRMS initially, but the leave record should be completed as soon as reasonably possible.

## Planned Leave Workflow

### Step 1 — Employee submits leave

The employee selects the correct leave type and enters the required information, including:

- leave type;
- start/end date or half-day selection;
- any information required by that leave category;
- handover/coverage information where relevant.

The system checks the canonical policy conditions rather than asking a manager to subjectively approve every request.

### Step 2 — HRMS evaluates the request

The system evaluates, as applicable:

1. employee eligibility;
2. available/accrued balance;
3. required notice period;
4. requested duration;
5. consecutive-day limit;
6. required documentation/information;
7. whether the request falls into an exception category.

### Step 3A — Auto-approved

If all auto-approval conditions are met:

**HRMS → APPROVED immediately**

The system notifies:

- employee;
- Team Lead;
- People Operations/HR;
- CEO.

These notifications provide operational visibility; they are not requests for routine approval.

The notification should state why the request was auto-approved, for example:

> Annual Leave — auto-approved: sufficient balance, 21-day notice met, duration within auto-approval limit.

### Step 3B — Manual approval required

If the request is potentially valid but falls outside an auto-approval condition:

**HRMS → PENDING**

Route:

**Team Lead → People Operations/HR**

The Team Lead reviews delivery/coverage impact and aligns with the employee where necessary. People Operations validates entitlement, documentation, and consistent treatment.

Escalate to CEO only when the request is a material company-level exception, such as significant unpaid/extended leave or another exception requiring executive decision.

The HRMS should show the reason for manual review, for example:

> Annual Leave — manual approval required: 8 working days requested; auto-approval maximum is 5 working days.

### Step 3C — Not requestable under selected type

If the request violates a hard boundary:

**HRMS → DO NOT SUBMIT UNDER THIS TYPE**

The system should explain why and, where possible, suggest a valid route.

Example:

> Casual Leave cannot exceed 3 consecutive working days. Use available Earned Leave or request an applicable exception.

## Team Lead Alignment After Auto-Approval

Auto-approval does not eliminate delivery planning.

After notification, the Team Lead should review:

- active client commitments;
- deadlines/deliverables during the absence;
- meetings requiring reassignment/rescheduling;
- support/incident coverage;
- task ownership;
- required knowledge/access handover.

If there is no material issue, no further approval action is required.

If a genuine material conflict exists, the Team Lead contacts the employee promptly and attempts to mutually align an alternative plan/date. The Team Lead must not simply cancel an auto-approved leave.

If alignment cannot be reached, escalate to People Operations/HR.

## Employee Handover

For leave that affects active responsibilities, the employee should complete an appropriate handover before the leave begins.

A useful handover identifies:

- work that will remain active during the absence;
- current status and next action;
- temporary owner/backup where needed;
- important deadlines/meetings;
- relevant task/document links;
- known blockers/risks;
- escalation contact where appropriate.

Do not copy passwords or secrets into a handover. Access should be managed through the approved access/credential process.

The amount of handover should be proportionate: a half-day absence should not require the same documentation as a two-week absence.

## Sick Leave & Emergency Workflow

A genuine illness/emergency is not treated as failed advance planning.

### Employee

Notify the Team Lead as soon as reasonably possible. Where the employee can safely access the HRMS, record the leave there; otherwise the record may be completed afterward.

### Team Lead

Acknowledge the absence, arrange immediate coverage for critical work, and notify/escalate operational impact where necessary.

### People Operations

Ensure the HRMS/attendance record is accurate, validate available entitlement, and request reasonable evidence only where required by policy (for example, extended sick leave).

CEO may receive visibility but is not required to approve an ordinary genuine sick-day absence.

## Changes or Cancellation by Employee

If an employee's leave dates change, the employee should update/cancel the HRMS request as early as possible so balance, attendance, and team planning remain accurate.

A materially changed request should be re-evaluated against the auto/manual approval rules for the new dates/duration.

## Return From Leave

On return, the employee should:

1. confirm any required attendance/HRMS record is complete;
2. reconnect with the temporary owner/Team Lead where a handover occurred;
3. review material decisions/changes during the absence;
4. resume ownership of responsibilities as agreed.

## System Design Requirements

The HRMS implementation should support:

- separate leave balances by type;
- EL accrual and current-year vs carry-forward buckets;
- oldest eligible EL consumed first;
- automatic notice-period calculation;
- working-day/calendar-day rules as defined by policy;
- consecutive-day validation;
- `AUTO-APPROVED`, `PENDING / MANUAL APPROVAL`, and `NOT REQUESTABLE` outcomes;
- human-readable reason for every outcome;
- automatic stakeholder notifications;
- audit trail of requests, changes, approvals/exceptions, and cancellations;
- statutory/contractual override handling where an employee has a stronger entitlement.

## Exceptions & Escalation

Escalate to People Operations/HR when:

- eligibility or balance is disputed;
- the HRMS result appears inconsistent with policy;
- an auto-approved leave creates a genuine material conflict;
- documentation/leave classification is unclear;
- an employee needs an exception or unpaid leave;
- legal/contractual entitlement may differ from the standard company configuration.

## Related Resources

- [Leave & Time-Off Policy](./leave-and-time-off-policy.md)
- [Attendance Policy](./attendance-policy.md)
