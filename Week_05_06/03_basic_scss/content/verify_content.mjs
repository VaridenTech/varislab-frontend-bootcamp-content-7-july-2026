import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const contentDir = new URL(".", import.meta.url);
const contentPath = path.resolve(contentDir.pathname);

export const LESSONS = [
  { file: "01_what_is_scss.html", title: "SCSS คืออะไร?" },
  { file: "02_installing_and_compiling_sass.html", title: "ติดตั้งและคอมไพล์ Sass" },
  { file: "03_variables.html", title: "ตัวแปรใน SCSS" },
  { file: "04_nesting_and_parent_selector.html", title: "Nesting และ Parent Selector" },
  { file: "05_partials_and_use.html", title: "Partial และ @use" },
  { file: "06_organizing_files_and_modules.html", title: "จัดระเบียบไฟล์และโมดูล" },
  { file: "07_mixins_and_include.html", title: "Mixins และ @include" },
  { file: "08_mixin_parameters_and_content.html", title: "พารามิเตอร์ของ Mixin และ @content" },
  { file: "09_functions_and_built_in_modules.html", title: "Functions และ Built-in Modules" },
  { file: "10_lists_and_maps.html", title: "Lists และ Maps" },
  { file: "11_control_flow.html", title: "Control Flow" },
  { file: "12_css_output_source_maps_and_best_practices.html", title: "CSS Output, Source Maps และ Best Practices" },
];

const localHrefPattern = /href="([^":#][^"#]*)"/g;
const semanticBlockPattern =
  /<(p|li|blockquote|summary|details|pre|td|th)[^>]*>[\s\S]*?<\/\1>/g;
const negativeImportGuidancePhrases = [
  "legacy",
  "deprecated",
  "deprecate",
  "should not be used",
  "do not use",
  "not be used for new code",
  "avoid",
  "ไม่ควรใช้",
  "ห้ามใช้",
  "เลิกใช้",
  "ไม่แนะนำ",
  "deprecated and should not be used",
  "use @use instead",
  "replace with @use",
  "แทนที่ด้วย @use",
];

async function readLocalFile(relativePath) {
  return readFile(path.join(contentPath, relativePath), "utf8");
}

function collectLocalHrefs(html) {
  return Array.from(html.matchAll(localHrefPattern), (match) => match[1]);
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function collectSemanticBlocks(html) {
  return Array.from(html.matchAll(semanticBlockPattern), (match) => ({
    html: match[0],
    start: match.index ?? 0,
    end: (match.index ?? 0) + match[0].length,
    text: stripHtml(match[0]).toLowerCase(),
  }));
}

function assertImportUsagePolicy(html) {
  const blocks = collectSemanticBlocks(html);
  const importMentions = Array.from(html.matchAll(/@import\b/g));

  for (const mention of importMentions) {
    const mentionIndex = mention.index ?? 0;
    const containingBlock = blocks.find(
      (block) => mentionIndex >= block.start && mentionIndex < block.end
    );

    assert.ok(
      containingBlock,
      "Each @import mention must live inside a semantic teaching block."
    );

    const hasNegativeGuidance = negativeImportGuidancePhrases.some((phrase) =>
      containingBlock.text.includes(phrase)
    );

    assert.ok(
      hasNegativeGuidance,
      `@import may only appear in explicitly negative/deprecated guidance. Block text: "${containingBlock.text}"`
    );
  }
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
  assertImportUsagePolicy(html);
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
