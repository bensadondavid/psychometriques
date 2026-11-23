"""Create four-page revision sheets for quantitative lessons 11 to 15."""
from __future__ import annotations

from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
LESSONS = (
    ("11-vitesse-distance-temps", "Vitesse, distance et temps"),
    ("12-travail-debits", "Travail et débits"),
    ("13-suites-regularites", "Suites et régularités"),
    ("14-combinatoire", "Combinatoire"),
    ("15-probabilites", "Probabilités"),
)
ASSETS = ROOT / "content/lessons/assets"
LOGO = ROOT / "public/logo-psychos.png"
FONT = Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf")
FONT_BOLD = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")
MAROON = colors.HexColor("#45121d")
GOLD = colors.HexColor("#b58b52")
PAPER = colors.HexColor("#f8f4ed")
INK = colors.HexColor("#25303b")
LINE = colors.HexColor("#ddd1c1")


def revision_rows(stem: str):
    source = (ROOT / "content/lessons" / f"{stem}.md").read_text(encoding="utf-8")
    sheet = source.split("## Votre fiche de révision\n", 1)[1]
    lines = [line.strip() for line in sheet.splitlines() if line.strip()]
    table = [line for line in lines if line.startswith("|")]
    if table[0] != "| Situation | Geste à retenir |":
        raise ValueError(f"Unexpected summary table: {stem}")
    rows = [[cell.strip() for cell in line.strip("|").split("|")] for line in table[2:]]
    if len(rows) != 12 or any(len(row) != 2 for row in rows):
        raise ValueError(f"Expected 12 complete summary rows: {stem}")
    next_step = next((line.replace("**", "") for line in lines if line.startswith("**Prochaine étape :")), "")
    if not next_step:
        raise ValueError(f"Next step missing: {stem}")
    return rows, next_step


def make_pdf(stem: str, title: str):
    rows, next_step = revision_rows(stem)
    number = stem[:2]
    output = ASSETS / f"fiche-revision-{stem[3:]}.pdf"
    body = ParagraphStyle("body", fontName="ArialUnicode", fontSize=10, leading=16, textColor=INK)
    label = ParagraphStyle("label", parent=body, fontName="ArialBold", textColor=MAROON)
    heading = ParagraphStyle("heading", parent=label, fontSize=16, leading=22)
    small = ParagraphStyle("small", parent=body, fontSize=9, leading=13)
    doc = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=42, rightMargin=42,
                            topMargin=139, bottomMargin=66,
                            title=f"Fiche de révision - {title} | Psychométriques.fr",
                            author="Psychométriques.fr")
    story = []
    for page_index in range(3):
        if page_index:
            story.append(PageBreak())
        story.extend([Paragraph(f"{page_index + 1:02d} / Les réflexes essentiels", heading),
                      Spacer(1, 5),
                      Paragraph("Définir la situation, puis appliquer le geste adapté.", small),
                      Spacer(1, 18)])
        for situation, gesture in rows[page_index * 4:(page_index + 1) * 4]:
            card = Table([
                [Paragraph(escape(situation), label)],
                [Paragraph(escape(gesture), body)],
            ], colWidths=[A4[0] - 84], hAlign="LEFT")
            card.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.7, LINE),
                ("LINEBEFORE", (0, 0), (0, -1), 3, GOLD),
                ("LEFTPADDING", (0, 0), (-1, -1), 15),
                ("RIGHTPADDING", (0, 0), (-1, -1), 15),
                ("TOPPADDING", (0, 0), (-1, -1), 11),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
            ]))
            story.extend([card, Spacer(1, 15)])
    story.extend([PageBreak(), Paragraph("04 / Tableau de synthèse", heading), Spacer(1, 5),
                  Paragraph("Les douze gestes de la leçon sur une page.", small), Spacer(1, 18)])
    summary = Table(
        [[Paragraph("Situation", ParagraphStyle("white", parent=label, textColor=colors.white)),
          Paragraph("Geste à retenir", ParagraphStyle("white2", parent=label, textColor=colors.white))]] +
        [[Paragraph(escape(left), label), Paragraph(escape(right), small)] for left, right in rows],
        colWidths=[165, A4[0] - 84 - 165], repeatRows=1, hAlign="LEFT")
    summary.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), MAROON),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PAPER]),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, LINE),
    ]))
    story.extend([summary, Spacer(1, 16), Paragraph(escape(next_step), small)])

    def decorate(canvas, document):
        width, height = A4
        canvas.setFillColor(PAPER)
        canvas.rect(0, 0, width, height, fill=1, stroke=0)
        canvas.setFillColor(MAROON)
        canvas.rect(0, height - 120, width, 120, fill=1, stroke=0)
        canvas.drawImage(str(LOGO), 42, height - 73, width=42, height=42, preserveAspectRatio=True, mask="auto")
        canvas.setFillColor(GOLD)
        canvas.setFont("ArialUnicode", 8)
        canvas.drawString(94, height - 35, f"RÉFLEXION QUANTITATIVE / LEÇON {number}")
        canvas.setFillColor(colors.white)
        canvas.setFont("ArialBold", 19)
        canvas.drawString(94, height - 63, title)
        canvas.setFont("ArialUnicode", 9)
        canvas.drawString(94, height - 83, "Fiche de révision")
        canvas.setStrokeColor(LINE)
        canvas.line(42, 47, width - 42, 47)
        canvas.setFillColor(INK)
        canvas.setFont("ArialUnicode", 7.5)
        canvas.drawString(42, 31, "© 2026 Psychométriques.fr · Tous droits réservés")
        canvas.drawRightString(width - 42, 31, f"Page {document.page}")

    doc.build(story, onFirstPage=decorate, onLaterPages=decorate)
    return output


if __name__ == "__main__":
    pdfmetrics.registerFont(TTFont("ArialUnicode", str(FONT)))
    pdfmetrics.registerFont(TTFont("ArialBold", str(FONT_BOLD)))
    for lesson in LESSONS:
        print(make_pdf(*lesson))
