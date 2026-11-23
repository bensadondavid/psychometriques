# Quadrilatères et polygones : découper pour comprendre

Calculer une surface devient beaucoup plus simple quand on peut la découper en rectangles et en triangles. Cette idée sera notre fil conducteur : comprendre d’où vient une formule, puis reconnaître quand elle est utile.

Nous allons distinguer les familles de figures sans supposer que vous vous rappelez leurs noms. Vous apprendrez à calculer un contour, une surface, une diagonale, puis à traiter une bordure ou une figure composée. Les propriétés plus techniques des polygones sont regroupées à la fin.

## Comment avancer dans cette leçon

Commencez sans chronomètre. Pour chaque séquence : lisez la notion, refaites l’exemple sur une feuille, puis essayez le petit exercice avant d’ouvrir sa correction. Si vous bloquez, utilisez l’indice : il sert à trouver le premier pas.

Les séquences « Pour aller plus loin » sont un second passage. Elles ne remplacent pas les bases. En fin de leçon, un entraînement mélange les notions : commencez en justifiant vos réponses, puis reprenez plus rapidement lorsque la méthode est acquise. Une erreur indique quoi retravailler ; elle ne dit rien de votre capacité à réussir.

## Petit point de départ — Trois questions sans pression

Essayez de répondre, puis indiquez si vous êtes sûr, hésitant ou bloqué.

<!-- interaction D1 | réponse courte + confiance | reprise : S2–S3 -->
**D1. Rectangle 5 cm sur 3 : aire et périmètre ?**

<details><summary>Voir une explication</summary>

Aire 15 cm² ; périmètre 16 cm.

À reprendre si besoin : S2–S3.

</details>

<!-- interaction D2 | réponse courte + confiance | reprise : S9 -->
**D2. Le côté d’un carré double : son aire double-t-elle ?**

<details><summary>Voir une explication</summary>

Non, elle est multipliée par 4.

À reprendre si besoin : S9.

</details>

<!-- interaction D3 | réponse courte + confiance | reprise : S4 -->
**D3. Une diagonale relie-t-elle deux sommets voisins ?**

<details><summary>Voir une explication</summary>

Non, deux sommets non voisins. Les voisins sont reliés par un côté.

À reprendre si besoin : S4.

</details>

## Séquence 1 — Reconnaître une famille à ses propriétés

Un **polygone** est une figure plane fermée formée de segments. Un quadrilatère a quatre côtés. Un parallélogramme a ses côtés opposés parallèles deux à deux. Un rectangle est un parallélogramme avec quatre angles droits. Un losange est un parallélogramme dont les quatre côtés ont la même longueur. Un carré est à la fois un rectangle et un losange.

Un trapèze possède une paire de côtés opposés parallèles, appelés bases. Selon les conventions, on demande au moins une paire ou exactement une paire ; les calculs de cette leçon utilisent seulement les bases parallèles indiquées. Un polygone **régulier** est convexe ici, avec tous ses côtés et tous ses angles égaux.

### Regardons un exemple ensemble

Un carré tourné sur la pointe reste un carré : sa position ne change pas ses angles ni ses longueurs. Un losange très incliné n’est pas un carré si ses angles ne sont pas droits. Dans un parallélogramme, les angles opposés sont égaux et deux angles voisins sont supplémentaires.

### À vous, étape par étape

<!-- interaction I1 | réponse construite ; indice à la demande ; justification | compétence : S1 -->
**I1. Un parallélogramme possède un angle de 70°. Quelles sont les mesures des trois autres ? S’il a aussi quatre côtés égaux, quel nom peut-on lui donner ?**

<details><summary>Un indice pour démarrer</summary>

Les angles opposés sont égaux ; deux voisins complètent 180°.

</details>

<details><summary>Correction expliquée</summary>

Les angles, en tournant autour de la figure, valent 70°, 110°, 70°, 110°. Avec quatre côtés égaux, c’est un losange. Les angles ne permettent pas de l’appeler carré.

</details>

**Le piège à éviter :** L’apparence d’un dessin ne prouve ni égalité, ni parallélisme, ni angle droit.

## Séquence 2 — Périmètre du rectangle et du carré : suivre le contour

Le périmètre additionne les longueurs qui bordent la figure. Un rectangle de longueur L et largeur l a deux côtés de chaque longueur : P = 2L + 2l = 2(L + l). Son **demi-périmètre** vaut donc L + l.

Pour un carré de côté c, P = 4c. Le côté vaut alors P/4. Ces formules ne calculent aucune surface ; elles donnent une longueur. Les côtés doivent être convertis dans la même unité avant addition.

### Regardons un exemple ensemble

Un rectangle de périmètre 30 cm vérifie L + l = 15 cm. Si L = 9, la largeur vaut 15 − 9 = 6 cm. Pour un carré de périmètre 28, chaque côté vaut 28/4 = 7 cm. On contrôle en refaisant le tour.

### À vous, étape par étape

<!-- interaction I2 | réponse construite ; indice à la demande ; justification | compétence : S2 -->
**I2. Un rectangle mesure 12 cm sur 5 cm. Quel est son périmètre ? Un autre rectangle a le même périmètre et une longueur de 10 cm : quelle est sa largeur ?**

<details><summary>Un indice pour démarrer</summary>

Retrouvez le demi-périmètre commun avant de chercher le côté inconnu.

</details>

<details><summary>Correction expliquée</summary>

Périmètre : 2 × (12 + 5) = 34 cm. Demi-périmètre : 17 cm. Nouvelle largeur : 17 − 10 = 7 cm.

</details>

**Le piège à éviter :** Un même périmètre ne garantit pas une même aire : 12 × 5 vaut 60, mais 10 × 7 vaut 70.

## Séquence 3 — Aire : compter des carrés unités

Une aire de 12 cm² signifie une surface équivalente à douze carrés de côté 1 cm. Un rectangle L par l contient L rangées de l carrés unités lorsque les mesures sont entières ; la formule A = L × l s’étend aux autres mesures positives. Pour un carré : A = c².

Si l’aire et un côté d’un rectangle sont connus, l’autre côté vaut aire / côté. Dans un problème de carrelage, on divise les aires pour compter les carreaux seulement si le pavage est possible sans pertes, ou si l’énoncé le suppose. Les découpes et pertes peuvent changer le nombre réellement acheté.

### Regardons un exemple ensemble

Un rectangle de 8 cm sur 3 cm a une aire de 24 cm² et un périmètre de 22 cm. Un rectangle de même aire et de largeur 4 a une longueur de 24/4 = 6 cm. Son périmètre vaut 20 cm : l’aire ne fixe pas le contour.

### À vous, étape par étape

<!-- interaction I3 | réponse construite ; indice à la demande ; justification | compétence : S3 -->
**I3. Une surface rectangulaire de 6 m sur 4 m est pavée exactement par des carrés de côté 0,5 m. Combien de carrés faut-il ?**

<details><summary>Un indice pour démarrer</summary>

Vous pouvez compter les carrés sur chaque côté, ou diviser les aires après conversion cohérente.

</details>

<details><summary>Correction expliquée</summary>

12 carrés sur la longueur et 8 sur la largeur, soit 96. Par les aires : 24 m² / 0,25 m² = 96. Diviser seulement 24 par 0,5 mélangerait une aire et une longueur.

</details>

**Le piège à éviter :** Dans un tableau de réponses, cm et cm² ne sont pas interchangeables.

## Séquence 4 — Diagonales : retrouver un triangle rectangle

Une **diagonale** relie deux sommets non voisins. Dans un rectangle, une diagonale est l’hypoténuse d’un triangle rectangle dont les autres côtés sont L et l : d² = L² + l². Dans un carré de côté c, d = c√2, donc A = d²/2.

Dans un losange, les diagonales se coupent à angle droit et en leur milieu. Le quart de la figure est donc un triangle rectangle dont les côtés perpendiculaires sont les demi-diagonales. Cela permet de retrouver le côté du losange par Pythagore.

### Regardons un exemple ensemble

Un rectangle de côtés 6 et 8 a une diagonale de √(36 + 64) = 10. Un losange de diagonales 6 et 8 donne des demi-diagonales 3 et 4 : son côté vaut 5, pas 10. Le choix du triangle change les données utilisées.

### À vous, étape par étape

<!-- interaction I4 | réponse construite ; indice à la demande ; justification | compétence : S4 -->
**I4. Un carré a une diagonale de 10 cm. Quelle est son aire ? Un rectangle a une diagonale de 13 cm et un côté de 5 cm : quelle est son aire ?**

<details><summary>Un indice pour démarrer</summary>

Pour le carré, utilisez d²/2. Pour le rectangle, retrouvez d’abord le second côté.

</details>

<details><summary>Correction expliquée</summary>

Carré : 100/2 = 50 cm². Rectangle : autre côté √(169 − 25) = 12 cm ; aire 5 × 12 = 60 cm².

</details>

**Le piège à éviter :** Le carré de la diagonale n’est pas l’aire du carré : il faut le diviser par deux.

## Séquence 5 — Parallélogramme et losange : la hauteur reste perpendiculaire

Un parallélogramme peut être découpé puis réassemblé en rectangle sans changer de surface. Son aire est base × hauteur associée. La hauteur est perpendiculaire à la base ; elle n’est pas le côté incliné.

Le même parallélogramme peut être calculé avec une autre base : les deux produits base × hauteur donnent la même aire. Pour un losange de diagonales D et d, les quatre triangles rectangles formés au centre donnent une aire totale Dd/2.

### Regardons un exemple ensemble

![Parallélogramme de base 8 cm, de hauteur perpendiculaire 3 cm et de côté incliné 5 cm.](assets/19-parallelogramme.svg)

Son aire vaut 8 × 3 = 24 cm² ; son périmètre vaut 2 × (8 + 5) = 26 cm. Si l’on prend le côté de 5 comme base, sa hauteur associée vaut 24/5 = 4,8 cm.

### À vous, étape par étape

<!-- interaction I5 | réponse construite ; indice à la demande ; justification | compétence : S5 -->
**I5. Un parallélogramme a une base de 12 cm et une hauteur de 5 cm. Son autre côté mesure 10 cm. Quelle hauteur correspond à ce côté de 10 ? Un losange de diagonales 12 et 10 a-t-il la même aire ?**

<details><summary>Un indice pour démarrer</summary>

La surface ne change pas quand on choisit une autre base.

</details>

<details><summary>Correction expliquée</summary>

Aire : 12 × 5 = 60 cm². Autre hauteur : 60/10 = 6 cm. Losange : 12 × 10/2 = 60 cm² ; même aire, sans que ce soit nécessairement la même figure.

</details>

**Le piège à éviter :** Dans un parallélogramme incliné, multiplier les deux côtés voisins ne donne pas généralement l’aire.

## Séquence 6 — Trapèze : faire la moyenne des deux bases

Dans un trapèze de bases parallèles B et b et de hauteur h, l’aire vaut :

\[A=\frac{(B+b)h}{2}.\]

Pour comprendre, assemblez deux copies identiques : elles forment un parallélogramme de base B + b et de hauteur h. Un seul trapèze occupe la moitié. Le segment reliant les milieux des deux côtés non parallèles est parallèle aux bases et mesure (B + b)/2 ; l’aire est aussi ce segment médian multiplié par la hauteur.

### Regardons un exemple ensemble

![Trapèze de bases 10 et 6 cm et de hauteur 4 cm ; le segment médian mesure 8 cm.](assets/19-trapeze.svg)

Aire : (10 + 6) × 4/2 = 32 cm². Avec une aire de 40 et les mêmes bases, la hauteur serait 2 × 40/16 = 5 cm.

### À vous, étape par étape

<!-- interaction I6 | réponse construite ; indice à la demande ; justification | compétence : S6 -->
**I6. Un trapèze a des bases de 7 et 13 cm et une aire de 50 cm². Trouvez sa hauteur et la longueur de son segment médian.**

<details><summary>Un indice pour démarrer</summary>

Le segment médian est la moyenne des bases ; son produit par la hauteur donne l’aire.

</details>

<details><summary>Correction expliquée</summary>

Segment médian : (7 + 13)/2 = 10 cm. Hauteur : 50/10 = 5 cm. Contrôle : 20 × 5/2 = 50.

</details>

**Le piège à éviter :** La hauteur est la distance perpendiculaire entre les bases ; aucun côté incliné n’est automatiquement cette hauteur.

## Séquence 7 — Figures composées et bordures : ajouter ou soustraire des surfaces

Pour une figure composée, dessinez une décomposition en parties dont vous connaissez l’aire. Vous pouvez aussi calculer une grande figure simple et retirer la partie manquante. Les morceaux additionnés ne doivent pas se chevaucher.

Pour une bordure extérieure de largeur uniforme e autour d’un rectangle L par l, les dimensions extérieures valent L + 2e et l + 2e : il y a une bordure de chaque côté. Pour une bande intérieure, les dimensions du rectangle restant valent L − 2e et l − 2e, si elles restent positives.

### Regardons un exemple ensemble

Autour d’un rectangle de 8 m sur 5 m, une bordure extérieure de 1 m donne un grand rectangle de 10 sur 7. Aire de bordure : 70 − 40 = 30 m². Une bande intérieure de 1 m sur le rectangle initial laisserait 6 sur 3, donc une bande d’aire 40 − 18 = 22 m².

### À vous, étape par étape

<!-- interaction I7 | réponse construite ; indice à la demande ; justification | compétence : S7 -->
**I7. Un rectangle mesure 10 cm sur 6 cm. On retire à un coin un triangle rectangle de côtés perpendiculaires 4 et 3 cm. Quelle aire reste-t-il ? Et quelle aire a une bande intérieure de largeur 1 cm dans le rectangle entier ?**

<details><summary>Un indice pour démarrer</summary>

La première question retire un triangle ; la seconde retire un rectangle central. Ce sont deux figures différentes.

</details>

<details><summary>Correction expliquée</summary>

Première aire : 60 − 4 × 3/2 = 54 cm². Bande intérieure : 60 − (10 − 2)(6 − 2) = 60 − 32 = 28 cm².

</details>

**Le piège à éviter :** Une bordure de 1 cm augmente chaque dimension extérieure de 2 cm, pas de 1.

## Séquence 8 — Découper : l’aire se conserve, les contours peuvent augmenter

Découper une figure sans perte conserve la somme des aires. En revanche, une coupe intérieure crée de nouveaux bords sur chacun des deux morceaux. Si une coupe de longueur c sépare une figure en deux, la somme des périmètres des morceaux vaut le périmètre initial plus 2c.

Cette distinction est utile dans les problèmes de puzzle : réassembler conserve les aires, mais les côtés qui deviennent intérieurs ne font plus partie du contour extérieur. Ne déduisez pas un périmètre simplement en additionnant ceux des pièces.

### Regardons un exemple ensemble

Un rectangle de 8 cm sur 4 cm a un périmètre de 24 cm. On le coupe en deux rectangles de 4 sur 4 avec une coupe de longueur 4. Les deux périmètres valent chacun 16 ; leur somme 32 = 24 + 2 × 4. Les deux aires valent 16, dont la somme reste 32 cm².

### À vous, étape par étape

<!-- interaction I8 | réponse construite ; indice à la demande ; justification | compétence : S8 -->
**I8. Un rectangle de 10 cm sur 6 cm est coupé en deux rectangles de 5 sur 6. Quelle est la somme des périmètres des deux morceaux ?**

<details><summary>Un indice pour démarrer</summary>

La coupe traverse une longueur de 6 cm et compte sur les deux morceaux.

</details>

<details><summary>Correction expliquée</summary>

Périmètre initial : 32 cm. Somme après coupe : 32 + 2 × 6 = 44 cm. Contrôle : chaque morceau a un périmètre de 2 × (5 + 6) = 22 cm.

</details>

**Le piège à éviter :** Une longueur de coupe compte deux fois dans la somme des nouveaux périmètres.

## Séquence 9 — Agrandir : longueur et surface ne suivent pas le même facteur

Un agrandissement de facteur k multiplie toutes les longueurs par k. Le périmètre est donc multiplié par k. L’aire, qui multiplie deux dimensions, est multipliée par k².

À l’inverse, si l’aire d’un carré est multipliée par 4, son côté est multiplié par √4 = 2. Si elle est multipliée par 9, son côté triple. La forme doit être conservée pour déduire un rapport de longueurs d’un rapport d’aires.

### Regardons un exemple ensemble

Un carré de côté 3 a une aire de 9 et un périmètre de 12. En doublant son côté, on obtient côté 6, aire 36 et périmètre 24. La surface a quadruplé ; le contour a seulement doublé.

### À vous, étape par étape

<!-- interaction I9 | réponse construite ; indice à la demande ; justification | compétence : S9 -->
**I9. Un carré passe d’une aire de 16 cm² à une aire de 100 cm². Quels sont ses deux côtés et le facteur de multiplication du périmètre ?**

<details><summary>Un indice pour démarrer</summary>

Retrouvez les côtés par les racines carrées, puis formez leur rapport.

</details>

<details><summary>Correction expliquée</summary>

Côtés : 4 puis 10 cm. Le facteur de longueur vaut 10/4 = 2,5 ; le périmètre est multiplié par 2,5. Le facteur d’aire vaut 100/16 = 6,25 = 2,5².

</details>

**Le piège à éviter :** Quadrupler une aire ne quadruple pas le côté.

## Séquence 10 — Polygones : compter les triangles pour additionner les angles

Un polygone convexe à n côtés peut être découpé, depuis un sommet, en n − 2 triangles. Chaque triangle apporte 180°. La somme des angles intérieurs vaut donc (n − 2) × 180°.

Dans un polygone régulier, les n angles sont égaux : chaque angle intérieur vaut cette somme divisée par n. L’angle extérieur qui complète cet angle à 180° vaut 360/n. Les angles extérieurs, pris dans le même sens en faisant le tour, totalisent 360°. Nous travaillons ici avec des polygones convexes, sans croisement.

### Regardons un exemple ensemble

Un pentagone a cinq côtés. Depuis un sommet, on obtient trois triangles : somme des angles 540°. S’il est régulier, chaque angle intérieur vaut 540/5 = 108°, et chaque extérieur 72°. Pour un quadrilatère, la somme vaut 360° : un angle manquant se trouve en retirant les trois autres.

### À vous, étape par étape

<!-- interaction I10 | réponse construite ; indice à la demande ; justification | compétence : S10 -->
**I10. Un polygone régulier a un angle extérieur de 45°. Combien a-t-il de côtés ? Quelle est la mesure de chaque angle intérieur ?**

<details><summary>Un indice pour démarrer</summary>

Huit angles de 45° forment un tour complet.

</details>

<details><summary>Correction expliquée</summary>

Nombre de côtés : 360/45 = 8. Angle intérieur : 180 − 45 = 135°. Contrôle par la somme : (8 − 2) × 180/8 = 135°.

</details>

**Le piège à éviter :** La somme des angles intérieurs n’est pas toujours 360° ; cela correspond seulement aux quadrilatères.

## Séquence 11 — Pour aller plus loin — Diagonales et milieux

Dans un polygone convexe à n sommets, un sommet peut rejoindre par une diagonale n − 3 sommets : il exclut lui-même et ses deux voisins. En multipliant par n, chaque diagonale a été comptée à ses deux extrémités. Le nombre total est donc n(n − 3)/2.

Dans un rectangle, relier les milieux des quatre côtés forme un losange. Ses diagonales ont les longueurs du rectangle ; son aire est la moitié de celle du rectangle. Plus généralement, les milieux d’un quadrilatère non croisé forment un parallélogramme ; sa surface vaut la moitié de la surface initiale.

### Regardons un exemple ensemble

Un hexagone a 6 × 3/2 = 9 diagonales. Dans un rectangle de 12 sur 8, le losange des milieux a une aire de 12 × 8/2 = 48 cm². On peut aussi retirer les quatre triangles de coins : ensemble ils occupent l’autre moitié.

### À vous, étape par étape

<!-- interaction I11 | réponse construite ; indice à la demande ; justification | compétence : S11 -->
**I11. Combien de diagonales possède un décagone, à dix côtés ? Dans un rectangle de 10 cm sur 6, quelle est l’aire du losange des milieux ?**

<details><summary>Un indice pour démarrer</summary>

Pour les diagonales, n’oubliez pas la division par deux. Pour les milieux, retrouvez les diagonales du losange.

</details>

<details><summary>Correction expliquée</summary>

Décagone : 10 × 7/2 = 35 diagonales. Losange : 10 × 6/2 = 30 cm², moitié des 60 cm² du rectangle.

</details>

**Le piège à éviter :** Ne confondez pas le nombre de diagonales issues d’un sommet et le nombre total.

## Séquence 12 — Pour aller plus loin — Hexagone régulier

Relier le centre d’un hexagone régulier à ses six sommets le découpe en six triangles équilatéraux. Chaque angle au centre vaut 360/6 = 60°. Les deux rayons de chaque triangle sont égaux ; ses autres angles valent donc aussi 60°. Le rayon du cercle passant par les sommets est ainsi égal au côté c de l’hexagone.

Chaque triangle équilatéral a une aire c²√3/4. L’aire de l’hexagone vaut six fois cette aire : 3√3 c²/2. Si vous avez oublié la formule finale, retrouvez-la avec le dessin et les six triangles.

### Regardons un exemple ensemble

Pour un hexagone régulier de côté 4 cm, chaque triangle équilatéral a une aire de 4√3. L’ensemble vaut 24√3 cm². Le périmètre vaut 6 × 4 = 24 cm : le même coefficient 24 apparaît ici, mais les grandeurs et les unités diffèrent.

### À vous, étape par étape

<!-- interaction I12 | réponse construite ; indice à la demande ; justification | compétence : S12 -->
**I12. Un hexagone régulier de côté 2 cm est découpé en six triangles depuis son centre. Quelle est l’aire de chaque triangle et celle de l’hexagone ?**

<details><summary>Un indice pour démarrer</summary>

La hauteur d’un équilatéral de côté 2 vaut √3.

</details>

<details><summary>Correction expliquée</summary>

Chaque triangle a une aire de 2 × √3/2 = √3 cm². L’hexagone a une aire de 6√3 cm². Son périmètre, si on le demandait, serait 12 cm.

</details>

**Le piège à éviter :** Le découpage en six triangles équilatéraux est spécifique à l’hexagone régulier ; ne l’étendez pas à tout polygone.

## Votre méthode en situation

1. Reformulez ce qui est demandé, avec son unité.
2. Relevez uniquement les données utiles et les propriétés garanties.
3. Expliquez en une phrase pourquoi la méthode choisie convient.
4. Écrivez le calcul, puis vérifiez le sens du résultat et son unité.

En géométrie, vous pouvez refaire un schéma plus simple, mais ne mesurez jamais le dessin pour remplacer une donnée. Dans un tableau, montrez la ligne, la colonne et le groupe de référence avant de calculer.

## Atelier — Même contour, même surface ?

<!-- interaction A1 | réglage de longueur entière de 1 à 9 ; calculer avant révélation | compétence : S2, S3 -->
Une ficelle de 20 cm forme un rectangle. Si sa longueur vaut L, sa largeur doit valoir 10 − L. Faites varier L sans changer la ficelle. Calculez l’aire pour L = 1, 2, 4, 5, 6, 8 et 9 cm.

Quelles figures ont la même aire ? Parmi les rectangles essayés, lequel a la plus grande aire ? Pour chaque longueur choisie, prévoyez l’aire avant de la vérifier.

<details><summary>Comparer les rectangles</summary>

| Longueur | Largeur | Aire |
| ---: | ---: | ---: |
| 1 | 9 | 9 |
| 2 | 8 | 16 |
| 4 | 6 | 24 |
| 5 | 5 | 25 |
| 6 | 4 | 24 |
| 8 | 2 | 16 |
| 9 | 1 | 9 |

Inverser les dimensions garde la même aire. Le carré 5 sur 5 est le meilleur de ces essais. On peut aussi le montrer pour toutes les longueurs entre 0 et 10 : L(10 − L) = 25 − (L − 5)². Un carré étant positif ou nul, l’aire ne dépasse pas 25. Le contour constant ne suffit donc pas à fixer la surface.

</details>

## Mission finale — Vingt questions pour vous entraîner

Une seule réponse est correcte par question. Gardez une trace de votre raisonnement. Le corrigé se trouve après les vingt questions pour que vous puissiez chercher librement. Les dernières questions peuvent mobiliser les approfondissements.

**F1. Un parallélogramme possède un angle de 112°. Combien vaut un angle voisin ?**

- **A.** 248°
- **B.** 56°
- **C.** 112°
- **D.** 68°

**F2. Un rectangle mesure 11 cm sur 4 cm. Quel est son périmètre ?**

- **A.** 15 cm
- **B.** 44 cm
- **C.** 22 cm
- **D.** 30 cm

**F3. Un rectangle a un périmètre de 42 cm et une longueur de 13 cm. Quelle est sa largeur ?**

- **A.** 29 cm
- **B.** 8 cm
- **C.** 21 cm
- **D.** 16 cm

**F4. Un carré a un périmètre de 36 cm. Quelle est son aire ?**

- **A.** 144 cm²
- **B.** 81 cm²
- **C.** 36 cm²
- **D.** 9 cm²

**F5. Un rectangle a une aire de 72 cm² et une largeur de 6 cm. Quelle est sa longueur ?**

- **A.** 66 cm
- **B.** 18 cm
- **C.** 432 cm
- **D.** 12 cm

**F6. Un sol de 3 m sur 2 m est pavé exactement de carreaux carrés de côté 0,5 m. Combien de carreaux ?**

- **A.** 6
- **B.** 24
- **C.** 48
- **D.** 12

**F7. Un rectangle mesure 8 cm sur 15 cm. Quelle est sa diagonale ?**

- **A.** 7 cm
- **B.** 289 cm
- **C.** 17 cm
- **D.** 23 cm

**F8. Un carré a une diagonale de 12 cm. Quelle est son aire ?**

- **A.** 72 cm²
- **B.** 24 cm²
- **C.** 36 cm²
- **D.** 144 cm²

**F9. Un losange possède des diagonales de 10 et 24 cm. Quelle est la longueur d’un côté ?**

- **A.** 26 cm
- **B.** 12 cm
- **C.** 13 cm
- **D.** 17 cm

**F10. Un parallélogramme a une base de 9 cm, un côté incliné de 5 cm et une hauteur associée à la base de 4 cm. Quelle est son aire ?**

- **A.** 18 cm²
- **B.** 28 cm²
- **C.** 45 cm²
- **D.** 36 cm²

**F11. Un losange a des diagonales de 14 et 8 cm. Quelle est son aire ?**

- **A.** 112 cm²
- **B.** 56 cm²
- **C.** 22 cm²
- **D.** 28 cm²

**F12. Un trapèze a des bases de 6 et 14 cm et une hauteur de 5 cm. Quelle est son aire ?**

- **A.** 20 cm²
- **B.** 100 cm²
- **C.** 70 cm²
- **D.** 50 cm²

**F13. Les bases d’un trapèze mesurent 8 et 18 cm. Quelle est la longueur du segment joignant les milieux des côtés non parallèles ?**

- **A.** 10 cm
- **B.** 26 cm
- **C.** 13 cm
- **D.** 5 cm

**F14. Une bordure extérieure de 1 m entoure un rectangle de 6 m sur 4 m. Quelle est l’aire de la bordure ?**

- **A.** 16 m²
- **B.** 11 m²
- **C.** 48 m²
- **D.** 24 m²

**F15. Une bande intérieure de 1 cm borde un rectangle de 9 cm sur 7 cm. Quelle est l’aire de la bande ?**

- **A.** 15 cm²
- **B.** 32 cm²
- **C.** 35 cm²
- **D.** 28 cm²

**F16. On coupe un rectangle de 12 cm sur 4 cm en deux rectangles de 6 sur 4. Quelle est la somme des périmètres obtenus ?**

- **A.** 32 cm
- **B.** 48 cm
- **C.** 20 cm
- **D.** 40 cm

**F17. L’aire d’un carré est multipliée par 9. Par combien son périmètre est-il multiplié ?**

- **A.** 4,5
- **B.** 81
- **C.** 3
- **D.** 9

**F18. Quelle est la somme des angles intérieurs d’un heptagone convexe, à sept côtés ?**

- **A.** 1260°
- **B.** 360°
- **C.** 720°
- **D.** 900°

**F19. Combien de diagonales possède un octogone convexe ?**

- **A.** 16
- **B.** 40
- **C.** 20
- **D.** 5

**F20. Un hexagone régulier a un côté de 2 cm. Quelle est son aire ?**

- **A.** \(3\sqrt3\) cm²
- **B.** 12 cm²
- **C.** \(6\sqrt3\) cm²
- **D.** \(12\sqrt3\) cm²

<details><summary>Corrigé expliqué des vingt questions</summary>

| Question | Réponse | Pourquoi ? | À revoir |
| --- | --- | --- | --- |
| F1 | **D** — 68° | Deux angles voisins sont supplémentaires : 180 − 112 = 68°. L’angle opposé à 112° aurait valu 112°. | S1 |
| F2 | **D** — 30 cm | Il a deux côtés de chaque longueur : 2 × (11 + 4) = 30 cm. | S2 |
| F3 | **B** — 8 cm | Le demi-périmètre vaut 21 cm. La largeur vaut donc 21 − 13 = 8 cm. | S2 |
| F4 | **B** — 81 cm² | Son côté vaut 36/4 = 9 cm. Son aire vaut 9² = 81 cm². | S3 |
| F5 | **D** — 12 cm | Longueur × 6 = 72, donc longueur = 72/6 = 12 cm. | S3 |
| F6 | **B** — 24 | Six carreaux dans une direction et quatre dans l’autre donnent 24. Chaque carreau a une aire de 0,25 m². | S3 |
| F7 | **C** — 17 cm | La diagonale est l’hypoténuse : √(64 + 225) = √289 = 17 cm. | S4 |
| F8 | **A** — 72 cm² | Pour un carré, d² = 2c². L’aire c² vaut donc 12²/2 = 72 cm². | S4 |
| F9 | **C** — 13 cm | Les demi-diagonales sont perpendiculaires et valent 5 et 12. Un côté vaut √(25 + 144) = 13 cm. | S4 |
| F10 | **D** — 36 cm² | Aire = base × hauteur = 9 × 4 = 36 cm². Le côté incliné de 5 cm n’est pas la hauteur. | S5 |
| F11 | **B** — 56 cm² | Aire = produit des diagonales / 2 = 14 × 8/2 = 56 cm². | S5 |
| F12 | **D** — 50 cm² | La moyenne des bases vaut 10 cm. Multipliée par la hauteur 5, elle donne 50 cm². | S6 |
| F13 | **C** — 13 cm | Le segment médian mesure la moyenne des bases : (8 + 18)/2 = 13 cm. | S6 |
| F14 | **D** — 24 m² | Le grand rectangle mesure 8 sur 6 : aire 48. L’intérieur vaut 24. La bordure vaut 48 − 24 = 24 m². | S7 |
| F15 | **D** — 28 cm² | Le centre restant mesure 7 sur 5, soit 35 cm². Bande = 63 − 35 = 28 cm². | S7 |
| F16 | **D** — 40 cm | Le contour initial vaut 32. La coupe de longueur 4 est comptée deux fois : 32 + 8 = 40 cm. | S8 |
| F17 | **C** — 3 | Le côté est multiplié par √9 = 3. Le périmètre suit le même facteur de longueur. | S9 |
| F18 | **D** — 900° | Il se découpe depuis un sommet en 7 − 2 = 5 triangles : 5 × 180 = 900°. | S10 |
| F19 | **C** — 20 | Formule n(n − 3)/2 : 8 × 5/2 = 20. La division par deux évite le double comptage. | S11 |
| F20 | **C** — \(6\sqrt3\) cm² | Il contient six triangles équilatéraux de côté 2, d’aire √3 chacun. Total : 6√3 cm². | S12 |

</details>

## Faire le point sans se décourager

Pour chaque erreur, choisissez ce qui vous a manqué : comprendre un mot, repérer une donnée, choisir la méthode ou terminer le calcul. Revenez à la séquence indiquée et refaites son exercice en cachant la correction. Une bonne réponse obtenue au hasard mérite aussi une reprise.

Avant de passer à la suite, essayez d’expliquer une notion à voix haute avec vos propres mots, puis de résoudre un exemple avec d’autres nombres. Vous êtes prêt quand vous savez justifier la méthode, même si vous n’allez pas encore très vite.

## Votre fiche de révision

| Situation | Ce qu’il faut retenir |
| --- | --- |
| Rectangle | P = 2(L + l) ; A = Ll ; d² = L² + l². |
| Carré | P = 4c ; A = c² = d²/2. |
| Parallélogramme | A = base × hauteur perpendiculaire associée. |
| Losange | A = produit des diagonales / 2. |
| Trapèze | A = moyenne des bases × hauteur. |
| Bordure | Grande aire moins petite ; largeur de chaque côté. |
| Polygone convexe | Somme des angles = (n − 2) × 180° ; diagonales = n(n − 3)/2. |
| Agrandissement | Périmètre × k ; aire × k². |

**La suite :** Cercles : distinguer le bord, la surface et les angles.
