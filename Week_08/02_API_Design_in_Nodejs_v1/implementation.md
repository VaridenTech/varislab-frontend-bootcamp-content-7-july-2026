# API Design in Node.js v1 — Thai Course Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Worktree note:** This checkout is shared by concurrent sessions. Create an isolated worktree (superpowers:using-git-worktrees) before executing.

**Goal:** Produce a complete Thai-language HTML course, "API Design in Node.js" (Express 5 + TypeScript, Habit Tracker project), in `Week_08/02_API_Design_in_Nodejs_v1/content/`, following the exact format of `Week_07/01_intro_to_nodejs/content/`.

**Versioning note:** This course is **v1** — the first Thai edition of this content. The "v5" appearing in source URLs below refers to the *original English course's* fifth edition (Frontend Masters "API Design in Node.js v5"); do not carry "v5" into any of our lesson content, titles, or commit messages.

**Architecture:** 60 English video transcripts in `Week_08/02_API_Design_in_Nodejs_v1/transcript/` are the primary source. They are consolidated into 32 Thai lesson pages (static HTML, shared `lesson.css`, an `index.html` table of contents, prev/index/next navigation on every page). Every lesson is written from three sources together: the transcripts (narrative), a required local snapshot of the original course-notes site (structured summaries and clean code), and the original course repo (authoritative code).

**Tech Stack (of the course being taught):** Node.js, Express 5, TypeScript, environment variables (dotenv), Zod validation, Drizzle ORM, PostgreSQL hosted on Neon, JWT + bcrypt authentication, helmet/morgan middleware, Vitest + SuperTest, deployment on Render.

**Spec / Sources:**
1. Transcripts: `Week_08/02_API_Design_in_Nodejs_v1/transcript/*.txt` (60 files, numbered `01`–`60`) — primary source of truth for scope and narrative.
2. Original course notes: https://api-design-with-node-v5.super.site/ — **REQUIRED source.** Task 1 snapshots the whole site (root + 16 chapter pages) into the scratchpad and verifies every page downloaded; if any page cannot be fetched, that is a **blocker** — retry, and if still failing, stop and report to the user. Never proceed on transcripts + repo alone. Each lesson task below names the chapter pages it must consult. (Verified reachable 2026-08-27: HTTP 200, server-rendered HTML, no JS required.)
3. Original course repo: https://github.com/Hendrixer/api-design-node-v5 — authoritative for exact code (clone in Task 1).
4. Format reference: `Week_07/01_intro_to_nodejs/content/` — copy its conventions exactly.

---

## Global Constraints

Every task's requirements implicitly include this section.

**Output location:** All lesson files go in `Week_08/02_API_Design_in_Nodejs_v1/content/`. Do not modify anything under `transcript/`.

**Language rules:**
- Prose is Thai. Technical terms stay in English inside Thai sentences, capitalized as proper nouns, matching Week_07 style: e.g. "Module", "Request", "Middleware", "Route", "Server", "Database", "Deploy". Do not transliterate technical terms into Thai script.
- All code, identifiers, file paths, terminal commands, and error messages stay in English exactly as in the source repo/transcripts. Comments inside code blocks may be Thai.
- Tone: friendly teacher addressing the student as "คุณ"/"เรา", short paragraphs, explains *why* not just *how* — mirror the prose style of `Week_07/01_intro_to_nodejs/content/24_vanilla_server.html`.

**Lesson page template** (every lesson file must follow this skeleton exactly):

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="[one-sentence Thai summary of this lesson]" />
  <title>[Thai lesson title] — API Design in Node.js</title>
  <link rel="stylesheet" href="lesson.css" />
</head>
<body>
  <main>
    <article>
      <h1>[Thai lesson title — same as <title> without the suffix]</h1>
      <p>[intro paragraph]</p>

      <h2>[section]</h2>
      <p>...</p>
      <pre><code>[code — HTML-escaped]</code></pre>
      ...
    </article>
    <nav class="lesson-navigation" aria-label="การนำทางบทเรียน">
      <a class="lesson-navigation__link lesson-navigation__link--previous" href="[prev file]" rel="prev">← บทก่อนหน้า</a>
      <a class="lesson-navigation__link lesson-navigation__link--index" href="index.html">บทเรียนทั้งหมด</a>
      <a class="lesson-navigation__link lesson-navigation__link--next" href="[next file]" rel="next">บทถัดไป →</a>
    </nav>
  </main>
</body>
</html>
```

- Lesson 01 omits the `--previous` link entirely; lesson 32 omits the `--next` link entirely (same pattern as Week_07's `01_course_intro.html` and `25_recap.html`).
- Inside `<pre><code>`, HTML-escape `<` as `&lt;`, `>` as `&gt;`, `&` as `&amp;`. Inline `<code>` for identifiers, commands, and file names mentioned in prose.
- Use `<kbd>` for keyboard keys (e.g. `<kbd>Ctrl</kbd> + <kbd>C</kbd>`).
- `lesson.css` is copied verbatim from `Week_07/01_intro_to_nodejs/content/lesson.css` in Task 1 and never edited afterward. No inline styles, no extra CSS classes beyond those in the template.

**Content rules per lesson:**
- Each lesson consolidates the transcript files listed for it in the canonical lesson table below. Cover every distinct concept the transcripts teach; drop filler (verbal tics, classroom logistics, Q&A tangents that don't teach anything).
- Code shown must be real, runnable code consistent with the cloned repo (Express 5 / TypeScript syntax). When transcript speech and repo code disagree, the repo wins.
- Before writing each lesson, read the course-notes chapter page(s) listed in the task (from the Task 1 snapshot at `$SCRATCHPAD/api-design-notes/`) alongside the transcripts — the notes carry the author's structured summaries and copy-pasteable code that speech-to-text mangles. Do not write a lesson without having read its note chapters.
- Each lesson builds on the previous ones — the running project is a **Habit Tracker API**. Keep file paths and identifier names consistent across all lessons (e.g. if lesson 08 creates `src/routes/userRoutes.ts`, later lessons must reference that exact path).
- Length guide: 40–90 lines of HTML per lesson, comparable to Week_07 lessons.

**Canonical lesson table** (filenames, Thai titles, and source transcripts — use these exact values everywhere: index.html, `<title>`, `<h1>`, nav links):

| # | Filename | Thai title | Source transcripts |
|---|----------|-----------|--------------------|
| 01 | `01_course_intro.html` | แนะนำคอร์สและทัวร์โปรเจกต์ Habit Tracker | 01 |
| 02 | `02_nodejs_servers_overview.html` | ภาพรวมการสร้าง Server ด้วย Node.js | 02 |
| 03 | `03_create_express_app.html` | สร้างแอป Express ด้วย TypeScript | 03 |
| 04 | `04_testing_apis_with_postman.html` | ทดสอบ API ด้วย Postman | 04 |
| 05 | `05_environment_variables.html` | การใช้งาน Environment Variables | 05, 06 |
| 06 | `06_type_safe_env.html` | Environment Variables แบบ Type-safe | 07, 08 |
| 07 | `07_http_verbs_and_rest.html` | HTTP Verbs และการออกแบบ RESTful Routes | 09, 10 |
| 08 | `08_routers_and_subrouters.html` | Router และ Subrouter | 11, 12 |
| 09 | `09_mounting_and_routing_strategies.html` | การ Mount Route และกลยุทธ์ Routing ขั้นสูง | 13, 14 |
| 10 | `10_express_middleware.html` | Middleware ใน Express | 15, 16, 17 |
| 11 | `11_global_middleware.html` | Global Middleware | 18 |
| 12 | `12_validation_middleware.html` | Validation Middleware ด้วย Zod | 19, 20 |
| 13 | `13_async_middleware.html` | ข้อควรระวังกับ Async Middleware | 21 |
| 14 | `14_database_schemas_and_orms.html` | Database Schema และ ORM | 22, 23 |
| 15 | `15_database_migrations.html` | Database Migrations | 24 |
| 16 | `16_create_tables_with_drizzle.html` | สร้างตารางและความสัมพันธ์ด้วย Drizzle ORM | 25, 26 |
| 17 | `17_schema_types_and_best_practices.html` | Export Types และ Schema Best Practices | 27, 28 |
| 18 | `18_hosted_postgresql_with_neon.html` | ใช้ PostgreSQL บนคลาวด์ด้วย Neon | 29, 30 |
| 19 | `19_seeding_the_database.html` | การ Seed ข้อมูลลงฐานข้อมูล | 31, 32 |
| 20 | `20_authentication_strategies.html` | กลยุทธ์การทำ Authentication | 33 |
| 21 | `21_user_registration.html` | ระบบสมัครสมาชิก (Registration) | 34, 35 |
| 22 | `22_working_with_jwt.html` | การสร้างและตรวจสอบ JWT | 36, 37 |
| 23 | `23_user_sign_in.html` | ระบบเข้าสู่ระบบ (Sign In) | 38, 39 |
| 24 | `24_auth_middleware_protected_routes.html` | Auth Middleware และ Protected Routes | 40, 41, 42 |
| 25 | `25_security_best_practices.html` | Security Best Practices | 43 |
| 26 | `26_crud_controllers.html` | เขียน CRUD Controllers สำหรับ Habit | 44, 45, 46, 47 |
| 27 | `27_testing_crud_routes.html` | ทดสอบ CRUD Routes | 48 |
| 28 | `28_error_handling.html` | Error Handling ใน Express | 49, 50 |
| 29 | `29_testing_with_vitest.html` | ตั้งค่าการทดสอบด้วย Vitest | 51, 52, 53, 54 |
| 30 | `30_integration_testing.html` | Integration Testing | 55, 56, 57 |
| 31 | `31_deploying_to_render.html` | Deploy ขึ้น Production ด้วย Render | 58, 59, 60 |
| 32 | `32_recap.html` | สรุปทบทวนเนื้อหาทั้งหมด | (none — synthesize from lessons 01–31) |

Transcript numbers refer to files in `transcript/` by their two-digit prefix (e.g. "05, 06" = `05_environment-variables-overview.txt` + `06_dev-production-variables.txt`).

**Per-lesson verification** (run after writing each lesson file; all from `Week_08/02_API_Design_in_Nodejs_v1/content/`):

```bash
F=<lesson file>
grep -q 'lang="th"' "$F" && grep -q 'lesson.css' "$F" && grep -q 'lesson-navigation' "$F" && echo STRUCTURE-OK
# No unescaped angle brackets inside code blocks (spot-check by eye) and no English-prose paragraphs.
```

**Commit convention:** one commit per task, message prefix `content:` (matching repo history, e.g. `content: add Thai database course`). Never commit the cloned reference repo or anything in the scratchpad.

---

### Task 1: Scaffold — content directory, stylesheet, index, reference repo

**Files:**
- Create: `Week_08/02_API_Design_in_Nodejs_v1/content/lesson.css` (copy)
- Create: `Week_08/02_API_Design_in_Nodejs_v1/content/index.html`
- Clone (outside repo, into the session scratchpad): `https://github.com/Hendrixer/api-design-node-v5`
- Snapshot (into the session scratchpad): all pages of `https://api-design-with-node-v5.super.site/`

**Interfaces:**
- Produces: `content/` directory, `lesson.css`, `index.html` listing all 32 lessons; a local clone of the reference repo at `<scratchpad>/api-design-node-v5`; a complete snapshot of the course notes at `<scratchpad>/api-design-notes/` (17 HTML files) that Tasks 2–10 read from.

- [ ] **Step 1: Create the directory and copy the stylesheet verbatim**

```bash
mkdir -p Week_08/02_API_Design_in_Nodejs_v1/content
cp Week_07/01_intro_to_nodejs/content/lesson.css Week_08/02_API_Design_in_Nodejs_v1/content/lesson.css
```

- [ ] **Step 2: Verify the copy is identical**

Run: `diff Week_07/01_intro_to_nodejs/content/lesson.css Week_08/02_API_Design_in_Nodejs_v1/content/lesson.css && echo IDENTICAL`
Expected: `IDENTICAL`

- [ ] **Step 3: Clone the reference repo into the scratchpad (NOT into this git repo)**

```bash
git clone --depth 1 https://github.com/Hendrixer/api-design-node-v5 "$SCRATCHPAD/api-design-node-v5"
```

If the clone fails, retry once; if it still fails, stop and report the blocker to the user — do not proceed without the reference repo.

- [ ] **Step 4: Snapshot the course-notes site into the scratchpad (REQUIRED — do not skip)**

```bash
NOTES="$SCRATCHPAD/api-design-notes"; mkdir -p "$NOTES"
for p in index 0-intro 1-setting-up-our-api-with-express 2-routing 3-middleware \
  4-db-setup-and-schema 5-setting-up-db-connection-and-seed \
  6-authentication-and-authorization 7-user-signup-with-password \
  8-user-sign-in-with-password 9-lock-down-routes 10-crud-controllers \
  11-error-handling 12-testing-setup-with-vitest 13-integration-testing \
  14-deploying-and-ci-cd 15-further-learning; do
  url="https://api-design-with-node-v5.super.site/${p#index}"
  curl -fsSL "$url" -o "$NOTES/$p.html" || echo "FAILED: $p"
done
```

The pages are server-rendered HTML (no JS needed) — read them directly with Read/grep in later tasks.

- [ ] **Step 5: Verify the snapshot is complete**

Run: `ls "$SCRATCHPAD/api-design-notes"/*.html | wc -l` and check the loop printed no `FAILED:` lines.
Expected: `17`
**If any page failed:** retry the failed URLs once. If any still fail, STOP the whole plan and report the blocker to the user (the notes site is a required source — never fall back to "transcripts + repo alone").

- [ ] **Step 6: Write `index.html`**

Use this structure (same as `Week_07/01_intro_to_nodejs/content/index.html`), with one `<li>` per lesson using the exact filenames and Thai titles from the canonical lesson table — all 32 entries:

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="สารบัญบทเรียน API Design in Node.js ภาษาไทย" />
    <title>บทเรียน API Design in Node.js ทั้งหมด</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <h1>บทเรียน API Design in Node.js ทั้งหมด</h1>
      <ol class="lesson-index">
        <li><a href="01_course_intro.html">แนะนำคอร์สและทัวร์โปรเจกต์ Habit Tracker</a></li>
        <!-- ... one <li> per row of the canonical lesson table, in order, through: -->
        <li><a href="32_recap.html">สรุปทบทวนเนื้อหาทั้งหมด</a></li>
      </ol>
    </main>
  </body>
</html>
```

- [ ] **Step 7: Verify index completeness**

Run: `grep -c '<li>' Week_08/02_API_Design_in_Nodejs_v1/content/index.html`
Expected: `32`

- [ ] **Step 8: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/index.html Week_08/02_API_Design_in_Nodejs_v1/content/lesson.css
git commit -m "content: scaffold API design in Node.js course (index + stylesheet)"
```

---

### Task 2: Lessons 01–04 — Intro, servers, Express app, Postman

**Files:**
- Create: `content/01_course_intro.html`, `content/02_nodejs_servers_overview.html`, `content/03_create_express_app.html`, `content/04_testing_apis_with_postman.html`
- Read: `transcript/01`–`04_*.txt`, reference repo (`package.json`, `src/server.ts`, `tsconfig.json`), notes `0-intro.html` + `1-setting-up-our-api-with-express.html`

**Interfaces:**
- Consumes: scaffold from Task 1.
- Produces: the project setup narrative later lessons build on — project name **Habit Tracker API**, entry file `src/server.ts`, dev command `npm run dev`. Later tasks must reuse these exact names.

- [ ] **Step 1: Read all four transcripts and the repo's setup files** (`package.json` scripts, `tsconfig.json`, entry `src/server.ts` or equivalent — use the repo's actual paths from here on).
- [ ] **Step 2: Write `01_course_intro.html`** — what the course builds (Habit Tracker API), stack overview (Express 5, TypeScript, Drizzle, Neon, JWT, Vitest, Render), what students need installed (Node.js LTS, Postman, a code editor), and a tour of the finished project's folder structure. No `--previous` nav link.
- [ ] **Step 3: Write `02_nodejs_servers_overview.html`** — what a server is in Node terms, the built-in `http` module vs. a framework, why Express; briefly connect back to Week_07's vanilla server lesson (students already built one).
- [ ] **Step 4: Write `03_create_express_app.html`** — project init, installing express + typescript + tooling exactly as the repo's `package.json` does, the first `app.get('/', ...)` route, `npm run dev`, and what each config file does.
- [ ] **Step 5: Write `04_testing_apis_with_postman.html`** — why a REST client, making GET/POST requests to the dev server, inspecting status codes/headers/body, saving a collection.
- [ ] **Step 6: Verify all four files** — run the per-lesson verification block from Global Constraints on each file; check nav chain (01→02→03→04→05 forward links, 04←03←02←01 back links, 01 has no previous).
- [ ] **Step 7: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/0[1-4]_*.html
git commit -m "content: API design lessons 01-04 (intro, servers, express, postman)"
```

---

### Task 3: Lessons 05–06 — Environment variables

**Files:**
- Create: `content/05_environment_variables.html`, `content/06_type_safe_env.html`
- Read: `transcript/05`–`08_*.txt`, reference repo (`src/env.ts` or equivalent env-handling module, `.env.example`), notes `1-setting-up-our-api-with-express.html` (env-variable sections)

**Interfaces:**
- Consumes: `src/server.ts`, `npm run dev` from Task 2.
- Produces: the env module path and exported name used by the repo (e.g. a Zod-validated `env` object) — Tasks 6, 7, 10 reference it for database URL and JWT secret.

- [ ] **Step 1: Read transcripts 05–08 and the repo's env module.**
- [ ] **Step 2: Write `05_environment_variables.html`** — what env vars are and why secrets never go in code, `.env` files + dotenv loading, `.gitignore`-ing `.env`, separating dev vs. production values (NODE_ENV), `.env.example` convention.
- [ ] **Step 3: Write `06_type_safe_env.html`** — the problem with raw `process.env` (everything `string | undefined`), validating env with Zod at startup exactly as the repo does, failing fast with clear messages, and the advanced techniques from transcript 08.
- [ ] **Step 4: Verify both files** — per-lesson verification block; nav chain 04↔05↔06↔07.
- [ ] **Step 5: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/05_*.html Week_08/02_API_Design_in_Nodejs_v1/content/06_*.html
git commit -m "content: API design lessons 05-06 (environment variables)"
```

---

### Task 4: Lessons 07–09 — REST design and routing

**Files:**
- Create: `content/07_http_verbs_and_rest.html`, `content/08_routers_and_subrouters.html`, `content/09_mounting_and_routing_strategies.html`
- Read: `transcript/09`–`14_*.txt`, reference repo (`src/routes/`), notes `2-routing.html`

**Interfaces:**
- Consumes: Express app from Task 2.
- Produces: the route map of the Habit Tracker API (auth routes, user routes, habit routes with their URL prefixes) and router file paths — Tasks 7, 8 mount controllers onto these exact routes.

- [ ] **Step 1: Read transcripts 09–14 and the repo's route files.**
- [ ] **Step 2: Write `07_http_verbs_and_rest.html`** — GET/POST/PUT/DELETE semantics, RESTful resource naming, route patterns and params, the `req`/`res` objects (body, params, query, status, json).
- [ ] **Step 3: Write `08_routers_and_subrouters.html`** — `express.Router()`, splitting routes by resource into files matching the repo layout, defining the user routes from transcript 12.
- [ ] **Step 4: Write `09_mounting_and_routing_strategies.html`** — `app.use('/api/...', router)` mounting, route order, the advanced strategies from transcript 14 (e.g. wildcard/param patterns as taught).
- [ ] **Step 5: Verify all three files** — per-lesson verification block; nav chain 06↔07↔08↔09↔10.
- [ ] **Step 6: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/0[7-9]_*.html
git commit -m "content: API design lessons 07-09 (REST routes and routers)"
```

---

### Task 5: Lessons 10–13 — Middleware and validation

**Files:**
- Create: `content/10_express_middleware.html`, `content/11_global_middleware.html`, `content/12_validation_middleware.html`, `content/13_async_middleware.html`
- Read: `transcript/15`–`21_*.txt`, reference repo (`src/middleware/`), notes `3-middleware.html`

**Interfaces:**
- Consumes: routers from Task 4.
- Produces: validation middleware helper (Zod-based, repo's exact name/signature) reused by Tasks 7–8; global middleware stack (helmet, morgan, cors, `express.json()`).

- [ ] **Step 1: Read transcripts 15–21 and the repo's middleware files.**
- [ ] **Step 2: Write `10_express_middleware.html`** — what middleware is (functions in the request pipeline), the `(req, res, next)` signature, what calling `next()` does vs. ending the response, ordering.
- [ ] **Step 3: Write `11_global_middleware.html`** — `app.use()` for every request: `express.json()`, helmet, morgan, cors — mirroring the repo's setup and explaining what each protects/provides.
- [ ] **Step 4: Write `12_validation_middleware.html`** — validating body/params/query with Zod via the repo's validator middleware, returning 400 with useful error shapes.
- [ ] **Step 5: Write `13_async_middleware.html`** — async handler pitfalls from transcript 21: unhandled promise rejections, how Express 5 changes async error propagation vs. Express 4, patterns to avoid.
- [ ] **Step 6: Verify all four files** — per-lesson verification block; nav chain 09↔10↔11↔12↔13↔14.
- [ ] **Step 7: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/1[0-3]_*.html
git commit -m "content: API design lessons 10-13 (middleware and validation)"
```

---

### Task 6: Lessons 14–19 — Database with Drizzle and Neon

**Files:**
- Create: `content/14_database_schemas_and_orms.html`, `content/15_database_migrations.html`, `content/16_create_tables_with_drizzle.html`, `content/17_schema_types_and_best_practices.html`, `content/18_hosted_postgresql_with_neon.html`, `content/19_seeding_the_database.html`
- Read: `transcript/22`–`32_*.txt`, reference repo (`src/db/` — schema, connection, seed script; `drizzle.config.ts`; db-related `package.json` scripts), notes `4-db-setup-and-schema.html` + `5-setting-up-db-connection-and-seed.html`

**Interfaces:**
- Consumes: type-safe env from Task 3 (DATABASE_URL).
- Produces: the `users` and `habits` (and any join/related) table schemas with exact column names, the exported inferred types, and db npm scripts (`db:generate`, `db:migrate`, `db:seed` or repo's actual names) — Tasks 7–8 query these tables; Task 10 migrates them in production.

- [ ] **Step 1: Read transcripts 22–32 and the repo's entire `src/db/` + drizzle config.**
- [ ] **Step 2: Write `14_database_schemas_and_orms.html`** — what a schema is, raw SQL vs. query builders vs. ORMs, why this course picks Drizzle; connect back to the Week_08 database course students just finished.
- [ ] **Step 3: Write `15_database_migrations.html`** — why migrations exist, generate-vs-push workflows, how drizzle-kit tracks schema changes.
- [ ] **Step 4: Write `16_create_tables_with_drizzle.html`** — define the users and habits tables exactly as the repo does (column types, defaults, timestamps), then relationships/foreign keys from transcript 26.
- [ ] **Step 5: Write `17_schema_types_and_best_practices.html`** — exporting inferred TypeScript types from schemas, and the best practices from transcript 28.
- [ ] **Step 6: Write `18_hosted_postgresql_with_neon.html`** — creating a free Neon project, getting the connection string into `.env`, the db npm scripts from transcript 30, running the first migration.
- [ ] **Step 7: Write `19_seeding_the_database.html`** — the seed script as in the repo, running it, verifying data landed; fold in any genuinely instructive points from the Q&A transcript 32 and drop the rest.
- [ ] **Step 8: Verify all six files** — per-lesson verification block; nav chain 13↔14↔…↔19↔20.
- [ ] **Step 9: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/1[4-9]_*.html
git commit -m "content: API design lessons 14-19 (drizzle, neon, migrations, seeding)"
```

---

### Task 7: Lessons 20–25 — Authentication and security

**Files:**
- Create: `content/20_authentication_strategies.html`, `content/21_user_registration.html`, `content/22_working_with_jwt.html`, `content/23_user_sign_in.html`, `content/24_auth_middleware_protected_routes.html`, `content/25_security_best_practices.html`
- Read: `transcript/33`–`43_*.txt`, reference repo (auth controllers, JWT utils, auth middleware), notes `6-authentication-and-authorization.html` + `7-user-signup-with-password.html` + `8-user-sign-in-with-password.html` + `9-lock-down-routes.html`

**Interfaces:**
- Consumes: users table + types (Task 6), validation middleware (Task 5), auth routes (Task 4), JWT_SECRET env (Task 3).
- Produces: register/sign-in controllers, JWT create/verify utilities, and auth middleware with the repo's exact names — Task 8 protects habit routes with this middleware and reads the authenticated user from the request.

- [ ] **Step 1: Read transcripts 33–43 and the repo's auth code end to end.**
- [ ] **Step 2: Write `20_authentication_strategies.html`** — sessions vs. tokens vs. OAuth at a high level, why this API uses stateless JWT, where hashing fits (bcrypt), authentication vs. authorization.
- [ ] **Step 3: Write `21_user_registration.html`** — the registration flow (validate → hash password with bcrypt → insert user → issue token), then the controller code from transcript 35 exactly as the repo has it.
- [ ] **Step 4: Write `22_working_with_jwt.html`** — JWT anatomy (header/payload/signature), creating a token as in transcript 36, testing it in Postman per transcript 37, why the secret must stay server-side.
- [ ] **Step 5: Write `23_user_sign_in.html`** — sign-in flow (find user → `bcrypt.compare` → issue token), controller from transcript 39, correct 401 responses that don't leak which field was wrong.
- [ ] **Step 6: Write `24_auth_middleware_protected_routes.html`** — the verify utility (transcript 40), the middleware that reads the `Authorization: Bearer` header and attaches the user (41), applying it to protect routes (42).
- [ ] **Step 7: Write `25_security_best_practices.html`** — the practices from transcript 43 (secret management, hashing rounds, token expiry, HTTPS, rate limiting as taught).
- [ ] **Step 8: Verify all six files** — per-lesson verification block; nav chain 19↔20↔…↔25↔26.
- [ ] **Step 9: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/2[0-5]_*.html
git commit -m "content: API design lessons 20-25 (authentication and security)"
```

---

### Task 8: Lessons 26–28 — CRUD controllers and error handling

**Files:**
- Create: `content/26_crud_controllers.html`, `content/27_testing_crud_routes.html`, `content/28_error_handling.html`
- Read: `transcript/44`–`50_*.txt`, reference repo (habit controllers, error-handler middleware), notes `10-crud-controllers.html` + `11-error-handling.html`

**Interfaces:**
- Consumes: habits table (Task 6), auth middleware + authenticated user on request (Task 7), habit routes (Task 4).
- Produces: complete habit CRUD controllers scoped to the authenticated user; the global error-handler middleware — Task 9's tests exercise these endpoints.

- [ ] **Step 1: Read transcripts 44–50 and the repo's habit controllers + error handler.**
- [ ] **Step 2: Write `26_crud_controllers.html`** — quick RESTful review (transcript 44), then create/get-all/update habit controllers (45–47) exactly as in the repo, always filtering by the authenticated user's id.
- [ ] **Step 3: Write `27_testing_crud_routes.html`** — exercising every CRUD route in Postman with a Bearer token, expected responses, common mistakes (missing token, wrong id).
- [ ] **Step 4: Write `28_error_handling.html`** — how Express 5 routes errors (sync throw and rejected promises) to the error handler, then the 4-argument error-handler middleware from transcript 50 as in the repo, consistent error response shape, registering it last.
- [ ] **Step 5: Verify all three files** — per-lesson verification block; nav chain 25↔26↔27↔28↔29.
- [ ] **Step 6: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/2[6-8]_*.html
git commit -m "content: API design lessons 26-28 (CRUD controllers and error handling)"
```

---

### Task 9: Lessons 29–30 — Testing with Vitest

**Files:**
- Create: `content/29_testing_with_vitest.html`, `content/30_integration_testing.html`
- Read: `transcript/51`–`57_*.txt`, reference repo (vitest config, test setup/helpers, auth tests), notes `12-testing-setup-with-vitest.html` + `13-integration-testing.html`

**Interfaces:**
- Consumes: the full app + auth endpoints (Tasks 2–8).
- Produces: nothing later tasks depend on (deployment is independent of tests).

- [ ] **Step 1: Read transcripts 51–57 and the repo's test config, setup, helpers, and auth tests.**
- [ ] **Step 2: Write `29_testing_with_vitest.html`** — why Vitest (contrast with Jest from Week_07), config as in the repo, global test setup (transcript 52), helper functions (53), and the smoke test verifying the setup (54).
- [ ] **Step 3: Write `30_integration_testing.html`** — unit vs. integration testing (transcript 55), SuperTest requests against the app, then the registration test (56) and login test (57) as in the repo.
- [ ] **Step 4: Verify both files** — per-lesson verification block; nav chain 28↔29↔30↔31.
- [ ] **Step 5: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/29_*.html Week_08/02_API_Design_in_Nodejs_v1/content/30_*.html
git commit -m "content: API design lessons 29-30 (vitest and integration testing)"
```

---

### Task 10: Lessons 31–32 — Deployment and recap

**Files:**
- Create: `content/31_deploying_to_render.html`, `content/32_recap.html`
- Read: `transcript/58`–`60_*.txt`, notes `14-deploying-and-ci-cd.html` + `15-further-learning.html`; lessons 01–30 (for the recap)

**Interfaces:**
- Consumes: production env vars concept (Task 3), migrations (Task 6), the finished app.
- Produces: course completion — lesson 32 has no `--next` nav link.

- [ ] **Step 1: Read transcripts 58–60.**
- [ ] **Step 2: Write `31_deploying_to_render.html`** — production database setup on Neon (58), production env vars and build/start scripts (59), creating a Render web service connected to GitHub, setting env vars in the dashboard, deploying and hitting the live URL (60).
- [ ] **Step 3: Write `32_recap.html`** — synthesize a Thai recap of the whole course arc (server → routes → middleware → validation → database → auth → CRUD → errors → tests → deploy), what students can now build, and suggested next steps. Model it on `Week_07/01_intro_to_nodejs/content/25_recap.html`. Omit the `--next` nav link.
- [ ] **Step 4: Verify both files** — per-lesson verification block; nav chain 30↔31↔32; confirm 32 has no `--next` link.
- [ ] **Step 5: Commit**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/31_*.html Week_08/02_API_Design_in_Nodejs_v1/content/32_*.html
git commit -m "content: API design lessons 31-32 (deployment and recap)"
```

---

### Task 11: Whole-course verification pass

**Files:**
- Modify: any lesson file that fails a check
- Read: all of `Week_08/02_API_Design_in_Nodejs_v1/content/`

**Interfaces:**
- Consumes: all 32 lessons + index from Tasks 1–10.
- Produces: the final, verified course.

- [ ] **Step 1: Structural checks over every file**

Run from `Week_08/02_API_Design_in_Nodejs_v1/content/`:

```bash
ls [0-9]*.html | wc -l                     # expect 32 (index.html and lesson.css don't match the glob)
grep -L 'lang="th"' *.html                 # expect empty output
grep -L 'lesson.css' *.html                # expect empty output
grep -L 'lesson-navigation' [0-9]*.html    # expect empty output
```

- [ ] **Step 2: Link integrity — every href resolves to an existing file**

```bash
grep -ho 'href="[^"]*"' *.html | sed 's/href="//;s/"//' | sort -u | while read f; do [ -f "$f" ] || echo "BROKEN: $f"; done
```

Expected: no `BROKEN:` lines.

- [ ] **Step 3: Nav chain check** — for each lesson N (01–31), confirm its `--next` points to lesson N+1's exact filename and lesson N+1's `--previous` points back to N; confirm 01 has no `--previous` and 32 has no `--next`. Fix any mismatch.

- [ ] **Step 4: Title consistency** — for each lesson, `<h1>`, `<title>` prefix, and its `index.html` entry must all carry the identical Thai title from the canonical lesson table. Fix any drift.

- [ ] **Step 5: Content spot-review** — open lessons 03, 16, 24, 31 in a browser (or render check) and read fully: Thai prose quality, code escaped correctly, code consistent with the reference repo, project file paths consistent across lessons. Fix what's found.

- [ ] **Step 6: Confirm transcript coverage** — walk the canonical lesson table and confirm every transcript 01–60 is claimed by exactly one lesson and its key concepts appear in that lesson.

- [ ] **Step 7: Commit fixes (if any)**

```bash
git add Week_08/02_API_Design_in_Nodejs_v1/content/
git commit -m "content: fix verification-pass defects in API design course"
```
