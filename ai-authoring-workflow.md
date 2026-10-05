---
title: AI-Assisted SOP Authoring Workflow
type: guide
department: Company
owner: SOP Library Team
status: in-review
version: 1.0
last_reviewed: 2026-08-19
review_cycle: annual
tags:
  - sop-library
  - ai
  - authoring
  - contribution
related:
  - library-standard
  - contribution-and-approval
---

# AI-Assisted SOP Authoring Workflow

## Purpose

Explain how a team member can use an AI assistant to create or improve SOP Library content without needing to understand Markdown, document taxonomy, or documentation architecture.

The same workflow should work with capable AI systems that can access the repository and follow `AI-INSTRUCTIONS.md`.

## The Contributor's Job

The contributor provides **operational truth**:

- what they do;
- why they do it;
- who is involved;
- decisions/approvals;
- exceptions;
- what completion looks like.

The contributor does not need to decide the document type or write polished documentation.

## The AI's Job

The AI acts as the librarian/editor. It should:

1. understand the contributor's intent;
2. search the current library;
3. prevent duplication;
4. recommend the correct document type;
5. ask targeted questions for missing facts;
6. structure and draft the content;
7. reuse/link canonical resources;
8. identify conflicts and assumptions;
9. run the documentation quality gate;
10. prepare the proposed GitHub change for review.

## The Reviewer's Job

The SOP reviewer validates that the proposed document accurately represents how Blinto should operate and decides whether it is ready to become canonical.

AI does not replace this approval authority.

## Starting a New Contribution

A contributor may begin naturally, for example:

> I want to document how we launch a WordPress website.

The AI should first search the library. If related documents already exist, it should explain how they will be reused.

Example response pattern:

> The library already contains WordPress Website Security and the WordPress Pre-Launch Security Checklist. I will not recreate those controls. The missing canonical process appears to be Website Launch. I need to confirm who gives final launch approval and what marks the launch complete.

## Improving an Existing Document

A contributor may say:

> Our client onboarding process changed. We now create the ClickUp project before the kickoff meeting.

The AI should locate the canonical client-onboarding document and propose an update rather than creating a new SOP.

If the referenced step is owned by another canonical SOP, the AI should update/link the correct owner document instead of duplicating the procedure.

## When AI Should Ask Questions

AI should ask when a missing answer would materially change execution, responsibility, risk, compliance, or approval.

Typical questions:

- Who owns this process?
- What triggers it?
- What must be ready before it starts?
- Who approves this step?
- What happens when the normal path fails?
- What evidence must be recorded?
- How do we know it is complete?

AI should not ask questions simply to make the interview look comprehensive.

## What AI Must Not Decide Alone

AI should flag rather than invent uncertain rules involving:

- money/compensation;
- legal obligations;
- approval authority;
- security/access exceptions;
- disciplinary action;
- client commitments;
- mandatory deadlines or SLAs;
- ownership where responsibility is unclear.

## Proposed-Change Summary

Before submission, AI should provide a concise summary similar to:

**Proposed:** Website Launch  
**Type:** SOP  
**Owner:** Engineering Lead  
**Action:** Create  
**Reuses:** WordPress Website Security; WordPress Pre-Launch Security Checklist  
**Duplication detected:** None after linking existing controls  
**Needs confirmation:** Final launch approver

## Publication

After confirmation, the AI may prepare the Markdown change and pull request.

The normal publication flow is:

**Contributor → AI-assisted draft → PR → SOP reviewer → `main` → internal website**

Only merged content on `main` is canonical.

## Future Website Experience

The internal SOP Library should eventually expose two primary contribution actions:

- **Create / Document a Process**
- **Improve this Document**

The authoring experience should be conversational. The user should describe the work naturally while the system handles search, taxonomy, links, metadata, and draft generation.

The website should submit proposed changes for review rather than directly publishing AI output.
