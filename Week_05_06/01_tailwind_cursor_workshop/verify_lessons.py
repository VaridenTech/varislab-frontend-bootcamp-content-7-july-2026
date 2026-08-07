#!/usr/bin/env python3
"""Structural checks for the Complete Intro to React lesson set.

Derives every expectation from the files themselves, so it is equally valid
before and after lessons are inserted or renumbered.

Usage: python3 verify_lessons.py
Exit code 0 = all checks pass.
"""
import re
import sys
from pathlib import Path

CONTENT = Path(__file__).resolve().parent / "content"


def main():
    errors = []
    lessons = sorted(CONTENT.glob("[0-9][0-9]_*.html"))
    if not lessons:
        print(f"FAIL: no lesson files found in {CONTENT}")
        return 1
    numbers = [int(p.name[:2]) for p in lessons]

    # 1. Lesson numbers run 1..N with no gaps and no duplicates.
    expected = list(range(1, len(lessons) + 1))
    if numbers != expected:
        errors.append(f"lesson numbers are not contiguous 1..{len(lessons)}: {numbers}")

    # 2. Every local .html link resolves to a file that exists.
    for p in lessons + [CONTENT / "index.html"]:
        html = p.read_text(encoding="utf-8")
        for href in re.findall(r'href="([^"#:]+\.html)"', html):
            if not (CONTENT / href).exists():
                errors.append(f"{p.name}: broken link -> {href}")

    # 3. The lesson number in .lesson-eyebrow matches the filename.
    for p in lessons:
        html = p.read_text(encoding="utf-8")
        m = re.search(r'class="lesson-eyebrow">บทเรียน\s*(\d+)', html)
        if not m:
            errors.append(f"{p.name}: no .lesson-eyebrow lesson number found")
        elif int(m.group(1)) != int(p.name[:2]):
            errors.append(
                f"{p.name}: eyebrow says lesson {m.group(1)}, filename says {p.name[:2]}"
            )

    # 4. prev/next form one unbroken chain across the whole course.
    for i, p in enumerate(lessons):
        html = p.read_text(encoding="utf-8")
        prev = re.search(r'href="([^"]+)" rel="prev"', html)
        nxt = re.search(r'href="([^"]+)" rel="next"', html)
        got_prev = prev.group(1) if prev else None
        got_next = nxt.group(1) if nxt else None
        want_prev = lessons[i - 1].name if i > 0 else None
        want_next = lessons[i + 1].name if i < len(lessons) - 1 else None
        if got_prev != want_prev:
            errors.append(f"{p.name}: rel=prev is {got_prev!r}, expected {want_prev!r}")
        if got_next != want_next:
            errors.append(f"{p.name}: rel=next is {got_next!r}, expected {want_next!r}")

    # 5. index.html links every lesson exactly once, in order.
    index = (CONTENT / "index.html").read_text(encoding="utf-8")
    linked = re.findall(r'href="([0-9][0-9]_[^"]+\.html)"', index)
    want = [p.name for p in lessons]
    if linked != want:
        missing = [n for n in want if n not in linked]
        extra = [n for n in linked if n not in want]
        detail = []
        if missing:
            detail.append(f"missing {missing}")
        if extra:
            detail.append(f"unexpected {extra}")
        if not detail:
            detail.append("listed out of order")
        errors.append("index.html: " + ", ".join(detail))

    for e in errors:
        print("FAIL:", e)
    print(f"\n{len(lessons)} lessons checked, {len(errors)} problem(s).")
    return 1 if errors else 0


sys.exit(main())
