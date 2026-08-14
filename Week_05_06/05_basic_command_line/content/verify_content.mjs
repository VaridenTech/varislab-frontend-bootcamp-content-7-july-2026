import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const contentDir = new URL(".", import.meta.url);
const contentPath = path.resolve(contentDir.pathname);
const strict = process.argv.includes("--strict");

export const LESSONS = [
  { file: "01_what_is_command_line.html", title: "Command Line คืออะไร?" },
  { file: "02_opening_your_terminal.html", title: "เปิด Terminal ครั้งแรก" },
  { file: "03_anatomy_of_a_command.html", title: "โครงสร้างของคำสั่ง" },
  { file: "04_navigating_the_filesystem.html", title: "เดินทางในระบบไฟล์" },
  { file: "05_paths_absolute_and_relative.html", title: "Path แบบ Absolute และ Relative" },
  { file: "06_creating_files_and_folders.html", title: "สร้างไฟล์และโฟลเดอร์" },
  { file: "07_copying_moving_deleting.html", title: "คัดลอก ย้าย และลบ" },
  { file: "08_viewing_file_contents.html", title: "ดูและค้นหาเนื้อหาในไฟล์" },
  { file: "09_shortcuts_history_and_wildcards.html", title: "ทางลัด ประวัติคำสั่ง และ Wildcard" },
  { file: "10_environment_variables_and_path.html", title: "Environment Variables และ PATH" },
  { file: "11_installing_node_and_npm.html", title: "ติดตั้ง Node.js และ npm" },
  { file: "12_running_node_projects.html", title: "รันสคริปต์และโปรเจกต์ Node" },
];

const WINDOWS_CALLOUT_REQUIRED = new Set(
  LESSONS.slice(1, 11).map((lesson) => lesson.file)
);

const localHrefPattern = /href="([^":#][^"#]*)"/g;
const lessonIndexLinkPattern = /<a\b([^>]*)href="([^"]+\.html)"([^>]*)>([\s\S]*?)<\/a>/g;
const calloutPattern = /<div\b[^>]*class="[^"]*\bcallout\b[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
const solutionDetailsPattern =
  /<details\b[^>]*>\s*<summary>ดูเฉลย<\/summary>([\s\S]*?)<\/details>/g;

async function readLocalFile(relativePath) {
  return readFile(path.join(contentPath, relativePath), "utf8");
}

async function fileExists(relativePath) {
  return readFile(path.join(contentPath, relativePath), "utf8").then(
    () => true,
    () => false
  );
}

function collectLocalHrefs(html) {
  return Array.from(html.matchAll(localHrefPattern), (match) => match[1]);
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractSingleTagText(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "g");
  const matches = Array.from(html.matchAll(pattern));

  assert.equal(matches.length, 1, `Expected exactly one <${tagName}> element.`);

  return normalizeText(stripHtml(matches[0][1]));
}

function lessonTitleMatchesExpected(actualTitle, expectedTitle) {
  const normalizedActual = normalizeText(actualTitle);
  const normalizedExpected = normalizeText(expectedTitle);
  const suffixPattern = new RegExp(
    `^${escapeRegExp(normalizedExpected)}(?:\\s*[-–—|·:]\\s*.+)?$`
  );

  return suffixPattern.test(normalizedActual);
}

function collectIndexLessonLinks(indexHtml) {
  return Array.from(indexHtml.matchAll(lessonIndexLinkPattern), (match) => ({
    href: match[2],
    text: normalizeText(stripHtml(match[4])),
  })).filter((link) => link.href !== "index.html");
}

function collectSolutionDetails(html) {
  return Array.from(html.matchAll(solutionDetailsPattern), (match) => match[1]);
}

function hasNonEmptyParagraph(html) {
  const paragraphs = Array.from(html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g));

  return paragraphs.some((paragraph) => normalizeText(stripHtml(paragraph[1])).length > 0);
}

function assertSolutionDetailsHaveExplanation(sourceFile, html) {
  const solutions = collectSolutionDetails(html);

  assert.ok(
    solutions.length > 0,
    `${sourceFile}: expected at least one solution <details> with <summary>ดูเฉลย</summary>.`
  );

  for (const [index, solutionHtml] of solutions.entries()) {
    assert.ok(
      hasNonEmptyParagraph(solutionHtml),
      `${sourceFile}: solution <details> #${index + 1} must include at least one non-empty <p> explanation.`
    );
  }
}

function assertWindowsCallout(sourceFile, html) {
  if (!WINDOWS_CALLOUT_REQUIRED.has(sourceFile)) {
    return;
  }

  const callouts = Array.from(html.matchAll(calloutPattern), (match) =>
    stripHtml(match[1])
  );

  assert.ok(
    callouts.some((text) => text.includes("บน Windows")),
    `${sourceFile}: expected a <div class="callout"> containing "บน Windows".`
  );
}

function isExternalHref(href) {
  return /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//");
}

async function assertLocalTargetsExist(sourceFile, html, pendingFiles) {
  const hrefs = collectLocalHrefs(html);

  for (const href of hrefs) {
    if (isExternalHref(href)) {
      continue;
    }

    const targetFile = href.split("?")[0].split("#")[0];

    if (pendingFiles.has(targetFile)) {
      continue;
    }

    const targetPath = path.join(contentPath, targetFile);
    await readFile(targetPath, "utf8").catch((error) => {
      error.message = `${sourceFile}: missing local href target ${targetFile}\n${error.message}`;
      throw error;
    });
  }
}

function assertCommonLessonContract(sourceFile, html) {
  assert.match(html, /<html lang="th">/);
  assert.match(html, /<meta\s+name="description"/);
  assert.equal((html.match(/<h1>/g) ?? []).length, 1);
  assert.match(html, /<h2>แบบฝึกหัด<\/h2>/);
  assert.match(html, /<summary>ดูเฉลย<\/summary>/);
  assert.match(html, /href="lesson\.css"/);
  assert.match(html, /href="index\.html"/);
  assert.equal((html.match(/<title>/g) ?? []).length, 1);
  assert.match(html, /<\/html>\s*$/);
  assertSolutionDetailsHaveExplanation(sourceFile, html);
  assertWindowsCallout(sourceFile, html);
}

function assertLessonTitle(html, lesson) {
  const titleText = extractSingleTagText(html, "title");

  assert.ok(
    lessonTitleMatchesExpected(titleText, lesson.title),
    `Lesson title mismatch for ${lesson.file}: expected "${lesson.title}" or that title with the standard suffix, got "${titleText}"`
  );
}

function assertAdjacentNavigation(html, index) {
  const previousLesson = LESSONS[index - 1];
  const nextLesson = LESSONS[index + 1];

  if (previousLesson) {
    assert.match(
      html,
      new RegExp(
        `href="${previousLesson.file}"[^>]*rel="prev"|rel="prev"[^>]*href="${previousLesson.file}"`
      )
    );
  } else {
    assert.doesNotMatch(html, /rel="prev"/);
  }

  if (nextLesson) {
    assert.match(
      html,
      new RegExp(
        `href="${nextLesson.file}"[^>]*rel="next"|rel="next"[^>]*href="${nextLesson.file}"`
      )
    );
  } else {
    assert.doesNotMatch(html, /rel="next"/);
  }
}

function assertIndexLinks(indexHtml) {
  const lessonLinks = collectIndexLessonLinks(indexHtml);

  assert.equal(lessonLinks.length, LESSONS.length, "Index must link to each lesson exactly once.");
  assert.deepEqual(
    lessonLinks.map((link) => link.href),
    LESSONS.map((lesson) => lesson.file),
    "Index lesson hrefs must match the ordered lesson list."
  );
  assert.deepEqual(
    lessonLinks.map((link) => link.text),
    LESSONS.map((lesson) => lesson.title),
    "Index lesson labels must match the ordered lesson titles."
  );
  assert.equal((indexHtml.match(/<title>/g) ?? []).length, 1);
  assert.match(indexHtml, /<\/html>\s*$/);
}

async function main() {
  const pendingFiles = new Set();

  for (const lesson of LESSONS) {
    if (!(await fileExists(lesson.file))) {
      pendingFiles.add(lesson.file);
    }
  }

  if (strict) {
    assert.equal(
      pendingFiles.size,
      0,
      `Strict mode: missing lesson files: ${[...pendingFiles].join(", ")}`
    );
  }

  const indexHtml = await readLocalFile("index.html");

  assertIndexLinks(indexHtml);
  await assertLocalTargetsExist("index.html", indexHtml, pendingFiles);

  for (const [index, lesson] of LESSONS.entries()) {
    if (pendingFiles.has(lesson.file)) {
      continue;
    }

    const html = await readLocalFile(lesson.file);

    assertCommonLessonContract(lesson.file, html);
    assertLessonTitle(html, lesson);
    assertAdjacentNavigation(html, index);
    await assertLocalTargetsExist(lesson.file, html, pendingFiles);
  }

  const written = LESSONS.length - pendingFiles.size;

  console.log(`Verified ${written}/${LESSONS.length} command line lessons.`);

  if (pendingFiles.size > 0) {
    console.log(`Pending: ${[...pendingFiles].join(", ")}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
