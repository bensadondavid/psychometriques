<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project instructions

## Source of truth and collaboration

- Read README.md before changing the product model, routes, database, authentication, imports or payments.
- Keep README.md synchronized with decisions. Mark proposals and unknowns clearly; do not present them as approved features.
- The project owner acts as architect. Implement decisions already made, give a reasoned technical opinion, and surface product choices that genuinely remain open.
- Inspect the working tree before editing and preserve unrelated or unfinished changes.
- Use pnpm and the existing project scripts. Do not add another package manager lockfile.

## Product

- The site prepares Psychométriques, AMIRNET and YAELNET. Psychométriques is central, and all three must have a complete usable path at launch.
- Oulpan is a separate project. Do not add it to this site's new navigation, content model or commercial offers.
- The public path is accueil → examen → short presentation → fixed curated discovery series → result and explanations → optional account creation to save and continue.
- Discovery is available without an account. Show the result and explanations before asking the visitor to register.
- Organize training by exam, subject and theme. Start with prepared series; free composition of a series is deferred.
- Provide learning mode with immediate explanations and exam mode with a timer and explanations at the end. Preserve interrupted attempts and make errors reviewable.
- Psychométriques lessons require an active Psychométriques subscription, except for a current, unbanned admin, who may access all lessons including drafts. They can be suggested after difficulties and are not required before exercises. Access rules for lessons in the other exams remain undecided. The owner is creating lesson content in parallel; do not invent it.
- The question banks currently live in another ChatGPT project and have not yet been audited in this repository. Do not infer their counts, quality, completeness or publication state.
- The Psychométriques lesson access condition is decided; payment provider, free limits, prices and packaging remain undecided. Do not revive old prices or imply checkout is active.

## Content and data

- Keep stable identifiers for imported questions and preserve source provenance.
- Reuse questions across prepared series through relations; do not duplicate questions to order them in a series.
- Keep content publication explicit and exclude unreviewed questions and lessons from public flows.
- Make CSV imports validate before writing, report actionable row errors, run transactionally and remain idempotent.
- Do not equate structural CSV validation with editorial, language or pedagogical review.
- Apply RTL direction to Hebrew content blocks, not the whole French interface.
- Date and cite official exam information that can change.
- Never rewrite or delete a migration that may have been applied. Before a schema change, verify the target database and migration state. Follow the Prisma migration and client generation workflow if Prisma remains in use.

## Architecture

- The stack and route structure are under review. Avoid broad moves or provider changes until the target architecture and the reusable parts of the current code are established.
- The current model requiring every exercise to belong to a lesson does not fit autonomous discovery and training series; redesign that relationship before building the learner flow.
- Keep authentication and authorization checks server-side at every protected read and mutation. Technical roles and paid access remain separate concepts.
- Do not grant access from a payment redirect. If payments are later implemented, verify provider confirmations and make webhooks idempotent.
- If implementing in the existing Next.js application, follow the installed Next.js documentation and preserve one root layout. Prefer server reads and restrict client code to interactive boundaries.

## Verification

- Check changes in proportion to their impact. For implementation, run relevant tests, TypeScript, ESLint, Prisma checks and build checks.
- Distinguish local code validation from database state, deployment and actual provider delivery.
- Do not mark a phase complete while errors caused by that phase remain.
