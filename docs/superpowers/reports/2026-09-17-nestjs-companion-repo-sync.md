# NestJS Companion Repository Sync Report

**Date:** 2026-09-17; prefix remediation verified 2026-09-18.
**Remote:** `git@github-variden:VaridenTech/varislab-intro-to-nestjs-v1.git`
**Source of truth:** `Week_09/01_nestjs_basic/content`

## Pre-sync snapshot

- Remote branch count: 69.
- Frozen snapshot: `/private/tmp/nestjs-companion-sync-20260917/pre-sync-refs.txt`.
- All 69 `origin/*` source refs remain identical to this snapshot. No remote mutation has occurred.

## Branch audit

Rows identify the corrected **local** target branches in the isolated clone, not the old remote-tracking refs. All 32 source lessons were audited; all 26 distinct corrected target trees were built and linted.

| Branch | Lesson title | Verified local target commit | Content check | Build/test |
| --- | --- | --- | --- | --- |
| lesson-01 | ติดตั้ง NestJS CLI | `c61e5f46b2ea88f6c86a47665b7a1968d0b28897` | PASS — Nest 12 ESM scaffold; project name corrected to iluvcoffee. | `build=0; lint=0`; `npm ci=0` |
| lesson-02 | มีอะไรอยู่ในแอป NestJS | `c61e5f46b2ea88f6c86a47665b7a1968d0b28897` | PASS — Scaffold files, AppModule, ESM imports and Vitest match. | `build=0; lint=0` reused from 01 (identical tree) |
| lesson-03 | สิ่งที่เราจะสร้างกันในคอร์สนี้ | `c61e5f46b2ea88f6c86a47665b7a1968d0b28897` | PASS — Planning only; no application delta. | `build=0; lint=0` reused from 01 (identical tree) |
| lesson-04 | เตรียมเครื่องมือ: ติดตั้ง Insomnia | `c61e5f46b2ea88f6c86a47665b7a1968d0b28897` | PASS — Insomnia setup; no source delta. | `build=0; lint=0` reused from 01 (identical tree) |
| lesson-05 | รัน NestJS ในโหมด Development | `c61e5f46b2ea88f6c86a47665b7a1968d0b28897` | PASS — Development scripts match; greeting edit is an unspecified experiment. | `build=0; lint=0` reused from 01 (identical tree) |
| lesson-06 | สร้าง Controller พื้นฐาน | `968d0da9fee0212b26709e5030d30b19f018915b` | PASS — Controller, GET /coffees and module registration match. | `build=0; lint=0` |
| lesson-07 | ใช้ Route Parameters | `bb31c0f82d53ec602f88e659b72d2b4dd8e0eb7f` | PASS — GET /coffees/:id and string parameter match. | `build=0; lint=0` |
| lesson-08 | จัดการ Request Body (Payload) | `d01b10ef7e5d86f368b6cc93383bd721f36828e7` | PASS — POST /coffees echoes JSON body as instructed. | `build=0; lint=0` |
| lesson-09 | กำหนด Response Status Codes | `d01b10ef7e5d86f368b6cc93383bd721f36828e7` | PASS — No delta matches removal of temporary 410 decorator. | `build=0; lint=0` reused from 08 (identical tree) |
| lesson-10 | จัดการคำขอ Update และ Delete | `6fb310de02b4caa3bcf6175687ce87ebf587cbae` | PASS — PATCH/DELETE handlers and responses match. | `build=0; lint=0`; lint warnings only |
| lesson-11 | ทำ Pagination ด้วย Query Parameters | `8fe9c58c4e103e9d5cfda903fe91eca2e2b568a7` | PASS — Query limit/offset handling matches. | `build=0; lint=0`; lint warnings only |
| lesson-12 | สร้าง Service พื้นฐาน | `0a4a0a4d4c05eef60f1abc8fbdf84dabc11099c6` | PASS — In-memory entity/service, delegation and DI match. | `build=0; lint=0`; lint warnings only |
| lesson-13 | ส่ง Error Message ที่เป็นมิตรกับผู้ใช้ | `4628658db060bb6176bc5fc5896387555811d774` | PASS — NotFoundException and response message match. | `build=0; lint=0`; lint warnings only |
| lesson-14 | ห่อ Business Domain ไว้ใน Modules | `ae09cc8ff3138010176847219eeec9e321d4a760` | PASS — CoffeesModule extraction and root import match. | `build=0; lint=0`; lint warnings only |
| lesson-15 | รู้จัก Data Transfer Objects (DTO) | `121ddd0eaca79ac9697d699c4a1879be388120cc` | PASS — DTOs, readonly/optional rules and service-created id match. | `build=0; lint=0`; lint warnings only |
| lesson-16 | Validate ข้อมูลขาเข้าด้วย DTO | `4bb164329cc066e85ef5337793448207914553a8` | PASS — ValidationPipe, IsString, PartialType and dependencies match. | `build=0; lint=0`; `npm ci=0`; lint warnings only |
| lesson-17 | ป้องกันข้อมูลคำขอที่ไม่พึงประสงค์ | `219ad66e1ae5e73e0e87dbefbd7c83e43c7bcbb9` | PASS — Whitelist and forbidNonWhitelisted match. | `build=0; lint=0`; lint warnings only |
| lesson-18 | แปลง Payload เป็น DTO Instance อัตโนมัติ | `8dd9cc1de97f80da852068630becec80e1d5e700` | PASS — Global transform plus numeric findOne parameter and string service-id conversion; no diagnostic logging. | `build=0; lint=0`; numeric-route runtime check=0; lint warnings only |
| lesson-19 | ก่อนเริ่มบทฐานข้อมูล: เก็บความคืบหน้าไว้ใน Branch | `1c7ccd80bf274e1eeaa4529f7195790b71be362f` | PASS — Application checkpoint retained; exact 58-lesson README introduction/map and original Nest tail. | `build=0; lint=0`; numeric-route runtime check=0; lint warnings only |
| lesson-20 | รัน PostgreSQL ด้วย Docker Compose | `569960f9c3190fb29f9074fb9efdb2faf26c1e3e` | PASS — Compose service, image, port and password match. | `build=0; lint=0`; numeric-route runtime check=0; lint warnings only |
| lesson-21 | ดูฐานข้อมูล Postgres ด้วย GUI | `569960f9c3190fb29f9074fb9efdb2faf26c1e3e` | PASS — GUI only; unchanged application/Compose tree. | `build=0; lint=0` reused from 20 (identical tree); numeric-route runtime check=0; lint warnings only |
| lesson-22 | รู้จัก Prisma และ PrismaService | `68635ab083310f80acb0943ff50cefaf95c841ab` | PASS — Prisma setup matches; CLI moved to devDependencies with regenerated lock classifications. | `build=0; lint=0`; `npm ci=0`; `generate=0`; numeric-route runtime check=0; lint warnings only |
| lesson-23 | สร้าง Prisma Model | `fbdf6a2a697b5ce70a091c91426fc8f0a64434b7` | PASS — Coffee schema, scalar flavors and retained entity match. | `build=0; lint=0`; `generate=0`; numeric-route runtime check=0; lint warnings only |
| lesson-24 | ใช้ Prisma Client เข้าถึงฐานข้อมูล | `6a24d5634febfaf7c654526eb3851819c00dbfec` | PASS — Prisma CRUD and 404 checks; string route id restored as explicitly described in HTML. | `build=0; lint=0`; `generate=0`; lint warnings only |
| lesson-25 | สร้าง Relation ระหว่างสอง Models | `3d10f7e7a31d78275f04959b6e4f685577dc3d32` | PASS — Flavor relation, unique name and temporarily commented writes match. | `build=0; lint=0`; `generate=0`; lint warnings only |
| lesson-26 | ดึง Models พร้อม Relations | `b01716ac507b462e058f12c456fa3ac47f1515ad` | PASS — Read includes and initial connectOrCreate writes match. | `build=0; lint=0`; `generate=0`; lint warnings only |
| lesson-27 | ใช้ Nested Writes สร้างและอัปเดตพร้อม Relation | `7ebf9da84dbcd9da3a065543db86b16ff2da944f` | PASS — PATCH relation replacement and write-response includes match. | `build=0; lint=0`; `generate=0`; lint warnings only |
| lesson-28 | เพิ่ม Pagination ที่ชั้นฐานข้อมูล | `72b577efa4ad707d01c6621ef01bd37453a3225c` | PASS — DTO validation, transformation and ordered skip/take match. | `build=0; lint=0`; `generate=0` |
| lesson-29 | ใช้ Transactions | `0cfb7d0817a8c8eeb58cbb91e6079abfd65c378a` | PASS — Event, recommendations, transaction callback and route match. | `build=0; lint=0`; `generate=0` |
| lesson-30 | เพิ่ม Indexes ให้ Models | `23b371b0128cf74394e3565d6c28c0710735c0c9` | PASS — Event name and name/type indexes match. | `build=0; lint=0`; `generate=0` |
| lesson-31 | ตั้งค่า Migrations ด้วย Prisma Migrate | `e10df075d8bfb89d1f35b4de7d30d803e08523a4` | PASS — Initial schema plus forward/reverse column-renaming migrations match. | `build=0; lint=0`; `generate=0` |
| lesson-32 | ควบคุม Module Encapsulation | `130aeeb54b3fa2cb951be299fb9ddaec35be2772` | PASS — Module encapsulation matches; verified local base for Task 3. | `build=0; lint=0`; `generate=0` |
| lesson-33 | ตั้งค่า ConfigModule และ Environment Files | `98231e925b901433e64e3ae90d808a6fa21941b4` | PASS — Plain `ConfigModule.forRoot()`, `dotenv/config` import removed from main.ts, `.gitignore` excludes `.env`; no namespace/`coffees.config.ts`. | `build=0; lint=0`; `generate=0`; `npm ci=0` |
| lesson-34 | ตรวจ Environment Variables ด้วย Schema | `65bfff13c30265a46d95186e23155bd563219999` | PASS — `ConfigModule.forRoot({ validationSchema: Joi.object({...}) })` matches; `joi` dependency present; no namespace/`coffees.config.ts`. | `build=0; lint=0`; `generate=0`; `npm ci=0` |
| lesson-35 | ใช้ ConfigService และจัดโครงสร้าง Configuration | `744248d31dec30fed225efe051f9b54749479862` | PASS — `app.config.ts` loaded via `load: [appConfig]`; `ConfigService` injected and reads typed `database.url`/`port` with `console.log` removed, an intentional deviation from old `origin/lesson-37` per ruling; no namespace/`coffees.config.ts`. | `build=0; lint=0`; `generate=0`; `npm ci=0`; lint warnings only (unused `databaseUrl`/`port`, matches HTML) |

## Repository-wide checks

### Corrected lessons 01–32: PASS

The initial audit found stale README numbering, project-name metadata, Prisma dependency classification, and the missing lesson-18 primitive-conversion state. The recorded ruling authorized rebuilding the prefix locally. All four findings are resolved; Task 3 and Task 6 must consume the corrected local refs below.

- `lesson-32`: **130aeeb54b3fa2cb951be299fb9ddaec35be2772**; tree **19d4ea46e4d008fca327de4d74a68bb86bd1a7ab**.
- `end-of-chapter-2` and `lesson-18`: both **8dd9cc1de97f80da852068630becec80e1d5e700**; both trees **97cd998ab4bf2a02f17630e8690507ed52abf02c**.
- `rebuild/prefix` points to local `lesson-32`. Each numbered local ref is an ancestor of the next. Identical checkpoints share commits: **01–05**, **08–09**, **20–21**.
- The original `origin/lesson-32` and `origin/end-of-chapter-2` are frozen historical sources, not downstream target bases.

### Corrections and source fidelity

1. **Lesson 01 / carried through 32:** package.json and both package-lock project-name fields now say `iluvcoffee`, matching `nest new iluvcoffee`. Initial scaffold timing remains the established 01–05 baseline.
2. **Lesson 18 / carried through 23:** `findOne(@Param('id') id: number)` calls `this.coffeesService.findOne('' + id)`; global `transform: true` remains enabled. No temporary logging remains. Lesson 24 explicitly describes string route ids, so its controller returns to `id: string` with direct service delegation.
3. **Lesson 19 / carried through 32:** README introduction and branch map exactly match the plan's 58-lesson text. The original Nest-generated content below the horizontal rule is preserved byte-for-byte.
4. **Lesson 22 / carried through 32:** `prisma: "^7.10.0"` is in devDependencies, absent from dependencies, and the lockfile root agrees. `npm install --package-lock-only --ignore-scripts --save-dev prisma@7.10.0` exited 0 and updated 131 package classification flags. The locked package set, versions, integrity values and all other package-entry data are unchanged.
5. Old lesson deltas were replayed sequentially with `git diff --binary origin/lesson-PP origin/lesson-NN | git apply --index --3way`. All other tracked content equals the previously audited original tree for its lesson. Full comparisons permit only the specific name, README, dependency-classification and 18–23 controller corrections above.

### Fresh verification of corrected local refs

Environment: Node `v26.7.0`, npm `11.19.0`; all commands ran in `/private/tmp/nestjs-companion-sync-20260917/repo`. Table shorthand: `build` = `npm run build`; `lint` = `npm run lint`; `generate` = `npx --no-install prisma generate`. Numbers are exit codes.

- `node /private/tmp/nestjs-companion-sync-20260917/verify-rebuilt-prefix.mjs`: **exit 0**. Checked all 32 corrected trees, full allowed-change scope, package/lock agreement, exact README, sequential ancestry, lesson-18/checkpoint commit and tree equality, all 69 frozen origin refs, and clean status.
- `node /private/tmp/nestjs-companion-sync-20260917/verify-prefix-builds.mjs`: **exit 0**. Built/linted all **26 distinct local trees**, verified emitted `dist/main.js` for each, and recorded every command/status. Only identical trees were skipped.
- `npm ci`: **exit 0** at local **01, 16, 22**, whenever the lockfile changed. Dependencies were retained between switches.
- `npm run build` and `npm run lint`: **exit 0** on every distinct local snapshot. For every local lesson **22–32**, `npx --no-install prisma generate` ran first and exited **0**.
- Runtime primitive-conversion checks: **exit 0** for each distinct state in **18–23** (21 reuses 20). Compiled decorator metadata is Number; ValidationPipe transforms URL `'42'` into numeric `42`; the controller delegates string `'42'` to the service.
- `git status --short` was recorded after every distinct build/lint. Lesson 01 generated only untracked tsbuildinfo, preserved outside the clone as `audit/rebuilt-lesson-01.generated.tsbuildinfo`. Lessons 18–20 changed only tracked tsbuildinfo; `git restore tsconfig.build.tsbuildinfo` restored it. Other tracked snapshots 06–21 were clean and their tracked tsbuildinfo was also restored. From 22 the file is ignored/untracked. No other tracked file changed.
- After all final checks, `git clean -ndX` listed only dist/, node_modules/, src/generated/ and tsconfig.build.tsbuildinfo. Authorized `git clean -fdX`: **exit 0**, removing those reproducible outputs only in the isolated clone. Final `git status --short` and `git clean -ndX` were empty. Content/ref verification was rerun successfully after cleanup.

### Remaining concerns and verification limits

- Existing unused-parameter lint warnings remain in lessons 10–27, with exit 0; these match the instructional intermediate code.
- npm's install audit reported **7 vulnerabilities (2 low, 1 moderate, 4 high)** at 01/16 and **11 (2 low, 1 moderate, 8 high)** at 22. Dependency versions were preserved to match the course; no audit-fix upgrade was applied. npm also reported deprecated tsconfck and install scripts awaiting approval; documented client generation and every build still succeeded.
- No database/container mutations, HTTP smoke tests, full unit suites or e2e suites were run for this prefix task. Verification covers the requested static content/build/lint checks plus the specific corrected parameter-conversion behavior.

### Evidence

The initial audit and its pre/post-generation results remain in the task-2 handoff and Git history. Initial original-tree builds 22–32 failed on missing generated Prisma Client, then passed after the documented generation step; corrected local builds ran generation before building and all passed on their first verification pass.

Raw evidence: `/private/tmp/nestjs-companion-sync-20260917/audit/`. Key files: `rebuilt-mapping.json` (full old-to-local mapping and trees), `rebuilt-build-results.json` (all corrected commands, outputs and exit statuses), `replay-commands.json`, `meta.json`, `lesson-NN.txt`, `lesson-NN.full.diff`, `build-results.json`, and `generated-build-results.json`.

## Published remote state

Not published. All remediation commits and corrected companion branches remain local. The remote and all frozen origin refs remain unchanged.
