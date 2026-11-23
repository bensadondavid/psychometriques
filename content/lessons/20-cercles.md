# Cercles : distinguer le bord, la surface et les angles

Imaginez une pizza ronde. Le bord donne une longueur ; toute la pizza donne une surface ; une part peut être décrite par un angle. Ces trois questions utilisent les mêmes données, mais pas les mêmes formules.

Nous allons d’abord identifier le rayon et le diamètre. Puis nous construirons le périmètre et l’aire, avant les arcs, les secteurs et les tangentes. Les relations plus techniques entre cordes et sécantes sont proposées au second passage. Garder π dans un résultat exact évite souvent des calculs inutiles.

## Comment avancer dans cette leçon

Commencez sans chronomètre. Pour chaque séquence : lisez la notion, refaites l’exemple sur une feuille, puis essayez le petit exercice avant d’ouvrir sa correction. Si vous bloquez, utilisez l’indice : il sert à trouver le premier pas.

Les séquences « Pour aller plus loin » sont un second passage. Elles ne remplacent pas les bases. En fin de leçon, un entraînement mélange les notions : commencez en justifiant vos réponses, puis reprenez plus rapidement lorsque la méthode est acquise. Une erreur indique quoi retravailler ; elle ne dit rien de votre capacité à réussir.

## Petit point de départ — Trois questions sans pression

Essayez de répondre, puis indiquez si vous êtes sûr, hésitant ou bloqué.

<!-- interaction D1 | réponse courte + confiance | reprise : S1 -->
**D1. Un diamètre de 8 cm correspond à quel rayon ?**

<details><summary>Voir une explication</summary>

8/2 = 4 cm.

À reprendre si besoin : S1.

</details>

<!-- interaction D2 | réponse courte + confiance | reprise : S2–S3 -->
**D2. Un disque de rayon 3 : aire 6π ou 9π ?**

<details><summary>Voir une explication</summary>

9π cm². 6π cm est le périmètre.

À reprendre si besoin : S2–S3.

</details>

<!-- interaction D3 | réponse courte + confiance | reprise : S4 -->
**D3. 90° représente quelle part d’un tour ?**

<details><summary>Voir une explication</summary>

90/360 = 1/4.

À reprendre si besoin : S4.

</details>

## Séquence 1 — Cercle et disque : le bord n’est pas la surface

Un **cercle** est l’ensemble des points situés à une même distance d’un point O, son centre. Cette distance est le **rayon** r. Le **disque** contient le bord et tout l’intérieur. Un **diamètre** est un segment qui joint deux points du cercle en passant par le centre ; sa longueur d vaut deux rayons : d = 2r.

Une **corde** joint deux points du cercle sans nécessairement passer par le centre. Un diamètre est donc une corde particulière, la plus longue. Le rayon relie le centre au bord : il n’est pas un segment traversant tout le disque.

### Regardons un exemple ensemble

![Disque de centre O ; rayon OT de 3 cm, diamètre AB de 6 cm et corde CD ne passant pas par O.](assets/20-vocabulaire.svg)

Pour un diamètre de 10 cm, le rayon vaut 5 cm. Deux diamètres dessinés dans le même cercle ont chacun cette longueur ; leur somme vaut 20, mais aucun des deux n’est devenu un rayon.

### À vous, étape par étape

<!-- interaction I1 | réponse construite ; indice à la demande ; justification | compétence : S1 -->
**I1. Un cercle a un rayon de 7 cm. Combien mesure son diamètre ? Une corde est-elle toujours égale à ce diamètre ?**

<details><summary>Un indice pour démarrer</summary>

Le diamètre traverse le centre ; une autre corde peut être plus courte.

</details>

<details><summary>Correction expliquée</summary>

Diamètre : 2 × 7 = 14 cm. Une corde quelconque mesure au plus 14 cm ; elle n’atteint 14 que si elle est elle-même un diamètre.

</details>

**Le piège à éviter :** Repérez le centre avant de décider si le segment donné est un rayon ou un diamètre.

## Séquence 2 — Circonférence : mesurer un tour du bord

La **circonférence**, ou périmètre du cercle, est une longueur. Le rapport entre cette longueur et le diamètre est le nombre π, environ 3,14. Donc :

\[C=\pi d=2\pi r.\]

Si le périmètre est donné, le diamètre vaut C/π et le rayon C/(2π). Ne remplacez π par une approximation que si l’énoncé le demande ou si les réponses sont décimales. Une réponse 12π cm est exacte ; 37,68 cm est une approximation avec π pris à 3,14.

### Regardons un exemple ensemble

Pour un rayon de 4 cm, le tour mesure 8π cm. Pour une circonférence de 18π cm, on résout 2πr = 18π : r = 9 cm et d = 18 cm. Les facteurs π se simplifient, ce qui évite toute décimale.

### À vous, étape par étape

<!-- interaction I2 | réponse construite ; indice à la demande ; justification | compétence : S2 -->
**I2. Une roue a un rayon de 5 cm. Quelle distance parcourt-elle en trois tours complets en roulant sans glisser ?**

<details><summary>Un indice pour démarrer</summary>

Un tour correspond à une circonférence ; la condition sans glissement relie rotation et distance.

</details>

<details><summary>Correction expliquée</summary>

Un tour mesure 10π cm. Trois tours donnent 30π cm. Pour retrouver un nombre de tours, on ferait distance / circonférence.

</details>

**Le piège à éviter :** Le nombre de tours n’est pas distance / diamètre : il manque le facteur π.

## Séquence 3 — Aire du disque : le rayon est mis au carré

L’aire du disque vaut :

\[A=\pi r^2.\]

Le carré concerne le rayon, pas π. Pour un diamètre d, on remplace r par d/2 : A = πd²/4. Pour retrouver un rayon positif depuis l’aire, divisez d’abord par π, puis prenez la racine carrée.

Si le rayon est multiplié par k, le périmètre est multiplié par k et l’aire par k². Deux disques de rayons 2 et 4 ont donc un rapport d’aires 1:4, et non 1:2.

### Regardons un exemple ensemble

Un disque de diamètre 12 cm a un rayon de 6 cm : aire 36π cm². Pour une aire de 49π, le rayon vérifie r² = 49, donc r = 7. Si le rayon passe de 3 à 5, l’aire passe de 9π à 25π : elle augmente de 16π, pas de 4π.

### À vous, étape par étape

<!-- interaction I3 | réponse construite ; indice à la demande ; justification | compétence : S3 -->
**I3. Deux disques ont des rayons de 3 et 6 cm. Donnez leurs aires, leur somme et le rapport grande aire / petite aire.**

<details><summary>Un indice pour démarrer</summary>

Calculez séparément les carrés des rayons avant d’additionner les aires.

</details>

<details><summary>Correction expliquée</summary>

Aires : 9π et 36π cm². Somme : 45π cm². Rapport : 36/9 = 4. La somme n’est pas l’aire du disque de rayon 3 + 6, qui vaudrait 81π.

</details>

**Le piège à éviter :** πr² n’est ni (πr)² ni 2πr. Vérifiez l’unité : cm² pour une aire.

## Séquence 4 — Arc et secteur : prendre la même fraction du tour

Un **arc** est une portion du cercle. Un **secteur** est une portion du disque, délimitée par deux rayons et l’arc compris entre eux. Si son angle au centre vaut θ degrés, il représente θ/360 du tour complet.

\[\text{Longueur d’arc}=\frac{\theta}{360}\times2\pi r,\qquad
\text{Aire du secteur}=\frac{\theta}{360}\times\pi r^2.\]

Pour un même cercle, deux arcs ont un rapport de longueurs égal au rapport de leurs angles au centre. Si les rayons diffèrent, les angles seuls ne suffisent plus.

### Regardons un exemple ensemble

![Secteur de 90 degrés dans un disque de rayon 4 cm : l’arc vaut 2π cm et l’aire du secteur 4π cm².](assets/20-secteur.svg)

90/360 = 1/4. Le secteur de rayon 4 a donc une aire de 16π/4 = 4π. Son arc vaut 8π/4 = 2π. L’un est une surface, l’autre une longueur.

### À vous, étape par étape

<!-- interaction I4 | réponse construite ; indice à la demande ; justification | compétence : S4 -->
**I4. Un secteur a un rayon de 6 cm et un angle de 60°. Calculez son aire et la longueur de son arc.**

<details><summary>Un indice pour démarrer</summary>

60° représente un sixième du tour ; appliquez cette fraction à deux grandeurs différentes.

</details>

<details><summary>Correction expliquée</summary>

Aire : 36π/6 = 6π cm². Arc : 12π/6 = 2π cm. La même fraction intervient, mais les formules du disque et du cercle restent différentes.

</details>

**Le piège à éviter :** Diviser par 180 au lieu de 360 doublerait le résultat : le dénominateur est le tour complet.

## Séquence 5 — Contour d’un demi-disque ou d’un secteur : compter aussi les segments

Le périmètre d’une portion de disque est son contour complet. Un demi-disque est bordé par un demi-cercle et un diamètre : P = πr + 2r. Un quart de disque a un arc de longueur πr/2 et deux rayons : P = πr/2 + 2r.

Pour un secteur ordinaire d’angle strictement entre 0° et 360°, le contour est l’arc plus deux rayons. Le cercle complet est un cas à part : les rayons de découpe ne font pas partie de son contour. Prenez l’habitude de suivre le bord avec le doigt sur le schéma.

### Regardons un exemple ensemble

Un demi-disque de rayon 3 a une aire de 9π/2 cm² et un périmètre de 3π + 6 cm. L’arc seul vaut 3π ; il ne ferme pas la figure. Deux demi-disques de même rayon ont ensemble l’aire d’un disque, mais leurs périmètres séparés contiennent aussi leurs diamètres.

### À vous, étape par étape

<!-- interaction I5 | réponse construite ; indice à la demande ; justification | compétence : S5 -->
**I5. Un quart de disque a un rayon de 8 cm. Donnez son périmètre exact. Si deux demi-disques de rayon 2 sont disjoints, quelle est la somme de leurs aires ?**

<details><summary>Un indice pour démarrer</summary>

Pour le périmètre : un quart du cercle, puis deux côtés droits. Pour les aires : deux moitiés.

</details>

<details><summary>Correction expliquée</summary>

Périmètre : (2π × 8)/4 + 16 = 4π + 16 cm. Somme des aires des demi-disques : deux fois 4π/2, soit 4π cm².

</details>

**Le piège à éviter :** L’arc n’est pas le périmètre de la surface découpée.

## Séquence 6 — Couronne et disque inscrit dans un carré : soustraire des aires

Une **couronne** est la région comprise entre deux cercles de même centre et de rayons R > r. Son aire est celle du grand disque moins celle du petit : π(R² − r²). Ce n’est pas π(R − r)².

Un disque inscrit dans un carré touche les quatre côtés. Son diamètre est égal au côté c du carré ; son rayon vaut c/2. Pour calculer les coins laissés libres, on fait aire du carré moins aire du disque. Inversement, un rectangle inscrit dans un cercle a ses quatre sommets sur le cercle : sa diagonale est un diamètre.

### Regardons un exemple ensemble

Une couronne de rayons 5 et 3 a une aire de π(25 − 9) = 16π. Dans un carré de côté 10, le disque inscrit a un rayon de 5 et une aire de 25π ; les coins totalisent 100 − 25π cm². Le contour de cette zone n’est pas obtenu en soustrayant les périmètres.

### À vous, étape par étape

<!-- interaction I6 | réponse construite ; indice à la demande ; justification | compétence : S6 -->
**I6. Une couronne a un rayon intérieur de 4 cm et une aire de 20π cm². Quel est son rayon extérieur ? Un rectangle de 6 sur 8 est inscrit dans un cercle : quel est le rayon du cercle ?**

<details><summary>Un indice pour démarrer</summary>

Couronne : retrouvez R². Rectangle : retrouvez la diagonale, puis sa moitié.

</details>

<details><summary>Correction expliquée</summary>

π(R² − 16) = 20π, donc R² = 36 et R = 6 cm. Diagonale du rectangle : 10 cm par Pythagore ; rayon du cercle : 5 cm.

</details>

**Le piège à éviter :** La différence des carrés n’est pas le carré de la différence. « Inscrit » impose de préciser quelle figure est à l’intérieur.

## Séquence 7 — Angles au centre et angles inscrits

Un angle **au centre** a son sommet au centre du cercle. Un angle **inscrit** a son sommet sur le cercle et ses côtés passent par deux autres points du cercle. Il intercepte l’arc entre ces deux points qui ne contient pas son sommet.

Un angle inscrit mesure la moitié de l’angle au centre qui intercepte le **même arc**. Cette précision évite de confondre le petit et le grand arc. Des angles inscrits interceptant le même arc ont la même mesure. Ceux placés de part et d’autre d’une corde peuvent intercepter des arcs complémentaires et être supplémentaires.

### Regardons un exemple ensemble

Un arc AB de 100° au centre est vu par un sommet C situé sur l’autre arc. L’angle ACB vaut 50°. Si AB est un diamètre, l’arc AB opposé à C vaut 180° : l’angle inscrit ACB vaut 90°. Un triangle inscrit dont un côté est un diamètre est donc rectangle au troisième sommet.

### À vous, étape par étape

<!-- interaction I7 | réponse construite ; indice à la demande ; justification | compétence : S7 -->
**I7. A et B sont les extrémités d’un diamètre et C est un autre point du cercle. Si l’angle CAB vaut 35°, combien valent ACB et ABC ?**

<details><summary>Un indice pour démarrer</summary>

L’angle qui voit le diamètre est droit ; la somme du triangle vaut 180°.

</details>

<details><summary>Correction expliquée</summary>

ACB = 90°. ABC = 180 − 90 − 35 = 55°. On combine la propriété du cercle et la somme des angles du triangle.

</details>

**Le piège à éviter :** Ne divisez pas automatiquement n’importe quel angle au centre par deux : vérifiez les extrémités et l’arc intercepté.

## Séquence 8 — Corde et tangente : faire apparaître un angle droit

Une **tangente** touche le cercle en un seul point T. Le rayon OT est perpendiculaire à la tangente en T. Si P est un point extérieur situé sur cette tangente, OPT est rectangle en T : OP² = OT² + PT².

Pour une corde AB, la perpendiculaire issue du centre O coupe la corde en son milieu M. Le triangle OMA est rectangle : OA est le rayon, OM la distance du centre à la corde et AM sa demi-longueur. Pythagore permet donc de trouver la corde entière en doublant AM.

### Regardons un exemple ensemble

![Cercle de rayon 3 cm, point extérieur P à 5 cm de O, et tangente PT de 4 cm perpendiculaire au rayon OT.](assets/20-tangente.svg)

Pour OP = 5 et OT = 3, PT = √(25 − 9) = 4. Pour une corde dans un cercle de rayon 5, à distance 3 du centre : demi-corde √(25 − 9) = 4, donc corde 8.

### À vous, étape par étape

<!-- interaction I8 | réponse construite ; indice à la demande ; justification | compétence : S8 -->
**I8. Un cercle de rayon 10 cm a une corde située à 6 cm du centre. Quelle est sa longueur ? Un point P à 13 cm du centre envoie une tangente à un cercle de rayon 5 : longueur de cette tangente ?**

<details><summary>Un indice pour démarrer</summary>

Dans la première question, Pythagore donne une demi-corde. Dans la seconde, le côté centre–P est l’hypoténuse.

</details>

<details><summary>Correction expliquée</summary>

Demi-corde : √(100 − 36) = 8 ; corde entière : 16 cm. Tangente : √(169 − 25) = 12 cm. L’angle droit est dans les deux cas justifié par une propriété précise.

</details>

**Le piège à éviter :** La distance du centre à une droite est perpendiculaire à cette droite ; ce n’est pas une distance oblique au choix.

## Séquence 9 — Deux cercles tangents : additionner ou soustraire les rayons

Deux cercles tangents se touchent en un seul point. S’ils sont à l’extérieur l’un de l’autre, leurs centres et le point de contact sont alignés, et la distance des centres vaut R + r. Si le petit cercle est à l’intérieur du grand, la distance des centres vaut R − r avec R > r.

Dessiner les deux centres aide à choisir : contact entre les centres, on additionne ; petit cercle à l’intérieur, on soustrait. Deux cercles concentriques de rayons différents ne sont pas tangents.

### Regardons un exemple ensemble

Deux cercles de rayons 7 et 2, tangents extérieurement, ont leurs centres à 9 cm. S’ils sont tangents intérieurement, cette distance vaut 5 cm. Les rayons sont identiques dans les deux exemples ; seule la disposition change.

### À vous, étape par étape

<!-- interaction I9 | réponse construite ; indice à la demande ; justification | compétence : S9 -->
**I9. Un petit cercle de rayon 3 est tangent intérieurement à un grand cercle de rayon 8. Quelle distance sépare leurs centres ? Et si le contact était extérieur ?**

<details><summary>Un indice pour démarrer</summary>

Faites deux croquis distincts : le mot intérieur change l’opération.

</details>

<details><summary>Correction expliquée</summary>

Tangence intérieure : 8 − 3 = 5 cm. Tangence extérieure : 8 + 3 = 11 cm.

</details>

**Le piège à éviter :** La somme des rayons ne convient pas à toutes les tangences.

## Séquence 10 — Pour aller plus loin — Segment circulaire

Un **segment circulaire** est la région comprise entre une corde et un arc. Pour un angle au centre entre 0° et 180°, le petit segment s’obtient en retirant du secteur le triangle formé par les deux rayons et la corde.

La procédure compte davantage qu’une formule nouvelle : calculer le secteur ; calculer le triangle avec une hauteur ou un triangle particulier ; soustraire. Pour un angle rentrant, la décomposition doit être adaptée : ne recopiez pas la soustraction sans regarder la région.

### Regardons un exemple ensemble

Pour un rayon de 4 et un angle au centre de 60°, le secteur a une aire de 16π/6 = 8π/3. Le triangle entre les deux rayons est équilatéral de côté 4 : aire 4√3. Le petit segment a donc une aire de 8π/3 − 4√3 cm².

### À vous, étape par étape

<!-- interaction I10 | réponse construite ; indice à la demande ; justification | compétence : S10 -->
**I10. Un secteur de 90° a un rayon de 6 cm. Quelle est l’aire du petit segment entre son arc et sa corde ?**

<details><summary>Un indice pour démarrer</summary>

Le triangle formé par les deux rayons est rectangle, avec deux côtés de 6.

</details>

<details><summary>Correction expliquée</summary>

Secteur : 36π/4 = 9π. Triangle : 6 × 6/2 = 18. Segment : 9π − 18 cm². L’expression est positive, comme une aire doit l’être.

</details>

**Le piège à éviter :** Un segment circulaire n’est pas un secteur : sa frontière droite est une corde, pas deux rayons.

## Séquence 11 — Pour aller plus loin — Produits de segments sur des cordes et sécantes

Deux cordes AB et CD qui se coupent **à l’intérieur** en M vérifient MA × MB = MC × MD. Chaque produit utilise les deux morceaux d’une même corde. Cette égalité se démontre avec les triangles semblables construits à partir des angles inscrits.

Depuis un point **extérieur** P, deux sécantes rencontrent le cercle dans les ordres P,A,B et P,C,D. Alors PA × PB = PC × PD : pour chaque droite, c’est la distance extérieure multipliée par la distance totale depuis P jusqu’au point éloigné. Si PT est une tangente, PT² = PA × PB.

### Regardons un exemple ensemble

Cordes intérieures : MA = 3, MB = 8, MC = 4 donnent MD = 24/4 = 6. Sécantes extérieures : PA = 2, PB = 12, PC = 3 donnent PD = 24/3 = 8. La partie du second trajet dans le disque est CD = PD − PC = 5, pas 8.

### À vous, étape par étape

<!-- interaction I11 | réponse construite ; indice à la demande ; justification | compétence : S11 -->
**I11. Depuis P extérieur, une sécante coupe le cercle en A puis B avec PA = 4 et AB = 5. Une autre coupe en C puis D avec PC = 3. Trouvez PD puis CD.**

<details><summary>Un indice pour démarrer</summary>

La première longueur totale PB vaut PA + AB ; l’égalité utilise PB, pas AB.

</details>

<details><summary>Correction expliquée</summary>

PB = 4 + 5 = 9. Donc 4 × 9 = 3 × PD, d’où PD = 12. Enfin CD = 12 − 3 = 9. Les produits s’expriment en cm² si les longueurs sont en cm.

</details>

**Le piège à éviter :** Dans une sécante extérieure, le produit est extérieur × total, jamais extérieur × morceau intérieur.

## Votre méthode en situation

1. Reformulez ce qui est demandé, avec son unité.
2. Relevez uniquement les données utiles et les propriétés garanties.
3. Expliquez en une phrase pourquoi la méthode choisie convient.
4. Écrivez le calcul, puis vérifiez le sens du résultat et son unité.

En géométrie, vous pouvez refaire un schéma plus simple, mais ne mesurez jamais le dessin pour remplacer une donnée. Dans un tableau, montrez la ligne, la colonne et le groupe de référence avant de calculer.

## Atelier — Doubler le rayon : prévoir deux effets différents

<!-- interaction A1 | rayon entier 1 à 6 ; boutons ou saisie ; deux graphiques séparés | compétence : S2, S3 -->
Choisissez trois rayons : 1, 2 et 4 cm. Pour chacun, écrivez le périmètre sous la forme « nombre × π cm » et l’aire sous la forme « nombre × π cm² ». Prévoyez ensuite les résultats pour un rayon de 3 cm.

Comparez les passages 1 → 2 et 2 → 4 : qu’est-ce qui double ? Qu’est-ce qui quadruple ?

<details><summary>Voir et expliquer les deux progressions</summary>

| Rayon | Périmètre | Aire |
| ---: | ---: | ---: |
| 1 cm | 2π cm | π cm² |
| 2 cm | 4π cm | 4π cm² |
| 3 cm | 6π cm | 9π cm² |
| 4 cm | 8π cm | 16π cm² |

Le périmètre contient une fois r : il double quand le rayon double. L’aire contient r × r : deux facteurs doublent, donc elle quadruple. Gardez bien les unités : le périmètre mesure un contour en cm, tandis que l’aire mesure une surface en cm².

</details>

## Mission finale — Vingt questions pour vous entraîner

Une seule réponse est correcte par question. Gardez une trace de votre raisonnement. Le corrigé se trouve après les vingt questions pour que vous puissiez chercher librement. Les dernières questions peuvent mobiliser les approfondissements.

**F1. Un cercle a un diamètre de 18 cm. Quel est son rayon ?**

- **A.** 18 cm
- **B.** 6 cm
- **C.** 36 cm
- **D.** 9 cm

**F2. Un cercle a un rayon de 7 cm. Quel est son périmètre ?**

- **A.** 14 cm
- **B.** \(49\pi\) cm
- **C.** \(7\pi\) cm
- **D.** \(14\pi\) cm

**F3. Une circonférence vaut 30π cm. Quel est le diamètre ?**

- **A.** 15 cm
- **B.** 900 cm
- **C.** 60 cm
- **D.** 30 cm

**F4. Une roue de rayon 2 cm roule sans glisser sur 20π cm. Combien de tours complets effectue-t-elle ?**

- **A.** 10
- **B.** 2
- **C.** 20
- **D.** 5

**F5. Un disque a un diamètre de 10 cm. Quelle est son aire ?**

- **A.** \(100\pi\) cm²
- **B.** \(10\pi\) cm²
- **C.** \(25\pi\) cm²
- **D.** \(50\pi\) cm²

**F6. Un disque a une aire de 64π cm². Quel est son rayon ?**

- **A.** 32 cm
- **B.** 64 cm
- **C.** 8 cm
- **D.** 4 cm

**F7. Un rayon est multiplié par 3. Par combien l’aire du disque est-elle multipliée ?**

- **A.** 27
- **B.** 9
- **C.** 6
- **D.** 3

**F8. Deux disques ont des rayons 2 et 5 cm. Quelle est la somme de leurs aires ?**

- **A.** \(29\pi\) cm²
- **B.** \(21\pi\) cm²
- **C.** \(14\pi\) cm²
- **D.** \(49\pi\) cm²

**F9. Un secteur de rayon 8 cm a un angle au centre de 45°. Quelle est son aire ?**

- **A.** \(16\pi\) cm²
- **B.** \(8\pi\) cm²
- **C.** \(64\pi\) cm²
- **D.** \(2\pi\) cm²

**F10. Un arc de 120° appartient à un cercle de rayon 9 cm. Quelle est sa longueur ?**

- **A.** \(6\pi\) cm
- **B.** \(3\pi\) cm
- **C.** \(18\pi\) cm
- **D.** \(27\pi\) cm

**F11. Un arc mesure 3π cm sur un cercle de rayon 6 cm. Quel est son angle au centre ?**

- **A.** 45°
- **B.** 90°
- **C.** 60°
- **D.** 180°

**F12. Quel est le périmètre d’un demi-disque de rayon 4 cm ?**

- **A.** \(4\pi+4\) cm
- **B.** \(8\pi+8\) cm
- **C.** \(4\pi\) cm
- **D.** \(4\pi+8\) cm

**F13. Quel est le périmètre d’un quart de disque de rayon 6 cm ?**

- **A.** \(9\pi\) cm
- **B.** \(3\pi+6\) cm
- **C.** \(3\pi+12\) cm
- **D.** \(6\pi+12\) cm

**F14. Une couronne a des rayons 7 et 3 cm. Quelle est son aire ?**

- **A.** \(40\pi\) cm²
- **B.** \(16\pi\) cm²
- **C.** \(4\pi\) cm²
- **D.** \(58\pi\) cm²

**F15. Un disque est inscrit dans un carré de côté 8 cm. Quelle aire du carré reste hors du disque ?**

- **A.** \(64-64\pi\) cm²
- **B.** \(32-8\pi\) cm²
- **C.** \(16\pi\) cm²
- **D.** \(64-16\pi\) cm²

**F16. Un angle au centre intercepte un arc de 130°. Un angle inscrit intercepte le même arc. Quelle est sa mesure ?**

- **A.** 65°
- **B.** 130°
- **C.** 50°
- **D.** 260°

**F17. Dans un triangle inscrit, un côté est un diamètre du cercle. Combien mesure l’angle opposé à ce côté ?**

- **A.** 90°
- **B.** 45°
- **C.** 180°
- **D.** 60°

**F18. Dans un cercle de rayon 13 cm, une corde se trouve à 5 cm du centre. Quelle est sa longueur ?**

- **A.** 18 cm
- **B.** 26 cm
- **C.** 24 cm
- **D.** 12 cm

**F19. Deux cercles de rayons 9 et 4 cm sont tangents intérieurement. Quelle distance sépare leurs centres ?**

- **A.** 4,5 cm
- **B.** 36 cm
- **C.** 5 cm
- **D.** 13 cm

**F20. Depuis P extérieur, une sécante rencontre A puis B avec PA = 3 et PB = 12 cm. Une seconde rencontre C puis D avec PC = 4 cm. Combien vaut CD ?**

- **A.** 5 cm
- **B.** 3 cm
- **C.** 8 cm
- **D.** 9 cm

<details><summary>Corrigé expliqué des vingt questions</summary>

| Question | Réponse | Pourquoi ? | À revoir |
| --- | --- | --- | --- |
| F1 | **D** — 9 cm | Le diamètre contient deux rayons : 18/2 = 9 cm. | S1 |
| F2 | **D** — \(14\pi\) cm | Périmètre = 2πr = 14π cm. 49π serait l’aire du disque en cm². | S2 |
| F3 | **D** — 30 cm | C = πd, donc d = 30π/π = 30 cm. Le rayon serait 15 cm. | S2 |
| F4 | **D** — 5 | Un tour mesure 4π cm. Le nombre de tours vaut 20π/(4π) = 5. | S2 |
| F5 | **C** — \(25\pi\) cm² | Le rayon est 5 cm. Aire = π × 5² = 25π cm². | S3 |
| F6 | **C** — 8 cm | r² = 64, donc r = 8 cm, longueur positive. | S3 |
| F7 | **B** — 9 | L’aire dépend du carré du rayon : le facteur est 3² = 9. | S3 |
| F8 | **A** — \(29\pi\) cm² | On additionne les aires π × 4 et π × 25 : 29π. Additionner les rayons donnerait un autre disque. | S3 |
| F9 | **B** — \(8\pi\) cm² | 45° est un huitième de tour. Aire = 64π/8 = 8π cm². | S4 |
| F10 | **A** — \(6\pi\) cm | 120/360 = 1/3. La longueur vaut un tiers de 18π, soit 6π cm. | S4 |
| F11 | **B** — 90° | La circonférence vaut 12π. L’arc en représente 1/4, soit un angle de 360/4 = 90°. | S4 |
| F12 | **D** — \(4\pi+8\) cm | Le contour comprend un demi-cercle de longueur 4π et un diamètre de 8 : total 4π + 8 cm. | S5 |
| F13 | **C** — \(3\pi+12\) cm | L’arc vaut un quart de 12π, soit 3π. Les deux rayons ajoutent 12. | S5 |
| F14 | **A** — \(40\pi\) cm² | On soustrait les aires : π(49 − 9) = 40π. Le carré de la différence donnerait une autre région. | S6 |
| F15 | **D** — \(64-16\pi\) cm² | Le rayon vaut 4 cm. Aire restante = 8² − π × 4² = 64 − 16π cm². | S6 |
| F16 | **A** — 65° | L’angle inscrit vaut la moitié de l’angle au centre associé au même arc : 65°. | S7 |
| F17 | **A** — 90° | Il intercepte un demi-cercle de 180° : l’angle inscrit vaut 180/2 = 90°. | S7 |
| F18 | **C** — 24 cm | La demi-corde vaut √(169 − 25) = 12. La corde entière vaut 24 cm. | S8 |
| F19 | **C** — 5 cm | Pour une tangence intérieure, distance = grand rayon − petit rayon = 9 − 4 = 5 cm. | S9 |
| F20 | **A** — 5 cm | PA × PB = PC × PD donne PD = 36/4 = 9. La portion intérieure CD vaut PD − PC = 9 − 4 = 5 cm. | S11 |

</details>

## Faire le point sans se décourager

Pour chaque erreur, choisissez ce qui vous a manqué : comprendre un mot, repérer une donnée, choisir la méthode ou terminer le calcul. Revenez à la séquence indiquée et refaites son exercice en cachant la correction. Une bonne réponse obtenue au hasard mérite aussi une reprise.

Avant de passer à la suite, essayez d’expliquer une notion à voix haute avec vos propres mots, puis de résoudre un exemple avec d’autres nombres. Vous êtes prêt quand vous savez justifier la méthode, même si vous n’allez pas encore très vite.

## Votre fiche de révision

| Situation | Ce qu’il faut retenir |
| --- | --- |
| Rayon et diamètre | d = 2r. |
| Cercle | Périmètre = 2πr ; unité de longueur. |
| Disque | Aire = πr² ; unité de surface. |
| Arc et secteur | Fraction θ/360 du tour, à appliquer au périmètre ou à l’aire. |
| Contour découpé | Ajouter les segments droits à l’arc. |
| Couronne | π(R² − r²). |
| Angles | Inscrit = moitié du centre pour le même arc ; diamètre vu à 90°. |
| Tangente | Perpendiculaire au rayon au contact ; tangence extérieure R + r, intérieure R − r. |

**La suite :** Espace et repérage : se déplacer, mesurer et remplir.
