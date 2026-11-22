"""Generate the printable revision sheet from the lesson's Markdown table.

Run with a Python environment containing reportlab:
    python scripts/generate-nombres-revision-pdf.py
"""

from __future__ import annotations

from html import escape
from pathlib import Path
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "content/lessons/02-divisibilite.md"
OUTPUT = ROOT / "content/lessons/assets/fiche-revision-divisibilite.pdf"
LOGO = ROOT / "public/logo-psychos.png"
FONT = Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf")
FONT_BOLD = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")

MAROON = colors.HexColor("#45121d")
GOLD = colors.HexColor("#d6b476")
INK = colors.HexColor("#2a211d")
MUTED = colors.HexColor("#65584d")
PAPER = colors.HexColor("#fbf8f2")
LINE = colors.HexColor("#ded3c5")

# These revision notes are condensed from the corresponding sequences of 01-nombres.md.
REVISION_PAGES = [
    (
        "01 / Décomposer et répartir",
        "Lire la relation avant de choisir une opération.",
        [
            ("Diviseur ou multiple ?", "d divise n si n = d × k pour un entier k, avec d non nul. Un même fait se lit dans les deux sens : 6 divise 24 et 24 est multiple de 6.", "24 = 6 × 4, donc 6 est un diviseur de 24.", "Ne pas inverser les deux nombres ; la division par zéro est indéfinie."),
            ("Quotient, reste et capacité", "Pour N ≥ 0 et d > 0, N = dq + r avec 0 ≤ r < d. q compte les lots complets ; s'il reste des objets, la capacité totale exige un contenant de plus.", "20 = 6 × 3 + 2 : trois boîtes pleines, deux objets restants, quatre boîtes en tout.", "Si r = 0, ne pas ajouter une boîte. Nommer la grandeur demandée avant de répondre."),
            ("Tester la divisibilité", "Les tests par 3 et 9 utilisent la somme des chiffres ; ceux par 4 et 8 utilisent les deux ou trois derniers chiffres. Plusieurs conditions doivent être vraies simultanément.", "Pour tester la divisibilité par 12, vérifier la divisibilité par 3 et par 4.", "Un chiffre inconnu est limité à 0–9 ; tester chaque branche et garder toutes les solutions."),
            ("Facteurs premiers", "La décomposition en facteurs premiers indique les briques et leurs exposants. Un nombre premier est supérieur à 1 et possède exactement deux diviseurs positifs.", "72 = 2³ × 3² ; 12 = 2² × 3 divise 72, mais 16 = 2⁴ ne le divise pas.", "1 n'est pas premier ; continuer la décomposition tant qu'un facteur est composé."),
        ],
    ),
    (
        "02 / Compter et comparer",
        "Les exposants et les ensembles évitent les longues listes.",
        [
            ("Nombre de diviseurs", "Pour n = pᵃqᵇ, avec p et q premiers distincts et n > 0, chaque exposant peut aller de zéro à sa borne : le nombre de diviseurs positifs est (a + 1)(b + 1).", "72 = 2³ × 3² possède (3 + 1)(2 + 1) = 12 diviseurs positifs.", "L'exposant zéro compte ; distinguer diviseurs positifs, pairs, impairs et carrés."),
            ("PGCD : partager sans reste", "Le PGCD est le plus grand diviseur commun. Dans les facteurs premiers, garder les exposants minimaux communs. Il convient aux lots ou sachets identiques maximaux.", "Pour 36 et 48, le PGCD vaut 12 : douze sachets identiques sont possibles au maximum.", "Dire ce que représente 12 : nombre de sachets, quantité par sachet ou taille du groupe."),
            ("PPCM : premier rendez-vous", "Le PPCM est le plus petit multiple positif commun. Garder les exposants maximaux ; pour deux entiers positifs, leur produit vaut PGCD × PPCM.", "Des événements de périodes 8 et 12 coïncident de nouveau après 24 unités.", "Multiplier 8 par 12 donnerait 96, un rendez-vous commun mais pas le premier."),
            ("Compter des multiples", "De 1 à N, il y a ⌊N/d⌋ multiples de d. Pour « ou », additionner puis retirer les éléments comptés deux fois ; pour « et », compter les multiples du PPCM.", "De 1 à 60 : 20 multiples de 3, 15 de 4 et 5 de 12 ; l'union en contient 30.", "« Ou » inclut l'intersection ; « exactement un » l'exclut."),
        ],
    ),
    (
        "03 / Restes, cycles et puissances",
        "Réduire à l'information utile et vérifier les bornes.",
        [
            ("Opérer sur les restes", "On peut additionner, soustraire ou multiplier les restes, puis réduire le résultat modulo d. Le reste final est toujours compris entre zéro et d − 1.", "Si a laisse 3 et b laisse 5 modulo 7, ab laisse 15, soit un reste de 1.", "15 n'est pas le reste final ; une retenue doit passer dans le quotient."),
            ("Dernier chiffre et cycles", "Le dernier chiffre est un reste modulo 10. Calculer quelques puissances, relever la période réelle et placer l'exposant dans cette période.", "Les unités de 3ⁿ suivent 3, 9, 7, 1 ; pour n = 100, prendre la quatrième position : 1.", "Ne pas supposer que tous les cycles ont une longueur de quatre."),
            ("Carré ou cube parfait", "Dans la décomposition première, un carré a des exposants pairs et un cube des exposants multiples de trois. Ajouter seulement les facteurs manquants.", "72 = 2³ × 3² ; multiplier par 3 donne 216 = 6³, le plus petit cube obtenu ainsi.", "Vérifier la demande : multiplier, diviser ou extraire ne réclament pas le même complément."),
            ("Zéros finaux", "Un zéro final demande un facteur 10 = 2 × 5. Dans n!, compter les facteurs 5 par couches : ⌊n/5⌋ + ⌊n/25⌋ + … ; les facteurs 2 sont plus nombreux.", "50! possède ⌊50/5⌋ + ⌊50/25⌋ = 10 + 2 = 12 zéros finaux.", "25 et 50 apportent chacun un deuxième facteur 5 ; ne pas compter les derniers chiffres."),
        ],
    ),
]


def readable_math(text: str) -> str:
    """Keep the sheet's short expressions readable in the embedded Unicode font."""
    expressions = {
        r"d\mid n\iff n=dk": "d divise n si et seulement si n = d × k",
        r"d\ne0": "d ≠ 0",
        r"0\le r<d": "0 ≤ r < d",
        r"p^aq^b": "pᵃqᵇ",
        r"ab=\operatorname{PGCD}(a,b)\operatorname{PPCM}(a,b)": "ab = PGCD(a,b) × PPCM(a,b)",
        r"\lfloor N/d\rfloor": "partie entière de N/d",
        r"\lfloor n/5\rfloor+\lfloor n/25\rfloor+\cdots": "⌊n/5⌋ + ⌊n/25⌋ + …",
    }

    def replace_expression(match: re.Match[str]) -> str:
        value = match.group(1)
        result = expressions.get(value, value.replace("-", "−"))
        if "\\" in result:
            raise ValueError(f"Unsupported math in revision sheet: {value}")
        return result

    return re.sub(r"\\\((.*?)\\\)", replace_expression, text)


def source_rows() -> list[tuple[str, str]]:
    source = SOURCE.read_text(encoding="utf-8")
    sheet = source.split("## Votre fiche de révision\n", 1)[1]
    table = sheet.strip().split("\n\n", 1)[0]
    lines = [line for line in table.splitlines() if line.startswith("|")]
    rows = []
    for line in lines[2:]:  # header and separator are not reminder rows
        left, right = [part.strip() for part in line.strip("|").split("|", 1)]
        rows.append((readable_math(left), readable_math(right)))
    if len(rows) != 21:
        raise ValueError(f"Expected 21 revision points, found {len(rows)}")
    return rows


def draw_header(pdf: canvas.Canvas, page_number: int, heading: str, description: str) -> float:
    width, height = A4
    pdf.setFillColor(PAPER)
    pdf.rect(0, 0, width, height, fill=1, stroke=0)
    pdf.setFillColor(MAROON)
    pdf.rect(0, height - 165, width, 165, fill=1, stroke=0)
    pdf.setFillColor(PAPER)
    pdf.roundRect(39, height - 78, 44, 44, 10, fill=1, stroke=0)
    pdf.drawImage(str(LOGO), 42, height - 75, 38, 38, mask="auto")
    pdf.setFillColor(colors.white)
    pdf.setFont("ArialBold", 11)
    pdf.drawString(91, height - 52, "Psychométriques.fr")
    pdf.setFillColor(GOLD)
    pdf.setFont("ArialUnicode", 8)
    pdf.drawString(42, height - 99, "RÉFLEXION QUANTITATIVE  /  LEÇON 02")
    pdf.setFillColor(colors.white)
    pdf.setFont("ArialBold", 17)
    pdf.drawString(42, height - 126, "La divisibilité : décomposer,")
    pdf.drawString(42, height - 148, "répartir, prévoir")

    pdf.setFillColor(MAROON)
    pdf.setFont("ArialBold", 15)
    pdf.drawString(42, height - 184, heading)
    pdf.setFillColor(MUTED)
    pdf.setFont("ArialUnicode", 9)
    pdf.drawString(42, height - 201, description)

    pdf.setStrokeColor(LINE)
    pdf.line(42, 45, width - 42, 45)
    pdf.setFont("ArialUnicode", 7.5)
    pdf.setFillColor(MUTED)
    pdf.drawString(42, 30, "© 2026 Psychométriques.fr. Tous droits réservés.")
    pdf.drawRightString(width - 42, 30, f"Fiche de révision · {page_number}")
    return height - 223


def generate() -> None:
    if not FONT.exists() or not FONT_BOLD.exists():
        raise RuntimeError("Arial Unicode and Arial Bold fonts are required")
    pdfmetrics.registerFont(TTFont("ArialUnicode", str(FONT)))
    pdfmetrics.registerFont(TTFont("ArialBold", str(FONT_BOLD)))
    pdfmetrics.registerFontFamily("ArialUnicode", normal="ArialUnicode", bold="ArialBold")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    width, _ = A4
    left = 42
    right = width - 42
    first_col = 165
    body_style = ParagraphStyle(
        "body", fontName="ArialUnicode", fontSize=8.9, leading=13.1,
        textColor=INK, alignment=TA_LEFT,
    )
    label_style = ParagraphStyle(
        "label", parent=body_style, fontName="ArialBold", fontSize=8.7,
        leading=12.7, textColor=MAROON,
    )
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    pdf.setTitle("Fiche de révision - La divisibilité | Psychométriques.fr")
    pdf.setAuthor("Psychométriques.fr")
    page_number = 0

    def draw_card(y_top: float, card: tuple[str, str, str, str]) -> float:
        title, rule, example, trap = card
        text_style = ParagraphStyle(
            "card", fontName="ArialUnicode", fontSize=9.1, leading=14.1,
            textColor=INK, alignment=TA_LEFT,
        )
        paragraphs = [
            Paragraph(f'<font color="#45121d"><b>Règle.</b></font> {escape(rule)}', text_style),
            Paragraph(f'<font color="#45121d"><b>Exemple.</b></font> {escape(example)}', text_style),
            Paragraph(f'<font color="#45121d"><b>À vérifier.</b></font> {escape(trap)}', text_style),
        ]
        heights = [paragraph.wrap(right - left - 28, 120)[1] for paragraph in paragraphs]
        card_height = 38 + sum(heights) + 15
        if y_top - card_height < 64:
            raise ValueError(f"Revision card does not fit: {title}")
        pdf.setFillColor(colors.white)
        pdf.setStrokeColor(LINE)
        pdf.roundRect(left, y_top - card_height, right - left, card_height, 7, fill=1, stroke=1)
        pdf.setFillColor(GOLD)
        pdf.rect(left, y_top - card_height + 7, 3, card_height - 14, fill=1, stroke=0)
        pdf.setFillColor(MAROON)
        pdf.setFont("ArialBold", 11)
        pdf.drawString(left + 14, y_top - 23, title)
        cursor = y_top - 38
        for paragraph, height in zip(paragraphs, heights):
            paragraph.drawOn(pdf, left + 14, cursor - height)
            cursor -= height + 5
        return y_top - card_height - 11

    for heading, description, cards in REVISION_PAGES:
        if page_number:
            pdf.showPage()
        page_number += 1
        y = draw_header(pdf, page_number, heading, description)
        for card in cards:
            y = draw_card(y, card)

    pdf.showPage()
    page_number += 1
    y = draw_header(pdf, page_number, "04 / Repères essentiels", "Le tableau à relire juste avant de passer aux exercices.")

    def table_header(y_top: float) -> float:
        pdf.setFillColor(MAROON)
        pdf.rect(left, y_top - 28, right - left, 28, fill=1, stroke=0)
        pdf.setFillColor(colors.white)
        pdf.setFont("ArialBold", 8.5)
        pdf.drawString(left + 11, y_top - 18, "À RECONNAÎTRE")
        pdf.drawString(left + first_col + 11, y_top - 18, "À RAPPELER")
        return y_top - 28

    y = table_header(y)
    for index, (label, reminder) in enumerate(source_rows()):
        label_para = Paragraph(escape(label), label_style)
        body_para = Paragraph(escape(reminder), body_style)
        _, label_height = label_para.wrap(first_col - 22, 100)
        _, body_height = body_para.wrap(right - left - first_col - 22, 100)
        row_height = max(23, max(label_height, body_height) + 9)
        if y - row_height < 92:
            pdf.showPage()
            page_number += 1
            y = table_header(draw_header(pdf, page_number, "Repères essentiels (suite)", "Les méthodes à garder sous la main."))
        pdf.setFillColor(colors.white if index % 2 == 0 else colors.HexColor("#f3ece2"))
        pdf.rect(left, y - row_height, right - left, row_height, fill=1, stroke=0)
        pdf.setStrokeColor(LINE)
        pdf.line(left, y - row_height, right, y - row_height)
        pdf.line(left + first_col, y - row_height, left + first_col, y)
        label_para.drawOn(pdf, left + 11, y - 7 - label_height)
        body_para.drawOn(pdf, left + first_col + 11, y - 7 - body_height)
        y -= row_height

    pdf.setFillColor(MAROON)
    pdf.setFont("ArialBold", 8.7)
    pdf.drawString(left, y - 19, "PROCHAINE ÉTAPE  ·  LES FRACTIONS")
    pdf.save()
    print(f"Created {OUTPUT} ({page_number} page(s))")


if __name__ == "__main__":
    generate()
