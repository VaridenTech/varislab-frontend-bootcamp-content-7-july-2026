# Week 04 Router to User Interaction Quiz Design

## Goal

Create a Thai-language multiple-choice quiz based only on lessons 18–25 in `Week_04/02_complete_intro_to_react/content`, covering TanStack Router through testing user interaction.

## Output

- Add `extra/quiz-questions-week04-router-to-user-interaction.json`.
- Follow the object structure in `extra/quiz-questions-sample.json`.
- Store questions in a top-level `questions` array.
- Give each question a `prompt`, exactly three `choices`, a one-based `correctChoice`, and an `explanation`.
- Add an HTML `body` only when a code example is necessary to answer the question.

## Content Design

Use weighted coverage rather than forcing every lesson to have the same number of questions. Target 16–18 questions: larger or more concept-heavy lessons may receive two or three questions, while shorter lessons may receive one. The complete set must still include meaningful coverage of every lesson from 18 through 25.

Questions should primarily test concepts, behavior, trade-offs, and the ability to read code. Distractors must be plausible but unambiguously wrong according to the lesson material. Avoid trivia, duplicated concepts, trick wording, and facts not taught in the selected lessons.

Use natural Thai consistent with the existing Week 04 quizzes. Keep library names, APIs, identifiers, and code in their original English form. Explanations should state why the selected answer is correct and clarify the important misconception behind the alternatives when useful.

## Validation

- Parse the finished file with `jq`.
- Confirm every question has exactly three choices.
- Confirm every `correctChoice` is an integer from 1 through 3.
- Confirm required fields are present and non-empty.
- Confirm all lesson numbers 18–25 are represented by checking each question against its source lesson.
- Review code snippets for valid HTML escaping and fidelity to the lesson examples.
- Review the full quiz for answer ambiguity, repetition, and accidental reliance on material outside the selected range.

## Scope

Only the new quiz JSON and the workflow documentation needed to plan it are in scope. Existing lessons and quiz files will not be modified.
