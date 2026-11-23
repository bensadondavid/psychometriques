# Probabilités : choisir le bon univers avant de compter

Deux tirages avec remise ne gardent pas les mêmes probabilités que deux tirages sans remise. « Au moins une rouge » ne signifie pas « exactement une rouge ». Et savoir qu’une boule est rouge peut changer la probabilité de la boîte dont elle provient.

**Votre objectif :** décrire l’expérience aléatoire, identifier les résultats possibles et utiliser la bonne opération : compter, compléter, additionner des chemins ou multiplier des probabilités conditionnelles. Le plus long calcul n’est pas toujours le plus sûr.

## Avant de commencer — Trois mots décisifs

Répondez avec votre confiance. Surlignez le mot qui décide de la méthode.

<!-- interaction D1 | QCM unique + confiance | compétence : univers-equiprobable -->
**D1.** Une urne contient deux boules rouges et trois bleues. On tire uniformément une boule. Quelle est la probabilité d’une rouge ?

A. \(1/2\) · B. \(2/5\) · C. \(2/3\) · D. \(3/5\).

<details><summary>Raisonnement</summary>

**B.** Les cinq boules, pas les deux couleurs, sont les résultats élémentaires équiprobables. Deux sont rouges.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : sans-remise -->
**D2.** Une urne contient trois rouges et deux bleues. Deux boules sont tirées sans remise. Probabilité de deux rouges ?

A. \(9/25\) · B. \(6/25\) · C. \(3/10\) · D. \(2/5\).

<details><summary>Raisonnement</summary>

**C.** Trois chances sur cinq à la première étape, puis deux rouges sur quatre boules : \((3/5)(2/4)=3/10\).

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : au-moins -->
**D3.** Deux lancers indépendants d’une pièce équilibrée : quelle probabilité d’au moins une face ?

A. \(1/2\) · B. \(1/4\) · C. \(1\) · D. \(3/4\).

<details><summary>Raisonnement</summary>

**D.** Le seul cas contraire est deux piles, de probabilité un quart. Le complément vaut trois quarts. « Exactement une face » aurait donné un demi.

</details>

D1 appelle S1–S2 ; D2 S5–S6 ; D3 S7–S8. Les mots du protocole sont des données mathématiques.

## Séquence 1 — Une probabilité décrit une expérience précise

L’univers Ω est l’ensemble des résultats élémentaires possibles. Un événement A est un ensemble de ces résultats. Pour un univers fini où tous les résultats sont équiprobables :

\[
\boxed{P(A)=\frac{\text{nombre de résultats favorables}}{\text{nombre total de résultats}}}.
\]

La fraction favorable/total exige l’équiprobabilité des résultats comptés. Une urne avec deux rouges et trois bleues ne donne pas deux couleurs de probabilité égale ; il faut compter les boules uniformément choisies, ou attribuer à chaque couleur son poids.

Les probabilités sont entre zéro et un. L’événement certain vaut un et l’événement impossible zéro. Dans un univers fini équiprobable non vide, un événement sans résultat favorable est impossible. La notion de probabilité ne garantit pas un résultat particulier lors d’un tirage.

Pour une pièce équilibrée lancée deux fois indépendamment, les quatre suites FF,FP,PF,PP sont équiprobables. Les trois nombres possibles de faces, zéro, un, deux, ne le sont pas : le cas une face contient deux suites.

### Atelier I1 — Définissez les cases à compter

<!-- interaction I1 | univers ordonne puis regroupement | compétence : issues -->
Énumérez les résultats de deux lancers indépendants d’une pièce équilibrée. Regroupez-les selon le nombre de faces et donnez les trois probabilités correspondantes.

<details><summary>Correction</summary>

PP : zéro face, probabilité un quart. FP et PF : une face, un demi. FF : deux faces, un quart. Regrouper des résultats ne les transforme pas en nouvelles cases de poids égal.

</details>

## Séquence 2 — Comptage uniforme : bornes, catégories et numéros

Si l’on choisit uniformément un entier de un à vingt, les multiples de cinq sont 5,10,15,20 : probabilité quatre sur vingt, soit un cinquième. L’inclusion des bornes compte : vingt est admissible, zéro ne l’est pas.

Pour une collection, le dénominateur est le nombre total d’objets choisis uniformément, pas le nombre de catégories. Pour quatre cubes et huit sphères, la probabilité d’un cube vaut quatre sur douze.

Avant de compter, reformulez l’événement avec les bornes exactes : « strictement supérieur à quinze » donne 16 à 20 ; « au moins quinze » donne 15 à 20.

### Atelier I2 — Une borne change le compte

<!-- interaction I2 | liste de nombres et filtres | compétence : comptage-uniforme -->
On choisit uniformément un entier de un à douze. Donnez la probabilité qu’il soit pair ; puis strictement supérieur à huit ; puis au moins huit.

<details><summary>Correction</summary>

Six sur douze, soit un demi ; quatre sur douze, soit un tiers ; cinq sur douze. Les deux derniers événements diffèrent uniquement par le nombre huit, mais sa probabilité n’est pas nulle.

</details>

## Séquence 3 — Complément et union : le « ou » peut compter deux fois

\[
\boxed{P(\overline A)=1-P(A)},
\qquad\boxed{P(A\cup B)=P(A)+P(B)-P(A\cap B)}.
\]

Le complément de « au moins un succès » est « aucun succès ». Le complément de « tous réussissent » est « au moins un échec », pas « tous échouent ».

Si A et B sont incompatibles, ils ne peuvent pas arriver ensemble et leur intersection est vide ; leurs probabilités s’additionnent directement. Sinon, l’intersection est comptée deux fois et doit être retirée une fois.

Dans un groupe de quarante personnes, seize parlent anglais, douze espagnol et quatre les deux. L’événement « au moins une de ces langues » contient vingt-quatre personnes : probabilité trois cinquièmes. « Exactement une » contiendrait vingt personnes, car les quatre bilingues doivent être exclues entièrement.

### Atelier I3 — Au moins une langue ou exactement une ?

<!-- interaction I3 | tableau deux categories et intersection | compétence : union -->
Sur trente personnes, douze parlent A, dix parlent B et quatre parlent les deux. Donnez les probabilités de parler au moins une, exactement une et aucune.

<details><summary>Correction</summary>

Union dix-huit sur trente, soit trois cinquièmes. Exactement une : douze plus dix moins deux fois quatre, soit quatorze sur trente, donc sept quinzièmes. Aucune : douze sur trente, soit deux cinquièmes. Les trois catégories « exactement une », « les deux » et « aucune » totalisent trente.

</details>

## Séquence 4 — Le « et » multiplie des probabilités sous les bonnes conditions

En général, si P(A)>0 :

\[
\boxed{P(A\cap B)=P(A)P(B\mid A)}.
\]

La deuxième probabilité porte sur ce qui est possible **après avoir appris A**. Si les événements sont indépendants, P(B|A)=P(B), et le produit devient P(A)P(B).

L’indépendance n’est pas la simple absence de mention d’un lien. Elle doit venir du protocole ou d’une hypothèse donnée. Deux événements incompatibles de probabilités strictement positives ne sont pas indépendants : leur intersection vaut zéro, alors que leur produit est positif.

Une pièce équilibrée lancée indépendamment d’un événement de probabilité un cinquième donne une probabilité conjointe d’un dixième pour « événement et pile ».

### Atelier I4 — Même formule, justification différente

<!-- interaction I4 | choix independance/conditionnement | compétence : produit-conditionnel -->
A et B sont indépendants, de probabilités un tiers et deux cinquièmes. Donnez la probabilité des deux. Pour une seconde expérience, on donne seulement P(A)=1/3 et P(B|A)=1/2 : donnez leur probabilité conjointe, sans supposer l’indépendance.

<details><summary>Correction</summary>

Premier cas deux quinzièmes. Second un sixième. La multiplication est possible dans les deux cas, mais le second utilise une probabilité conditionnelle et n’affirme pas P(B)=1/2.

</details>

## Séquence 5 — Tirages avec remise : le même stock à chaque étape

Si une boule est remise, le contenu est restauré. Avec un nouveau choix uniforme indépendant selon le même protocole, la probabilité d’une couleur reste constante.

Avec deux rouges et trois bleues :

\[
P(R\text{ puis }B)=\frac25\times\frac35=\frac6{25}.
\]

Une séquence ordonnée est un seul chemin. « Une rouge et une bleue, dans n’importe quel ordre » réunit RB et BR, deux événements disjoints. Il faut additionner leurs probabilités ; elles sont égales dans ce protocole.

Remettre l’objet n’est pas une garantie d’indépendance pour n’importe quelle règle imaginable de sélection. Les exercices supposent explicitement de nouveaux tirages uniformes indépendants après remise.

### Atelier I5 — Un ordre ou deux ?

<!-- interaction I5 | arbre a deux tirages avec remise | compétence : remise-ordre -->
Une urne contient une rouge et trois bleues. Deux tirages avec remise sont indépendants. Calculez rouge puis bleue ; puis exactement une rouge.

<details><summary>Correction</summary>

RB vaut trois seizièmes. Exactement une rouge ajoute BR, donc six seizièmes, soit trois huitièmes. Deux rouges n’appartiennent pas à « exactement une ».

</details>

## Séquence 6 — Sans remise : mettre à jour le contenu, pas seulement le total

Avec trois rouges et quatre bleues, la probabilité de deux rouges sans remise vaut :

\[
\frac37\times\frac26=\frac17.
\]

Au deuxième tirage, une rouge **et une boule totale** ont été retirées. Pour R puis B, le numérateur bleu reste quatre, mais le total devient six.

Pour quatre rouges et trois bleues, la séquence R,B,R a pour probabilité \((4/7)(3/6)(3/5)=6/35\). Le troisième numérateur rouge est trois, parce qu’une rouge a déjà quitté l’urne.

Les branches de l’arbre portent des probabilités conditionnelles adaptées au chemin. Si une couleur devient indisponible, sa branche vaut zéro ; on ne poursuit pas en écrivant un nombre de boules négatif.

### Atelier I6 — Modifiez la composition après chaque tirage

<!-- interaction I6 | urne et arbre sans remise | compétence : sans-remise -->
Une urne contient quatre rouges et deux bleues. Donnez P(R puis R), P(B puis R) et P(B puis B), sans remise.

<details><summary>Correction</summary>

\((4/6)(3/5)=2/5\) ; \((2/6)(4/5)=4/15\) ; \((2/6)(1/5)=1/15\). Le second numérateur dépend de la couleur effectivement tirée en premier.

</details>

## Séquence 7 — Au moins un : compter l’absence totale

Pour n essais indépendants de même probabilité de succès p, avec 0≤p≤1 :

\[
\boxed{P(\text{au moins un succès})=1-(1-p)^n}\quad(n\ge1).
\]

Pour p=1/3 et trois essais, on obtient \(1-(2/3)^3=19/27\). L’événement comprend un, deux ou trois succès.

Si les probabilités changent mais que les essais restent indépendants, le complément est \(1-\prod(1-p_i)\). Sans indépendance, le produit des probabilités simples d’échec n’est pas automatiquement correct ; il faut tenir compte des conditions successives.

### Sans remise : le même principe, un autre calcul

Un unique jeton gagnant parmi N objets distincts, avec n tirés uniformément sans remise, a une probabilité n/N d’être sélectionné. La probabilité qu’il ne soit pas tiré vaut donc 1−n/N, pour 0≤n≤N. Le raisonnement utilise la symétrie des objets, pas des essais indépendants.

### Atelier I7 — Le complément change avec le protocole

<!-- interaction I7 | deux experiences et complement | compétence : au-moins-un -->
Trois essais indépendants ont chacun une chance sur deux de succès. Quelle probabilité d’au moins un succès ? Indépendamment, un gagnant parmi six jetons : deux sont tirés sans remise. Probabilité de ne pas tirer le gagnant ?

<details><summary>Correction</summary>

Sept huitièmes ; deux tiers. Pour le second problème, (5/6)² serait le calcul de deux tirages indépendants avec remise, pas celui du protocole donné.

</details>

## Séquence 8 — Exactement k succès : choisir leurs positions

Pour n essais indépendants ayant tous la même probabilité p, avec 0<p<1 :

\[
\boxed{P(k\text{ succès})=\binom nkp^k(1-p)^{n-k}},\qquad0\le k\le n.
\]

Le coefficient choisit les positions des succès. Chaque séquence de ces positions a la même probabilité. Pour quatre lancers équilibrés et deux faces : six positions possibles sur seize suites, donc trois huitièmes.

Pour trois essais à probabilité un quart, exactement deux succès donnent \(3(1/4)^2(3/4)=9/64\). Oublier le facteur trois ne compte qu’un ordre, par exemple SSE, au lieu des trois.

Les cas p=0 ou p=1 se traitent directement pour éviter une expression ambiguë avec 0⁰. Si les probabilités de succès diffèrent selon l’essai, on ne peut pas appliquer cette formule binomiale identique sans adaptation ; additionnez les chemins appropriés.

Avec des probabilités de succès différentes, un quart puis un demi, exactement un succès a pour probabilité \((1/4)(1/2)+(3/4)(1/2)=1/2\). Il n’existe pas ici un unique p commun à mettre dans la formule binomiale ; les deux chemins doivent garder leurs propres probabilités.

### Atelier I8 — Les positions sont aussi des possibilités

<!-- interaction I8 | choix de positions de succes | compétence : binomiale -->
Une expérience de probabilité de succès un tiers est répétée trois fois indépendamment. Quelle probabilité d’exactement deux succès ? Écrivez les trois chemins.

<details><summary>Correction</summary>

SSE,SES,ESS. Chacun vaut \((1/3)^2(2/3)=2/27\), donc total six vingt-septièmes, soit deux neuvièmes.

</details>

## Séquence 9 — Paires et groupes : choisir un univers ordonné ou non

Pour deux tirages uniformes sans remise parmi N objets distincts, les groupes non ordonnés de deux sont équiprobables. On peut compter par \(\binom N2\), à condition de compter aussi les favorables sans ordre.

Quatre rouges et trois bleues : même couleur signifie deux rouges **ou** deux bleues :

\[
P(\text{même couleur})=\frac{\binom42+\binom32}{\binom72}=\frac{6+3}{21}=\frac37.
\]

Par chemins ordonnés, on obtient \((4/7)(3/6)+(3/7)(2/6)\), même résultat. Pour des couleurs différentes, les groupes favorables sont 4×3=12 ; il ne faut pas encore multiplier par deux si le dénominateur est déjà un nombre de paires non ordonnées.

Plus généralement, pour n tirages sans remise avec R rouges et B bleues, exactement k rouges se compte par \(\binom Rk\binom B{n-k}/\binom{R+B}n\), avec les effectifs compatibles. Cette écriture de comptage n’est pas une loi binomiale d’essais indépendants.

### Atelier I9 — Deux univers, un seul résultat

<!-- interaction I9 | comparaison chemins et combinaisons | compétence : groupes-equiprobables -->
Trois rouges et deux bleues ; on tire deux boules sans remise. Calculez la probabilité de couleurs différentes par paires non ordonnées puis par les deux ordres.

<details><summary>Correction</summary>

Paires : 3×2 sur dix, soit trois cinquièmes. Ordres : (3/5)(2/4)+(2/5)(3/4)=3/5. Ne pas mettre six favorables non ordonnés sur vingt résultats ordonnés.

</details>

## Séquence 10 — Conditionner : réduire l’univers à ce qui reste possible

Pour P(B)>0 :

\[
\boxed{P(A\mid B)=\frac{P(A\cap B)}{P(B)}}.
\]

Si trois rouges, deux vertes et quatre bleues sont tirées uniformément, sachant « non bleue », les cinq boules rouges ou vertes constituent le nouvel univers. P(rouge | non bleue)=3/5, pas 3/9.

Une condition portant sur un tirage précédent peut mettre à jour l’urne. Avec cinq rouges et deux bleues, sachant que la première était bleue, la deuxième est rouge avec probabilité cinq sixièmes, si les tirages sont sans remise.

Une condition de probabilité nulle ne définit pas ce quotient dans ces expériences finies. Il faut signaler l’impossibilité de la condition, pas remplacer une division par zéro par la probabilité zéro.

### Atelier I10 — L’information déplace le dénominateur

<!-- interaction I10 | filtrage de l’univers puis probabilite | compétence : conditionnement -->
On choisit uniformément un entier de un à douze. Sachant qu’il est strictement supérieur à quatre, quelle est la probabilité qu’il soit au plus huit ?

<details><summary>Correction</summary>

Le nouvel univers est 5,6,7,8,9,10,11,12, huit valeurs. Quatre sont favorables : un demi. Le dénominateur douze ignorerait l’information donnée.

</details>

## Atelier avancé A — Condition sur plusieurs tirages : filtrer les groupes

Quatre rouges et deux bleues sont tirées deux par deux sans remise. Sachant qu’au moins une est bleue, quelle probabilité de deux bleues ?

Les quinze paires initiales sont équiprobables. Six sont deux rouges, donc neuf satisfont la condition. Parmi elles, une seule contient les deux bleues : probabilité un neuvième.

La condition ne dit pas « la première est bleue ». Elle décrit la paire complète ; imposer arbitrairement une première bleue donnerait un autre événement.

### Atelier I11 — Ce que l’on sait exactement

<!-- interaction I11 | paires filtrees et comparaison de conditions | compétence : condition-sur-groupe -->
Avec trois rouges et deux bleues, deux tirages sans remise : calculez la probabilité de deux bleues sachant qu’au moins une est bleue. Comparez avec la probabilité de deuxième bleue sachant que la première est bleue.

<details><summary>Correction</summary>

Première condition : dix paires moins trois RR, soit sept paires admissibles, une BB : un septième. Deuxième : après une bleue, une bleue parmi quatre boules, soit un quart. Les conditions sont différentes.

</details>

## Atelier avancé B — Plusieurs sources : arbre, probabilité totale et sens inverse

Une boîte A contient trois rouges et deux bleues ; B deux rouges et cinq bleues. On choisit chaque boîte avec probabilité un demi, puis une boule uniformément dans la boîte choisie.

\[
P(R)=P(A)P(R\mid A)+P(B)P(R\mid B)
=\frac12\frac35+\frac12\frac27=\frac{31}{70}.
\]

Choisir une boîte uniformément n’est pas choisir uniformément une boule dans la réunion des deux boîtes : les boules d’une petite boîte reçoivent un poids individuel plus grand.

Sachant qu’une rouge a été tirée, la probabilité qu’elle vienne de A est :

\[
\boxed{P(A\mid R)=\frac{P(A)P(R\mid A)}{P(R)}}=\frac{21}{31}.
\]

P(rouge | A) et P(A | rouge) ne sont pas interchangeables. Si les boîtes n’ont pas les mêmes probabilités initiales de sélection, ces probabilités doivent rester dans les deux contributions ; on ne les simplifie pas comme si elles étaient égales.

### Atelier I12 — D’abord le chemin, puis l’origine probable

<!-- interaction I12 | arbre de sources avec probabilites conjointes | compétence : sources-bayes -->
A est choisie avec probabilité deux tiers et contient autant de rouges que de bleues. B est choisie avec probabilité un tiers et contient un quart de rouges. Donnez P(rouge), puis P(A | rouge).

<details><summary>Correction</summary>

Chemins rouges : un tiers depuis A, un douzième depuis B ; total cinq douzièmes. Sous la condition rouge, la part de A vaut (1/3)/(5/12)=4/5. Le deux tiers initial n’était pas déjà la réponse après observation de la couleur.

</details>

## Atelier avancé C — Classements et symétries : un comptage peut devenir une fraction simple

Dans un classement uniforme de n objets distincts, chaque objet a la même probabilité 1/n d’occuper une place donnée. S’il faut une place parmi k places admissibles, la probabilité vaut k/n.

A avant B a une probabilité un demi par échange de leurs positions, lorsque tous les classements sont équiprobables sans ex æquo. Deux objets précis voisins dans un rangement **en ligne** ont une probabilité \(2(n-1)!/n!=2/n\), pour n≥2. Une disposition circulaire serait une autre expérience.

Une carte désignée appartient à un groupe uniforme de k cartes parmi n avec probabilité k/n, par symétrie ou comptage \(\binom{n-1}{k-1}/\binom nk\). Il n’est pas nécessaire d’attribuer un ordre aux membres du groupe.

Pour une boule de chaque couleur parmi cinq rouges, deux bleues et une verte, tirage de trois sans remise, les groupes favorables sont 5×2×1=10 sur \(\binom83=56\), donc cinq vingt-huitièmes. Le raisonnement de symétrie ne remplace pas les effectifs des couleurs lorsqu’ils diffèrent.

### Atelier I13 — La place, le groupe et le voisinage

<!-- interaction I13 | trois experiences uniformes a distinguer | compétence : symetrie-probabilite -->
Parmi cinq livres distincts rangés uniformément en ligne : probabilité qu’un livre précis soit à une extrémité ? Que deux livres précis soient voisins ? Pour un groupe uniforme de deux livres parmi cinq : probabilité qu’il contienne un livre désigné ?

<details><summary>Correction</summary>

Deux cinquièmes dans les trois cas, avec trois justifications distinctes : deux places sur cinq ; bloc de deux et quotient 2×4!/5! ; deux places dans une sélection uniforme de deux parmi cinq. Une égalité de résultats ne rend pas les expériences identiques.

</details>

## La boîte à outils — Protocole, événement, opération

| Énoncé | Réflexe | Contrôle |
|---|---|---|
| Tirage uniforme | Favorables / total | Résultats réellement équiprobables ? |
| Non / aucun | Complément | Quel est exactement l’événement contraire ? |
| A ou B | Addition moins intersection | Incompatibles ou recoupés ? |
| A puis B | Probabilité de A × probabilité de B après A | Avec ou sans remise ? |
| Au moins un succès | Un moins aucun | Indépendance pour le produit des échecs ? |
| Exactement k | Positions des succès ou comptage de groupes | Binomiale seulement si essais indépendants de même p |
| Sachant que | Restreindre l’univers | Condition de probabilité positive ? |
| Origine après observation | Contributions de chaque source puis normalisation | Sens du conditionnement ? |

### Atelier I14 — Le même mot « hasard » ne remplace pas un modèle

<!-- interaction I14 | critique de regles et contre-exemple | compétence : transfert -->
Réfutez : « deux couleurs signifient chacune un demi » ; « sans remise, les probabilités restent les mêmes » ; « au moins un succès a la même probabilité qu’exactement un ».

<details><summary>Corrections possibles</summary>

Une rouge et trois bleues donnent un quart de rouge. Après une rouge retirée de deux rouges et trois bleues, il reste une rouge sur quatre. Pour deux lancers équilibrés indépendants, au moins une face vaut trois quarts, exactement une un demi. Chaque contre-exemple doit annoncer le protocole qui justifie son calcul.

</details>

## Mission finale — Choisir, compter et vérifier

Répondez avant d’ouvrir le corrigé. F1–F8 consolident les fondations ; F9–F16 combinent les outils ; F17–F20 demandent du transfert. Indiquez votre confiance et une méthode. Il n’y a pas de temps imposé au premier passage.

### F1

Trois boules rouges et cinq bleues sont tirées uniformément une à la fois. Quelle est la probabilité d’une rouge au premier tirage ?

A. \(\frac{1}{2}\)  
B. \(\frac{3}{8}\)  
C. \(\frac{5}{8}\)  
D. \(\frac{3}{5}\)  

### F2

Un entier de un à dix-huit est choisi uniformément. Quelle est la probabilité d’un multiple de trois ?

A. \(\frac{1}{3}\)  
B. \(\frac{1}{9}\)  
C. \(\frac{1}{6}\)  
D. \(\frac{2}{3}\)  

### F3

Un entier de un à douze est choisi uniformément. Quelle est la probabilité qu’il soit strictement supérieur à neuf ?

A. \(\frac{1}{4}\)  
B. \(\frac{3}{4}\)  
C. \(\frac{1}{12}\)  
D. \(\frac{1}{3}\)  

### F4

P(A)=2/7. Quelle est la probabilité du complément de A ?

A. \(\frac{7}{2}\)  
B. \(\frac{2}{7}\)  
C. \(\frac{1}{7}\)  
D. \(\frac{5}{7}\)  

### F5

Sur cinquante personnes, vingt parlent A, quinze B et cinq les deux. Une personne est choisie uniformément. Probabilité d’au moins une langue ?

A. \(\frac{7}{10}\)  
B. \(\frac{1}{2}\)  
C. \(\frac{3}{5}\)  
D. \(\frac{1}{10}\)  

### F6

Deux événements indépendants ont pour probabilités un tiers et trois cinquièmes. Quelle probabilité qu’ils se produisent tous les deux ?

A. \(\frac{14}{15}\)  
B. \(\frac{3}{5}\)  
C. \(\frac{1}{5}\)  
D. \(\frac{1}{3}\)  

### F7

Deux rouges et trois bleues : deux tirages indépendants avec remise. Quelle probabilité de rouge puis bleue ?

A. \(\frac{6}{25}\)  
B. \(\frac{2}{5}\)  
C. \(\frac{3}{10}\)  
D. \(\frac{12}{25}\)  

### F8

Deux rouges et trois bleues : deux tirages sans remise. Quelle probabilité de deux rouges ?

A. \(\frac{4}{25}\)  
B. \(\frac{2}{5}\)  
C. \(\frac{1}{10}\)  
D. \(\frac{1}{5}\)  

### F9

Deux essais indépendants ont chacun une probabilité de succès de deux cinquièmes. Quelle probabilité d’exactement un succès ?

A. \(\frac{16}{25}\)  
B. \(\frac{6}{25}\)  
C. \(\frac{4}{25}\)  
D. \(\frac{12}{25}\)  

### F10

Trois essais indépendants ont chacun une probabilité de succès d’un quart. Quelle probabilité d’au moins un succès ?

A. \(\frac{1}{64}\)  
B. \(\frac{3}{4}\)  
C. \(\frac{37}{64}\)  
D. \(\frac{27}{64}\)  

### F11

Quatre lancers indépendants d’une pièce équilibrée : quelle probabilité d’exactement trois faces ?

A. \(\frac{1}{4}\)  
B. \(\frac{1}{16}\)  
C. \(\frac{1}{2}\)  
D. \(\frac{3}{8}\)  

### F12

Trois rouges et deux bleues : deux tirages sans remise. Quelle probabilité de même couleur ?

A. \(\frac{2}{5}\)  
B. \(\frac{13}{25}\)  
C. \(\frac{1}{5}\)  
D. \(\frac{3}{5}\)  

### F13

Une urne contient trois rouges, deux vertes et cinq bleues. Sachant que la boule tirée uniformément n’est pas bleue, quelle probabilité qu’elle soit rouge ?

A. \(\frac{3}{5}\)  
B. \(\frac{3}{10}\)  
C. \(\frac{2}{5}\)  
D. \(\frac{1}{2}\)  

### F14

Quatre rouges et trois bleues, tirages sans remise : sachant que la première est bleue, quelle probabilité que la deuxième soit rouge ?

A. \(\frac{2}{3}\)  
B. \(\frac{1}{3}\)  
C. \(\frac{3}{7}\)  
D. \(\frac{4}{7}\)  

### F15

Quatre rouges et deux bleues : deux tirages sans remise. Sachant qu’au moins une boule est bleue, quelle probabilité de deux bleues ?

A. \(\frac{1}{5}\)  
B. \(\frac{1}{9}\)  
C. \(\frac{1}{3}\)  
D. \(\frac{1}{15}\)  

### F16

On choisit avec probabilité un demi une urne à moitié rouge, ou une urne aux trois quarts rouge. Quelle est la probabilité totale d’une rouge ?

A. \(\frac{5}{8}\)  
B. \(\frac{1}{2}\)  
C. \(\frac{3}{8}\)  
D. \(\frac{3}{4}\)  

### F17

Dans cette même expérience de deux urnes équiprobables, sachant qu’une rouge est sortie, quelle probabilité qu’elle vienne de l’urne aux trois quarts rouge ?

A. \(\frac{3}{5}\)  
B. \(\frac{3}{4}\)  
C. \(\frac{1}{2}\)  
D. \(\frac{3}{8}\)  

### F18

Six livres distincts sont rangés uniformément en ligne. Quelle probabilité qu’un livre désigné soit à une extrémité ?

A. \(\frac{1}{2}\)  
B. \(\frac{1}{6}\)  
C. \(\frac{1}{3}\)  
D. \(\frac{2}{3}\)  

### F19

On choisit uniformément un groupe de trois cartes parmi huit cartes distinctes. Quelle probabilité qu’il contienne une carte précise ?

A. \(\frac{5}{8}\)  
B. \(\frac{1}{3}\)  
C. \(\frac{1}{8}\)  
D. \(\frac{3}{8}\)  

### F20

Une urne contient trois rouges, deux bleues et une verte. Trois boules sont tirées uniformément sans remise. Quelle probabilité d’une boule de chaque couleur ?

A. \(\frac{3}{10}\)  
B. \(\frac{1}{10}\)  
C. \(\frac{1}{3}\)  
D. \(\frac{1}{20}\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | B | Trois boules favorables parmi huit équiprobables. | S1 |
| F2 | A | Six multiples parmi dix-huit ; six sur dix-huit vaut un tiers. | S2 |
| F3 | A | Dix, onze et douze : trois résultats sur douze. | S2 |
| F4 | D | Le complément vaut un moins deux septièmes. | S3 |
| F5 | C | Union vingt plus quinze moins cinq, soit trente sur cinquante. | S3 |
| F6 | C | Multiplier les deux probabilités indépendantes. | S4 |
| F7 | A | Un seul ordre : (2/5)(3/5). | S5 |
| F8 | C | Une rouge reste sur quatre après la première : (2/5)(1/4). | S6 |
| F9 | D | SE et ES sont deux chemins : 2×(2/5)(3/5). | S8 |
| F10 | C | Complément de trois échecs : 1−(3/4)³. | S7 |
| F11 | A | Quatre positions pour l’unique pile, sur seize suites équiprobables. | S8 |
| F12 | A | Trois paires RR et une BB sur dix paires, donc quatre dixièmes. | S9 |
| F13 | A | La condition ne garde que les cinq boules rouges ou vertes. | S10 |
| F14 | A | Il reste quatre rouges et deux bleues : quatre sur six. | S10 |
| F15 | B | Neuf paires respectent la condition ; une seule est BB. | Avancé A |
| F16 | A | Un demi fois un demi plus un demi fois trois quarts. | Avancé B |
| F17 | A | Le chemin rouge depuis cette urne vaut trois huitièmes ; diviser par cinq huitièmes. | Avancé B |
| F18 | C | Deux positions favorables sur six. | Avancé C |
| F19 | D | Chaque carte a la même probabilité d’appartenir aux trois sélectionnées parmi huit. | Avancé C |
| F20 | A | Trois fois deux fois un groupes favorables sur C(6,3)=20. | Avancé C |

</details>

## Votre bilan — Revenir à la bonne structure

Une erreur peut porter sur le modèle, le calcul, une unité, un rang, un événement ou la demande finale. Reprenez le passage indiqué, formulez la règle et ses conditions en une phrase, puis essayez une variante sans aide. Une réponse correcte après lecture du corrigé reste une réussite accompagnée jusqu’à confirmation sur un autre énoncé. Ce bilan ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Univers fini équiprobable | Favorables / total, avec mêmes objets de comptage |
| Complément | P(non A)=1−P(A) |
| Union | P(A ou B)=P(A)+P(B)−P(A et B) |
| Succession | P(A puis B)=P(A)P(B sachant A), si P(A)>0 |
| Indépendance | Permet le produit des probabilités simples ; ne pas l’inventer |
| Avec remise | Composition restaurée ; indépendance selon le protocole |
| Sans remise | Mettre à jour le total et la couleur retirée |
| Au moins un succès | 1−(1−p)ⁿ pour n essais indépendants de même p |
| Exactement k succès | C(n,k)pᵏ(1−p)ⁿ⁻ᵏ sous les hypothèses binomiales |
| Conditionnement | Nouvel univers B ; P(A sachant B)=P(A et B)/P(B), P(B)>0 |
| Plusieurs sources | Addition des probabilités des chemins ; posteriori par normalisation |
| Classements uniformes | Symétries justifiées sur objets distincts et places équiprobables |

**Prochaine étape : la lecture de tableaux et de données.** Conservez le même réflexe : définir les objets, les unités et les conditions avant de choisir une formule.
