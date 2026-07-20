# Week 03 Classroom Reading CSS Design

## Scope

Apply one shared presentation layer to all 31 HTML lesson files in `Week_03/01_basic_javaScript/content`. Do not change lesson text, examples, semantic structure, or attribution.

## Visual direction

Use a calm classroom-reading style intended for Thai-language instruction on laptops, projectors, and mobile devices.

- Canvas: cool blue-gray (`#eef3f8`)
- Reading surface: white (`#ffffff`)
- Primary text: deep navy (`#172033`)
- Secondary text: slate (`#526075`)
- Accent: JavaScript-inspired amber (`#d89b13`)
- Structural accent: teaching blue (`#2563a6`)
- Code surface: dark ink (`#172033`) with soft light text (`#eef4ff`)

Use a Thai-capable system font stack for lesson copy and a monospace system stack for code. Keep the reading column near 800px, with comfortable line height and responsive page padding.

## Architecture

Create `lesson.css` beside the lesson files. Add `<link rel="stylesheet" href="lesson.css" />` to every HTML document. Selectors target the existing semantic elements, so no content wrappers or lesson-specific classes are required.

## Component treatment

- `main` becomes a white reading sheet with restrained border, shadow, and rounded corners.
- Headings use a clear type scale; `h1` receives the strongest blue/amber identity.
- Paragraphs and lists use generous line height and vertical rhythm.
- Inline `code` uses a pale blue chip; `pre` uses a dark, horizontally scrollable code panel.
- Tables receive bordered cells, a blue header, alternating rows, and horizontal scrolling through block overflow behavior.
- `details` and `summary` become clearly interactive answer panels with visible keyboard focus.
- Footer attribution remains quiet and readable below the lesson sheet.

## Responsive and accessibility behavior

- Reduce outer padding and corner radii below 640px.
- Preserve code and table content with horizontal scrolling instead of clipping.
- Use visible `:focus-visible` outlines for links and summaries.
- Maintain readable color contrast and avoid motion.
- Provide a print mode that removes decorative background and shadow while keeping code and tables legible.

## Verification

- Confirm every HTML file links to `lesson.css` exactly once.
- Confirm all HTML remains well formed.
- Confirm the stylesheet has balanced braces and contains responsive and print rules.
- Check representative long-form, table-heavy, code-heavy, and exercise pages in a browser if a local preview is available.
