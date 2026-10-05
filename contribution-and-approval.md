---
title: SOP Library Contribution & Approval
type: sop
department: Company
owner: SOP Library Team
status: approved
version: 1.0
last_reviewed: 2026-08-19
review_cycle: annual
tags:
  - sop-library
  - contribution
  - approval
related:
  - library-standard
---

# SOP Library Contribution & Approval

## Purpose

Define how Blinto team members request, create, improve, review, and publish operational knowledge while protecting the library from duplication and uncontrolled changes.

## When to Use

Use this process whenever a team member:

- needs an SOP or other operational document that does not appear to exist;
- discovers missing or incorrect information;
- wants to improve an existing document;
- proposes a new checklist, template, policy, guide, or reference.

## Core Workflow

### 1. Search first

Search the library using the process name, task, tool, department, and related terms.

### 2. Decide: update, link, or create

- **Update** when the knowledge belongs to an existing canonical document.
- **Link** when another document already owns the required knowledge.
- **Create** only when the proposed document has a distinct reusable purpose.

### 3. Propose the change

Changes should be proposed through a branch and pull request. A simple SOP request may begin as a GitHub Issue before anyone writes the document.

### 4. Review

The SOP Library Team reviews the proposal for:

- accuracy;
- operational clarity;
- duplication;
- correct document type;
- ownership;
- links to existing canonical knowledge;
- security or confidentiality concerns;
- consistency with the Library Standard.

### 5. Approve and merge

Approved changes are merged into `main`. The merged version becomes the canonical published version.

### 6. Publish downstream

After merge, downstream systems may automatically update:

- the internal SOP Library website;
- search/index data;
- Google Drive backup copies.

These downstream copies do not replace GitHub as the source of truth.

## Requesting a New Document

A request should explain:

- what process or resource is missing;
- why it is needed;
- who uses it;
- the current way the work is performed, if known;
- any existing documents that may be related.

The SOP Library Team may decide that the correct action is to update an existing document rather than create a new one.

## Improving an Existing Document

An improvement request should identify:

- the document;
- the affected section;
- what is incorrect, missing, or outdated;
- the proposed change or expected outcome;
- why the change is necessary.

## Approval Principle

Contributors may propose changes, but publication to `main` should follow the repository's protected review process. The SOP Library Team acts as the publishing gatekeeper, not necessarily as the author of every document.

## Emergency Corrections

Critical operational, security, compliance, or client-impacting errors should be corrected as quickly as possible while preserving review and version history wherever practical.

## Ownership

Every document has an operational `owner`. Ownership means responsibility for the accuracy of the process. The SOP Library Team owns documentation governance and publishing quality.
