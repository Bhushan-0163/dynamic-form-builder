# Schema-Driven Dynamic Form Builder

**Live Demo (Storybook):**  
https://dynamic-form-builder-storybook.vercel.app/

---

## Overview

This project implements a schema-first dynamic form engine using **React**, **TypeScript**, **Tailwind CSS**, and **Storybook**.  
The form UI and behavior are fully driven by a declarative schema, enabling flexible, scalable, and maintainable form workflows without relying on external form or UI libraries.

Storybook is used as the primary development and demonstration surface, showcasing all states, edge cases, and accessibility considerations.

---

## Features

- Schema-driven form rendering
- Conditional field visibility
- Repeatable (array-based) fields
- Synchronous and asynchronous validation
- Autosave and resume functionality
- Accessibility-first design (keyboard and screen reader support)
- Storybook-first UI development and documentation

---

## Validation

The validation pipeline is deterministic and executed on form submission:

- Required field validation
- Asynchronous validation (e.g., simulated username availability checks)
- Clear and consistent error messaging
- Automatic focus management for invalid fields

---

## Accessibility

Accessibility is treated as a first-class concern throughout the implementation:

- Proper label–input association
- Use of `aria-invalid` and `role="alert"` for error states
- Automatic focus movement to the first invalid field on submission
- Full keyboard navigability for all form interactions

---

## Architecture and Design Decisions

- A schema-first approach was chosen to keep form logic declarative and extensible
- No external form or UI libraries were used to maintain full control over behavior and logic
- Validation is intentionally sequential to ensure predictability and easier debugging
- Storybook is used as the primary interface for development, testing, and review

---

## Storybook

All components and form states are demonstrated via Storybook, including:

- Default form rendering
- Validation error states
- Asynchronous validation behavior
- Repeatable field scenarios

The Storybook preview is publicly accessible via the link provided above.

---

## Trade-offs

- Advanced form features were implemented manually instead of using form libraries to ensure clarity and ownership of logic
- Autosave is implemented using local storage for simplicity and transparency

---

## How to Run Locally

```bash
npm install
npm run dev
