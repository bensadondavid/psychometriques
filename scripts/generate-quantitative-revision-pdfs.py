"""Generate detailed printable revision sheets for quantitative lessons 03-10.

Run with a Python environment containing reportlab:
    python3 scripts/generate-quantitative-revision-pdfs.py
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
from reportlab.platypus import KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

from quantitative_revision_cards import MORE_REVISION_PAGES


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "content/lessons/assets"
FONT = Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf")
FONT_BOLD = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")

LESSONS = (
    ("03-fractions", "03", "Les fractions", "Choisir l'unité et garder la même référence"),
    ("04-pourcentages", "04", "Les pourcentages", "Nommer la base avant chaque calcul"),
    ("05-ratios-proportions", "05", "Ratios et proportions", "Transformer des rapports en parts communes"),
    ("06-moyennes", "06", "Les moyennes", "Revenir à la somme avant de recalculer"),
    ("07-puissances-racines", "07", "Puissances et racines", "Reconnaître la structure et le domaine"),
    ("08-expressions-algebriques", "08", "Expressions algébriques", "Transformer sans perdre l'information"),
    ("09-equations-inegalites", "09", "Équations et inégalités", "Trouver toutes les solutions autorisées"),
    ("10-problemes-algebriques", "10", "Problèmes algébriques", "Traduire l'histoire avant de résoudre"),
)

# Each card follows the corresponding lesson: rule, worked example, common trap.
REVISION_PAGES = {
    "03-fractions": [
        ("01 / Lire et transformer", "Commencer par l'unité et la taille des parts.", [
            ("Une fraction a une référence", "a/b est un quotient avec b non nul. Pour parler d'une part d'un tout, nommer ce tout et partager l'unité en parts égales.", "Trois parts sur cinq parts égales donnent 3/5 ; trois morceaux inégaux ne le garantissent pas.", "Deux tiers de gâteaux de tailles différentes sont le même nombre, mais pas la même quantité."),
            ("Équivalence et simplification", "Multiplier ou diviser numérateur et dénominateur par un même facteur non nul conserve la valeur. Ne simplifier que des facteurs.", "18/24 = 3/4 en divisant les deux termes par 6.", "Dans (2+3)/5, on ne peut pas supprimer le 5 avec un terme du numérateur."),
            ("Sommes et différences", "Donner aux parts la même taille avant d'additionner les numérateurs. Le PPCM fournit souvent un dénominateur plus petit que le produit.", "5/12 + 1/8 = 10/24 + 3/24 = 13/24.", "1/2 + 1/3 ne vaut pas 2/5 ; une somme de deux nombres positifs dépasse chacun d'eux."),
            ("Comparer exactement", "Avec des dénominateurs positifs, comparer aux repères ou utiliser les produits croisés. Pour des nombres négatifs, contrôler le sens de l'ordre.", "5/8 < 7/11, car 5 × 11 = 55 < 56 = 7 × 8.", "Le produit en croix exige de connaître le signe des dénominateurs pour une inégalité."),
        ]),
        ("02 / Choisir l'opération", "Part d'une quantité, portions et retours au total.", [
            ("Une part d'une part", "Multiplier les fractions et simplifier les facteurs avant le produit ; aucun dénominateur commun n'est nécessaire.", "Le quart des trois cinquièmes d'une feuille vaut 3/20 ; pour 80 cm², cela fait 12 cm².", "Additionner 1/4 et 3/5 décrirait une autre situation."),
            ("Diviser en portions", "Diviser la quantité par la taille d'une portion ; inverser le diviseur non nul. La question détermine l'arrondi.", "11/4 L divisés en portions de 3/8 L donnent 22/3 portions, soit 7 verres pleins et 1/8 L restant.", "Le tiers de verre restant n'est pas un tiers de litre ; pour tout stocker, il faut 8 contenants."),
            ("Retrouver le total", "Si une partie P représente la fraction f non nulle du total T, alors T = P/f.", "Si 3/5 d'une somme valent 24 €, la somme entière vaut 24 ÷ (3/5) = 40 €.", "Vérifier que la fraction s'applique bien au total demandé et non à un sous-groupe."),
            ("Deux retraits, deux références", "Des retraits sur le même total s'additionnent ; des retraits successifs sur le reste multiplient les fractions conservées.", "Sur 120 unités, retirer 1/3 puis 1/4 de l'initial laisse 50 ; retirer 1/4 du reste laisse 60.", "Le mot « ensuite » ne fixe pas la référence du second retrait."),
        ]),
        ("03 / Structurer et vérifier", "Utiliser les rapports, les bornes et les parenthèses.", [
            ("Rapport entre parties", "Partie/partie et partie/total ont des dénominateurs différents ; écrire les grandeurs avant le calcul.", "Si 3/8 sont rouges, 5/8 sont bleus et le rapport rouges/bleus vaut 3/5.", "Le rapport rouges/bleus ne vaut pas 3/8 : huit représente le total."),
            ("Remonter une suite", "Multiplier les coefficients conservés pour aller vers l'avant ; diviser par leur produit pour retrouver l'état initial.", "Après un retrait de 1/3 puis de la moitié du reste, 6 unités subsistent : 6 ÷ [(2/3)(1/2)] = 18.", "Une quantité absolue finale empêche de choisir librement un total fictif."),
            ("Fractions complexes", "Repérer la barre principale, calculer chaque étage dans ses parenthèses, puis diviser ; exclure les dénominateurs nuls.", "(1/2 + 1/3)/(1/4) = (5/6) × 4 = 10/3.", "1/2 + [1/3 ÷ 1/4] n'a pas la même hiérarchie de calcul."),
            ("Bornes et admissibilité", "Transformer une inégalité avec un facteur positif puis appliquer toutes les contraintes de l'énoncé.", "2/5 < n/20 < 3/4 donne 8 < n < 15 : six entiers ; si n/20 est irréductible, garder 9, 11, 13.", "Les bornes sont strictes ; compter les entiers avant de filtrer serait incomplet."),
        ]),
    ],
    "04-pourcentages": [
        ("01 / Nommer la base", "Un pourcentage est une fraction d'un total précis.", [
            ("Du pour cent au nombre", "p % = p/100 ; pour appliquer ce taux à T, multiplier T par son écriture décimale.", "0,5 % = 1/200 ; 0,5 % de 600 valent 3.", "Un demi pour cent n'est pas la moitié ; 33,33 % n'est qu'une approximation de 33 1/3 %."),
            ("Partie, total, taux", "Avec P = rT : partie P = rT, total T = P/r si r est non nul, taux p = 100P/T si T est positif.", "36 est 15 % de 240 : 36/0,15 = 240 et 100 × 36/240 = 15 %.", "Le « total » doit être la base de la question, pas le plus grand nombre visible."),
            ("Calcul mental et complément", "Décomposer un taux en fractions faciles ou calculer la part manquante ; garder la base inchangée pendant le calcul.", "12,5 % de 160 = 1/8 de 160 = 20 ; après la remise, le prix payé est 140.", "Le montant économisé et le prix payé sont deux réponses différentes."),
            ("Points ou pour cent", "Une différence de taux s'exprime en points ; une variation relative se calcule sur le taux de départ.", "De 20 % à 25 % : +5 points, soit une hausse relative de 25 % du taux initial.", "Dire « +5 % » confondrait cinq points et une variation relative."),
        ]),
        ("02 / Suivre les variations", "Les coefficients montrent quelle base change.", [
            ("Hausse et baisse", "Une hausse de r multiplie par 1+r ; une baisse de r multiplie par 1−r. Le taux d'évolution divise l'écart par la valeur initiale.", "160 € moins 12,5 % : 160 × 0,875 = 140 € ; la remise est 20 €.", "Multiplier par 0,125 donnerait la remise, pas le prix payé."),
            ("Retrouver l'initial", "Défaire une hausse ou une baisse en divisant le résultat par le coefficient appliqué.", "Après +20 %, un prix vaut 144 € : l'ancien prix était 144/1,2 = 120 €.", "Retrancher 20 % de 144 ne revient pas à la base initiale."),
            ("Évolutions successives", "Multiplier les coefficients de chaque étape ; les pourcentages successifs portent sur des bases successives.", "+20 % puis −20 % donnent 1,2 × 0,8 = 0,96 : la valeur finale est 4 % sous l'initiale.", "Ne pas additionner les taux sans vérifier leur base."),
            ("Compenser une variation", "Après une baisse r, la hausse de retour est r/(1−r) ; après une hausse r, la baisse de retour est r/(1+r).", "Après −20 %, il faut +25 % sur la nouvelle base : 0,8 × 1,25 = 1.", "Le taux de retour n'est généralement pas égal au taux de départ."),
        ]),
        ("03 / Plusieurs populations", "Pondérer et repérer la quantité conservée.", [
            ("Taux global pondéré", "Additionner les réussites puis diviser par l'effectif total, ou pondérer chaque taux par la taille de son groupe.", "10 élèves à 80 % et 30 à 60 % donnent (8+18)/40 = 65 %.", "La moyenne simple 70 % ne vaut que pour deux groupes de même taille."),
            ("Une partie d'un sous-groupe", "Suivre la chaîne des bases : la part dans le total est le produit des parts successives.", "Si 40 % d'un groupe sont A et 25 % des A réussissent, 10 % du groupe entier sont des A qui réussissent.", "Le 25 % porte sur les A, pas sur l'effectif total."),
            ("Mélange et concentration", "Suivre séparément la matière active et le total. Ajouter de l'eau conserve l'actif ; ajouter du produit pur change les deux.", "40 kg à 15 % contiennent 6 kg de sel ; après évaporation jusqu'à 20 %, le total est 30 kg : 10 kg d'eau ont disparu.", "Une hausse de cinq points de concentration ne signifie pas 5 % de masse évaporée."),
            ("Catégorie et total mobiles", "Si l'on ajoute seulement des membres d'une catégorie, son effectif et l'effectif total augmentent ensemble.", "8 réussites sur 10, puis 2 réussites ajoutées : 10/12, soit 83 1/3 %, et non 100 %.", "Garder l'ancien total au dénominateur produit un taux impossible."),
        ]),
    ],
    "05-ratios-proportions": [
        ("01 / Donner une valeur aux parts", "Le rapport seul ne fixe pas l'échelle.", [
            ("Ratio et ordre", "A:B = a:b signifie A = ak et B = bk pour un même k. Inverser les catégories inverse le rapport.", "Rouges:bleus = 2:3 ; bleus:rouges = 3:2. Les quantités 10 et 15 respectent aussi 2:3.", "Le ratio ne donne aucune quantité tant qu'une donnée absolue ne fixe pas k."),
            ("Simplifier et convertir", "Diviser tous les termes du ratio par un même facteur non nul ; convertir d'abord les grandeurs dans la même unité.", "18:30 = 3:5 ; deux mètres:cinquante centimètres = 200:50 = 4:1.", "Ajouter le même nombre aux deux termes ne conserve pas le rapport."),
            ("Partie sur total", "Si A:B = a:b, alors la part de A dans A+B est a/(a+b), tandis que A/B = a/b.", "Pour un mélange A:B = 3:5, A/B = 3/5 mais A/total = 3/8.", "Confondre l'autre partie avec le total change le dénominateur."),
            ("Retrouver une part", "Traduire la donnée absolue en nombre de parts : total a+b ; écart b−a ; somme partielle selon les catégories citées.", "A:B = 3:5, total 96 € : une part vaut 12 €, donc A = 36 € et B = 60 €.", "Si l'écart vaut 24 €, il représente deux parts, pas huit."),
        ]),
        ("02 / Choisir l'invariant", "Quotient constant, produit constant ou quantité fixe ?", [
            ("Proportionnalité directe", "y = cx signifie que y/x est constant pour x non nul. Il faut une hypothèse de prix ou rendement unitaire constant.", "Trois kg coûtent 24 € au même prix unitaire : 8 €/kg, donc cinq kg coûtent 40 €.", "Un tarif 5 + 2m contient une partie fixe : il n'est pas proportionnel à m."),
            ("Taux et unités", "Un taux unitaire est une division orientée ; convertir les unités avant de multiplier ou comparer.", "À 72 km/h pendant 25 minutes : 72 × 25/60 = 30 km.", "25 minutes ne valent pas 0,25 heure ; comparer le prix des lots exige le prix par article."),
            ("Proportionnalité inverse", "Pour une tâche fixe à rendement constant, machines × durée reste constant ; doubler les machines divise la durée par deux.", "4 machines × 6 h = 24 machines-heures ; 8 machines demandent 3 h.", "Le modèle suppose le même travail, des machines identiques et une tâche partageable."),
            ("Ratios en chaîne", "Aligner la catégorie commune avant de réunir deux rapports ; appliquer le même multiplicateur à chaque terme d'un rapport.", "A:B = 2:3 et B:C = 4:5 : 8:12 et 12:15, donc A:B:C = 8:12:15.", "Le B des deux rapports doit représenter la même quantité."),
        ]),
        ("03 / Transformer et contrôler", "Un ajout, un transfert ou un mélange change les parts.", [
            ("Ajout ciblé", "Écrire A = ak et B = bk, puis tenir fixe la catégorie non modifiée.", "A:B = 2:3 sur 40 L : A = 16, B = 24. Pour atteindre 1:2 en ajoutant B, il faut B = 32, donc ajouter 8 L.", "Le ratio initial ne décrit plus les nouvelles quantités."),
            ("Transfert", "Déplacer x de A vers B donne A−x et B+x : le total reste fixe et l'écart baisse de 2x.", "30 et 18 jetons deviennent égaux après transfert de 6 : 24 et 24.", "Transférer l'écart entier inverserait les quantités ; vérifier que x est admissible."),
            ("Mélanges", "Convertir chaque ratio en quantités de constituants, additionner celles-ci, puis recalculer le rapport final.", "12 L de 1:2 et 8 L de 3:1 donnent A = 4+6, B = 8+2 : rapport final 1:1.", "Additionner seulement les termes des ratios ignorerait la taille des deux mélanges."),
            ("Échelles et nombres entiers", "À l'échelle 1:n, multiplier les longueurs par n avec unités identiques ; les aires changent avec le carré du facteur.", "Dans un ratio réduit 2:3 d'objets entiers, le total doit être un multiple de cinq ; 27 objets ne conviennent pas.", "Ne pas appliquer une contrainte d'intégralité à des litres divisibles, ni un facteur de longueur à une aire."),
        ]),
    ],
}
REVISION_PAGES.update(MORE_REVISION_PAGES)

MAROON = colors.HexColor("#45121d")
GOLD = colors.HexColor("#d6b476")
INK = colors.HexColor("#2a211d")
MUTED = colors.HexColor("#65584d")
PAPER = colors.HexColor("#fbf8f2")
LINE = colors.HexColor("#ded3c5")


def readable(text: str) -> str:
    expressions = {
        "r": "r", "0{,}20": "0,20", "P=rT": "P = r × T", "T=P/r": "T = P/r",
        "100P/T": "100 × P/T", "V_f=V_i(1\\pm r)": "Vf = Vi × (1 ± r)",
        "(V_f-V_i)/V_i": "(Vf − Vi)/Vi", "r/(1-r)": "r/(1 − r)",
        "r/(1+r)": "r/(1 + r)", "\\sum N_ir_i/\\sum N_i": "Σ(Ni × ri)/ΣNi",
    }

    def replace_math(match: re.Match[str]) -> str:
        expression = match.group(1)
        if expression not in expressions:
            raise ValueError(f"Unknown math expression in revision sheet: {expression}")
        return expressions[expression]

    return (re.sub(r"\\\((.*?)\\\)", replace_math, text)
            .replace("nᵢmᵢ", "ni × mi").replace("nᵢ", "ni").replace("**", ""))


def revision_content(stem: str) -> tuple[list[str], list[list[str]], str, str]:
    source = (ROOT / "content/lessons" / f"{stem}.md").read_text(encoding="utf-8")
    if "## Votre fiche de révision\n" not in source:
        raise ValueError(f"Revision section missing: {stem}")
    sheet = source.split("## Votre fiche de révision\n", 1)[1].strip()
    lines = [line.strip() for line in sheet.splitlines() if line.strip()]
    table_start = next(i for i, line in enumerate(lines) if line.startswith("|"))
    intro = " ".join(lines[:table_start])
    table_lines = []
    for line in lines[table_start:]:
        if not line.startswith("|"):
            break
        table_lines.append(line)
    columns = [readable(cell.strip()) for cell in table_lines[0].strip("|").split("|")]
    rows = [[readable(cell.strip()) for cell in line.strip("|").split("|")]
            for line in table_lines[2:]]
    if len(rows) < 12 or any(len(row) != len(columns) for row in rows):
        raise ValueError(f"Incomplete revision table: {stem}")
    next_step = " ".join(lines[table_start + len(table_lines):])
    if not next_step.startswith("**Prochaine étape :"):
        raise ValueError(f"Next step missing: {stem}")
    return columns, rows, readable(intro), readable(next_step)


def generate(stem: str, number: str, title: str, subtitle: str) -> Path:
    columns, rows, intro, next_step = revision_content(stem)
    output = ASSETS / f"fiche-revision-{stem[3:]}.pdf"
    output.parent.mkdir(parents=True, exist_ok=True)
    body = ParagraphStyle("body", fontName="ArialUnicode", fontSize=9.2,
                          leading=13.8, textColor=INK, alignment=TA_LEFT)
    label = ParagraphStyle("label", parent=body, fontName="ArialBold",
                           fontSize=9, leading=13, textColor=MAROON)
    caption = ParagraphStyle("caption", parent=body, fontSize=9, leading=14, textColor=MUTED)
    section = ParagraphStyle("section", fontName="ArialBold", fontSize=15,
                             leading=20, textColor=MAROON)
    doc = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=42, rightMargin=42,
                            topMargin=142, bottomMargin=64,
                            title=f"Fiche de révision - {title} | Psychométriques.fr",
                            author="Psychométriques.fr")
    story = []
    for page_index, (heading, description, cards) in enumerate(REVISION_PAGES[stem]):
        if page_index:
            story.append(PageBreak())
        story += [Paragraph(escape(heading), section), Spacer(1, 3),
                  Paragraph(escape(description), caption), Spacer(1, 13)]
        for card_title, rule, example, trap in cards:
            card_rows = [
                [Paragraph(escape(card_title), ParagraphStyle(
                    "card-title", parent=section, fontSize=11, leading=14))],
                [Paragraph(f'<font color="#45121d"><b>Règle.</b></font> {escape(rule)}', body)],
                [Paragraph(f'<font color="#45121d"><b>Exemple.</b></font> {escape(example)}', body)],
                [Paragraph(f'<font color="#45121d"><b>À vérifier.</b></font> {escape(trap)}', body)],
            ]
            card_table = Table(card_rows, colWidths=[A4[0] - 84 - 26], hAlign="LEFT")
            card_table.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("LINEBEFORE", (0, 0), (0, -1), 3, GOLD),
                ("LEFTPADDING", (0, 0), (-1, -1), 13),
                ("RIGHTPADDING", (0, 0), (-1, -1), 13),
                ("TOPPADDING", (0, 0), (-1, 0), 9),
                ("BOTTOMPADDING", (0, 0), (-1, 0), 4),
                ("TOPPADDING", (0, 1), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 1), (-1, -1), 3),
                ("BOTTOMPADDING", (0, -1), (-1, -1), 10),
            ]))
            story.append(KeepTogether([card_table, Spacer(1, 11)]))

    story += [PageBreak(), Paragraph("04 / Repères essentiels", section), Spacer(1, 3),
              Paragraph("Le tableau à relire juste avant de passer aux exercices.", caption),
              Spacer(1, 13)]
    if intro:
        story += [Paragraph(escape(intro), caption), Spacer(1, 14)]
    widths = [175, A4[0] - 84 - 175] if len(columns) == 2 else [155, 165, A4[0] - 84 - 320]
    header = ParagraphStyle("table-header", parent=label, textColor=colors.white)
    cells = [[Paragraph(escape(value), header) for value in columns]]
    cells += [[Paragraph(escape(value), label if i == 0 else body)
               for i, value in enumerate(row)] for row in rows]
    table = Table(cells, colWidths=widths, repeatRows=1, hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), MAROON),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("LEFTPADDING", (0, 0), (-1, -1), 11),
        ("RIGHTPADDING", (0, 0), (-1, -1), 11),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PAPER]),
        ("LINEBELOW", (0, 0), (-1, -1), 0.5, LINE),
    ]))
    story += [table, Spacer(1, 18), Paragraph(escape(next_step), caption)]

    def page_decoration(canvas, document):
        width, height = A4
        canvas.setFillColor(PAPER)
        canvas.rect(0, 0, width, height, fill=1, stroke=0)
        canvas.setFillColor(MAROON)
        canvas.rect(0, height - 119, width, 119, fill=1, stroke=0)
        canvas.setFillColor(GOLD)
        canvas.setFont("ArialUnicode", 8)
        canvas.drawString(42, height - 32, f"RÉFLEXION QUANTITATIVE  /  LEÇON {number}")
        canvas.setFillColor(colors.white)
        canvas.setFont("ArialBold", 19)
        canvas.drawString(42, height - 61, title)
        canvas.setFont("ArialUnicode", 10)
        canvas.drawString(42, height - 82, subtitle)
        canvas.setStrokeColor(LINE)
        canvas.line(42, 47, width - 42, 47)
        canvas.setFillColor(MUTED)
        canvas.setFont("ArialUnicode", 7.5)
        canvas.drawString(42, 31, "Psychométriques.fr · Fiche de révision")
        canvas.drawRightString(width - 42, 31, f"Page {document.page}")

    doc.build(story, onFirstPage=page_decoration, onLaterPages=page_decoration)
    return output


if __name__ == "__main__":
    pdfmetrics.registerFont(TTFont("ArialUnicode", str(FONT)))
    pdfmetrics.registerFont(TTFont("ArialBold", str(FONT_BOLD)))
    for lesson in LESSONS:
        print(generate(*lesson))
