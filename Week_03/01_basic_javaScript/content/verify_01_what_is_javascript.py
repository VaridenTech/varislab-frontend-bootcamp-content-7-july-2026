#!/usr/bin/env python3
"""Verify that the classroom HTML preserves the lesson and works offline."""

from __future__ import annotations

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parent
MARKDOWN_PATH = ROOT / "01_what_is_javascript.md"
HTML_PATH = ROOT / "01_what_is_javascript.html"


class LessonParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: list[str] = []
        self.fragment_links: list[str] = []
        self.tags: Counter[str] = Counter()
        self.text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.tags[tag] += 1
        attributes = dict(attrs)
        if attributes.get("id"):
            self.ids.append(attributes["id"] or "")
        href = attributes.get("href")
        if href and href.startswith("#") and len(href) > 1:
            self.fragment_links.append(href[1:])

    def handle_data(self, data: str) -> None:
        self.text.append(data)


def normalize(value: str) -> str:
    value = re.sub(r"[`*_]", "", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def source_fragments(markdown: str) -> list[str]:
    fragments: list[str] = []
    in_code = False

    for raw_line in markdown.splitlines():
        line = raw_line.strip()
        if line.startswith("```"):
            in_code = not in_code
            continue
        if not line or re.fullmatch(r"\|?[\s:|-]+\|?", line):
            continue

        if line.startswith("|"):
            cells = [normalize(cell) for cell in line.strip("|").split("|")]
            fragments.extend(cell for cell in cells if cell)
            continue

        if not in_code:
            line = re.sub(r"^#{1,6}\s+", "", line)
            line = re.sub(r"^>\s?", "", line)
            line = re.sub(r"^(?:[-*]|\d+\.)\s+", "", line)
        fragment = normalize(line)
        if fragment:
            fragments.append(fragment)

    return fragments


def main() -> None:
    assert HTML_PATH.exists(), f"Missing {HTML_PATH.name}"

    markdown = MARKDOWN_PATH.read_text(encoding="utf-8")
    html = HTML_PATH.read_text(encoding="utf-8")
    parser = LessonParser()
    parser.feed(html)

    visible_text = normalize(" ".join(parser.text))
    missing_fragments = [
        fragment for fragment in source_fragments(markdown) if fragment not in visible_text
    ]
    assert not missing_fragments, "Missing source content:\n- " + "\n- ".join(
        missing_fragments
    )

    for tag in ("header", "nav", "main", "section", "aside", "footer"):
        assert parser.tags[tag], f"Missing semantic <{tag}> landmark"
    assert parser.tags["section"] >= 9, "Expected at least nine lesson sections"
    assert parser.tags["details"] and parser.tags["summary"], "Missing answer disclosure"

    duplicate_ids = [item for item, count in Counter(parser.ids).items() if count > 1]
    assert not duplicate_ids, f"Duplicate IDs: {duplicate_ids}"
    missing_targets = sorted(set(parser.fragment_links) - set(parser.ids))
    assert not missing_targets, f"Missing fragment targets: {missing_targets}"

    required_ids = {
        "top",
        "lesson",
        "schedule",
        "opening",
        "browser",
        "platforms",
        "scripting",
        "why-javascript",
        "activity",
        "check",
        "summary",
        "welcomeButton",
        "message",
        "readingProgress",
    }
    assert required_ids <= set(parser.ids), f"Missing IDs: {sorted(required_ids - set(parser.ids))}"

    required_code = (
        'document.querySelector("#welcomeButton")',
        'button.addEventListener("click"',
        'message.textContent = "ยินดีต้อนรับสู่ JavaScript!"',
        'console.log("Hello, JavaScript!")',
    )
    for snippet in required_code:
        assert snippet in html, f"Missing code example: {snippet}"

    assert "@media print" in html, "Missing print stylesheet"
    assert "@media (max-width: 760px)" in html, "Missing mobile stylesheet"
    assert "prefers-reduced-motion" in html, "Missing reduced-motion support"
    assert 'aria-live="polite"' in html, "Demo result must be announced"
    assert 'window.addEventListener("beforeprint"' in html, (
        "Print preparation must reveal closed instructor answers"
    )
    assert 'window.addEventListener("afterprint"' in html, (
        "Print cleanup must restore the instructor's answer state"
    )
    assert not re.search(r'<(?:link|script)\b[^>]+(?:href|src)=["\']https?://', html), (
        "External dependencies are not allowed"
    )

    print("Lesson HTML verification passed.")


if __name__ == "__main__":
    main()
