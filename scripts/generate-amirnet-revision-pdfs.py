"""Generate protected one-page AMIRNET revision sheets from authored summaries."""

from __future__ import annotations

import re
import sys
from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "content/lessons/amirnet"
ASSETS = ROOT / "content/lessons/assets"
LOGO = ROOT / "public/logo-psychos.png"
FONT = Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf")
FONT_BOLD = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")
MAROON = colors.HexColor("#45121d")
GOLD = colors.HexColor("#b58b52")
INK = colors.HexColor("#25303b")
PAPER = colors.HexColor("#f8f4ed")


def paragraph_text(markdown: str) -> str:
    text = escape(markdown)
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    return re.sub(r"\*(.+?)\*", r"<i>\1</i>", text)


def make_pdf(source: Path) -> Path:
    raw = source.read_text(encoding="utf-8")
    title = raw.splitlines()[0].removeprefix("# ")
    summary = raw.split("## Votre fiche de révision\n", 1)[1].strip()
    if "## " in summary or "Annexe" in summary:
        raise ValueError(f"Invalid summary: {source.name}")
    paragraphs = [item.strip().replace("\n", " ") for item in re.split(r"\n\s*\n", summary) if item.strip()]
    if len(paragraphs) < 3:
        raise ValueError(f"Incomplete summary: {source.name}")

    number = source.name[:2]
    output = ASSETS / f"fiche-revision-amirnet-{source.stem[3:]}.pdf"
    body = ParagraphStyle("body", fontName="ArialUnicode", fontSize=12, leading=20, textColor=INK, spaceAfter=18)
    lead = ParagraphStyle("lead", parent=body, fontName="ArialBold", fontSize=14, leading=23, textColor=MAROON, spaceAfter=24)
    next_step = ParagraphStyle("next", parent=body, fontSize=10.5, leading=17, textColor=INK)
    doc = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=50, rightMargin=50,
                            topMargin=190, bottomMargin=75,
                            title=f"Fiche de synthèse - {title} | Psychométriques.fr",
                            author="Psychométriques.fr")
    story = [Paragraph("Les idées à retenir", lead), Spacer(1, 14)]
    for index, item in enumerate(paragraphs):
        style = lead if index == 0 else next_step if index == len(paragraphs) - 1 else body
        story.append(Paragraph(paragraph_text(item), style))
        if index != len(paragraphs) - 1:
            story.append(Spacer(1, 18))

    def decorate(canvas, document):
        width, height = A4
        canvas.setFillColor(PAPER)
        canvas.rect(0, 0, width, height, fill=1, stroke=0)
        canvas.setFillColor(MAROON)
        canvas.rect(0, height - 155, width, 155, fill=1, stroke=0)
        canvas.setFillColor(colors.white)
        canvas.roundRect(47, height - 91, 51, 51, 5, fill=1, stroke=0)
        canvas.drawImage(str(LOGO), 50, height - 88, width=45, height=45, preserveAspectRatio=True, mask="auto")
        canvas.setFillColor(GOLD)
        canvas.setFont("ArialUnicode", 8)
        canvas.drawString(108, height - 55, f"AMIRNET / LEÇON {number}")
        canvas.setFillColor(colors.white)
        canvas.setFont("ArialBold", 17)
        title_paragraph = Paragraph(escape(title), ParagraphStyle("title", fontName="ArialBold", fontSize=17, leading=22, textColor=colors.white))
        _, title_height = title_paragraph.wrap(width - 158, 70)
        title_paragraph.drawOn(canvas, 108, height - 67 - title_height)
        canvas.setFont("ArialUnicode", 9)
        canvas.drawString(108, height - 139, "Fiche de synthèse")
        canvas.setStrokeColor(GOLD)
        canvas.line(50, 56, width - 50, 56)
        canvas.setFillColor(INK)
        canvas.setFont("ArialUnicode", 8)
        canvas.drawString(50, 38, "© 2026 Psychométriques.fr · Tous droits réservés")
        canvas.drawRightString(width - 50, 38, f"Page {document.page}")

    doc.build(story, onFirstPage=decorate, onLaterPages=decorate)
    return output


if __name__ == "__main__":
    pdfmetrics.registerFont(TTFont("ArialUnicode", str(FONT)))
    pdfmetrics.registerFont(TTFont("ArialBold", str(FONT_BOLD)))
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    for source_file in sorted(SOURCES.glob("*.md")):
        if int(source_file.name[:2]) < start:
            continue
        print(make_pdf(source_file))
