# Final Fix Report: React Intro Quiz

## Scope

Updated `extra/react-intro-01-09-quiz.json` against the final-review findings and the approved quiz design/plan. The quiz remains a 12-question Thai artifact covering lessons 01–09 with the planned allocation: 01 (2), 02 (1), 03 (1), 04 (2), 05 (1), 06 (1), 07 (1), 08 (1), and 09 (2).

## Finding-by-finding mapping

| Finding | Resolution | Source basis |
| --- | --- | --- |
| Q11 did not assess JSX expressions. | Replaced the JSX-transformation recall question with a code-reading question that asks for the rendered `h1` from `{name}` and `{count + 1}`. Its explanation explicitly states that `{}` embeds and evaluates JavaScript expressions. | Lesson 09 explains `{props.name}` as JSX expression syntax and says removing `{}` renders the text literally. |
| Q12 needed to retain TSX and typed-props coverage. | Kept Q12 as a `PizzaProps` code-reading question, now showing both typed props used in JSX. The correct choice requires knowing that fields without `?` are required and JSX belongs in a `.tsx` file. | Lesson 09's `PizzaProps` example, required-prop guidance, and `.tsx` requirement. |
| Q2 distractors were implausible/category errors. | Replaced them with novice misconceptions about state as stored rendered UI and manually calling `root.render` after a state change. | Lesson 01: `UI = f(state)` and React recalculates UI after state changes. |
| Q4 distractors were implausible/category errors. | Replaced them with misconceptions that props lock data inside a child or manufacture new components. | Lesson 03: parent `App` sends props to reusable `Pizza` instances. |
| Q6 distractors were implausible/category errors. | Replaced them with package-install misconceptions: changing only `node_modules`, or exposing the package as a global. | Lesson 04: `npm install dayjs` changes `node_modules`, `package.json`, and `package-lock.json`; use then requires importing/requiring the package. |
| Other questions needed the same distractor review. | Revised Q1, Q5, Q7, Q8, and Q10 distractors so each stays in the question's conceptual/tool domain (React rendering/state, `package.json`, formatter/linter responsibilities, and Vite entry points). Q3 and Q9 already had plausible, unambiguous alternatives. | Lessons 01 and 04–08. |

## Source review

Reviewed the following lesson evidence before the final edit:

- Lesson 01: declarative rendering, `UI = f(state)`, and state-triggered updates.
- Lesson 02: `createRoot` and `root.render(React.createElement(App))`.
- Lesson 03: reusable components and parent-to-child props.
- Lesson 04: `dependencies`, `node_modules`, and `package-lock.json` behavior after `npm install dayjs`.
- Lesson 05: Prettier owns formatting/style.
- Lesson 06: ESLint lints for problematic usage rather than formatting.
- Lesson 07: `init`, `add`, `commit`, and `.gitignore` are the in-scope Git tools.
- Lesson 08: Vite starts its source graph at root `index.html`; JSX files use `.tsx`.
- Lesson 09: JSX expressions use `{}`; `PizzaProps` fields without `?` are required.

## Verification commands and results

1. Red check before editing:

   ```sh
   node -e 'const q=JSON.parse(require("fs").readFileSync("extra/react-intro-01-09-quiz.json","utf8")).questions; const q11=q[10]; if(!q11.body?.includes("{") || !/expression|นิพจน์|ปีกกา|วงเล็บปีกกา/.test(q11.prompt+q11.explanation)) throw new Error("Q11 must require JSX {} expression evaluation"); if(!q[11].body?.includes("PizzaProps") || !/\.tsx|typed props|TypeScript/.test(q[11].prompt+q[11].explanation)) throw new Error("Q12 must cover TSX and typed props"); console.log("targeted JSX/TSX coverage: OK")'
   ```

   Result: failed as intended with `Error: Q11 must require JSX {} expression evaluation` before the repair.

2. Structural validator (from the implementation plan):

   ```sh
   node -e 'const fs=require("fs");const p="extra/react-intro-01-09-quiz.json";const d=JSON.parse(fs.readFileSync(p,"utf8"));if(!Array.isArray(d.questions)||d.questions.length!==12)throw new Error("expected 12 questions");d.questions.forEach((q,i)=>{if(typeof q.prompt!=="string"||!q.prompt.trim())throw new Error(`question ${i+1}: prompt`);if(!Array.isArray(q.choices)||q.choices.length!==3)throw new Error(`question ${i+1}: choices`);if(!Number.isInteger(q.correctChoice)||q.correctChoice<1||q.correctChoice>3)throw new Error(`question ${i+1}: correctChoice`);if(typeof q.explanation!=="string"||!q.explanation.trim())throw new Error(`question ${i+1}: explanation`)});console.log("quiz structure: OK (12 questions)")'
   ```

   Result: `quiz structure: OK (12 questions)`.

3. Targeted content check:

   ```sh
   node -e 'const q=JSON.parse(require("fs").readFileSync("extra/react-intro-01-09-quiz.json","utf8")).questions; const fail=m=>{throw new Error(m)}; if(q.some(x=>new Set(x.choices).size!==3)) fail("choices must be unique"); const codeBodies=q.filter(x=>/^<pre><code>[\s\S]*<\/code><\/pre>$/.test(x.body||"")).length; if(codeBodies<2) fail("expected at least two code-reading bodies"); const positions=[1,2,3].map(n=>q.filter(x=>x.correctChoice===n).length); if(positions.some(n=>n!==4)) fail(`unbalanced answer positions: ${positions}`); const q11=q[10]; if(!q11.body?.includes("{name}")||!q11.body.includes("{count + 1}")||q11.choices[0]!=="Mali has 3 pizzas"||!/วงเล็บปีกกา \{\}/.test(q11.explanation)) fail("Q11 must directly test JSX {} expression evaluation"); const q12=q[11]; if(!q12.body?.includes("type PizzaProps")||!q12.choices[2].includes(".tsx")||!q12.choices[2].includes("บังคับ")) fail("Q12 must test typed props and TSX"); console.log(`targeted content: OK (${codeBodies} code bodies; answer positions ${positions.join("/")})`)'
   ```

   Result: `targeted content: OK (4 code bodies; answer positions 4/4/4)`.

4. Formatting and change-scope checks:

   ```sh
   git diff --check
   git status --short
   ```

   Result: `git diff --check` exited 0. Before committing, status contains only the quiz JSON and this report.

## Self-review

Read all 12 prompts, choices, explanations, and code bodies after the edits. Every question has exactly three distinct choices; correct positions are evenly balanced (four each at positions 1, 2, and 3); four bodies are valid `pre > code` snippets; Q11 and Q12 provide the two required, distinct lesson-09 assessments. No scope beyond lessons 01–09 was introduced.
