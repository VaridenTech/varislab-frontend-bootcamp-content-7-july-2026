# Coffee Master — React Version

**Date:** 2026-07-28
**Status:** Approved

## Goal

Port `Week_03/coffee-master` (vanilla TypeScript + DOM manipulation) to React, as a
new standalone app under `Week_04/coffee-master-react`. Week_04 is the React week,
so the two apps sit one week apart and can be read side by side: identical UI,
identical behaviour, different programming model.

The port is the lesson. Nothing about the *product* changes — no new features, no
redesign, no extra menu items.

## Stack

Vite + React 19 + TypeScript, mirroring Week_03's tooling so the diff between the
two projects is about React and not about build configuration.

`src/style.css` is copied verbatim from Week_03 and every existing class name and
the `#placeOrderButton` id are preserved, so the rendered result is visually
identical.

## File layout

```
Week_04/coffee-master-react/
  index.html            # <div id="root"> only — all markup moves into JSX
  package.json
  tsconfig.json
  vite.config.ts
  .gitignore
  src/
    main.tsx            # createRoot + render
    App.tsx             # owns all state, composes the page
    style.css           # copied from Week_03, unchanged
    types.ts            # MenuItem
    data.ts             # menuItems, TAX_RATE
    utils.ts            # formatPrice
    components/
      Header.tsx
      Hero.tsx
      Footer.tsx
      MenuSection.tsx   # section wrapper + grid
      MenuCard.tsx      # one card, + / − buttons
      Cart.tsx          # cart lines + empty-cart message
      OrderSummary.tsx  # name input, totals, place-order button
```

## State

All state lives in `App.tsx` as `useState` — no context, no reducer, no memoization.

- `quantities: Record<number, number>` — seeded identically to the original
  (item 3 starts at 3, everything else 0).
- `customerName: string` — the input becomes controlled.
- `orderMessage: { text: string; type: "success" | "error" } | null`.

`increaseQuantity` / `decreaseQuantity` live in `App` and are passed to `MenuCard`
as props. They keep the original clamps: no decrease below 0, no increase above 10.

Subtotal, tax and total are computed inline on every render. Deriving-on-render
rather than imperatively re-writing the DOM is the mental shift the lesson is
about, so memoization is deliberately left out.

## Behaviour parity

| Vanilla TS | React |
|---|---|
| `renderApp()` re-runs three render functions | state change triggers re-render |
| `innerHTML` string templates | JSX |
| one delegated `click` listener on `#menuGrid` | per-button `onClick` |
| `emptyCartMessage.style.display` toggle | conditional rendering |
| uncontrolled `#customerName` read on submit | controlled input bound to state |
| `orderMessage.textContent` + `className` | rendered from `orderMessage` state |

Place-order validation is unchanged: empty name → "Please enter your name"
(error); zero items → "Please add items to your cart" (error); otherwise the same
Thai success message including the customer name, total item count and pre-tax
subtotal.

## Testing

No test setup. Week_03 has none and vitest does not appear until lesson 21 of the
React course, so adding it here would get ahead of the curriculum. Verification is
`npm run build` (type-check + bundle) plus `npm run dev` and a look at the running
page.

## Out of scope

- New features, restyling, or additional menu items
- Routing, data fetching, persistence
- Tests, linting, or formatting configuration
- Any change to `Week_03/coffee-master`
