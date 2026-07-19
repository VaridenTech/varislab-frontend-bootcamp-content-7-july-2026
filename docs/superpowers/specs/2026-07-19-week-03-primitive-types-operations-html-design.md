# W03.02 Primitive Types and Operations — HTML Lesson Design

## Objective

Create a teacher-ready Thai adaptation of Web Dev Simplified's “Primitive Types and Operations” lesson. The result will preserve every core concept and code example from the source while adding enough explanation, classroom pacing, activities, and instructor guidance for a beginner JavaScript class.

## Deliverable

Create `Week_03/01_basic_javaScript/content/02_primitive_types_and_operations.html` as one self-contained HTML file. It will embed its CSS and JavaScript, work offline after being saved, and require no external fonts, libraries, images, or build process.

## Audience and Use

The page is for an instructor teaching Thai-speaking beginner frontend students. It should support a roughly 60-minute live class, work clearly on a projector, and remain useful as a student review document on desktop and mobile screens.

## Content Scope

The lesson will include:

1. Thai lesson title, learning objectives, and a suggested 60-minute teaching flow
2. A beginner explanation of primitive values as basic data building blocks
3. The three source types: `number`, `string`, and `boolean`
4. All representative source values, including negative numbers, decimals, empty strings, and `Infinity`
5. Number arithmetic and operator precedence
6. Number comparisons
7. String concatenation and string comparison
8. Boolean logic with AND, OR, and NOT
9. Boolean comparisons
10. Type inspection with `typeof`
11. Short prediction exercises, discussion prompts, and revealable answers
12. A recap and bridge to the next lesson about creating variables

The adaptation may use Thai names and classroom scenarios when they make an example easier to understand. Technical keywords, operators, and type names will remain unchanged.

## Equality Guidance

The source uses `==` and `!=`. The lesson will show that source concept but explicitly introduce `===` and `!==` as the preferred operators for beginner code because they compare without implicit type conversion. It will avoid an extended type-coercion lesson, which belongs later in the course.

## Information Architecture

The page will follow one continuous teaching path:

- Hero and lesson goals
- Class schedule
- Primitive-type overview
- Three type sections with examples
- Operations grouped by data type
- `typeof` section
- Guided practice and comprehension check
- Summary and next-lesson bridge

A compact sticky navigator will link to major sections. Instructor scripts, teaching notes, warnings, student tasks, and answers will be visually distinguishable. Answers will use native `details` elements so they can remain hidden during questioning and visible when printed.

## Visual and Interaction Direction

The page will use an offline Thai-capable system font stack and a high-contrast classroom-board style consistent with the existing Week 03 JavaScript design direction. JavaScript yellow will identify key concepts, while number, string, and boolean examples will each receive a distinct secondary accent.

Small interactive demonstrations will let the instructor run representative operations and reveal their results. These interactions enhance the lesson but will not gate any required content. The page must remain readable when JavaScript is disabled.

## Accessibility and Responsive Behavior

- Use semantic landmarks and a logical heading hierarchy.
- Provide visible keyboard focus and touch-friendly controls.
- Do not rely on color alone to identify data types or results.
- Keep code blocks horizontally scrollable on narrow screens.
- Stack multi-column layouts without causing page-level horizontal scrolling.
- Respect reduced-motion preferences.
- Provide print styles that remove sticky controls and expose answer content.

## Attribution

The footer will link to the original lesson, identify the page as a Thai educational adaptation, credit Web Dev Simplified, and reference the source content's CC BY-NC 4.0 license. Code examples will retain their applicable Apache 2.0 attribution note.

## Verification

Verification will cover:

1. Comparison against the source headings, explanations, and code examples
2. Thai-language and UTF-8 checks
3. Semantic HTML, unique IDs, local links, and interactive control checks
4. Functional checks for demonstrations and answer disclosures
5. Desktop/projector and mobile visual inspection
6. Print-layout inspection
7. Confirmation that the file has no external runtime dependencies

## Scope Boundaries

This task creates one lesson file only. It will not add a framework, package dependency, shared site architecture, analytics, or lessons beyond primitive types, their basic operations, and `typeof`.
