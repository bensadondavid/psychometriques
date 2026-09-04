<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project instructions

## Source of truth

- Read `README.md` before changing the product model, database schema, routes,
  authentication, access rules, imports or payments.
- Keep `README.md` synchronized when a product or architecture decision changes.
- Keep the detailed roadmap in `README.md`; keep this file limited to durable
  implementation rules.
- Inspect the current code and working tree before editing. Preserve unrelated
  or unfinished user changes.

## Product scope

- The platform contains four programs: Psychométriques, AMIR, YAEL and Oulpan.
- Psychométriques is the only program enabled initially. The other programs
  must remain visible as `COMING_SOON` until their content is ready.
- Oulpan levels Aleph through Vav are database records, not enum values.
- Use the hierarchy `Program -> Course -> Lesson -> Exercise`.
- Questions belong to a reusable question bank. Relate and order them inside an
  exercise through a join model; do not duplicate questions per exercise.
- Do not hard-code invented lessons, questions, quantities or commercial claims.
  Empty content must use deliberate empty states.
- Use `programme/parcours` for pedagogy and `offre` for commerce. Do not use
  `plan` for both concepts.

## Package manager and commands

- Use `pnpm`; do not introduce npm, Yarn or Bun lockfiles.
- Use the existing project scripts when available.
- After a Prisma schema change, run these commands in this order:

```bash
pnpm prisma format
pnpm prisma migrate dev
pnpm prisma generate
```

- Give migrations descriptive names when creating them.
- Review the generated migration before relying on it.
- Never rewrite or delete a migration that may already have been applied.
- Do not use `prisma db push` as a substitute for the migration workflow.

## Next.js architecture

- Use App Router conventions from the installed Next.js documentation.
- Organize pages by layout intent: `(marketing)` for the public catalogue,
  method, resources and conversion, `(auth)` for authentication and `(app)/account` for the protected
  product. Route group names must not appear in URLs.
- Prefer Server Components for initial reads.
- Prefer Server Actions for mutations initiated by the internal application UI.
- Use Route Handlers for webhooks, authentication endpoints, CSV uploads and
  other external integrations.
- Keep client components restricted to genuinely interactive UI boundaries.
- Treat proxy checks as routing optimizations only. Perform the definitive
  authentication and authorization check in the server action, route handler,
  layout or data-access function that accesses protected data.
- Keep authenticated user pages under `/account` and administration under
  `/account/admin`. Do not create a second independent `/admin` convention.
- Keep one top-level root layout. Use nested layouts for the three experiences
  instead of creating independent root layouts and full-page reloads.

## Database and domain model

- Keep Prisma relations, indexes, uniqueness constraints and deletion behavior
  explicit.
- Use stable slugs for public routing and stable external identifiers for
  imported questions.
- Use explicit content lifecycle states rather than inferring publication from
  nullable fields.
- Keep uncertain future features out of the first migration. Add billing,
  progress, organizations and quotas only in the phase that implements them.
- Regenerate the Prisma client after schema changes; do not manually edit files
  generated in `lib/database/prisma`.

## Authentication and authorization

- Better Auth and `prisma/schema.prisma` must remain coordinated.
- Authentication roles remain technical: `user` and `admin`.
- Do not add commercial or pedagogical roles such as `specialuser`, `customer`
  or `student`.
- Paid, complimentary, organizational and administrator-granted access must use
  entitlements independent of `User.role`.
- Perform admin checks on the server for every administrative read and mutation.
- Preserve `/sign-in` as the canonical login page and do not reintroduce
  `/login` links.
- Keep Turnstile optional in local environments and active only when both the
  site key and secret are configured.
- Never expose auth secrets, Turnstile secrets or provider credentials to the
  browser.

## Question imports

- CSV imports must support a validation/dry-run step before database writes.
- Report errors with their source row numbers and actionable messages.
- Make imports transactional so an invalid import cannot create partial data.
- Make imports idempotent using a stable external question identifier.
- Validate program, course, question type, answers and correct-answer references
  on the server even if the client already validates them.
- Keep importing questions separate from assigning them to exercises unless the
  documented CSV contract explicitly supports both operations.

## Payments and access

- Keep the internal offer, order, subscription, payment and entitlement models
  independent from Stripe and Grow.
- Stripe and Grow confirm money movement; entitlements determine application
  access.
- Never grant access from a success redirect. Grant or extend it only after a
  verified server-side confirmation.
- Verify webhook authenticity and make every webhook handler idempotent.
- Store provider identifiers and payment state, never card details.
- Define prices explicitly per provider and currency; do not silently convert
  EUR and ILS prices at checkout.
- Treat Bit as a one-time/prepaid payment unless its verified provider
  capabilities change. Do not model Bit as an automatically renewing payment.
- Do not implement question quotas until the product rule is explicitly chosen.

## Organizations

- Represent a partner school or preparatory institution as an organization, not
  as a shared user account.
- Organization-funded students keep individual user accounts and receive
  organization-sourced entitlements.
- Do not expose student progress to an organization until the exact permissions
  and privacy rules are documented.

## Interface and content

- Preserve the burgundy and ivory palette, strong editorial typography and
  restrained institutional tone while using contemporary, immersive layouts.
- Avoid generic generated-SaaS patterns. Motion and 3D must explain the
  learning experience rather than decorate the page.
- Treat the marketing homepage as a continuous journey. Keep the authenticated
  account calmer and more functional than the public experience.
- Do not publish filler pages. Hide or redirect a public route until it has
  specific, useful content and a clear user purpose.
- Reuse existing design tokens and components before adding new variants.
- Keep the interface usable in French while allowing English and Hebrew lesson
  content.
- Apply RTL direction to Hebrew content boundaries rather than the entire UI.
- Maintain accessible labels, keyboard interaction, focus states and sufficient
  contrast.
- Do not display unverified claims such as `10 000+ questions`.
- Do not turn the marketing site into an orientation service. Visitors should
  be able to access the preparation they already want directly.
- Keep public exam resources separate from commercial formation pages:
  `/examens/[examSlug]` explains an external exam, while
  `/formations/[programSlug]` presents the platform's preparation.
- Oulpan is not placed under `/examens`; its public levels live under `/oulpan`.
- Keep Oulpan in the shared catalogue and account while giving the language
  offer a subtly distinct presentation.
- Use one canonical brand domain. Any descriptive secondary domains must use
  permanent redirects to the matching canonical formation, never duplicate the
  site or redirect every domain indiscriminately to the homepage.
- Do not duplicate full exam guides inside `/account`. Show a contextual summary
  and link back to the canonical public guide.
- Date and cite public information that can change, including registration,
  official prices, schedules, exam format and scoring rules.

## Verification

- Validate work in proportion to the change. For implementation work, run the
  relevant Prisma checks, tests, TypeScript, ESLint and build checks.
- Do not declare a phase complete while known errors caused by that phase remain.
- The first milestone and its completion criteria are defined in `README.md`.
