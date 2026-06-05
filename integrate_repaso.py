#!/usr/bin/env python3
"""Integra preguntas de repaso generadas por IA en preguntas.json (estilo Cesur: 3 opciones)."""

import json
import re
import shutil
from typing import Optional
from collections import Counter
from datetime import datetime
from pathlib import Path

BASE = Path(__file__).parent
PREGUNTAS_PATH = BASE / "preguntas.json"
BACKUP_DIR = BASE / "backups"

PENDING_SOURCES = [
    BASE / "new_repaso_questions.json",
    Path.home() / ".gemini/antigravity/brain/99f69ddf-4d82-473b-ae2e-1e2a5bfff05d/repaso_questions.json",
    Path.home() / ".gemini/antigravity/brain/3b905ea4-9561-42d8-ad52-b7018a2df877/repaso_questions.json",
    Path.home() / ".gemini/antigravity/brain/0f6d1c40-4064-48bb-bf00-4f0382d13928/repaso_questions_batch.json",
]

KNOWN_ANSWER_FIXES = {
    "Una técnica de almacenamiento temporal para acelitar el acceso a datos frecuentes":
        "Una técnica de almacenamiento temporal para acelerar el acceso a datos frecuentes",
}


def load_questions(path: Path) -> list:
    if not path.exists():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, list):
        return data
    if isinstance(data, dict):
        return data.get("questions", [])
    return []


def normalize_subject(subject: str) -> str:
    if not subject:
        return "Sin clasificar"
    s = subject.strip()
    s = re.sub(r"_\d+", "", s)
    s = re.sub(r"\s+\d+", "", s)
    s = re.sub(r"\d+", "", s)
    s = s.replace("_", " ").strip()
    s = re.split(r"\b(ud|uds|unidades|unidad|tema|temas)\b", s, flags=re.I)[0].strip()
    upper = s.upper()
    lower = s.lower()
    if upper in ("HCL", "HLC"):
        return "HLC (Horas de Libre Configuración)"
    if lower == "sistemas operativos en red":
        return "Sistemas Operativos en Red"
    if lower in ("seguridad informática", "seguridad informatica"):
        return "Seguridad Informatica"
    if lower == "aplicaciones web":
        return "Aplicaciones Web"
    if lower == "digitalización" or lower == "digitalizacion":
        return "Digitalización"
    if lower == "servicios red":
        return "Servicios Red"
    if lower == "inglés" or lower == "ingles":
        return "Inglés"
    if lower == "empleabilidad i":
        return "Empleabilidad I"
    if lower == "empleabilidad ii":
        return "Empleabilidad II"
    return s


def fix_answer(answer: str, options: list) -> str:
    answer = answer.strip()
    if answer in KNOWN_ANSWER_FIXES:
        answer = KNOWN_ANSWER_FIXES[answer]
    if answer in options:
        return answer
    # typo: answer differs by one word from an option
    answer_norm = answer.lower()
    for opt in options:
        if answer_norm.replace("acelitar", "acelerar") == opt.lower():
            return opt
    return answer



def to_three_options(options: list, answer: str) -> Optional[list]:
    seen = []
    for opt in options:
        opt = opt.strip()
        if opt and opt not in seen:
            seen.append(opt)
    answer = fix_answer(answer, seen)
    if answer not in seen:
        return None
    wrong = [o for o in seen if o != answer]
    if len(wrong) < 2:
        return None
    return [answer, wrong[0], wrong[1]]


def normalize_question(raw: dict) -> Optional[dict]:
    question = (raw.get("question") or "").strip()
    if not question:
        return None
    options = raw.get("options") or []
    if not isinstance(options, list) or len(options) < 3:
        return None
    answer = (raw.get("answer") or "").strip()
    if not answer:
        return None

    normalized_options = to_three_options(options, answer)
    if not normalized_options:
        return None

    return {
        "question": question,
        "options": normalized_options,
        "answer": fix_answer(answer, normalized_options),
        "subject": normalize_subject(raw.get("subject", "")),
        "source": "repaso",
    }


def norm_key(q: dict) -> str:
    return q["question"].strip().lower()


def main():
    data = json.loads(PREGUNTAS_PATH.read_text(encoding="utf-8"))
    existing = data.get("questions", [])
    existing_keys = {norm_key(q) for q in existing}

    pending_raw = []
    for src in PENDING_SOURCES:
        pending_raw.extend(load_questions(src))

    merged = list(existing)
    added = 0
    skipped_dup = 0
    skipped_invalid = 0
    fixes = []

    for raw in pending_raw:
        q = normalize_question(raw)
        if not q:
            skipped_invalid += 1
            continue
        key = norm_key(q)
        if key in existing_keys:
            skipped_dup += 1
            continue
        if q["answer"] not in q["options"]:
            skipped_invalid += 1
            continue
        existing_keys.add(key)
        merged.append(q)
        added += 1
        if raw.get("answer") != q["answer"]:
            fixes.append(raw.get("question", "")[:70])

    BACKUP_DIR.mkdir(exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = BACKUP_DIR / f"preguntas_{stamp}.json"
    shutil.copy2(PREGUNTAS_PATH, backup_path)

    data["questions"] = merged
    PREGUNTAS_PATH.write_text(
        json.dumps(data, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    subjects = Counter(q["subject"] for q in merged if q.get("source") == "repaso")
    total_repaso = sum(subjects.values())
    print(f"Backup: {backup_path}")
    print(f"Antes: {len(existing)} | Añadidas: {added} | Duplicadas: {skipped_dup} | Inválidas: {skipped_invalid}")
    print(f"Total ahora: {len(merged)} ({total_repaso} repaso)")
    print("Repaso por asignatura:")
    for subj, count in sorted(subjects.items(), key=lambda x: -x[1]):
        print(f"  {subj}: {count}")
    if fixes:
        print(f"Respuestas corregidas: {len(fixes)}")


if __name__ == "__main__":
    main()
