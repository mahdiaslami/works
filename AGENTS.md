# AGENTS.md

## Project Overview
This project is built with **Vue.js** and **Tailwind CSS**.  
It uses a modern, component-based architecture consistent with established design patterns.

## Directories
- `src/app/` — Contains the **business logic layer**, structured according to **Domain-Driven Design (DDD)** principles.  
  Components and UI logic should not directly access domain entities; use services, repositories, and value objects as boundaries.

## UI and Component Design
- Components follow the **Atomic Design** methodology:
  - **Atoms** — Base UI elements (buttons, inputs, icons, etc.).
  - **Molecules** — Compositions of atoms (form fields, cards, etc.).
  - **Organisms** — Complex, reusable UI sections.
  - **Templates** — Layout structures defining placement and hierarchy.
  - **Pages** — Final views combining templates and data logic.

## Agent Guidelines
- **Do** use Vue 3 Composition API and Tailwind CSS utility classes.
- **Do** follow the Atomic Design hierarchy when adding new components.
- **Do** place business logic only inside the `src/app` directory under the proper DDD layer.
- **Don’t** mix business logic with presentation code.
- **Don’t** directly mention or define the specific component library used—just integrate with existing patterns and style conventions.
- **Do** prefer consistency and clarity over unnecessary abstraction.

