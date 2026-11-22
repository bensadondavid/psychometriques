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
SOURCE = ROOT / "content/lessons/01-nombres.md"
OUTPUT = ROOT / "content/lessons/assets/fiche-revision-nombres.pdf"
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
        "01 / Lire les conditions",
        "Avant de calculer, déterminer les valeurs autorisées et les propriétés utiles.",
        [
            ("Familles de nombres",
             "Un entier n'a pas de partie fractionnaire. Les naturels incluent zéro dans cette leçon ; les rationnels sont des quotients d'entiers à dénominateur non nul.",
             "12/3 = 4 et √9 = 3 sont entiers ; 7/2 = 3,5 ne l'est pas.",
             "Classer selon la valeur après simplification, pas selon l'apparence de l'écriture."),
            ("Traduire les mots de l'énoncé",
             "« Strictement positif » signifie x > 0 ; « positif ou nul » signifie x ≥ 0 ; « non nul » signifie x ≠ 0. « Nécessairement » demande tous les cas autorisés ; « peut être » demande un cas.",
             "Si x > 0, x peut valoir 1/2 : il n'est pas nécessairement supérieur à 1.",
             "Ne pas confondre « exactement un » avec « au moins un », ni « distincts » avec « consécutifs »."),
            ("Signes, zéro et ordre",
             "Pour un produit non nul, un nombre pair de facteurs négatifs donne un résultat positif. Un facteur nul annule tout le produit. Multiplier une inégalité par un nombre négatif inverse son sens.",
             "−8 + 3 = −5, mais −3 + 8 = 5 : la somme de signes opposés dépend des valeurs absolues.",
             "Vérifier d'abord si un facteur peut être zéro ; ne jamais diviser par zéro ou simplifier par un facteur possiblement nul."),
            ("Puissances et parenthèses",
             "Un carré réel est positif ou nul. Le carré ne conserve pas l'ordre sur tous les réels ; la puissance est calculée avant le signe moins placé devant elle.",
             "−3² = −9, tandis que (−3)² = 9. De −5 < −2, on obtient 25 > 4 après les carrés.",
             "Conserver les parenthèses et les hypothèses de signe lorsque l'on compare des puissances."),
        ],
    ),
    (
        "02 / Repérer les structures",
        "Utiliser la parité, les bornes et la symétrie pour éviter les longs calculs.",
        [
            ("Parité",
             "La parité concerne les entiers : pair = 2k, impair = 2k + 1. Zéro est pair. Un produit impair a tous ses facteurs impairs ; un produit pair a au moins un facteur pair.",
             "n(n + 1) est toujours pair, car deux entiers consécutifs ont des parités différentes.",
             "Pair ne veut pas dire divisible par 4 : avec n = 1, n(n + 1) = 2."),
            ("Compter sans oublier les bornes",
             "De A à B, bornes entières comprises, il y a B − A + 1 entiers. Avec un pas d > 0 et des extrêmes présents dans la liste : (B − A)/d + 1 termes.",
             "−3 ≤ x < 2 donne −3, −2, −1, 0, 1 : cinq entiers. Inclure 2 en ajoute un seul.",
             "Trouver d'abord le premier et le dernier entiers autorisés, surtout avec des bornes décimales."),
            ("Entiers consécutifs",
             "Trois entiers consécutifs s'écrivent m − 1, m, m + 1 ; leur somme vaut 3m. Les pairs consécutifs diffèrent de 2.",
             "Une somme de 72 donne m = 24 et les entiers 23, 24, 25.",
             "La valeur obtenue pour m doit respecter les contraintes de l'énoncé : entière, positive ou distincte selon le cas."),
            ("Sommes régulières",
             "Pour une liste régulièrement espacée, somme = nombre de termes × moyenne des extrêmes. Les opposés se compensent ; une somme alternée se regroupe par paires sans changer les signes.",
             "De 1 à 100 : 100 termes de moyenne 50,5, donc une somme de 5 050.",
             "Compter les termes avant de multiplier ; dans une somme alternée impaire, un terme reste isolé."),
        ],
    ),
    (
        "03 / Résoudre et vérifier",
        "Choisir une méthode, contrôler les cas limites, puis valider la réponse.",
        [
            ("Nombres premiers",
             "Un premier est un entier supérieur à 1 avec exactement deux diviseurs positifs. 1 n'est pas premier ; 2 est le seul premier pair. Pour tester N, examiner les diviseurs premiers jusqu'à √N.",
             "Deux premiers de somme 19 sont 2 et 17, donc leur produit vaut 34.",
             "Un nombre impair n'est pas forcément premier ; vérifier le second terme d'un couple."),
            ("Opposé et inverse",
             "Des opposés vérifient x + y = 0 ; des inverses vérifient xy = 1. Zéro n'a pas d'inverse. Une relation peut permettre de calculer une expression sans trouver x et y séparément.",
             "Si xy = 1 et x + y = 3, alors x³ + y³ = (x + y)³ − 3xy(x + y) = 18.",
             "L'inverse d'une somme n'est généralement pas la somme des inverses."),
            ("Valeur absolue et distances",
             "|x − a| est la distance de x à a. Pour r > 0, |x − a| = r donne x = a − r ou x = a + r. Deux distances ont un minimum sur tout le segment entre leurs repères ; trois distances sont minimales à la médiane.",
             "|x − 5| = 4 donne 1 et 9. Pour les repères 4, 8, 15, le minimum de la somme des distances est 11, atteint en 8.",
             "Distinguer les bornes strictes et larges ; prendre l'intersection quand plusieurs conditions s'appliquent."),
            ("Chiffres et dernier contrôle",
             "Un nombre est une valeur ; un chiffre est un symbole écrit. Pour compter les chiffres d'une liste, séparer les blocs 1–9, 10–99, 100–999, etc.",
             "De 1 à 120 : 9 × 1 + 90 × 2 + 21 × 3 = 252 chiffres.",
             "Avant de conclure : entier ? zéro autorisé ? borne incluse ? ordre du couple ? réponse prouvée pour tous les cas ?"),
        ],
    ),
]


def readable_math(text: str) -> str:
    """Keep the sheet's short expressions readable in the embedded Unicode font."""
    expressions = {
        "m-1,m,m+1": "m − 1, m, m + 1",
        "(B-A)/d+1": "(B − A)/d + 1",
        "(a+b)^2=a^2+2ab+b^2": "(a + b)² = a² + 2ab + b²",
        "b^2-a^2=(b-a)(b+a)": "b² − a² = (b − a)(b + a)",
        "(m-d)(m+d)=m^2-d^2": "(m − d)(m + d) = m² − d²",
        "|x-a|=r>0": "|x − a| = r > 0",
        "a-r,a+r": "a − r, a + r",
    }

    def replace_expression(match: re.Match[str]) -> str:
        value = match.group(1)
        return expressions.get(value, value.replace("-", "−").replace("^2", "²"))

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
    if len(rows) != 18:
        raise ValueError(f"Expected 18 revision points, found {len(rows)}")
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
    pdf.drawString(42, height - 99, "RÉFLEXION QUANTITATIVE  /  LEÇON 01")
    pdf.setFillColor(colors.white)
    pdf.setFont("ArialBold", 17)
    pdf.drawString(42, height - 126, "Les nombres : repérer la structure")
    pdf.drawString(42, height - 148, "avant de calculer")

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
    pdf.setTitle("Fiche de révision - Les nombres | Psychométriques.fr")
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
        row_height = max(27, max(label_height, body_height) + 13)
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
    pdf.drawString(left, y - 19, "PROCHAINE ÉTAPE  ·  LA DIVISIBILITÉ")
    pdf.save()
    print(f"Created {OUTPUT} ({page_number} page(s))")


if __name__ == "__main__":
    generate()
