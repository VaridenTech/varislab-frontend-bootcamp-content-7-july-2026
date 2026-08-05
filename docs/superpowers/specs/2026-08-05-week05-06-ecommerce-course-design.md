# Week_05_06 React E-commerce Project Course — Design

**Date:** 2026-08-05
**Status:** Approved by user (AskUserQuestion: full ~30-lesson build; location `Week_05_06/01_react_ecommerce_project/content`; generate all content in one session)

## Goal

A step-by-step classroom course teaching students to build
<https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app> from
scratch, "properly": same stack, same feature-based architecture, same final
code. Students finished Week_04 (React fundamentals, hooks, context, TanStack
Query basics, forms, Vitest) — this course applies that knowledge to a real
product.

## Format contract (mirrors Week_04/02_complete_intro_to_react/content)

- Thai narration; English technical terms untranslated. No `translator-note`
  class (this is original content, not a translation).
- Numbered files `01_intro.html` … `30_wrap_up.html`, plus `index.html`
  (chapter cards) and `lesson.css` copied verbatim from Week_04.
- Each lesson: `<html lang="th">`, `<link rel="stylesheet" href="lesson.css">`,
  `<article class="lesson">`, header with
  `lesson-eyebrow` (`บทเรียน N · <Thai chapter> (<English chapter>)`),
  Thai `<h1>`, `<p class="lesson-original-title" lang="en">English title</p>`.
- Code in `<pre><code class="language-typescript|bash|scss|json|html">` with
  HTML entities escaped. `<blockquote>` for tips/warnings (emoji 🚨/⚠️/💡 ok).
- Footer nav: `<nav class="lesson-navigation" aria-label="การนำทางบทเรียน">`
  with prev / index / next links (`rel="prev"` / `rel="next"`).
- Course title used in `<title>`: `<Thai lesson name> | สร้างเว็บ E-commerce ด้วย React`.

## Source of truth

Cloned finished app at
`/private/tmp/claude-501/-Users-varis-Sites-varis-lab-frontend-bootcamp-content-7-july-2026/c7acbc2e-aded-4862-9164-ac06b4c03ada/scratchpad/ecommerce-app`.
All final code shown in lessons must match this repo exactly. Where the build
order requires staging (v1 → v2), the lesson says explicitly what will change
later and which lesson completes it.

Known staging points (from the import graph):

| File | v1 (lesson) | Completed (lesson) |
| --- | --- | --- |
| `MainLayout` | Outlet only (06) | + Header/Footer (07) |
| `Header` | no CartSummary (07) | + CartSummary badge (20) |
| `providers.tsx` | QueryClientProvider + Devtools (08) | + CartProvider (19) |
| `Product.tsx` | detail page, Add-to-Cart button not wired (18) | + useCart + modal (20) |
| `eslint.config.js` | base config (03) | + @tanstack/eslint-plugin-query (14) |
| `main.tsx` | scaffold (02) | + main.scss (04), + skeleton.css (15) |
| `vite.config.ts` | scaffold (02) | + `@` alias (03), + `legacy.inconsistentCjsInterop` (09), + `test` block (26) |

`SwiperCarousel` exists in the repo but is imported nowhere — omitted from the
course. Dependencies are installed in the lesson where they are first used,
not all upfront. Students copy `public/images/banners` and `public/images/deals`
from the finished repo (GitHub links) in lesson 16.

## Lesson map (30 lessons, 10 chapters)

Chapter names Thai — English; per lesson: files created (→ modified).

**1. เริ่มต้น — Welcome**
1. `01_intro.html` บทนำ — what we build (pages, flows), dummyjson API, stack
   table, Node ≥ 22.22, prerequisites, finished-repo link.

**2. ติดตั้งโปรเจกต์ — Project Setup**
2. `02_project_scaffold.html` สร้างโปรเจกต์ด้วย Vite — nvm/Node 22, `.nvmrc`,
   `npm create vite` (react-ts), boilerplate cleanup, `.env`
   (`VITE_API_BASE_URL`), run dev server.
3. `03_tooling.html` ESLint, Prettier และ path alias — `eslint.config.js`
   (flat, typescript-eslint, react-hooks, react-refresh, import-x,
   eslint-config-prettier), `.prettierrc.json`, `.prettierignore`, npm scripts,
   `@/` alias (→ `vite.config.ts`, tsconfig).
4. `04_scss_foundation.html` โครงสร้าง SCSS — sass, normalize.css,
   `src/styles/_variables|_typography|_spacing|_global|_components|_utilities|main.scss`,
   `src/shared/types/global.d.ts`, → `main.tsx`.
5. `05_architecture.html` สถาปัตยกรรม Feature-based — why app/pages/features/
   shared, folder tree, `src/shared/types/generic.type.ts`.

**3. โครงแอปและเราเตอร์ — App Shell & Routing**
6. `06_react_router.html` react-router 8 data mode — install; stub pages
   (Home/Category/Product/Cart/Checkout/OrderSuccess), `ErrorMessage`,
   `RouteErrorFallback`, `router.tsx`, `MainLayout` v1, `App.tsx`, → `main.tsx`.
7. `07_header_footer.html` Header และ Footer — Font Awesome install,
   `useProductRoute` hook, `Header` v1 (badge comes lesson 20), `Footer`,
   → `MainLayout`.
8. `08_providers_query_client.html` Providers และ QueryClient — TanStack Query
   + Devtools install, `queryClient.ts` (staleTime 60s, retry 1),
   `providers.tsx` v1, → `App.tsx`.

**4. คอมโพเนนต์กลาง — Shared UI**
9. `09_button_input_radio.html` Button, Input และ RadioInput — react-spinners,
   Vite 8 CJS interop (`legacy.inconsistentCjsInterop` → `vite.config.ts`),
   typed props + SCSS modules pattern.
10. `10_modal_pagination.html` Modal และ Pagination — react-modal (+types),
    react-paginate wrappers.
11. `11_display_components.html` คอมโพเนนต์แสดงผล — StarReview, FeatureCard,
    CountdownTimer, ImageZoom.

**5. ชั้นข้อมูลสินค้า — Products Data Layer**
12. `12_api_client.html` API client — axios, `shared/api/client.ts`
    (baseURL from env, `ApiError`-normalizing interceptor).
13. `13_product_types_api.html` Types และ api.ts —
    `features/products/types.ts`, `shared/utils/pagination.utils.ts`,
    `features/products/api.ts`.
14. `14_query_factories.html` Query factories — `features/products/queries.ts`
    (`productKeys`, `queryOptions`, `keepPreviousData`, categories staleTime),
    → `eslint.config.js` (+query plugin).

**6. สร้างหน้าเพจ — Pages**
15. `15_product_list_components.html` คอมโพเนนต์รายการสินค้า —
    `shared/utils/price.utils.ts`, react-loading-skeleton (→ `main.tsx` css),
    ProductCard, ProductsList, CategoryMenu.
16. `16_home_page.html` หน้า Home — copy banner/deal images from finished repo,
    swiper, `Banner`, `Home.tsx` + module.scss (queries, deals + CountdownTimer
    + ImageZoom, FeatureCard row, ClipLoader, ErrorMessage).
17. `17_category_page.html` หน้า Category — `CategoryBanner`, `Category.tsx`
    (byCategory query, derived pagination, Pagination, keepPreviousData UX).
18. `18_product_page.html` หน้า Product detail — ProductImageGallery,
    ProductDetailInfo, RatingBreakdown, ReviewCard, `ReviewSection`,
    `Product.tsx` v1 (modal wired lesson 20).

**7. ตะกร้าสินค้า — Cart**
19. `19_cart_store.html` Cart store — `CartContext.tsx`, `cartReducer.ts`,
    `cartStorage.ts` (localStorage), `CartProvider.tsx` (lazy init +
    write-through), `useCart.ts`, → `providers.tsx`.
20. `20_add_to_cart.html` Add to Cart และ mini cart — AddToCartModalContent,
    → `Product.tsx` v2, `CartSummary`, → `Header` v2.
21. `21_cart_page.html` หน้า Cart — `CartTable`, `Cart.tsx` (totals, nav
    buttons).

**8. ชำระเงิน — Checkout**
22. `22_checkout_schema.html` Zod schema — zod, react-hook-form,
    @hookform/resolvers install; `schema.ts`, `types.ts`, `consts.ts`.
23. `23_address_form.html` ฟอร์มที่อยู่ — `CheckoutAddressForm`
    (useForm + zodResolver + Input), `CheckoutAddressBox`.
24. `24_delivery_payment_summary.html` จัดส่ง ชำระเงิน และสรุปรายการ —
    DeliveryOption, PaymentOption, CheckoutDeliveryBox, CheckoutPaymentBox,
    SummaryOrder, SummaryOrderItem, BillingSummary.
25. `25_place_order.html` สั่งซื้อ — `checkout/api.ts`, `useCheckout.ts`
    (mutation → clear cart → navigate), `Checkout.tsx` + module.scss,
    `OrderSuccess.tsx` final.

**9. การทดสอบ — Testing**
26. `26_test_setup.html` ติดตั้งชุดทดสอบ — vitest/jsdom/RTL/jest-dom/
    user-event/msw/@types/node; → `vite.config.ts` test block;
    `src/test/setup.ts`, `msw/{server,handlers,fixtures}.ts`,
    `renderRoute.tsx`, `utils.tsx`; scripts.
27. `27_unit_tests.html` Unit tests — price.utils, pagination.utils,
    cartReducer, cartStorage, schema, client tests.
28. `28_hook_tests.html` การทดสอบ Hooks และ Queries — `queries.test.tsx`
    (renderHook + MSW), `useCheckout.test.tsx`.
29. `29_integration_tests.html` Integration tests — Home, Category, Cart,
    Checkout page tests via `renderRoute`.

**10. ส่งท้าย — Wrap Up**
30. `30_wrap_up.html` Build, deploy และยินดีด้วย — typecheck/lint/test/build/
    preview, SPA deploy notes, recap, next steps.

## Output location

`Week_05_06/01_react_ecommerce_project/content/` in this repo (worktree branch
`worktree-week05-06-ecommerce-course`).

## Production plan

- Orchestrator writes: `lesson.css` (copy), `01_intro.html`, `30_wrap_up.html`,
  `index.html`.
- 8 parallel fork agents write lessons 02–05, 06–08, 09–11, 12–14, 15–18,
  19–21, 22–25, 26–29 — each reads real code from the cloned repo, follows
  this map, uses the fixed nav chain.
- Verification pass: file inventory, nav chain, HTML structure, format
  consistency, spot-check code fidelity against the repo; fix findings; commit.
