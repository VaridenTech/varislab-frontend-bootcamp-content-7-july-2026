# npm CDN Comparison Design

## Goal

Add a concrete code comparison to the opening of `04_npm.html` so learners can see why manually loading dependencies from CDNs becomes difficult as a project grows and how npm centralizes the same dependency information.

## Content

Immediately after the opening paragraph, add:

1. A short introduction to a representative project that loads React, ReactDOM, Day.js, and Lodash with separate `<script>` elements. The example will show explicit versions and dependency-sensitive ordering.
2. A transition explaining that npm records the same direct dependencies in one place.
3. A concise `package.json` excerpt containing a `dependencies` object for those four libraries.
4. A closing explanation that npm also resolves indirect dependencies and that `package-lock.json` records the exact installed versions. This sentence will lead naturally into the existing “npm คืออะไร” section without fully teaching concepts covered later in the lesson.

## Presentation

- Use the lesson's existing `<p>` and `<pre><code>` conventions.
- Mark the CDN example as `language-html` and the npm example as `language-json`.
- Escape HTML tags and JSON-sensitive characters as required by the surrounding HTML document.
- Keep the examples illustrative and compact; they are a conceptual comparison, not installation instructions.

## Scope and Verification

Only `Week_04/02_complete_intro_to_react/content/04_npm.html` will change during implementation. Verify that the document remains valid enough to parse, both code blocks appear directly after the specified paragraph, and the surrounding lesson text remains unchanged.
