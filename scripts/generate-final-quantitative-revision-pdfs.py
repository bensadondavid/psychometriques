"""Generate detailed revision sheets for quantitative lessons 16-21.

Requires reportlab and svglib. The rules, examples, traps, summary and figures
are extracted from the published lesson sources, with length limits for print.
"""

from __future__ import annotations

from html import escape
from math import ceil
from pathlib import Path
import re

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
from svglib.svglib import svg2rlg


ROOT = Path(__file__).resolve().parents[1]
LESSON_DIR = ROOT / "content/lessons"
ASSET_DIR = LESSON_DIR / "assets"
SCHEMA_DIR = ASSET_DIR / "schemas"
FONT = Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf")
FONT_BOLD = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")

LESSONS = (
    ("16-tableaux-donnees", "Tableaux et données"),
    ("17-angles-droites", "Angles et droites"),
    ("18-triangles", "Triangles"),
    ("19-quadrilateres-polygones", "Quadrilatères et polygones"),
    ("20-cercles", "Cercles"),
    ("21-espace-reperage", "Espace et repérage"),
)

MAROON = colors.HexColor("#45121d")
GOLD = colors.HexColor("#b58b52")
INK = colors.HexColor("#25303b")
MUTED = colors.HexColor("#5d626b")
PAPER = colors.HexColor("#f8f4ed")
LINE = colors.HexColor("#ddd1c1")


def plain(value: str) -> str:
    value = re.sub(r"!\[[^]]*\]\([^)]*\)", "", value)
    value = re.sub(r"<!--.*?-->", "", value, flags=re.S)
    value = re.sub(r"<[^>]+>", "", value)
    value = re.sub(r"\*\*|\$|\\\(|\\\)|\\\[|\\\]", "", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def concise(value: str, limit: int) -> str:
    value = plain(value)
    if len(value) <= limit:
        return value
    sentences = re.split(r"(?<=[.!?])\s+", value)
    kept = []
    for sentence in sentences:
        if len(" ".join(kept + [sentence])) > limit:
            break
        kept.append(sentence)
    if kept:
        return " ".join(kept)
    return value[: limit - 1].rsplit(" ", 1)[0] + "…"


def lesson_data(stem: str):
    source = (LESSON_DIR / f"{stem}.md").read_text(encoding="utf-8")
    sections = re.findall(
        r"^## Séquence (\d+) — ([^\n]+)\n(.*?)(?=^## |\Z)",
        source,
        flags=re.M | re.S,
    )
    if len(sections) < 9:
        raise ValueError(f"Too few sequences in {stem}")
    cards = []
    for number, title, body in sections:
        if "### Regardons un exemple ensemble" not in body:
            raise ValueError(f"Worked example missing in {stem}, sequence {number}")
        before, after = body.split("### Regardons un exemple ensemble", 1)
        example = after.split("### À vous, étape par étape", 1)[0]
        rule_paragraphs = [
            item for item in before.split("\n\n")
            if item.strip() and not item.lstrip().startswith(("![", "<!--", "|"))
        ]
        example_paragraphs = [
            item for item in example.split("\n\n")
            if item.strip() and not item.lstrip().startswith(("![", "<!--", "|"))
        ]
        trap = re.search(r"^\*\*Le piège à éviter :\*\* (.+)$", body, re.M)
        if not rule_paragraphs or not example_paragraphs or not trap:
            raise ValueError(f"Incomplete card in {stem}, sequence {number}")
        example_text = example_paragraphs[0]
        if plain(example_text).endswith(":") and len(example_paragraphs) > 1:
            example_text = example_paragraphs[1]
        cards.append((
            f"{number}. {plain(title)}",
            concise(" ".join(rule_paragraphs[:2]), 285),
            concise(example_text, 200),
            concise(trap.group(1), 155),
        ))

    sheet = source.split("## Votre fiche de révision\n", 1)[1]
    lines = [line.strip() for line in sheet.splitlines() if line.strip()]
    table_lines = [line for line in lines if line.startswith("|")]
    rows = [
        [plain(cell) for cell in line.strip("|").split("|")]
        for line in table_lines[2:]
    ]
    if len(rows) != 8 or any(len(row) != 2 for row in rows):
        raise ValueError(f"Revision summary incomplete in {stem}")
    method = source.split("## Votre méthode en situation\n", 1)[1].split("\n## ", 1)[0]
    method_paragraphs = [
        item for item in method.split("\n\n")
        if item.strip() and not item.lstrip().startswith(("![", "<!--", "|", "###"))
    ]
    method_text = concise(" ".join(method_paragraphs[:2]), 380)
    figure = re.search(r"!\[([^]]+)\]\(assets/([0-9]{2}-[a-z-]+\.svg)\)", source)
    return cards, rows, method_text, figure


def decorate(canvas, document, number: str, title: str):
    width, height = A4
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, width, height, fill=1, stroke=0)
    canvas.setFillColor(MAROON)
    canvas.rect(0, height - 115, width, 115, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.setFont("ArialUnicode", 8)
    canvas.drawString(42, height - 32, f"RÉFLEXION QUANTITATIVE  /  LEÇON {number}")
    canvas.setFillColor(colors.white)
    canvas.setFont("ArialBold", 19)
    canvas.drawString(42, height - 61, title)
    canvas.setFont("ArialUnicode", 10)
    canvas.drawString(42, height - 82, "Méthodes, exemples et pièges à vérifier")
    canvas.setStrokeColor(LINE)
    canvas.line(42, 47, width - 42, 47)
    canvas.setFillColor(MUTED)
    canvas.setFont("ArialUnicode", 7.5)
    canvas.drawString(42, 31, "Psychométriques.fr · Fiche de révision")
    canvas.drawRightString(width - 42, 31, f"Page {document.page}")


def make_pdf(stem: str, title: str):
    number = stem[:2]
    cards, rows, method, figure = lesson_data(stem)
    output = ASSET_DIR / f"fiche-revision-{stem[3:]}.pdf"
    body = ParagraphStyle(
        "body", fontName="ArialUnicode", fontSize=9.1, leading=13.6,
        textColor=INK,
    )
    caption = ParagraphStyle(
        "caption", parent=body, fontSize=8.8, leading=13, textColor=MUTED,
    )
    heading = ParagraphStyle(
        "heading", fontName="ArialBold", fontSize=15, leading=20,
        textColor=MAROON,
    )
    card_heading = ParagraphStyle(
        "card-heading", parent=heading, fontSize=10.5, leading=14,
    )
    doc = SimpleDocTemplate(
        str(output), pagesize=A4, leftMargin=42, rightMargin=42,
        topMargin=136, bottomMargin=63,
        title=f"Fiche de révision - {title} | Psychométriques.fr",
        author="Psychométriques.fr",
    )
    story = []
    page_count = ceil(len(cards) / 4)
    base, extra = divmod(len(cards), page_count)
    offset = 0
    for page_index in range(page_count):
        if page_index:
            story.append(PageBreak())
        take = base + (1 if page_index < extra else 0)
        story.extend([
            Paragraph(f"{page_index + 1:02d} / Comprendre et appliquer", heading),
            Spacer(1, 4),
            Paragraph("Règle, exemple résolu et erreur fréquente tirés de la leçon.", caption),
            Spacer(1, 13),
        ])
        for card_title, rule, example, trap in cards[offset:offset + take]:
            cells = [
                [Paragraph(escape(card_title), card_heading)],
                [Paragraph(f'<b>Règle.</b> {escape(rule)}', body)],
                [Paragraph(f'<b>Exemple.</b> {escape(example)}', body)],
                [Paragraph(f'<b>À vérifier.</b> {escape(trap)}', body)],
            ]
            card = Table(cells, colWidths=[A4[0] - 84], hAlign="LEFT")
            card.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("LINEBEFORE", (0, 0), (0, -1), 3, GOLD),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, 0), 8),
                ("BOTTOMPADDING", (0, 0), (-1, 0), 5),
                ("TOPPADDING", (0, 1), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 1), (-1, -1), 3),
                ("BOTTOMPADDING", (0, -1), (-1, -1), 9),
            ]))
            story.extend([card, Spacer(1, 9)])
        offset += take

    story.extend([
        PageBreak(),
        Paragraph(f"{page_count + 1:02d} / Repères essentiels", heading),
        Spacer(1, 5),
        Paragraph("Le résumé de la leçon à relire avant les exercices.", caption),
        Spacer(1, 14),
    ])
    header = ParagraphStyle("table-header", parent=body, fontName="ArialBold", textColor=colors.white)
    label = ParagraphStyle("table-label", parent=body, fontName="ArialBold", textColor=MAROON)
    table = Table(
        [[Paragraph("Situation", header), Paragraph("Ce qu’il faut retenir", header)]]
        + [[Paragraph(escape(left), label), Paragraph(escape(right), body)] for left, right in rows],
        colWidths=[140, A4[0] - 84 - 140], repeatRows=1, hAlign="LEFT",
    )
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), MAROON),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PAPER]),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW", (0, 0), (-1, -1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.extend([table, Spacer(1, 16), Paragraph("Méthode en situation", card_heading),
                  Spacer(1, 4), Paragraph(escape(method), body)])
    if figure:
        drawing = svg2rlg(str(SCHEMA_DIR / figure.group(2)))
        if drawing is None:
            raise ValueError(f"Unreadable figure {figure.group(2)}")
        scale = min(375 / drawing.width, 135 / drawing.height)
        drawing.scale(scale, scale)
        drawing.width *= scale
        drawing.height *= scale
        story.extend([
            Spacer(1, 10),
            drawing,
            Spacer(1, 3),
            Paragraph(escape(concise(figure.group(1), 170)), caption),
        ])

    doc.build(
        story,
        onFirstPage=lambda canvas, document: decorate(canvas, document, number, title),
        onLaterPages=lambda canvas, document: decorate(canvas, document, number, title),
    )
    return output


if __name__ == "__main__":
    pdfmetrics.registerFont(TTFont("ArialUnicode", str(FONT)))
    pdfmetrics.registerFont(TTFont("ArialBold", str(FONT_BOLD)))
    for stem, title in LESSONS:
        print(make_pdf(stem, title))
