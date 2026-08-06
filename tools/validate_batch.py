#!/usr/bin/env python3
"""Validate a generic TSV visual-novel translation batch.

This checks batch structure, duplicate IDs, empty targets, source/target tag and
placeholder signatures, and Japanese characters remaining in visible target
text. It does not judge translation accuracy.
"""

from __future__ import annotations

import argparse
import collections
import csv
import json
import re
import sys
from pathlib import Path


REQUIRED_FIELDS = {"line_id", "source_text", "target_text"}
TAG_RE = re.compile(r"<[^<>]*>")
PLACEHOLDER_RE = re.compile(r"\[\[[A-Z][A-Z0-9_]*\]\]")
JAPANESE_RE = re.compile(r"[\u3040-\u30ff\u3400-\u9fff]")


def signature(pattern: re.Pattern[str], text: str) -> collections.Counter[str]:
    return collections.Counter(pattern.findall(text))


def visible_text(text: str) -> str:
    return PLACEHOLDER_RE.sub("", TAG_RE.sub("", text))


def read_rows(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle, delimiter="\t")
        fields = reader.fieldnames or []
        return fields, list(reader)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("batch", type=Path, help="UTF-8 TSV translation batch")
    parser.add_argument(
        "--allow-japanese",
        action="store_true",
        help="do not report Japanese characters remaining in visible target text",
    )
    args = parser.parse_args()

    fields, rows = read_rows(args.batch)
    issues: list[dict[str, object]] = []
    missing_fields = sorted(REQUIRED_FIELDS - set(fields))
    if missing_fields:
        issues.append({"kind": "missing_fields", "fields": missing_fields})
        print(json.dumps({"file": str(args.batch), "rows": len(rows), "issues": issues}, indent=2))
        return 1

    id_counts = collections.Counter(row["line_id"] for row in rows)
    for line_id, count in sorted(id_counts.items()):
        if not line_id.strip():
            issues.append({"kind": "empty_line_id"})
        elif count > 1:
            issues.append({"kind": "duplicate_line_id", "line_id": line_id, "count": count})

    translated = 0
    for row in rows:
        line_id = row["line_id"]
        source = row["source_text"]
        target = row["target_text"]
        if not target.strip():
            issues.append({"kind": "empty_target", "line_id": line_id})
            continue
        translated += 1

        source_tags = signature(TAG_RE, source)
        target_tags = signature(TAG_RE, target)
        if source_tags != target_tags:
            issues.append(
                {
                    "kind": "tag_mismatch",
                    "line_id": line_id,
                    "source": dict(source_tags),
                    "target": dict(target_tags),
                }
            )

        source_placeholders = signature(PLACEHOLDER_RE, source)
        target_placeholders = signature(PLACEHOLDER_RE, target)
        if source_placeholders != target_placeholders:
            issues.append(
                {
                    "kind": "placeholder_mismatch",
                    "line_id": line_id,
                    "source": dict(source_placeholders),
                    "target": dict(target_placeholders),
                }
            )

        if not args.allow_japanese and JAPANESE_RE.search(visible_text(target)):
            issues.append({"kind": "japanese_remaining", "line_id": line_id})

    result = {
        "file": str(args.batch),
        "rows": len(rows),
        "translated": translated,
        "issues": issues,
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 1 if issues else 0


if __name__ == "__main__":
    sys.exit(main())
