"""Detailed revision cards derived from quantitative lessons 06-10."""

MORE_REVISION_PAGES = {
    "06-moyennes": [
        ("01 / Revenir à la somme", "Une moyenne résume une somme et un effectif.", [
            ("Moyenne simple", "Pour n valeurs, m = S/n et S = nm. Retrouver la somme avant de modifier les données.", "Cinq notes de moyenne 12 totalisent 60 points ; une note de 18 porte la somme à 78 et la moyenne à 13.", "Ne pas ajouter directement 18 à la moyenne initiale ; l'effectif passe de cinq à six."),
            ("Valeur manquante", "Calculer la somme imposée par la moyenne, puis retirer les valeurs déjà connues.", "Quatre valeurs de moyenne 10 totalisent 40 ; si trois valent 7, 11 et 9, la dernière vaut 13.", "Vérifier l'effectif et ne compter la valeur inconnue qu'une seule fois."),
            ("Moyenne pondérée", "Les coefficients indiquent des poids ou des effectifs ; diviser la somme poids × valeur par la somme des poids.", "Deux scores 10 et un score 16 donnent (2 × 10 + 16)/3 = 12.", "La moyenne simple de 10 et 16, soit 13, ignore le poids double de 10."),
            ("Réunir des groupes", "Pour des groupes disjoints, additionner les sommes ni × mi puis les effectifs ni.", "10 élèves de moyenne 14 et 20 de moyenne 17 donnent (140 + 340)/30 = 16.", "Ne pas moyenner 14 et 17 sans tenir compte des tailles ; ne pas fusionner des groupes qui se recoupent."),
        ]),
        ("02 / Modifier les données", "Suivre séparément le total et le nombre de valeurs.", [
            ("Ajouter ou retirer", "Un ajout a donne (nm+a)/(n+1). Un retrait a donne (nm−a)/(n−1), avec n > 1.", "Quatre scores de moyenne 15 totalisent 60 ; retirer un score de 12 laisse 48/3 = 16.", "Après un retrait, l'effectif baisse aussi ; la moyenne restante peut monter."),
            ("Corriger une valeur", "Remplacer a par b change la somme de b−a mais conserve l'effectif ; la moyenne varie de (b−a)/n.", "Dans cinq notes, corriger 8 en 18 augmente la moyenne de 10/5 = 2 points.", "Une correction n'est ni un ajout ni un retrait d'élève."),
            ("Transformer toutes les valeurs", "Si chaque valeur x devient ax+b, la nouvelle moyenne est am+b.", "Multiplier toutes les notes par 2 puis ajouter 3 transforme une moyenne 11 en 25.", "N'appliquer b qu'une fois à la moyenne, même si b est ajouté à chaque donnée."),
            ("Atteindre une cible", "Multiplier la moyenne visée par l'effectif final, puis retirer la somme déjà acquise.", "Quatre notes totalisent 48 ; pour une moyenne de 13 sur cinq notes, la cinquième doit valoir 65−48 = 17.", "Vérifier que la note demandée respecte le plafond et le domaine de l'épreuve."),
        ]),
        ("03 / Utiliser les structures", "Les écarts et les taux exigent le bon dénominateur.", [
            ("Écarts à la moyenne", "La somme des écarts signés à la moyenne est nulle. À un repère c, elle vaut n(m−c).", "Pour 8, 10 et 12, la moyenne est 10 et les écarts −2, 0, +2 se compensent.", "Les écarts absolus ne s'annulent pas ; garder les signes."),
            ("Suite régulière", "Dans une suite arithmétique finie, la moyenne est celle des deux extrêmes, ou le terme central s'il existe.", "Pour 4, 7, 10, 13, la moyenne vaut (4+13)/2 = 8,5.", "Cette propriété suppose des pas égaux ; elle ne s'étend pas à n'importe quelle liste triée."),
            ("Retrouver un effectif", "Écrire somme = effectif × moyenne pour chaque groupe, puis résoudre l'équation créée par la fusion.", "Si n élèves ont 12 de moyenne et 10 autres ont 18, la moyenne commune 15 impose 12n+180=15(n+10), donc n=10.", "L'effectif doit être un entier admissible ; la moyenne commune reste entre celles des groupes."),
            ("Moyenne d'un taux", "Pour une vitesse, diviser distance totale par durée totale ; pour un taux global, pondérer par le dénominateur correspondant.", "Faire 60 km en 1 h puis 60 km en 2 h donne 120/3 = 40 km/h.", "La moyenne simple de 60 et 30 km/h, soit 45, n'est pas la vitesse moyenne de ce trajet."),
        ]),
    ],
    "07-puissances-racines": [
        ("01 / Voir la structure", "La base et les parenthèses déterminent le calcul.", [
            ("Base, signe et exposant", "L'exposant agit sur la base écrite. Une base négative entre parenthèses change de signe selon la parité de l'exposant.", "(−2)² = 4, tandis que −2² = −4 : le second signe moins reste extérieur.", "Ne pas supprimer les parenthèses avant d'avoir identifié la base."),
            ("Même base", "Dans un produit de même base, additionner les exposants ; dans un quotient de même base non nulle, les soustraire.", "2³ × 2⁴ = 2⁷ ; 5⁶/5² = 5⁴.", "Ces gestes ne valent pas pour une somme : 2³+2⁴ n'est pas 2⁷."),
            ("Puissance d'une puissance", "Multiplier les exposants quand les expressions sont définies ; distribuer une puissance sur un produit, avec les domaines requis.", "(3²)³ = 3⁶ ; (2×5)² = 2²×5².", "(a+b)² n'est pas a²+b² : il manque le terme croisé 2ab."),
            ("Zéro et exposant négatif", "Pour a non nul, a⁰ = 1 et a⁻ⁿ = 1/aⁿ. Un exposant négatif prend l'inverse.", "2⁻³ = 1/8 ; 7⁰ = 1.", "0⁰ et 0 à un exposant négatif ne sont pas autorisés ici."),
        ]),
        ("02 / Garder la valeur exacte", "Une racine carrée a une valeur principale non négative.", [
            ("Racine d'un carré", "Pour x réel, √(x²) = |x| ; la racine carrée n'est définie que pour un radicande non négatif.", "√((−5)²) = √25 = 5, pas −5.", "L'équation x²=25 a deux solutions, mais √25 désigne une seule valeur."),
            ("Extraire un carré", "Dans un produit de radicandes non négatifs, sortir les facteurs carrés parfaits de la racine.", "√72 = √(36×2) = 6√2.", "Ne pas écrire √(a+b)=√a+√b : la racine ne se distribue pas sur une somme."),
            ("Addition de racines", "Simplifier d'abord chaque radical, puis additionner seulement les termes portant le même radical.", "√8+√18 = 2√2+3√2 = 5√2.", "√2+√3 ne se réduit pas en √5."),
            ("Encadrer sans arrondir", "Comparer le radicande à des carrés parfaits pour borner la racine principale.", "49 < 50 < 64 donne 7 < √50 < 8.", "Une approximation décimale ne remplace pas une valeur exacte quand l'énoncé la demande."),
        ]),
        ("03 / Comparer et résoudre", "Factoriser et vérifier les domaines.", [
            ("Somme de puissances", "Factoriser la plus petite puissance commune ou compter les copies, sans inventer une règle d'exposants.", "2⁵+2⁵ = 2×2⁵ = 2⁶, alors que 2⁵+2⁶ = 3×2⁵.", "L'addition des exposants concerne un produit de même base."),
            ("Notation scientifique", "Écrire c×10ⁿ avec n entier et 1≤|c|<10, puis suivre les puissances de dix.", "0,00042 = 4,2×10⁻⁴.", "Le coefficient 42 n'est pas normalisé pour une écriture scientifique."),
            ("Conjugués", "Le produit (u−v)(u+v)=u²−v² permet d'éliminer une racine d'un dénominateur non nul.", "1/(√3−1) = (√3+1)/2.", "Multiplier numérateur et dénominateur par le même conjugué ; ne pas changer seulement le bas."),
            ("Équation avec racine", "Poser le domaine, isoler la racine, mettre au carré puis vérifier chaque candidat dans l'équation initiale.", "√(x+1)=x−1 impose x≥1 ; après le carré, x=3 convient, x=0 est exclu.", "Le carré peut créer des solutions parasites ; la vérification finale est indispensable."),
        ]),
    ],
    "08-expressions-algebriques": [
        ("01 / Réduire et développer", "Chaque transformation doit garder la même valeur.", [
            ("Expression et identité", "Une expression prend une valeur après substitution ; une identité est vraie pour toutes les valeurs autorisées.", "Pour E(x)=2x+3, E(4)=11 ; 2(x+1)+1=2x+3 est une identité.", "Une égalité vérifiée pour un seul x ne prouve pas une identité."),
            ("Termes semblables", "Réduire seulement les coefficients des termes de même nature et même puissance.", "3x²+2x−x²+5x = 2x²+7x.", "x² et x ne sont pas semblables ; on ne les additionne pas."),
            ("Distributivité et signe", "Multiplier chaque terme de la parenthèse ; un signe moins devant elle change tous les signes.", "3(x−2)−(x+4)=3x−6−x−4=2x−10.", "Oublier le second − devant 4 change l'expression."),
            ("Double distributivité", "Pour deux binômes, former les quatre produits puis regrouper les termes semblables.", "(x+2)(x+3)=x²+5x+6.", "Les termes croisés 2x et 3x comptent tous les deux."),
        ]),
        ("02 / Choisir la bonne forme", "Factoriser ou substituer peut éviter un long développement.", [
            ("Facteur commun", "Transformer une somme en produit en retirant ce qui multiplie tous les termes.", "6x+9=3(2x+3) ; pour x=−1, les deux formes valent 3.", "On ne retire pas un facteur qui n'appartient qu'à certains termes."),
            ("Identités remarquables", "Lire les carrés de somme et de différence dans les deux sens ; les conjugués donnent une différence de carrés.", "(a−b)²=a²−2ab+b² ; (a−b)(a+b)=a²−b².", "(a−b)² n'est pas a²−b² : le terme −2ab est indispensable."),
            ("Fraction algébrique", "Écrire les valeurs interdites de l'expression initiale avant de factoriser et simplifier.", "(x²−1)/(x−1)=x+1 seulement pour x≠1.", "La valeur x=1 ne redevient pas permise après suppression du facteur x−1."),
            ("Substituer un bloc", "Repérer une expression entière déjà connue et la remplacer sans attribuer une valeur à chaque variable.", "Si x+y=7, alors 3(x+y)−2=19.", "Connaître x+y ne permet pas de conclure séparément que x ou y vaut 7."),
        ]),
        ("03 / Repérer l'information utile", "Une constante, une somme ou un reste peut suffire.", [
            ("Coefficient et constante", "Pour un coefficient demandé, ne garder que les produits contributeurs ; P(0) donne le terme constant.", "Dans (x+2)(x+3), le coefficient de x est 2+3=5 et P(0)=6.", "Développer tout peut être inutile ; distinguer coefficient de x et valeur de P(1)."),
            ("Somme et produit", "Si s=x+y et p=xy, alors x²+y²=s²−2p et (x−y)²=s²−4p.", "Si x+y=5 et xy=6, alors x²+y²=25−12=13.", "Le carré d'une somme contient 2xy ; l'omettre donne une fausse identité."),
            ("Paramètre dans une identité", "Une identité en x exige l'égalité des coefficients de chaque puissance de x.", "ax+b=2x+3 pour tout x impose a=2 et b=3.", "Tester une seule valeur de x ne détermine pas tous les coefficients."),
            ("Reste par x−a", "Le reste de la division d'un polynôme P par x−a est P(a).", "Pour P(x)=x²+1, le reste par x−2 vaut P(2)=5.", "Par x+2, on évalue P(−2), pas P(2)."),
        ]),
    ],
    "09-equations-inegalites": [
        ("01 / Résoudre sans perdre le domaine", "Une solution répond à l'égalité initiale.", [
            ("Domaine et vérification", "Lister les valeurs interdites avant toute transformation, puis tester les candidats dans l'énoncé initial.", "(x²−1)/(x−1)=3 exige x≠1 ; la simplification donne x+1=3, donc x=2 convient.", "Une simplification ne rend pas x=1 admissible."),
            ("Premier degré", "Pour ax=b, a non nul donne une solution ; si a=0, comparer b à zéro avant de conclure.", "2x+3=11 donne x=4 ; 0x=5 n'a aucune solution.", "0x=0 est vrai pour tout x du domaine, ce n'est pas une solution unique."),
            ("Dénominateurs", "Multiplier tous les termes de l'équation par un dénominateur commun non nul sur le domaine.", "x/2+x/3=5 donne 3x+2x=30, donc x=6.", "Ne pas multiplier seulement une partie des termes ; écarter d'abord les zéros des dénominateurs."),
            ("Produit nul", "Un produit est nul si au moins un de ses facteurs est nul. Résoudre chaque branche.", "(x−2)(x+3)=0 donne x=2 ou x=−3.", "Diviser par x−2 ferait disparaître la solution x=2."),
        ]),
        ("02 / Compter toutes les solutions", "Équations, systèmes et contraintes entières.", [
            ("Carré et nombre de solutions", "x²=c a deux solutions opposées si c>0, une si c=0, aucune réelle si c<0.", "x²=9 donne x=−3 ou x=3.", "La racine carrée √9 vaut 3, mais l'équation possède deux solutions."),
            ("Système de deux inconnues", "Substituer une inconnue ou éliminer une variable ; vérifier les deux équations.", "x+y=7 et x−y=1 : en additionnant, 2x=8, donc x=4 et y=3.", "Une valeur qui satisfait seulement une équation ne résout pas le système."),
            ("Inégalité et facteur négatif", "Additionner conserve le sens ; multiplier ou diviser par un nombre négatif l'inverse.", "−2x<6 donne x>−3.", "Ne pas multiplier une inégalité par une expression de signe inconnu sans traiter les cas."),
            ("Entiers dans un intervalle", "Lire les bornes strictes ou larges, puis trouver le premier et le dernier entiers admissibles.", "2<x≤6 donne les quatre entiers 3, 4, 5, 6.", "Compter 2 dans l'exemple inclurait à tort une borne stricte."),
        ]),
        ("03 / Raisonner par signes", "Distances, produits et quotients demandent des cas.", [
            ("Valeur absolue", "|x−a| est la distance à a : « moins de r » donne l'intérieur ; « plus de r » donne l'extérieur.", "|x−3|<2 donne 1<x<5 ; |x−3|>2 donne x<1 ou x>5.", "Ne pas remplacer le « ou » extérieur par « et »."),
            ("Signe d'un produit", "Placer tous les zéros des facteurs sur une droite, puis tester le signe sur chaque intervalle.", "(x−1)(x+2)>0 pour x<−2 ou x>1.", "Les zéros sont exclus d'une inégalité stricte."),
            ("Signe d'un quotient", "Séparer les zéros du numérateur et les valeurs interdites du dénominateur.", "(x−1)/(x+2)≥0 donne x<−2 ou x≥1 ; x=−2 reste interdit.", "Un dénominateur nul n'est jamais inclus, même avec ≥ ou ≤."),
            ("Paramètre et cas limite", "Avant de diviser par un coefficient dépendant d'un paramètre, traiter le cas où il s'annule.", "(a−1)x=2 : si a=1, aucune solution ; sinon x=2/(a−1).", "Une formule avec a−1 au dénominateur ne couvre pas a=1."),
        ]),
    ],
    "10-problemes-algebriques": [
        ("01 / Traduire l'histoire", "Nommer la grandeur avant d'écrire l'équation.", [
            ("Cinq gestes", "Choisir l'inconnue et son unité, nommer le domaine, traduire les relations, résoudre, vérifier dans l'énoncé.", "Si x est un nombre d'articles, x est un entier non négatif ; un prix x peut être décimal.", "Une solution algébrique peut être impossible dans la situation réelle."),
            ("Monnaie rendue", "La dépense vaut le montant remis moins la monnaie reçue ; vérifier ce que représente chaque somme.", "Sur 20 €, rendre 3 € signifie une dépense de 17 €.", "Ne pas prendre la monnaie rendue pour le prix de l'achat."),
            ("Frais fixes ou unitaires", "Un frais unique f s'ajoute une fois : np+f. Un frais f par article donne n(p+f).", "Quatre articles à 5 € avec 3 € de livraison unique coûtent 4×5+3=23 €.", "Multiplier les frais de livraison par quatre ferait payer 32 €."),
            ("Comparer deux tarifs", "Écrire le coût de chaque offre selon la même quantité ; résoudre l'égalité pour le seuil et une inégalité pour l'avantage.", "A=5+2n et B=3n sont égaux à n=5 ; pour n>5, A coûte moins cher.", "Le point d'égalité ne suffit pas à décider quel tarif gagne de chaque côté."),
        ]),
        ("02 / Compter et répartir", "Un total et un écart donnent deux relations.", [
            ("Deux catégories", "Si le total est N, représenter les effectifs par x et N−x ; traduire ensuite la valeur totale.", "10 billets à 2 € ou 5 € totalisent 32 € : 2x+5(10−x)=32 donne x=6 billets à 2 €.", "Ne pas créer deux inconnues indépendantes quand leur somme est déjà connue."),
            ("Âges à une même date", "Ajouter ou retirer le même nombre d'années à chaque personne ; leur différence d'âge reste constante.", "Si A a 20 ans et B 14, dans cinq ans ils auront 25 et 19, toujours six ans d'écart.", "Ajouter cinq ans à un seul âge change artificiellement l'histoire."),
            ("Entiers consécutifs", "Trois entiers successifs peuvent s'écrire x−1, x, x+1 ; les pairs ou impairs consécutifs ont un pas de deux.", "Trois entiers successifs totalisant 36 sont 11, 12, 13.", "Trois nombres pairs successifs ne s'écrivent pas x, x+1, x+2."),
            ("Manque et reste", "Si le stock manque de m pour couvrir un besoin, stock=besoin−m ; s'il reste r après partage, stock=distribué+r.", "Il faut 30 objets, il en manque 4 : le stock est 26.", "« Il manque quatre » et « il reste quatre » ont des signes opposés."),
        ]),
        ("03 / Vérifier le modèle", "Faire le bilan des mouvements et répondre à la bonne question.", [
            ("Bilan de stock", "Stock final = stock initial + entrées − sorties ; garder la même unité partout.", "Partir de 40, recevoir 15 et utiliser 12 laisse 43 unités.", "Un transfert interne change les sous-stocks, pas leur total."),
            ("Transfert entre catégories", "Déplacer x de A vers B donne A−x et B+x, avec total conservé.", "De 30 et 18, transférer 6 donne 24 et 24.", "Retirer x de A sans l'ajouter à B ne décrit plus un transfert."),
            ("Nombre à deux chiffres", "Avec dizaines d et unités u, N=10d+u ; le nombre inversé est 10u+d.", "Pour 47, l'inversé est 74 et leur différence vaut 9(7−4)=27.", "d et u sont des chiffres entiers de 0 à 9 ; d ne peut pas être zéro pour un nombre à deux chiffres."),
            ("Vérification finale", "Remplacer les inconnues dans les phrases initiales ; contrôler entier, bornes, signe et unité, puis formuler la réponse demandée.", "Une équation donnant 2,5 personnes est à rejeter même si le calcul est exact.", "Ne pas livrer seulement x si la question demande un prix, un nombre de paquets ou un excédent."),
        ]),
    ],
}
