# Schema-Driven Dynamic Form Builder
# Live Demo :- https://dynamic-form-builder-storybook.vercel.app/
## Overview
A schema-first dynamic form engine built with React, TypeScript, Tailwind CSS, and Storybook.

## Features
- Schema-driven rendering
- Conditional fields
- Repeatable fields
- Sync + async validation
- Autosave & resume
- Accessibility-first (keyboard & screen reader)
- Storybook-only UI surface

## Validation
Validation is deterministic and runs on submit:
- Required checks
- Async validation (e.g. username availability)

## Accessibility
- Label–input association
- aria-invalid and role="alert"
- Focus automatically moves to first error

## Trade-offs
No external form or UI libraries were used to maintain full control and clarity of logic.
