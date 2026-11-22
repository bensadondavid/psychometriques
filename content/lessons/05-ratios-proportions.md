# Ratios et proportions : transformer des rapports en parts communes

Deux stocks dans le rapport trois à cinq. Deux équipes qui partagent une somme. Deux cartes à des échelles différentes. Un ajout qui change les proportions sans modifier la quantité d’une couleur.

La bonne question est souvent : **qu’est-ce qu’une part représente, et qu’est-ce qui reste constant ?** Une fois ces deux réponses trouvées, beaucoup de problèmes se réduisent à un petit nombre d’opérations.

**Votre objectif :** passer des rapports aux quantités, reconnaître les situations proportionnelles et suivre les invariants après une transformation. Vous apprendrez aussi à vérifier qu’un modèle est possible : des litres peuvent être fractionnaires, des personnes ne le peuvent pas.

## Avant de commencer — Trois questions pour choisir votre point de départ

Donnez une réponse, une phrase de justification et votre confiance : « Je suis sûr », « J’hésite » ou « J’ai deviné ».

<!-- interaction D1 | QCM unique + confiance | compétence : ratio-part-total -->
**D1.** Un mélange contient deux parts de produit A pour trois parts de produit B. Quelle fraction du mélange est constituée de A ?

A. \(2/3\)  
B. \(2/5\)  
C. \(3/5\)  
D. \(3/2\)

<details><summary>Voir le raisonnement</summary>

**B.** Le mélange contient cinq parts au total, dont deux de A. Le rapport A/B vaut \(2/3\), mais la fraction A/total vaut \(2/5\).

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : proportion-inverse -->
**D2.** Quatre machines identiques réalisent une tâche en six heures. En supposant le travail parfaitement partageable et le même rendement constant, combien de temps faut-il à huit machines ?

A. \(12\) h  
B. \(6\) h  
C. \(3\) h  
D. \(2\) h

<details><summary>Voir le raisonnement</summary>

**C.** Pour le même travail, le produit machines × temps reste constant : \(4\times6=8\times t\), donc \(t=3\) heures. Doubler les machines réduit le temps de moitié sous les hypothèses données.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : ratios-chaine -->
**D3.** \(A:B=2:3\) et \(B:C=4:5\). Quel est le rapport \(A:B:C\) ?

A. \(2:3:5\)  
B. \(2:4:5\)  
C. \(8:3:15\)  
D. \(8:12:15\)

<details><summary>Voir le raisonnement</summary>

**D.** Le même B doit représenter le même nombre de parts dans les deux écritures. Multiplier le premier ratio par quatre et le second par trois donne \(A:B=8:12\) et \(B:C=12:15\).

</details>

D1 vous oriente vers S1–S3 ; D2 vers S5–S6 ; D3 vers S7. Les transformations après ajout ou transfert viendront ensuite.

## Séquence 1 — Un ratio n’est pas une quantité

Pour deux quantités strictement positives A et B :

\[
A:B=a:b\quad\Longleftrightarrow\quad\frac AB=\frac ab,
\qquad a,b>0.
\]

Cela signifie qu’il existe un facteur commun \(k>0\) tel que :

\[
\boxed{A=ak,\qquad B=bk.}
\]

Le ratio \(2:3\) convient à deux et trois litres, dix et quinze litres, ou cent et cent cinquante litres. Il fixe les **proportions**, pas l’échelle. Une donnée supplémentaire est nécessaire pour connaître les quantités.

### L’ordre est une information

Si rouges:bleus = \(2:3\), alors bleus:rouges = \(3:2\). Écrivez les noms au-dessus des parts. L’ordre des nombres dans la phrase n’est pas toujours celui du rapport demandé à la fin.

Dans les problèmes de répartition de cette leçon, les termes du ratio et les catégories sont strictement positifs. Une catégorie nulle peut se traiter séparément si l’énoncé le prévoit ; on ne divise jamais par une quantité nulle.

### Simplifier sans déformer

\(18:30=3:5\) en divisant les deux termes par leur PGCD six. \(0{,}6:1{,}5=6:15=2:5\). Pour \((1/2):(3/4)\), multiplier les deux termes par quatre donne \(2:3\).

On peut multiplier tous les termes par un même facteur non nul. On ne peut pas ajouter le même nombre et prétendre conserver le ratio : \(2:3\ne5:6\).

### Unités identiques ou taux avec unité ?

Pour comparer deux longueurs par un ratio sans unité, convertissez-les dans la même unité. Deux mètres pour cinquante centimètres donnent \(200:50=4:1\), pas \(2:50\).

En revanche, euros par kilogramme ou kilomètres par heure sont des **taux unitaires**, avec une unité. Leur division n’a pas à supprimer les unités : celles-ci indiquent le sens du résultat.

### Atelier I1 — Réduisez, puis donnez le sens

<!-- interaction I1 | trois ratios à convertir et étiqueter | compétence : simplifier-ratio -->
Réduisez : \(18:30\), \((1/2):(3/4)\), puis deux mètres : cinquante centimètres. Nommez les deux grandeurs dans le dernier cas.

<details><summary>Correction</summary>

\(3:5\), \(2:3\), \(4:1\). Le dernier ratio compare la longueur de deux mètres à celle de cinquante centimètres ; il faut les convertir avant de réduire.

</details>

## Séquence 2 — Partie / partie et partie / total

Si \(A:B=a:b\), le total A+B vaut \((a+b)k\). Par conséquent :

\[
\boxed{\frac A{A+B}=\frac a{a+b}},
\qquad
\boxed{\frac B{A+B}=\frac b{a+b}}.
\]

Dans un mélange sable:ciment = \(4:3\), le ciment représente \(3/7\) du total. Le rapport ciment/sable vaut \(3/4\). Ces nombres ont des dénominateurs différents parce qu’ils répondent à des questions différentes.

« Quatre billes vertes pour chaque bille rouge » signifie vertes:rouges = \(4:1\), soit cinq billes par groupe complet. Pour quatre rouges, il y a seize vertes et vingt billes au total.

Si la fraction de A dans un ensemble réparti entre A et B vaut \(f\), avec \(0<f<1\), le ratio A:B vaut \(f:(1-f)\). Avec \(f=3/8\), on obtient \(3:5\), pas \(3:8\).

### Atelier I2 — Trois cartes pour le même mélange

<!-- interaction I2 | association ratio/fraction/pourcentage | compétence : ratio-part-total -->
Un mélange A:B est dans le ratio \(3:5\). Associez : A/B, A/total, part de B en pour cent.

<details><summary>Correction</summary>

A/B = \(3/5\). A/total = \(3/8\). B/total = \(5/8=62{,}5\%\). Une barre de huit parts aide à garder les trois références distinctes.

</details>

## Séquence 3 — Retrouver la valeur d’une part

Une fois \(A=ak,B=bk\) écrit, cherchez ce que la donnée absolue représente dans ce modèle.

| Donnée connue | Nombre de parts correspondant | Valeur d’une part |
|---|---|---|
| Total A+B=T | a+b | \(k=T/(a+b)\) |
| A=P | a | \(k=P/a\) |
| Écart B−A=D, avec b>a | b−a | \(k=D/(b-a)\) |
| Somme A+C, dans un ratio à trois | Parts de A + parts de C | Diviser seulement par cette somme |

Pour un partage de \(96\) € dans le ratio \(3:5\), huit parts valent quatre-vingt-seize, donc une part vaut douze. A reçoit trente-six euros et B soixante.

Si l’écart vaut vingt-quatre et le ratio \(3:5\), **deux parts** valent vingt-quatre ; une part vaut douze. Diviser l’écart par huit confondrait différence et total.

### Partages à trois ou quatre

Pour \(A:B:C=2:3:5\), le total fait dix parts. Si B reçoit dix-huit, une part vaut six, et les trois quantités valent douze, dix-huit, trente. Si A+C est connu, il représente sept parts et non dix.

Pour un partage à quatre dans le ratio \(1:2:3:4\), le même mécanisme donne dix parts au total. Le nombre de personnes n’est pas le nombre de parts.

### Une combinaison de parts

Si A:B=5:8 et B−A=15, une part vaut cinq. Pour calculer 2A+B, on peut compter directement 2×5+8=18 parts, puis multiplier par cinq : quatre-vingt-dix. Il n’est pas nécessaire de calculer A et B séparément, même si cela donne une bonne vérification.

### Contraintes entières

Si A et B sont des entiers et \(a:b\) est réduit avec a,b entiers positifs, alors k est un entier positif. Dans le ratio réduit \(2:3\), le total d’objets doit donc être un multiple de cinq. Un total de vingt-sept objets ne permet pas une répartition exacte selon ce ratio.

Un ratio non réduit peut donner un k non entier sans difficulté : avec A=2,B=3 écrits comme \(4k,6k\), on a k=1/2. Réduisez avant d’utiliser une contrainte de divisibilité sur k.

### Atelier I3 — Total, écart ou somme partielle ?

<!-- interaction I3 | modèle à parts et trois données séparées | compétence : valeur-part -->
Trois situations indépendantes :

1. A:B=\(3:5\), total \(96\) €. Trouvez A et B.
2. A:B=\(3:5\), écart B−A=\(24\) €. Trouvez A et B.
3. A:B:C=\(2:3:5\), A+C=\(42\) €. Trouvez B.

<details><summary>Correction</summary>

1. Une part vaut douze : A=36,B=60.
2. Deux parts valent vingt-quatre : même résultat.
3. Sept parts valent quarante-deux, donc une part vaut six et B=18.

Les deux premières situations aboutissent aux mêmes quantités, mais la donnée connue ne représente pas le même nombre de parts.

</details>

## Séquence 4 — Proportionnalité directe : le quotient reste constant

Deux grandeurs x et y sont directement proportionnelles lorsque :

\[
y=cx,
\]

avec un même coefficient c sur les situations étudiées. Pour x non nul, le quotient y/x est constant. Dans les exemples de prix, masse ou production, les grandeurs et c sont positives.

À prix unitaire constant, trois kilogrammes coûtant vingt-quatre euros donnent huit euros par kilogramme. Cinq kilogrammes coûtent quarante euros. Trois méthodes équivalentes sont possibles :

- passage à l’unité : \(24/3=8\), puis \(8\times5\) ;
- coefficient entre situations : \(24\times(5/3)\) ;
- proportion : \(24/3=P/5\), puis produits croisés.

**Le produit en croix ne prouve pas la proportionnalité : il l’utilise.** L’énoncé doit donner un prix unitaire constant, une recette aux proportions conservées ou une autre hypothèse équivalente.

### Reconnaître un modèle qui n’est pas proportionnel

Une livraison facture cinq euros fixes plus deux euros par kilogramme : \(P=5+2m\). Doubler la masse ne double pas le montant total. Deux nombres qui augmentent ensemble ne sont pas forcément proportionnels.

Sur un tableau, vérifiez les quotients des paires disponibles ; sur un graphique, la proportionnalité directe se représente par une droite passant par l’origine. Une seule paire de valeurs ne suffit pas à établir un modèle pour toutes les situations.

### Atelier I4 — Deux tarifs, une seule proportionnalité

<!-- interaction I4 | comparaison de deux tableaux | compétence : reconnaitre-proportion -->
Tarif A : \(P=3m\). Tarif B : \(P=4+3m\), en euros pour une masse m en kilogrammes. Pour m=2 puis m=4, calculez P et P/m. Quel tarif est proportionnel à la masse ?

<details><summary>Correction</summary>

A : prix six puis douze ; quotient trois dans les deux cas. B : prix dix puis seize ; quotients cinq puis quatre. Seul A est proportionnel ; B contient une partie fixe.

</details>

## Séquence 5 — Taux unitaire, recette et conversion

Une grandeur « par unité » est une division orientée :

\[
\text{prix par kg}=\frac{\text{prix}}{\text{masse}},\qquad
\text{vitesse}=\frac{\text{distance}}{\text{temps}}.
\]

Pour comparer des offres, choisissez le même taux : euros par article, ou articles par euro, mais ne mélangez pas les deux. Le meilleur prix par article est le **plus petit** ; le meilleur nombre d’articles par euro est le **plus grand**.

Si trois articles coûtent douze euros et cinq coûtent dix-huit euros, les prix unitaires sont quatre et \(18/5=3{,}6\) euros. La seconde offre est moins chère par article. Mais si l’achat se fait uniquement par lots entiers et qu’on veut un nombre précis d’articles, il faut aussi examiner le nombre de lots à acheter ; un taux unitaire ne permet pas d’acheter une fraction de lot non autorisée.

### Convertir avant de multiplier

À vitesse constante de \(72\) km/h, parcourir une distance pendant vingt-cinq minutes donne :

\[
72\times\frac{25}{60}=30\ \mathrm{km}.
\]

Vingt-cinq minutes ne valent pas \(0{,}25\) heure. Une conversion d’unités est une transformation proportionnelle, mais sa base peut être soixante pour minutes/heures et cent pour centimètres/mètres.

Dans une recette, passer de six à neuf personnes multiplie les quantités par \(9/6=3/2\), si chaque portion et la composition restent identiques. Tous les ingrédients suivent le même facteur.

### Atelier I5 — Le prix au bon dénominateur

<!-- interaction I5 | taux exacts et choix d’offre | compétence : taux-unitaires -->
Le lot A propose quatre articles pour dix euros ; B, six articles pour quatorze euros. Quel lot a le meilleur prix unitaire ? Quel est l’écart de prix par article ?

<details><summary>Correction</summary>

A : \(10/4=5/2\) €. B : \(14/6=7/3\) €. B est moins cher ; l’écart vaut \(5/2-7/3=1/6\) d’euro par article. L’écart de quatre euros entre les lots ne compare pas le même nombre d’articles.

</details>

## Séquence 6 — Proportionnalité inverse : le produit reste constant

Pour une grandeur y inversement proportionnelle à x>0 :

\[
\boxed{xy=C}\quad\text{ou}\quad y=\frac Cx.
\]

Lorsque x double, y est divisé par deux. Le produit reste constant, pas le quotient.

Pour un travail fixe effectué par des machines identiques à rendement constant, le produit nombre de machines × durée est constant, si le travail est partageable et si les machines ne se gênent pas. Quatre machines pendant six heures représentent vingt-quatre machines-heures ; huit machines font le même travail en trois heures.

Pour une distance fixe, durée et vitesse sont inversement proportionnelles : \(vt=d\). Pour une durée fixe, distance et vitesse sont directement proportionnelles : \(d=tv\). **La relation dépend de ce qui est fixé.**

### Partage inverse de deux indices

Partager en proportion inverse de deux et trois signifie attribuer des parts comme \(1/2:1/3\), donc \(3:2\). Sur quinze euros, la personne associée à deux reçoit neuf euros et celle associée à trois en reçoit six.

Pour trois indices, inversez **chacun** puis mettez au même dénominateur : inverse de \(2:3:6\) → \(1/2:1/3:1/6=3:2:1\). Ne retournez pas seulement l’ordre de la liste : \(6:3:2\) serait une autre répartition.

### Atelier I6 — Trouvez l’invariant avant de calculer

<!-- interaction I6 | association situations/invariants + champs | compétence : proportion-inverse -->
1. Six machines effectuent un travail en huit heures. Dix machines identiques font le même travail : quelle durée ?
2. Une somme de trente-six euros est partagée en proportion inverse de \(2,3,6\). Quelles sont les parts ?

<details><summary>Correction</summary>

1. Invariant machines × temps : \(6\times8/10=24/5=4{,}8\) h, soit quatre heures quarante-huit minutes.
2. Ratio \(3:2:1\), six parts au total, chacune de six euros : dix-huit, douze et six euros. Le plus petit indice reçoit la plus grande part.

</details>

## Séquence 7 — Relier plusieurs ratios sans attribuer deux valeurs au même objet

Si \(A:B=3:4\) et \(B:C=6:5\), le premier B vaut quatre parts et le second six **dans deux unités de part différentes**. Il faut les harmoniser.

Le PPCM de quatre et six est douze. On obtient \(A:B=9:12\) et \(B:C=12:10\), donc :

\[
\boxed{A:B:C=9:12:10.}
\]

Une construction générale est \(A:B=a:b\), \(B:C=c:d\) → \(A:B:C=ac:bc:bd\), à simplifier. Utiliser le PPCM peut donner directement de plus petits nombres.

### Quel rapport cherche-t-on ?

Si l’on veut seulement A/C, on peut multiplier les deux rapports :

\[
\frac AC=\frac AB\times\frac BC=\frac34\times\frac65=\frac9{10}.
\]

En revanche, si l’on connaît A+C et demande B, le ratio à trois est très utile. Pour A+C=57, dix-neuf parts valent cinquante-sept, donc une part vaut trois et B vaut trente-six.

Si \(A:B=2:3\) et \(A:C=4:5\), harmonisez cette fois **A** : \(4:6:5\). Le symbole commun n’est pas forcément au milieu.

### Atelier I7 — Une même quantité, une même échelle

<!-- interaction I7 | ratios ajustables avec quantité commune verrouillée | compétence : chaine -->
On sait \(A:B=2:3\) et \(B:C=4:5\). Construisez un ratio à trois, puis trouvez B si A+C=46.

<details><summary>Correction</summary>

\(A:B:C=8:12:15\). A+C représente vingt-trois parts, donc une part vaut deux. B vaut vingt-quatre. Vérification : A=16,C=30 ; les deux rapports initiaux sont respectés.

</details>

## Séquence 8 — Ajouter ou retirer : quelle quantité est restée fixe ?

Le ratio d’origine ne décrit pas automatiquement le ratio final. Posez les quantités initiales \(ak,bk\), puis écrivez les nouvelles.

### Ajouter uniquement à B

Si A:B=\(2:3\) et le mélange total vaut quarante litres, A=16 et B=24. Pour obtenir A:B=\(1:2\) en ajoutant seulement B, A reste seize. B doit devenir trente-deux, donc on en ajoute huit.

### Retirer uniquement à A

Avec vingt rouges et douze bleus, retirer seulement des rouges pour atteindre \(1:1\) impose de garder douze rouges. Il faut en retirer huit. Les douze bleus forment l’invariant.

### Ajouter la même quantité aux deux

À partir de \(A=3k,B=5k\), ajouter x aux deux conserve la différence \(B-A=2k\), mais pas le ratio. Pour x>0, le rapport \((3k+x)/(5k+x)\) augmente vers un.

Si le ratio **change** après un ajout de même quantité, il faut connaître l’échelle initiale ou utiliser le ratio final pour la déterminer. Dire « trois parts plus quatre » n’autorise pas à additionner des parts abstraites et quatre litres sans fixer k.

### Atelier I8 — Deux ajouts qui ne font pas la même chose

<!-- interaction I8 | compteurs A/B + invariant à choisir | compétence : ajout-retrait -->
On part de dix-huit jetons A et trente jetons B.

1. Ajouter six jetons à chaque boîte : nouveau ratio ? Invariant ?
2. Repartir de l’état initial, puis retirer seulement des B jusqu’à A:B=\(3:4\) : combien de B retirer ?

<details><summary>Correction</summary>

1. \(24:36=2:3\). L’écart reste douze ; le ratio initial \(3:5\) a changé.
2. A reste dix-huit, soit six unités du ratio cible \(3:4\). Il faut B=24, donc retirer six B.

</details>

## Séquence 9 — Transfert : le total ne change pas, l’écart change deux fois

Transférer x objets de A vers B donne :

\[
A'=A-x,\qquad B'=B+x.
\]

Le total A+B est conservé. L’écart A−B diminue de **2x** : on enlève x d’un côté et on ajoute x de l’autre.

Deux urnes sont dans le ratio \(5:3\). Transférer trois jetons de la première à la seconde les rend égales. Posez A=5k,B=3k :

\[
5k-3=3k+3\Rightarrow2k=6\Rightarrow k=3.
\]

Les quantités initiales étaient quinze et neuf, pas trente et dix-huit. Le transfert nécessaire à l’égalité est la moitié de l’écart initial.

Si les objets ne sont pas divisibles et que l’écart initial est impair, on ne peut pas obtenir l’égalité exacte par un transfert entier. Vérifiez aussi \(0\le x\le A\) pour un transfert de A vers B.

### Atelier I9 — Deux effets pour un seul transfert

<!-- interaction I9 | déplacement de jetons + suivi du total et de l’écart | compétence : transfert -->
Deux boîtes contiennent trente et dix-huit jetons. Combien faut-il transférer de la première à la seconde pour les égaliser ? Donnez le total et l’écart avant et après.

<details><summary>Correction</summary>

Écart initial douze, donc transfert de six. État final vingt-quatre et vingt-quatre. Le total reste quarante-huit ; l’écart passe de douze à zéro. Un transfert de douze inverserait les quantités au lieu de les égaliser.

</details>

## Séquence 10 — Mélanges : conserver ou modifier la composition

Dans un mélange A:B=\(2:3\), A représente deux cinquièmes du total, B trois cinquièmes. Si le volume total est cinquante litres, les quantités sont vingt et trente litres, sous l’hypothèse de volumes additifs.

### Ajouter de l’eau à un concentré

Un mélange concentré:eau = \(3:2\) contient trente litres, donc dix-huit litres de concentré et douze d’eau. Pour obtenir \(1:2\) en ajoutant uniquement de l’eau, le concentré reste dix-huit et l’eau doit devenir trente-six : ajout de vingt-quatre litres.

Il ne suffit pas de regarder le rapport des totaux : le numérateur conservé fixe la quantité finale de l’autre constituant.

### Mélanger deux préparations du même ratio

Vingt litres de ratio A:B=\(2:3\) contiennent huit de A et douze de B. Trente litres du même ratio contiennent douze de A et dix-huit de B. Ensemble : vingt de A, trente de B, donc toujours \(2:3\).

### Mélanger deux préparations de ratios différents

Vingt litres de ratio \(1:3\) contiennent cinq de A. Dix litres de ratio \(1:1\) en contiennent cinq. Ensemble, dix de A sur trente litres donnent A:B=\(1:2\).

**Ne moyennez pas directement les termes des ratios.** Convertissez chaque mélange en quantités de constituants, additionnez, puis reconstruisez le rapport. Les taux de chaque constituant suivent une moyenne pondérée par les quantités de mélange.

### Retrait homogène ou ciblé ?

Prélever une partie d’un mélange homogène retire les constituants dans la même proportion et conserve le ratio du reste. Retirer seulement un constituant change le ratio. Le caractère homogène est une hypothèse physique, pas une conséquence du mot « retirer ».

### Atelier I10 — Les deux mélanges n’ont pas le même poids

<!-- interaction I10 | tableau constituants × mélanges | compétence : melange -->
On mélange douze litres de A:B=\(1:2\) à huit litres de A:B=\(3:1\). Quel est le ratio final A:B ?

<details><summary>Correction</summary>

Premier mélange : quatre litres de A et huit de B. Second : six de A et deux de B. Total : dix de chaque, donc \(1:1\). Additionner seulement les termes \((1+3):(2+1)=4:3\) serait injustifié : les unités de part et les volumes des deux mélanges diffèrent.

</details>

## Séquence 11 — Échelles : garder les unités et le sens de la conversion

Une échelle \(1:n\), avec n>0, signifie :

\[
\frac{\text{longueur dessinée}}{\text{longueur réelle}}=\frac1n.
\]

Les deux longueurs doivent être dans la même unité. À l’échelle \(1:20\,000\), un centimètre représente vingt mille centimètres, soit deux cents mètres. Quatre centimètres représentent huit cents mètres.

Pour passer du dessin au réel, multipliez par n ; du réel au dessin, divisez par n. Une échelle \(2:1\) est un agrandissement : le dessin est deux fois plus grand que l’objet.

### Comparer deux plans

Une même route mesurant quatre centimètres à l’échelle \(1:20\,000\) mesure huit centimètres à l’échelle \(1:10\,000\). Le plus petit dénominateur donne ici le dessin le plus grand : chaque centimètre y représente moins de distance réelle.

Pour une même longueur réelle et des échelles \(1:n_1\), \(1:n_2\) :

\[
\frac{L_2}{L_1}=\frac{n_1}{n_2}.
\]

### Longueurs, aires et volumes ne suivent pas le même facteur

Si toutes les longueurs d’une figure semblable sont multipliées par s>0, les aires le sont par \(s^2\) ; pour des solides semblables, les volumes par \(s^3\). Doubler les longueurs d’un rectangle quadruple son aire. Si une seule dimension change, utilisez la formule de l’aire plutôt que la règle de similitude.

Ce prolongement prépare la géométrie : un facteur de longueur ne s’applique pas directement à une aire ou à un volume.

### Atelier I11 — Deux cartes et une surface

<!-- interaction I11 | règle graduée et conversions saisies | compétence : echelles -->
Une route mesure six centimètres sur une carte au \(1:50\,000\).

1. Quelle est sa longueur réelle en kilomètres ?
2. Combien mesure-t-elle sur une carte au \(1:25\,000\) ?
3. Si toutes les longueurs d’un dessin sont doublées, par combien son aire est-elle multipliée ?

<details><summary>Correction</summary>

1. Six centimètres représentent trois cent mille centimètres, soit trois kilomètres.
2. La nouvelle carte a un dénominateur deux fois plus petit : douze centimètres.
3. Aire multipliée par quatre, pas deux, pour une transformation où toutes les longueurs sont doublées.

</details>

## Séquence 12 — Proportionnalité à plusieurs paramètres

Une production peut être proportionnelle au nombre de machines **et** à la durée :

\[
Q=rmt,
\]

où r est la production d’une machine par unité de temps, supposée constante. Trois imprimantes produisent trois cent soixante pages en quatre minutes :

\[
r=\frac{360}{3\times4}=30\text{ pages par imprimante et par minute}.
\]

Cinq imprimantes pendant six minutes produisent alors \(30\times5\times6=900\) pages. Le facteur de passage est aussi \((5/3)(6/4)\).

### Déterminer le sens de chaque effet

Pour une production fixée : \(t=Q/(rm)\). Plus de machines → moins de temps ; plus de travail demandé → plus de temps ; meilleur rendement → moins de temps.

Le tableau de proportionnalité n’est fiable que si chaque grandeur est isolée avec ses unités. Ne multipliez pas des coefficients tous dans le même sens par automatisme.

Si six machines identiques produisent neuf cents unités en cinq heures, huit machines produiront mille deux cents unités en :

\[
t=5\times\frac{1200}{900}\times\frac68=5\text{ heures}.
\]

L’augmentation de travail est exactement compensée par celle du nombre de machines.

### Deux dimensions variables

Le prix d’un tissu uniforme peut être proportionnel à sa longueur **et** à sa largeur, si le prix au mètre carré est constant. Une pièce de deux mètres sur trois coûte trente euros, donc cinq euros par mètre carré. Une pièce de quatre mètres sur cinq a une aire de vingt mètres carrés et coûte cent euros.

Les deux dimensions n’ont pas été multipliées par le même facteur : utiliser un unique facteur de similitude serait inadapté. On multiplie ici trente par (4/2)×(5/3).

### Atelier I12 — Une flèche par paramètre

<!-- interaction I12 | choix hausse/baisse avant calcul | compétence : double-proportion -->
Quatre machines produisent deux cent quarante pièces en trois heures. Au même rendement constant, combien produisent six machines en cinq heures ? Donnez d’abord les deux facteurs, puis le résultat.

<details><summary>Correction</summary>

Facteurs \(6/4=3/2\) et \(5/3\). Production \(240\times(3/2)\times(5/3)=600\) pièces. Le taux unitaire est vingt pièces par machine et par heure.

</details>

## Atelier avancé A — Ratio après ajout : reconstruire l’état initial

Deux quantités sont dans le ratio \(2:5\). On ajoute douze à la première et rien à la seconde ; le nouveau ratio devient \(1:2\). Posez \(A=2k,B=5k\) :

\[
\frac{2k+12}{5k}=\frac12
\Rightarrow4k+24=5k
\Rightarrow k=24.
\]

État initial : quarante-huit et cent vingt. État final : soixante et cent vingt. Toutes les contraintes sont respectées.

Un résultat algébrique ne suffit pas si k est négatif dans un problème de stocks strictement positifs. Si l’on ajoute seulement à A, A/B doit augmenter ; un ratio final plus petit que le ratio initial est impossible dans ce modèle.

### Ajouts qui conservent le ratio

À partir de \(A=ak,B=bk\), ajouter \(au\) à A et \(bu\) à B donne \(a(k+u):b(k+u)=a:b\), si les quantités finales restent admissibles. Les ajouts sont proportionnels aux parts initiales.

Exemple : ratio \(2:5\), ajouts huit et vingt. Ce sont quatre unités supplémentaires du même ratio ; il est conservé. Ajouter huit aux deux ne le conserverait pas, sauf si les quantités étaient initialement égales.

### Atelier I13 — Le ratio reste-t-il le même ?

<!-- interaction I13 | classement de transformations | compétence : invariant-ratio -->
On part de A=12,B=20, donc A:B=\(3:5\). Quelles transformations conservent ce ratio ?

A. Doubler les deux quantités.  
B. Ajouter trois à A et cinq à B.  
C. Ajouter quatre à chacune.  
D. Prélever un quart de chaque quantité.

<details><summary>Correction</summary>

**A, B et D.** A multiplie les deux par deux ; B ajoute une unité de ratio ; D multiplie les deux par \(3/4\). C donne \(16:24=2:3\), différent de \(3:5\).

</details>

## Atelier avancé B — Rapport inversé, différence conservée

Si \(A/B=5/3\), alors B/A=\(3/5\). En revanche, savoir que A et B sont **inversement proportionnels** décrit comment ils changent lorsqu’une variable change ; cela ne signifie pas seulement qu’on a renversé l’écriture d’un rapport.

Deux nombres positifs x et y sont inversement proportionnels à trois et sept : \(x:y=1/3:1/7=7:3\). Si leur somme vaut quarante, alors x=28,y=12, et x−y=16.

Dans un problème de temps où les deux quantités augmentent du même montant, leur différence est conservée mais leur ratio évolue. Par exemple, des âges de dix et quinze ans donnent un ratio \(2:3\), puis quinze et vingt ans donnent \(3:4\). On ne peut pas extrapoler le ratio initial à toutes les dates. Les modèles de stocks après ajout commun utilisent le même mécanisme.

### Atelier I14 — Le laboratoire des modèles impossibles

<!-- interaction I14 | justification libre et contre-exemple | compétence : choix-modele -->
Expliquez pourquoi chacune des demandes est impossible ou insuffisamment déterminée :

1. Répartir exactement vingt-sept jetons en deux groupes dans le ratio \(2:3\).
2. Partant de A:B=\(2:3\), obtenir \(1:2\) en ajoutant une quantité strictement positive seulement à A.
3. Connaître A et B à partir de leur seul ratio \(2:3\).

<details><summary>Correction</summary>

1. Le ratio réduit impose un total multiple de cinq ; vingt-sept ne convient pas pour des jetons indivisibles.
2. Ajouter à A augmente A/B à partir de \(2/3\), alors que la cible \(1/2\) est plus petite.
3. Deux et trois, quatre et six, dix et quinze conviennent tous. Il manque une quantité absolue ou une autre relation indépendante.

</details>

## La boîte à outils — Trouver ce qui reste constant

| Situation | Invariant ou modèle | Contrôle |
|---|---|---|
| Répartition dans un ratio | Même valeur k pour toutes les parts | Reconstituer le rapport |
| Total connu | Somme des parts | Somme des quantités égale au total |
| Écart connu | Différence des parts | Plus grande part moins petite |
| Proportion directe | Quotient constant | Un facteur double les deux quantités |
| Proportion inverse | Produit constant | Un facteur double l’une et divise l’autre |
| Chaîne de ratios | Quantité commune harmonisée | Tous les ratios initiaux vrais |
| Ajout ciblé | Catégorie non modifiée | Sens de variation du rapport |
| Ajout commun | Différence conservée | Ratio généralement modifié |
| Transfert | Total conservé ; écart changé de deux fois le transfert | Quantités finales non négatives |
| Mélange homogène prélevé | Composition conservée | Retrait proportionnel des constituants |
| Échelle | Rapport dessin/réel | Unités identiques avant conversion |
| Plusieurs paramètres | Formule avec chaque facteur | Une unité et un sens pour chaque facteur |

## Mission finale — Les parts ne suffisent pas : trouvez leur valeur

Les huit premiers items consolident les fondations, les huit suivants combinent les outils et les quatre derniers demandent une vérification de modèle. Répondez avant de consulter les corrections.

### F1 — Même unité

Quel est le ratio réduit de \(1{,}2\) m à \(45\) cm ?

A. \(2:75\) · B. \(4:15\) · C. \(8:3\) · D. \(3:8\)

### F2 — Partie du total

Dans un mélange A:B=\(5:7\), quelle fraction du mélange est constituée de B ?

A. \(7/12\) · B. \(7/5\) · C. \(5/12\) · D. \(7/2\)

### F3 — Total connu

Cent quarante-quatre euros sont partagés selon A:B=\(4:5\). Combien reçoit A ?

A. \(80\) € · B. \(36\) € · C. \(16\) € · D. \(64\) €

### F4 — Écart connu

Deux quantités sont dans le ratio \(3:7\) et leur écart vaut vingt-huit. Quelle est la plus petite ?

A. \(84/10\) · B. \(21\) · C. \(49\) · D. \(7\)

### F5 — Une part imposée

A:B:C=\(2:5:7\). B reçoit trente-cinq euros. Quelle est la somme A+C ?

A. \(98\) € · B. \(49\) € · C. \(63\) € · D. \(14\) €

### F6 — Prix proportionnel

Six kilogrammes coûtent quarante-deux euros à prix unitaire constant. Combien coûtent neuf kilogrammes ?

A. \(63\) € · B. \(45\) € · C. \(28\) € · D. \(84\) €

### F7 — Prix par article

Le lot A propose trois articles pour huit euros ; B, cinq pour douze euros. Quel est le meilleur prix par article ?

A. A, à \(8/3\) €.  
B. A, à \(3/8\) €.  
C. B, à \(5/12\) €.  
D. B, à \(12/5\) €.

### F8 — Partage inverse

Soixante euros sont partagés en proportion inverse de quatre et six. Combien reçoit la personne associée à quatre ?

A. \(24\) € · B. \(36\) € · C. \(40\) € · D. \(30\) €

### F9 — Rapports en chaîne

A:B=\(3:5\) et B:C=\(2:3\). Quel est le ratio A:B:C ?

A. \(3:5:3\) · B. \(6:5:15\) · C. \(6:10:15\) · D. \(3:2:3\)

### F10 — Somme partielle

A:B:C=\(4:6:5\) et A+C=\(54\). Que vaut B ?

A. \(36\) · B. \(54\) · C. \(24\) · D. \(90\)

### F11 — Retrait ciblé

Une collection contient vingt-huit rouges et vingt et un bleus. On retire seulement des rouges pour atteindre rouges:bleus=\(2:3\). Combien en retire-t-on ?

A. \(7\) · B. \(21\) · C. \(2\) · D. \(14\)

### F12 — Transfert

Deux boîtes contiennent trente-quatre et vingt jetons. Combien faut-il transférer de la première à la seconde pour les égaliser ?

A. \(14\) · B. \(7\) · C. \(27\) · D. \(17\)

### F13 — Deux mélanges

On mélange dix-huit litres de A:B=\(1:2\) à douze litres de A:B=\(1:1\). Quel est le ratio final ?

A. \(1:1\) · B. \(2:3\) · C. \(3:2\) · D. \(1:3\)

### F14 — Carte

À l’échelle \(1:25\,000\), que représentent huit centimètres ?

A. \(2\) km · B. \(20\) km · C. \(200\) m · D. \(0{,}2\) km

### F15 — Deux plans

Une route mesure cinq centimètres au \(1:60\,000\). Combien mesure-t-elle au \(1:20\,000\) ?

A. \(5/3\) cm · B. \(10\) cm · C. \(5\) cm · D. \(15\) cm

### F16 — Deux facteurs directs

Trois machines produisent cent quatre-vingts pièces en deux heures. Au même rendement, combien en produisent cinq machines en quatre heures ?

A. \(300\) · B. \(600\) · C. \(360\) · D. \(120\)

### F17 — Reconstruire l’initial

A:B=\(3:5\). On ajoute huit à A, sans modifier B, puis le ratio devient \(1:1\). Combien valait A initialement ?

A. \(20\) · B. \(8\) · C. \(12\) · D. \(24\)

### F18 — Dilution

Un mélange concentré:eau=\(2:3\) contient quarante-cinq litres. Combien d’eau ajouter pour atteindre le ratio \(1:3\), sans perte ni variation de volume au mélange ?

A. \(27\) L · B. \(9\) L · C. \(18\) L · D. \(54\) L

### F19 — Temps et machines

Huit machines produisent neuf cent soixante pièces en six heures. Douze machines identiques doivent en produire mille quatre cent quarante au même rendement. Combien de temps faut-il ?

A. \(4\) h · B. \(9\) h · C. \(13{,}5\) h · D. \(6\) h

### F20 — Condition entière

Quel total de jetons permet une répartition exacte entre A et B dans le ratio réduit \(3:4\) ?

A. \(30\) · B. \(35\) · C. \(36\) · D. \(38\)

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement et vérification |
|---|---|---|
| F1 | C | 1,2 m=120 cm ; 120:45=8:3. |
| F2 | A | Douze parts au total, sept de B. |
| F3 | D | Neuf parts valent 144 ; une part vaut seize ; A=64. |
| F4 | B | Quatre parts d’écart valent vingt-huit ; une vaut sept ; petite quantité 21. |
| F5 | C | Une part vaut sept ; A+C représente neuf parts, soit 63. |
| F6 | A | Sept euros/kg ; neuf kg valent 63. |
| F7 | D | 12/5<8/3 car 36<40 ; B est moins cher par article. |
| F8 | B | 1/4:1/6=3:2 ; première part 3/5 de soixante, soit 36. |
| F9 | C | Harmoniser B à dix : A:B:C=6:10:15. |
| F10 | A | A+C fait neuf parts ; une part vaut six ; B=36. |
| F11 | D | Les vingt et un bleus représentent trois parts de sept ; garder quatorze rouges, donc retirer quatorze. |
| F12 | B | Écart quatorze, transfert moitié de l’écart : sept. Final 27 et 27. |
| F13 | B | A=6+6=12 ; B=12+6=18 ; ratio 2:3. Aucun ajout d’eau n’est annoncé. |
| F14 | A | 8×25000=200000 cm=2000 m=2 km. |
| F15 | D | Dénominateur divisé par trois, dessin multiplié par trois : quinze cm. |
| F16 | B | 180×(5/3)×(4/2)=600. |
| F17 | C | 3k+8=5k ; k=4 ; A=12. |
| F18 | A | Concentré dix-huit, eau vingt-sept ; cible eau cinquante-quatre ; ajouter vingt-sept. |
| F19 | D | 6×(1440/960)×(8/12)=6 h. |
| F20 | B | Le total doit être multiple de sept ; trente-cinq donne quinze et vingt. |

</details>

## Votre bilan — Quelle relation avez-vous utilisée ?

- F1–F2 : vérifier unités et distinction partie/partie ou partie/total.
- F3–F5 : représenter la donnée connue en parts : somme, différence ou somme partielle.
- F6–F8 : distinguer prix unitaire, proportion directe et partage inverse.
- F9–F10 : harmoniser la quantité commune et conserver son échelle.
- F11–F13 : nommer l’invariant avant la transformation.
- F14–F16 : vérifier unités, sens des facteurs et formule à plusieurs paramètres.
- F17–F20 : contrôler l’état initial, les domaines et la faisabilité entière.

Une réponse correcte doit respecter **toutes** les relations initiales, pas seulement produire un total plausible. Reconstituer l’énoncé avec les quantités trouvées est souvent la vérification la plus courte.

## Votre fiche de révision

| Situation | Forme à retenir |
|---|---|
| A:B=a:b | A=ak,B=bk, k commun |
| Fraction de A dans A+B | a/(a+b) |
| Total T | k=T/(a+b) |
| Différence D, b>a | k=D/(b−a) |
| Proportion directe | y=cx ; quotient constant |
| Proportion inverse | xy=C ; produit constant |
| Partage inverse des indices a,b | (1/a):(1/b)=b:a |
| Chaîne A:B=a:b, B:C=c:d | ac:bc:bd, puis réduire |
| Transfert x de A vers B | (A−x,B+x) ; total conservé |
| Ajout x aux deux | Différence conservée, ratio généralement changé |
| Échelle 1:n | Réel=n×dessin, unités identiques |
| Similitude de facteur s | Longueurs s, aires s², volumes s³ |
| Production constante par machine | Q=rmt |
| Modèle entier | Ratio réduit, k entier, quantités admissibles |

**Prochaine étape : les moyennes.** Les taux unitaires et les mélanges vous ont déjà préparé à une idée centrale : une valeur globale dépend aussi du poids de chaque groupe.
