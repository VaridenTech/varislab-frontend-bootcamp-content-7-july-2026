# Tailwind and Cursor Workshop Quiz Design

## Goal

Create a Thai-language quiz covering lessons 01–16 in `Week_05_06/01_tailwind_cursor_workshop/content/`. The quiz should check practical understanding of the workshop's Tailwind CSS, Cursor workflow, UI review, and component-refactoring concepts.

## Output

Write `extra/quiz-questions-tailwind-cursor-workshop.json` using the structure in `extra/quiz-questions-sample.json`:

- A top-level `questions` array.
- Exactly 16 questions, ordered by lesson number, with one question sourced from each lesson.
- Each question contains `prompt`, exactly three `choices`, a 1-based `correctChoice`, and a concise `explanation`.
- Use `body` only when a code snippet is necessary to understand the question.

## Question Style

Use clear, natural Thai suitable for bootcamp learners. Favor practical comprehension and small scenarios over isolated trivia. Each incorrect choice should be plausible but unambiguously wrong according to its lesson. Avoid trick questions and avoid relying on information outside the 16 lesson files.

## Validation

Parse the result as JSON and verify:

- There are exactly 16 questions.
- Every question has exactly three non-empty choices.
- Every `correctChoice` is an integer from 1 through 3 and selects the intended answer.
- Every question includes a non-empty explanation.
- Lesson coverage is one question per lesson in lesson order.
