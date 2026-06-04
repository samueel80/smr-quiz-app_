import json
import re

# Load database
with open("preguntas.json", "r", encoding="utf-8") as f:
    db = json.load(f)

all_qs = db.get("questions", [])

subjects = [
    "Aplicaciones Web",
    "Empleabilidad I",
    "HLC (Horas de Libre Configuración)",
    "Servicios Red",
    "Sistemas Operativos en Red",
    "Inglés",
    "Empleabilidad II",
    "Digitalización",
    "Seguridad Informatica"
]

# We want 20 questions per subject
selected_questions = []

for sub in subjects:
    # Filter questions for this subject
    sub_qs = [q for q in all_qs if q.get("subject") == sub]
    
    # Deduplicate questions by normalized question text
    seen = set()
    unique_sub_qs = []
    for q in sub_qs:
        norm = q["question"].strip().lower()
        if norm not in seen:
            seen.add(norm)
            unique_sub_qs.append(q)
            
    # Sort them to keep selection deterministic and clean
    unique_sub_qs.sort(key=lambda x: x["question"])
    
    # Pick 20 questions
    picked = unique_sub_qs[:20]
    
    for p in picked:
        selected_questions.append({
            "question": p["question"],
            "options": p["options"],
            "answer": p["answer"],
            "subject": p["subject"]
        })

print(f"Selected {len(selected_questions)} questions from official list.")

# Generate JS array code
js_array_lines = []
js_array_lines.append("const SEED_REPASO_QUESTIONS = [")
for idx, q in enumerate(selected_questions):
    js_array_lines.append("    {")
    js_array_lines.append(f'        question: {json.dumps(q["question"], ensure_ascii=False)},')
    
    # Options formatting
    opts_str = ", ".join(json.dumps(opt, ensure_ascii=False) for opt in q["options"])
    js_array_lines.append(f'        options: [{opts_str}],')
    
    js_array_lines.append(f'        answer: {json.dumps(q["answer"], ensure_ascii=False)},')
    js_array_lines.append(f'        subject: {json.dumps(q["subject"], ensure_ascii=False)},')
    js_array_lines.append(f'        source: "repaso"')
    
    if idx < len(selected_questions) - 1:
        js_array_lines.append("    },")
    else:
        js_array_lines.append("    }")
js_array_lines.append("];")

js_array_code = "\n".join(js_array_lines)

# Read app.js
with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace SEED_REPASO_QUESTIONS pattern in app.js
pattern = r"const SEED_REPASO_QUESTIONS = \[.*?\];\n"
match = re.search(pattern, content, re.DOTALL)
if match:
    new_content = content.replace(match.group(0), js_array_code + "\n")
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully updated app.js with official questions!")
else:
    print("Could not find SEED_REPASO_QUESTIONS pattern in app.js")
