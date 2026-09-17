# NestJS Companion Repository Sync Report

**Date:** 2026-09-17
**Remote:** `git@github-variden:VaridenTech/varislab-intro-to-nestjs-v1.git`
**Source of truth:** `Week_09/01_nestjs_basic/content`

## Pre-sync snapshot

- Remote branch count: 69
- Snapshot file: `/private/tmp/nestjs-companion-sync-20260917/pre-sync-refs.txt`

## Branch audit

| Branch | Lesson title | Source state | Content check | Build/test |
| --- | --- | --- | --- | --- |
| lesson-01 | ติดตั้ง NestJS CLI | `462faa07a834cfd9b8f7e215f3fd685343e84272` | BLOCKED (C3); Nest 12 ESM scaffold present; see N1. | `build=0; lint=0`; `npm ci=0` |
| lesson-02 | มีอะไรอยู่ในแอป NestJS | `462faa07a834cfd9b8f7e215f3fd685343e84272` | BLOCKED (C3); Scaffold files, AppModule, ESM imports and Vitest match. | `build=0; lint=0` reused from 01 |
| lesson-03 | สิ่งที่เราจะสร้างกันในคอร์สนี้ | `462faa07a834cfd9b8f7e215f3fd685343e84272` | BLOCKED (C3); Planning only; no application delta. | `build=0; lint=0` reused from 01 |
| lesson-04 | เตรียมเครื่องมือ: ติดตั้ง Insomnia | `462faa07a834cfd9b8f7e215f3fd685343e84272` | BLOCKED (C3); Insomnia setup; no source delta. | `build=0; lint=0` reused from 01 |
| lesson-05 | รัน NestJS ในโหมด Development | `462faa07a834cfd9b8f7e215f3fd685343e84272` | BLOCKED (C3); Development scripts match; greeting edit is an unspecified experiment. | `build=0; lint=0` reused from 01 |
| lesson-06 | สร้าง Controller พื้นฐาน | `27636aedf981d56210310fcda10751fa8fe3d994` | BLOCKED (C3); Controller, GET /coffees and module registration match. | `build=0; lint=0` |
| lesson-07 | ใช้ Route Parameters | `30aee86380ffea9f831fc76860af9baa7ce9d328` | BLOCKED (C3); GET /coffees/:id and string parameter match. | `build=0; lint=0` |
| lesson-08 | จัดการ Request Body (Payload) | `87cf3753cfc24db475ba7796f16714b03f6a42e2` | BLOCKED (C3); POST /coffees echoes JSON body as instructed. | `build=0; lint=0` |
| lesson-09 | กำหนด Response Status Codes | `87cf3753cfc24db475ba7796f16714b03f6a42e2` | BLOCKED (C3); No delta matches removal of temporary 410 decorator. | `build=0; lint=0` reused from 08 |
| lesson-10 | จัดการคำขอ Update และ Delete | `6b9a7a45dcf703e39388fb50627d217489c7911f` | BLOCKED (C3); PATCH/DELETE handlers and responses match. | `build=0; lint=0`; warnings |
| lesson-11 | ทำ Pagination ด้วย Query Parameters | `3de95e51f7a991ea69c58e4d82b6b66474b1ebac` | BLOCKED (C3); Query limit/offset handling matches. | `build=0; lint=0`; warnings |
| lesson-12 | สร้าง Service พื้นฐาน | `5d7fcf054635520e859964860032074c4344e141` | BLOCKED (C3); In-memory entity/service, delegation and DI match. | `build=0; lint=0`; warnings |
| lesson-13 | ส่ง Error Message ที่เป็นมิตรกับผู้ใช้ | `8ac26d62385cd59903c6428eeec317fa845090d1` | BLOCKED (C3); NotFoundException and response message match. | `build=0; lint=0`; warnings |
| lesson-14 | ห่อ Business Domain ไว้ใน Modules | `7ec5dca12f09086bfc207a91ded9011570935c96` | BLOCKED (C3); CoffeesModule extraction and root import match. | `build=0; lint=0`; warnings |
| lesson-15 | รู้จัก Data Transfer Objects (DTO) | `301a58195eed8c30763e8ababcbb0bd77f67a094` | BLOCKED (C3); DTOs, readonly/optional rules and service-created id match. | `build=0; lint=0`; warnings |
| lesson-16 | Validate ข้อมูลขาเข้าด้วย DTO | `670cd3487f8307469f49e951ad14463d57d2acce` | BLOCKED (C3); ValidationPipe, IsString, PartialType and dependencies match. | `build=0; lint=0`; `npm ci=0`; warnings |
| lesson-17 | ป้องกันข้อมูลคำขอที่ไม่พึงประสงค์ | `103cda13a87a685682b70f305137c56b6444a16e` | BLOCKED (C3); Whitelist and forbidNonWhitelisted match. | `build=0; lint=0`; warnings |
| lesson-18 | แปลง Payload เป็น DTO Instance อัตโนมัติ | `c92dfb93e7f46e3b0b5c148b7a4c7015695b2556` | BLOCKED (C3); Global transform matches; primitive demonstration caveat N2. | `build=0; lint=0`; warnings |
| lesson-19 | ก่อนเริ่มบทฐานข้อมูล: เก็บความคืบหน้าไว้ใน Branch | `279ff3afb519bad64688496b8de9dcc5a32c0caf` | BLOCKED (C1, C3); Application unchanged; saved fork exact; README map differs. | `build=0; lint=0`; warnings |
| lesson-20 | รัน PostgreSQL ด้วย Docker Compose | `71287829e7c9d4da63f6c73612ce224955dd4fe9` | BLOCKED (C1, C3); Compose service, image, port and password match. | `build=0; lint=0`; warnings |
| lesson-21 | ดูฐานข้อมูล Postgres ด้วย GUI | `71287829e7c9d4da63f6c73612ce224955dd4fe9` | BLOCKED (C1, C3); GUI only; unchanged application/Compose tree. | `build=0; lint=0` reused from 20; warnings |
| lesson-22 | รู้จัก Prisma และ PrismaService | `76651560515926852d6853d3e4069eeb6624c320` | BLOCKED (C1, C2, C3); Prisma config, generated output path, DI lifecycle and dotenv import match; dependency placement differs. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0`; `npm ci=0`; warnings |
| lesson-23 | สร้าง Prisma Model | `c657b3abc3ee64934e1957fa8a127cf50b464fa6` | BLOCKED (C1, C2, C3); Coffee schema, scalar flavors and retained entity match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0`; warnings |
| lesson-24 | ใช้ Prisma Client เข้าถึงฐานข้อมูล | `4832280139643500e6934126d66ddbe0d54fd0e6` | BLOCKED (C1, C2, C3); Prisma CRUD, 404 handling and entity removal match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0`; warnings |
| lesson-25 | สร้าง Relation ระหว่างสอง Models | `312f2c14d57a29095dd3d7b967d618aec0c79150` | BLOCKED (C1, C2, C3); Flavor relation, unique name and temporarily commented writes match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0`; warnings |
| lesson-26 | ดึง Models พร้อม Relations | `8a8834a51be1caf0c94f077b8231d4b8abbdbef8` | BLOCKED (C1, C2, C3); Read includes and initial connectOrCreate writes match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0`; warnings |
| lesson-27 | ใช้ Nested Writes สร้างและอัปเดตพร้อม Relation | `5586f23be068ecb87b756aa66e9c718405b93450` | BLOCKED (C1, C2, C3); PATCH relation replacement and write-response includes match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0`; warnings |
| lesson-28 | เพิ่ม Pagination ที่ชั้นฐานข้อมูล | `28b8e81e14b17f03582ce1278fe01a5cb4438617` | BLOCKED (C1, C2, C3); DTO validation, transformation and ordered skip/take match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0` |
| lesson-29 | ใช้ Transactions | `a98b00d64551d31e01fa1199bf6979c13e3b65ed` | BLOCKED (C1, C2, C3); Event, recommendations, transaction callback and route match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0` |
| lesson-30 | เพิ่ม Indexes ให้ Models | `9c6beaa964e5d41598a228f651b6b0aa6e7d1f51` | BLOCKED (C1, C2, C3); Event name and name/type indexes match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0` |
| lesson-31 | ตั้งค่า Migrations ด้วย Prisma Migrate | `d3805975e92858e24209c6c2c47fff44bc2715b8` | BLOCKED (C1, C2, C3); Initial schema plus forward/reverse column-renaming migrations match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0` |
| lesson-32 | ควบคุม Module Encapsulation | `f25e667f95f1ea933039a595c7bab9ff7d2e7a97` | BLOCKED (C1, C2, C3); CoffeeRating DI, owner export and consumer module import match. | Before generate: `build=1; lint=0`; after `generate=0`: `build=0; lint=0` |

## Repository-wide checks

### Lessons 01–32 audit outcome

**BLOCKED for unchanged reuse.** All 32 HTML lessons and all 32 frozen trees were inspected, including cumulative source deltas. All 26 distinct snapshots build and lint with exit 0 after the documented Prisma-generation prerequisite. Content differences still require a ruling before Task 3; no companion source, refs or remote state were changed.

#### Content discrepancies requiring a ruling

- **C1 — README numbering, lessons 19–32:** `origin/lesson-19:README.md:3` says **67 lessons**. Lines 13–15 reference lesson 19/60, SQL through 59, and MongoDB 60–67. The same README is inherited through lesson 32. Current lesson 19 HTML line 24 places MongoDB at **51–58**, within a 58-lesson course. README is also the only changed file at lesson 19; its HTML workshop only creates the Git checkpoint. Affected: `README.md` on every branch **19–32**.
- **C2 — Prisma dependency classification, lessons 22–32:** lesson 22 HTML lines 27 and 146 run `npm install -D prisma@7.10.0`; line 162 expects `prisma` in `devDependencies`. Instead, `origin/lesson-22:package.json:34` places `"prisma": "^7.10.0"` in `dependencies`, mirrored in the lockfile root. This persists through 32. Affected: `package.json` and `package-lock.json` on every branch **22–32**. The installed/locked version is 7.10.0; placement is the mismatch.
- **C3 — Scaffold name, lessons 01–32:** lesson 02 HTML lines 24 and 73 specify `nest new iluvcoffee`, but `package.json:2` and package-lock project metadata name `iluvcoffee-new` on all 32 branches. This is a metadata mismatch with no observed build impact. Affected: `package.json` and `package-lock.json` on every branch **01–32**. Retaining this as a deliberate companion-repository exception requires a ruling.

#### Interpretation notes

- **N1 — Scaffold timing:** 01–05 share the exact same commit/tree. The companion already includes the scaffold at 01, while the `nest new` workshop appears in 02. This is recorded as the initial repository baseline.
- **N2 — Lesson 18 demonstration:** HTML lines 43–45 demonstrate `findOne(@Param('id') id: number)`, converting the id back to string for the service. The branch retains `id: string` and only changes the global pipe. The workshop describes its logging as temporary; lesson 24 explicitly uses string route parameters again. The global-transform requirement matches, but the number-parameter demonstration is not retained. This ambiguity is disclosed rather than claimed as an exact code-block match.
- Temporary experiments were compared at their final state: removing lesson 09's 410 decorator, restoring lesson 26's include, removing lesson 29's rollback sabotage, and restoring lesson 31's column name. Lesson 25's commented create/update bodies are explicitly instructed and compile.
- Scope: static content, build and lint. No database, HTTP, unit or e2e tests were run in Task 2.

#### Verification commands and results

Working directory: `/private/tmp/nestjs-companion-sync-20260917/repo`. Node `v26.7.0`; npm `11.19.0`. Table shorthand: `build` = `npm run build`; `lint` = `npm run lint`; `generate` = `npx --no-install prisma generate`. Numbers are actual process exit codes.

1. Verified exactly one HTML for each number 01–32. `git rev-parse origin/lesson-NN` and `git ls-tree -r --name-only origin/lesson-NN` succeeded for all 32; all commits match the frozen snapshot.
2. Inspected every complete tree and previous-lesson delta: `git diff --stat origin/lesson-PP origin/lesson-NN`, plus complete diffs for package.json, package-lock.json, src, test, prisma and docker-compose.yml. Lockfiles change at 16 and 22; their dependency roots agree with package.json, including C2.
3. `git rev-parse origin/lesson-18^{tree} origin/end-of-chapter-2^{tree}`: exit 0; both output **df96d051fccf9af14e9dffb0e25c08ad35ca82c1**. Fork point **PASS**.
4. Selected each distinct tree with `git switch --detach origin/lesson-NN`. `npm ci` ran at **01, 16, 22**, each exit 0. Ignored dependencies remained between snapshots. Exact-tree skips: **02–05 → 01**, **09 → 08**, **21 → 20**.
5. Initial build: exit 0 for 01–21 (15 distinct trees), exit 1 for 22–32. Initial lint: exit 0 for all 26 distinct trees. Failed builds report **TS2307** at `src/prisma/prisma.service.ts:3`: `Cannot find module '../generated/prisma/client.js'`, followed by missing inherited Prisma members. Lesson 22 explicitly requires generating this ignored client before starting/building.
6. First `npx --no-install prisma generate` at 22 failed with sandbox **EPERM**, attempting `utime` on `/Users/varis/.cache/prisma/master/0edf323efd1d98336f3f0a68684b56f689b900d3/darwin-arm64/schema-engine`. Retried with approved access: exit 0. For **each lesson 22–32**, generation, build and lint then all exited **0**. These initial build failures are reconciled by the documented prerequisite, without source edits.
7. Lint exit 0 includes existing **eslint(no-unused-vars)** warnings in 10–27 for instructional parameters: body, paginationQuery, updateCoffeeDto and (25) createCoffeeDto. No lint errors. Warnings were preserved.
8. Captured `git status --short` after every distinct build/lint. At 01 it showed only `?? tsconfig.build.tsbuildinfo`; that generated file is not tracked until 06. The first switch to 06 refused to overwrite it (exit 1). Preserved it outside the clone as `audit/lesson-01.generated.tsbuildinfo`, then retried successfully. For each distinct tree 06–21, status was empty and `git restore tsconfig.build.tsbuildinfo` exited 0. At 22–32 the file is ignored/untracked, so no restore was attempted; all statuses were empty. **No other tracked file changed.**
9. After final lesson-32 verification, `git clean -ndX` listed only dist/, node_modules/, src/generated/ and tsconfig.build.tsbuildinfo. `git clean -fdX` removed these reproducible outputs in this isolated clone only, exit 0. Final `git status --short` was empty.
10. Compared all **69** origin remote-tracking refs (excluding symbolic HEAD) with the frozen snapshot: exact match. No companion commits, fetch, pushes or branch rewrites occurred.

Raw HTML extraction, full trees, source diffs and command outputs remain under `/private/tmp/nestjs-companion-sync-20260917/audit/`: `lesson-NN.txt`, `lesson-NN.full.diff`, `meta.json`, `build-results.json`, and `generated-build-results.json`. The durable rows above record every source commit and command result.


## Published remote state
