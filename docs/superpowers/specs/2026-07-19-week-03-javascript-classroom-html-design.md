# W03.01 JavaScript Classroom HTML — Design Specification

## Objective

Create a projector-friendly, self-contained HTML version of `Week_03/01_basic_javaScript/content/01_what_is_javascript.md`. The page must preserve all information from the source lesson while making it easier to teach live and review afterward.

## Deliverable

Create `Week_03/01_basic_javaScript/content/01_what_is_javascript.html` as a single offline-ready file. CSS and JavaScript will be embedded, and the page will not depend on external fonts, libraries, images, or network access.

## Audience and Use

The primary user is an instructor presenting a 60-minute introductory JavaScript class to beginner frontend students. Students may also open the same file later for review. The page must therefore work well on a classroom projector, desktop screen, mobile screen, and printed page.

## Content Requirements

The HTML will include every part of the Markdown source in the same teaching order:

1. Lesson title, purpose, and learning objectives
2. The complete 60-minute lesson schedule
3. Opening script and the HTML/CSS/JavaScript role comparison
4. Familiar interaction examples and the opening discussion prompt
5. JavaScript in the browser, including the HTML and JavaScript examples
6. Additional browser capabilities and the CSS-versus-JavaScript clarification
7. Browser/frontend, server/backend, desktop, and mobile use cases
8. Runtime and framework examples, including Node.js, Bun, Deno, Electron, Tauri, React Native, Ionic, and NativeScript
9. The JavaScript-versus-Java misconception correction
10. The beginner explanation of scripting languages and the nuance around engines and compilation
11. Reasons JavaScript is suitable for learning web programming
12. The five-minute activity, instructions, and conceptual answer guidance
13. All comprehension questions and approximate instructor answers
14. Closing summary and bridge to the next lesson

No source teaching point will be shortened away. Small interface labels may be added where they improve navigation or identify instructor guidance.

## Information Architecture

The page will be one continuous guided lesson with semantic landmarks and a clear heading hierarchy. A sticky lesson navigator will link to major sections and display the lesson's time progression. The main content will follow the source from top to bottom so the instructor can teach without switching views.

Instructor scripts, prompts, cautions, and teaching notes will use visually distinct labels. Approximate answers will use native disclosure controls so the instructor can keep them hidden until needed while ensuring the content remains present in the document.

## Visual Direction

The visual language will resemble a precise classroom teaching board rather than generic documentation. The palette will use:

- Ink navy `#14213D` for primary text and structural contrast
- Paper white `#F8FAFC` for the page background
- Chalk white `#FFFFFF` for content surfaces
- Action blue `#2563EB` for JavaScript behavior and interactive states
- Signal yellow `#F7DF1E` for key JavaScript concepts and teaching emphasis
- Muted slate `#64748B` for secondary text

Typography will use Thai-capable system font stacks so the page remains fully offline. Display headings will be bold and compact, body text will have generous line height, and code will use the local monospace stack.

The signature element will be a live three-role teaching panel near the top. It will show HTML as structure, CSS as appearance, and JavaScript as behavior, culminating in a working button interaction. This reinforces the lesson's central idea instead of acting as decoration.

## Interaction Design

- The example button will update its accompanying message using the same concept taught in the lesson.
- Sticky navigation links will scroll to each major section.
- A subtle progress indicator will show movement through the lesson.
- Instructor answer content will use accessible native `details` and `summary` elements.
- Keyboard focus will be clearly visible.
- Motion will be restrained and disabled when the user requests reduced motion.
- Print styles will remove sticky navigation and unnecessary controls while keeping all instructional content readable; disclosure content will be visible when printed.

The lesson must remain understandable if JavaScript is disabled. JavaScript enhances the live demo and progress indicator but does not provide access to required content.

## Responsive and Accessibility Requirements

- Use semantic `header`, `nav`, `main`, `section`, `aside`, and `footer` landmarks.
- Preserve logical heading order and meaningful link and button text.
- Maintain high color contrast and avoid relying on color alone to communicate meaning.
- Support keyboard navigation, visible focus, and touch-friendly controls.
- Stack multi-column elements on narrow screens without horizontal page scrolling.
- Allow code blocks and the schedule table to scroll within their own containers when required.

## Verification

Verification will include:

1. A content-coverage comparison between Markdown headings, lists, quotes, code examples, and the final HTML
2. HTML structure checks for semantic landmarks, unique section IDs, and valid interactive controls
3. A functional check of the welcome-button demo, navigation, disclosure controls, and progress indicator
4. Visual inspection at desktop/projector and mobile widths
5. Print-preview inspection to confirm navigation is removed and all instructional content remains available
6. Confirmation that the page has no external network dependencies

## Scope Boundaries

This task creates one classroom lesson page only. It does not introduce a site-wide framework, build pipeline, shared design system, external analytics, or additional lesson content not present in the source Markdown.
