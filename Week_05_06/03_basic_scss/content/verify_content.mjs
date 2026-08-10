import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const contentDir = new URL(".", import.meta.url);
const contentPath = path.resolve(contentDir.pathname);

export const LESSONS = [
  { file: "01_what_is_scss.html", title: "SCSS คืออะไร?" },
  { file: "02_install_sass.html", title: "ติดตั้ง Sass และเริ่มคอมไพล์" },
  { file: "03_variables_and_nesting.html", title: "ตัวแปรและการซ้อน Selector" },
  { file: "04_partials_and_use.html", title: "แยกไฟล์ Partial และ @use" },
  { file: "05_mixins.html", title: "Mixin และ @include" },
  { file: "06_extend_and_placeholder.html", title: "@extend และ Placeholder Selector" },
  { file: "07_interpolation_and_math.html", title: "Interpolation และการคำนวณ" },
  { file: "08_lists_and_maps.html", title: "Lists และ Maps" },
  { file: "09_loops_and_each.html", title: "Loops และ @each" },
  { file: "10_functions_and_tokens.html", title: "Functions และ Design Tokens" },
  { file: "11_project_structure.html", title: "จัดโครงสร้างโปรเจกต์ SCSS" },
  { file: "12_final_practice.html", title: "แบบฝึกหัดสรุปท้ายคอร์ส" },
];

const localHrefPattern = /href="([^":#][^"#]*)"/g;

async function readLocalFile(relativePath) {
  return readFile(path.join(contentPath, relativePath), "utf8");
}

function collectLocalHrefs(html) {
  return Array.from(html.matchAll(localHrefPattern), (match) => match[1]);
}

async function assertLocalTargetsExist(sourceFile, html) {
  const hrefs = collectLocalHrefs(html);

  for (const href of hrefs) {
    const targetFile = href.split("?")[0].split("#")[0];
    const targetPath = path.join(contentPath, targetFile);
    await readFile(targetPath, "utf8").catch((error) => {
      error.message = `${sourceFile}: missing local href target ${targetFile}\n${error.message}`;
      throw error;
    });
  }
}

function assertCommonLessonContract(html) {
  assert.match(html, /<html lang="th">/);
  assert.match(html, /<meta name="description"/);
  assert.equal((html.match(/<h1>/g) ?? []).length, 1);
  assert.match(html, /<h2>แบบฝึกหัด<\/h2>/);
  assert.match(html, /<details>/);
  assert.match(html, /<summary>ดูเฉลย<\/summary>/);
  assert.match(html, /href="lesson\.css"/);
  assert.match(html, /href="index\.html"/);
  assert.equal((html.match(/<title>/g) ?? []).length, 1);
  assert.match(html, /<\/html>\s*$/);
  assert.doesNotMatch(html, /@import\b/, "Lessons must not recommend Sass @import.");
}

function assertAdjacentNavigation(html, index) {
  const previousLesson = LESSONS[index - 1];
  const nextLesson = LESSONS[index + 1];

  if (previousLesson) {
    assert.match(
      html,
      new RegExp(`href="${previousLesson.file}"[^>]*rel="prev"|rel="prev"[^>]*href="${previousLesson.file}"`)
    );
  } else {
    assert.doesNotMatch(html, /rel="prev"/);
  }

  if (nextLesson) {
    assert.match(
      html,
      new RegExp(`href="${nextLesson.file}"[^>]*rel="next"|rel="next"[^>]*href="${nextLesson.file}"`)
    );
  } else {
    assert.doesNotMatch(html, /rel="next"/);
  }
}

function assertIndexLinks(indexHtml) {
  const lessonLinks = Array.from(
    indexHtml.matchAll(/<a[^>]+href="([^"]+\.html)"/g),
    (match) => match[1]
  ).filter((href) => href !== "index.html");

  assert.equal(lessonLinks.length, LESSONS.length, "Index must link to each lesson exactly once.");
  assert.deepEqual(
    lessonLinks,
    LESSONS.map((lesson) => lesson.file),
    "Index lesson links must match the ordered lesson list."
  );
  assert.equal((indexHtml.match(/<title>/g) ?? []).length, 1);
  assert.match(indexHtml, /<\/html>\s*$/);
}

async function main() {
  const indexHtml = await readLocalFile("index.html");

  assertIndexLinks(indexHtml);
  await assertLocalTargetsExist("index.html", indexHtml);

  for (const [index, lesson] of LESSONS.entries()) {
    const html = await readLocalFile(lesson.file);

    assertCommonLessonContract(html);
    assertAdjacentNavigation(html, index);
    await assertLocalTargetsExist(lesson.file, html);
  }

  console.log("Verified 12 SCSS lessons.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
