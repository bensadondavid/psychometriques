# Les nombres : repérer la structure avant de calculer

Deux entiers consécutifs. Un produit négatif. Une distance à zéro. Dans une question de raisonnement quantitatif, ces quelques mots peuvent suffire à éliminer trois réponses sans effectuer un long calcul.

Dans ce chapitre, vous apprendrez à reconnaître ces indices, à choisir une méthode et à vérifier qu'elle fonctionne dans tous les cas autorisés.

**Votre objectif :** savoir ce qu'un nombre peut être, ce qu'il ne peut pas être et ce que ses propriétés permettent de déduire.

Le parcours se fait en plusieurs étapes. Vous pouvez interrompre une séquence et la reprendre plus tard. Les ateliers « Aller plus loin » servent à combiner les notions dans des questions plus exigeantes.

## Avant de commencer — Trois questions pour choisir votre point de départ

Répondez sans chercher à aller vite. Pour chaque réponse, indiquez aussi : « Je suis sûr », « J'hésite » ou « J'ai deviné ».

<!-- interaction D1 | QCM unique | compétence : parite -->
**D1.** Pour tout entier \(n\), que peut-on affirmer sur \(n(n+1)\) ?

A. Il est toujours pair.  
B. Il est toujours impair.  
C. Il est toujours strictement positif.  
D. Il est toujours divisible par \(4\).

<details><summary>Voir le raisonnement</summary>

**A.** Deux entiers consécutifs ont des parités différentes. Leur produit contient donc un facteur pair. Il peut être nul : prenez \(n=0\). Il n'est pas toujours divisible par \(4\) : pour \(n=1\), il vaut \(2\).

</details>

<!-- interaction D2 | sélection multiple de points | compétence : distance -->
**D2.** Sélectionnez tous les entiers situés à une distance strictement inférieure à \(3\) du nombre \(2\).

Points proposés : \(-2,-1,0,1,2,3,4,5,6\).

<details><summary>Voir le raisonnement</summary>

**\(0,1,2,3,4\).** On cherche \(|x-2|<3\), donc \(-1<x<5\). Les points \(-1\) et \(5\) sont à une distance exactement égale à \(3\) : ils sont exclus.

</details>

<!-- interaction D3 | QCM unique | compétence : contre-exemple -->
**D3.** « Si \(x>0\), alors \(x^2>x\). » Cette affirmation est :

A. Toujours vraie.  
B. Parfois vraie, parfois fausse.  
C. Toujours fausse.  
D. Impossible à tester.

<details><summary>Voir le raisonnement</summary>

**B.** Pour \(x=2\), elle est vraie. Pour \(x=1/2\), elle est fausse : \(1/4<1/2\). Pour \(x=1\), les deux expressions sont égales. Un nombre strictement positif peut être inférieur à \(1\).

</details>

**Votre parcours :** si l'une des réponses vous surprend, commencez par les fondations correspondantes. Si vous avez répondu juste avec un raisonnement clair, passez aux défis de la séquence. Une réponse devinée mérite tout de même une vérification.

## Séquence 1 — Lire les nombres et les conditions de l'énoncé

### Une écriture n'est pas une famille de nombres

Un entier est un nombre sans partie fractionnaire : \(\ldots,-2,-1,0,1,2,\ldots\).

\(12/3\) est écrit comme une fraction, mais vaut \(4\) : c'est un entier. De même, \(\sqrt9=3\). À l'inverse, \(7/2=3{,}5\) n'est pas un entier.

| Famille | Ce qu'elle contient | Exemples |
|---|---|---|
| Naturels \(\mathbb N\), avec zéro dans cette leçon | Les entiers supérieurs ou égaux à zéro | \(0,1,12\) |
| Entiers relatifs \(\mathbb Z\) | Les entiers négatifs, zéro et les entiers positifs | \(-7,0,12\) |
| Décimaux à écriture finie | Les nombres pouvant s'écrire avec un nombre fini de chiffres après la virgule | \(-2{,}5;\ 0{,}125;\ 4\) |
| Rationnels \(\mathbb Q\) | Les quotients \(a/b\), avec \(a,b\) entiers et \(b\ne0\) | \(1/3;\ -5;\ 0{,}7\) |
| Irrationnels | Les réels qui ne sont pas rationnels | \(\sqrt2,\pi\) |
| Réels \(\mathbb R\) | Les rationnels et les irrationnels | Tous les exemples ci-dessus |

Ces familles ne sont pas des cases exclusives : \(4\) est à la fois naturel, entier, décimal, rationnel et réel. \(1/3\) est rationnel, même si son écriture décimale ne s'arrête pas. Une écriture décimale infinie périodique peut donc représenter un rationnel.

### Transformer les mots en contraintes

| L'énoncé dit… | Vous écrivez… | Le piège |
|---|---|---|
| Strictement positif | \(x>0\) | Oublier les fractions entre \(0\) et \(1\) |
| Supérieur ou égal à zéro | \(x\ge0\) | Exclure zéro |
| Non nul | \(x\ne0\) | Supposer que le nombre est positif |
| Distincts | \(a\ne b\) | Autoriser deux valeurs égales |
| Exactement un | Un seul vérifie la propriété | Confondre avec « au moins un » |
| Au moins un | Un ou plusieurs | Comprendre « exactement un » |
| Nécessairement | Pour toutes les valeurs autorisées | Valider avec un seul exemple |
| Peut être | Pour au moins un cas autorisé | Chercher une propriété universelle |
| Couple ordonné | \((a,b)\) distingue les deux positions | Fusionner \((2,3)\) et \((3,2)\) |

**Convention de signe :** pour éviter les ambiguïtés autour du mot « positif », les méthodes de ce cours emploient \(>0\), \(\ge0\), « strictement positif » ou « positif ou nul ». Zéro n'est ni strictement positif ni strictement négatif. Respectez toujours la définition ou l'inégalité donnée dans votre énoncé.

### Atelier I1 — Classez par valeur

<!-- interaction I1 | classement binaire | compétence : familles -->
Classez chaque carte dans « Entier » ou « Non entier » :

\[
\frac{12}{3},\quad \frac72,\quad -\sqrt{16},\quad 2{,}0,\quad \sqrt2,\quad 0.
\]

<details><summary>Correction et pièges</summary>

**Entiers :** \(12/3=4\), \(-\sqrt{16}=-4\), \(2{,}0=2\), \(0\).

**Non entiers :** \(7/2=3{,}5\), \(\sqrt2\).

Une fraction peut valoir un entier ; une racine aussi. La virgule de \(2{,}0\) ne change pas sa valeur. Avant de classer, simplifiez.

</details>

**À retenir :** la somme, la différence et le produit de deux entiers sont des entiers. Leur quotient ne l'est pas toujours. Deux non-entiers peuvent avoir une somme ou un produit entier : \(1/2+1/2=1\) et \((1/2)\times2=1\), mais ce dernier exemple n'a qu'un facteur non entier. Pour deux facteurs non entiers, utilisez \((3/2)\times(2/3)=1\).

## Séquence 2 — Les signes : raisonner sans calculer la valeur

### Se déplacer sur une droite

Ajouter un nombre strictement positif déplace vers la droite. Ajouter un nombre strictement négatif déplace vers la gauche. Soustraire un nombre revient à ajouter son opposé :

\[
a-(-b)=a+b.
\]

Un ascenseur part de \(-3\), monte de \(10\), puis descend de \(2\) étages : \(-3+10-2=5\).

Une température passe de \(-11\) à \(3\) : sa variation est \(3-(-11)=14\). La **variation** entre deux valeurs est « arrivée moins départ » ; leur **distance** est la valeur absolue de cette différence.

### Somme et produit : deux raisonnements différents

Pour une somme de signes opposés, comparez les valeurs absolues : \(-8+3=-5\), mais \(-3+8=5\). Sans les tailles relatives, on ne connaît pas le signe.

Pour un produit ou un quotient de deux nombres non nuls :

| Signes des facteurs | Produit ou quotient |
|---|---|
| Même signe | Strictement positif |
| Signes opposés | Strictement négatif |

Pour plusieurs facteurs non nuls, comptez les facteurs négatifs : un nombre pair donne un produit positif, un nombre impair un produit négatif.

**Premier contrôle : y a-t-il un facteur nul ?** Le produit de tous les entiers de \(-20\) à \(20\) vaut immédiatement \(0\). Il est inutile de compter les signes.

### Ce que zéro permet — et interdit

\[
a\times0=0,\qquad \frac0a=0\ (a\ne0),\qquad ab=0\iff a=0\text{ ou }b=0.
\]

La division par zéro n'est pas définie. De \(ax=ay\), on ne peut déduire \(x=y\) qu'après avoir vérifié \(a\ne0\).

Pour des réels, \(x^2\ge0\) et \(x^2=0\iff x=0\). Si une somme de carrés vaut zéro, chacun des carrés vaut zéro : ils ne peuvent pas se compenser.

### Ordre, parenthèses et puissances

Parmi les nombres négatifs, le plus proche de zéro est le plus grand : \(-2>-7\).

Multiplier ou diviser une inégalité par un nombre strictement négatif inverse son sens :

\[
a<b,\ c<0\Longrightarrow ac>bc.
\]

Le carré ne conserve pas l'ordre sur tous les réels : \(-5<-2\), mais \(25>4\). Pour \(a<b<0\), on a \(|a|>|b|\), \(a^2>b^2\) et \(1/a>1/b\).

Enfin, une puissance est calculée avant le signe moins placé devant elle :

\[
-3^2=-(3^2)=-9,\qquad (-3)^2=9.
\]

Pour un exposant entier strictement positif, une puissance paire d'un nombre négatif est positive ; une puissance impaire est négative.

### Atelier I2 — Construisez les signes

<!-- interaction I2 | tableau de signes à compléter | compétence : signes -->
On sait que \(a<b<c<0\). Sans choisir de valeurs, complétez :

| Expression | Votre réponse : négative / nulle / positive |
|---|---|
| \(a-b\) | … |
| \(b-c\) | … |
| \(a-c\) | … |
| \((a-b)(b-c)(a-c)\) | … |

<details><summary>Indice</summary>

Si le premier nombre est plus petit que le second, leur différence est négative. Le signe de \(a-b\) dépend ici de \(a<b\), pas seulement du fait qu'ils sont tous deux négatifs.

</details>

<details><summary>Correction</summary>

Les trois différences sont strictement négatives. Leur produit est donc strictement négatif : trois facteurs négatifs.

</details>

### Atelier I3 — Réparez un raisonnement

<!-- interaction I3 | choisir l'étape invalide puis un contre-exemple | compétence : signes -->
Un élève écrit : « \(a<0\) et \(b<0\). Donc \(a-b<0\), car une différence de nombres négatifs est négative. »

Quelle conclusion faut-il remplacer ? Trouvez ensuite un couple autorisé pour lequel \(a-b>0\).

<details><summary>Correction</summary>

Le signe de \(a-b\) n'est pas déterminé. Avec \(a=-2,b=-5\), on obtient \(3\). Avec \(a=-5,b=-2\), on obtient \(-3\). Avec \(a=b=-2\), on obtient \(0\).

Il faut connaître l'ordre entre \(a\) et \(b\), pas seulement leurs signes.

</details>

## Séquence 3 — La parité : remplacer les nombres par leurs propriétés

La parité concerne uniquement les entiers. Un entier pair s'écrit \(2k\), un entier impair \(2k+1\), avec \(k\in\mathbb Z\). Les négatifs ont aussi une parité. **Zéro est pair**, car \(0=2\times0\).

| Deux entiers | Somme ou différence | Produit |
|---|---|---|
| Pair et pair | Pair | Pair |
| Pair et impair | Impair | Pair |
| Impair et impair | Pair | Impair |

**Lecture dans l'autre sens :**

- Somme paire : les deux termes ont la même parité, sans être forcément pairs.
- Somme impaire : les parités sont différentes.
- Produit impair : tous les facteurs sont impairs.
- Produit pair : au moins un facteur est pair, sans être forcément le seul.

Une somme a la même parité que son **nombre de termes impairs**. Les termes pairs ne la modifient pas. Une puissance entière strictement positive conserve la parité de sa base entière.

### Repérer une structure cachée

Pour tout entier \(n\) :

\[
n^2+n=n(n+1).
\]

Les deux facteurs sont consécutifs : l'un est pair. L'expression est donc toujours paire. Même idée pour \(n^2-n=n(n-1)\).

Si \(7n+4\) est pair, alors \(n\) est pair : le facteur impair \(7\) conserve sa parité et l'ajout de \(4\) ne la change pas.

Attention : « pair » ne signifie pas « divisible par \(4\) ». Si \(a,b\) sont impairs, \(a+b\) est pair, donc \((a+b)^2\) est divisible par \(4\). En revanche, \(a+b\) lui-même peut ne pas l'être : \(1+5=6\).

### Atelier I4 — Le laboratoire de parité

<!-- interaction I4 | trois sélecteurs pair/impair | compétence : parite-composee -->
Choisissez les parités de \(a,b,c\) pour obtenir simultanément :

\[
a+b\text{ impair},\qquad b+c\text{ impair},\qquad ac\text{ impair}.
\]

<details><summary>Indice 1</summary>

Commencez par la condition sur le produit : c'est la plus restrictive.

</details>

<details><summary>Indice 2</summary>

\(ac\) impair impose que \(a\) et \(c\) soient impairs. Quelle parité doit alors avoir \(b\) ?

</details>

<details><summary>Correction</summary>

**\(a\) impair, \(b\) pair, \(c\) impair.** Les deux sommes sont impaires et le produit est impair. Il n'y a qu'une combinaison de parités compatible.

Pour un cas plus composé, factorisez : si \(ab+bc\) et \(ab+ac\) sont impairs, alors \(b(a+c)\) et \(a(b+c)\) sont impairs. On en déduit \(a,b\) impairs, puis \(c\) pair.

</details>

**Réflexe :** si seules la parité ou la possibilité d'une réponse sont demandées, évitez de calculer la valeur exacte.

## Séquence 4 — Compter les entiers : les bornes font partie du problème

### Premier autorisé, dernier autorisé, puis comptage

Entre deux entiers \(A\le B\), bornes comprises, il y a :

\[
\boxed{B-A+1}
\]

De \(-3\) à \(2\), il y a \(2-(-3)+1=6\) entiers. La différence \(5\) compte les intervalles entre les points ; il faut un point de plus.

Pour des bornes entières \(a<b\) :

| Condition | Nombre d'entiers |
|---|---|
| \(a\le x\le b\) | \(b-a+1\) |
| \(a<x<b\) | \(b-a-1\) |
| \(a\le x<b\) ou \(a<x\le b\) | \(b-a\) |

Pour des bornes décimales, repérez d'abord les entiers autorisés : \(-3{,}2<x<2{,}7\) donne \(-3\) à \(2\), donc six entiers.

**Attention aux négatifs :** le plus petit entier supérieur ou égal à \(-3{,}7\) est \(-3\), pas \(-4\). Le plus grand entier strictement inférieur à \(4\) est \(3\), pas \(4\).

### Compter avec un pas

Pour une liste \(A,A+d,\ldots,B\), avec \(d>0\) et \(B\) effectivement dans la liste :

\[
\text{nombre de termes}=\frac{B-A}{d}+1.
\]

Combien de nombres pairs de \(7\) à \(21\), inclus ? Premier pair : \(8\). Dernier pair : \(20\). Donc \((20-8)/2+1=7\).

### Entre deux carrés consécutifs

Pour un entier \(n\ge0\), entre \(n^2\) et \((n+1)^2\), strictement :

\[
(n+1)^2-n^2-1=2n.
\]

Entre \(4^2\) et \(5^2\), on compte donc \(8\) entiers. Ne comptez pas les deux carrés eux-mêmes.

### Atelier I5 — Faites bouger les bornes

<!-- interaction I5 | intervalle entier avec bornes ouvrables | compétence : bornes -->
Sélectionnez les entiers vérifiant \(-3\le x<2\), puis passez la borne droite de « exclue » à « incluse ». Qu'est-ce qui change ?

<details><summary>Correction</summary>

Au départ : \(-3,-2,-1,0,1\), soit cinq valeurs. Avec \(x\le2\), on ajoute seulement \(2\) : six valeurs. Modifier une borne ne retire ni n'ajoute systématiquement deux points.

Application : \(-7\le3x+2<8\) devient \(-9\le3x<6\), puis \(-3\le x<2\).

</details>

### Quand il faut exclure une valeur

De \(-5\) à \(5\), inclus, il y a onze entiers. Si l'on exige \(x\ne0\), il en reste dix. Retirez uniquement les valeurs exclues qui appartiennent réellement à l'intervalle.

Pour \(n^2<20\), avec \(n\) entier, les solutions vont de \(-4\) à \(4\) : neuf valeurs. La racine positive ne suffit pas à décrire les entiers autorisés.

Si « exactement un de \(n-2,n,n+3\) est strictement positif », seul le plus grand peut être positif : \(n+3>0\) et \(n\le0\). Ainsi \(-3<n\le0\), soit \(-2,-1,0\).

## Séquence 5 — Les nombres consécutifs : choisir la bonne représentation

| Situation | Représentation utile |
|---|---|
| Deux entiers consécutifs | \(n,n+1\) |
| Trois entiers consécutifs | \(m-1,m,m+1\) |
| Trois pairs ou trois impairs consécutifs | \(m-2,m,m+2\), avec la parité de \(m\) adaptée |
| Quatre entiers dont le plus grand est \(x\) | \(x-3,x-2,x-1,x\) |

« Pairs consécutifs » signifie un écart de \(2\), pas de \(1\). « Distincts » ne signifie pas « consécutifs ».

### Une somme : regardez le centre

Pour trois entiers consécutifs : \((m-1)+m+(m+1)=3m\). Si la somme vaut \(72\), le centre vaut \(24\) et le plus grand \(25\).

Pour un nombre impair de termes régulièrement espacés, la moyenne est le terme central. Pour un nombre pair d'entiers consécutifs, elle se trouve entre les deux termes centraux et est un demi-entier.

Six entiers consécutifs de somme \(81\) ont pour moyenne \(13{,}5\), donc sont \(11,12,13,14,15,16\).

Pour \(k\) entiers consécutifs commençant à \(n\) :

\[
S=kn+\frac{k(k-1)}2.
\]

La valeur obtenue pour \(n\) doit être entière. Trois entiers consécutifs ne peuvent pas avoir pour somme \(31\), car leur somme est divisible par \(3\). Six entiers consécutifs ont une somme \(6n+15\), toujours impaire : \(24\) est impossible.

### Des carrés : cherchez l'annulation

\[
(m-1)^2+m^2+(m+1)^2=3m^2+2.
\]

Si cette somme vaut \(194\), alors \(m^2=64\). Pour des entiers strictement positifs, \(m=8\), et les nombres sont \(7,8,9\). Sans la condition de signe, ne rejetez pas automatiquement \(m=-8\).

Deux identités font gagner beaucoup de calcul :

\[
(m-d)(m+d)=m^2-d^2,
\qquad b^2-a^2=(b-a)(b+a).
\]

Ainsi \(13\times15-14^2=-1\). Pour trois impairs consécutifs, le produit des extrêmes moins le carré du centre vaut \(-4\).

Si deux nombres consécutifs ont une différence de carrés égale à \(31\), leur somme vaut directement \(31\), car leur différence vaut \(1\). Si l'écart vaut \(2\), la différence des carrés vaut deux fois leur somme.

### Atelier I6 — Choisissez le raccourci avant de résoudre

<!-- interaction I6 | choix de méthode puis saisie numérique | compétence : consecutifs -->
Trois entiers strictement positifs consécutifs ont un produit égal à cinq fois leur somme. Quelle est leur somme ?

Choisissez votre départ :

A. \(m-1,m,m+1\).  
B. Trois variables indépendantes.  
C. Tester tous les triplets d'entiers.

<details><summary>Indice</summary>

Exprimez le produit et la somme en fonction du nombre central. Vous pourrez simplifier par \(m\), car il est strictement positif.

</details>

<details><summary>Correction</summary>

Le choix A expose la symétrie : \(m(m^2-1)=5(3m)\). Puisque \(m>0\), on divise par \(m\) : \(m^2-1=15\), donc \(m=4\). Les nombres sont \(3,4,5\), de somme **\(12\)**.

Avec trois variables, il faudrait ajouter deux relations de consécutivité. La méthode reste possible mais ajoute du travail.

</details>

**Produit de nombres consécutifs :** pour \(n(n+1)=90\) avec \(n>0\), cherchez les facteurs voisins autour de \(\sqrt{90}\) : \(9\times10\). Pour quatre entiers positifs de produit \(360\), essayez des voisins autour de la racine quatrième : \(3\times4\times5\times6\). Vérifiez le produit ; l'estimation sert à orienter la recherche, pas à prouver la réponse.

## Séquence 6 — Additionner beaucoup de termes sans tout additionner

### Regrouper les opposés

La somme de tous les entiers de \(-n\) à \(n\), inclus, vaut zéro : chaque terme trouve son opposé, et le zéro ne change pas la somme.

De \(-4\) à \(6\), les termes de \(-4\) à \(4\) se compensent. Il reste \(5+6=11\).

### Regrouper les voisins dans une somme alternée

\[
5-6+7-8+9-10=(5-6)+(7-8)+(9-10)=-3.
\]

Il y a trois paires valant chacune \(-1\). Si le nombre de termes est impair, un terme reste :

\[
1-2+3-4+5=(-1)+(-1)+5=3.
\]

Ne regroupez pas les termes en changeant leurs signes. Dans une somme, le signe accompagne son terme.

### Utiliser « nombre de termes × moyenne »

Pour une liste régulièrement espacée :

\[
\boxed{S=N\times\frac{\text{premier}+\text{dernier}}2}.
\]

On compte d'abord les termes. De \(1\) à \(100\), il y en a \(100\), et leur moyenne est \(50{,}5\) : somme \(5050\).

Conséquences utiles, pour un entier \(k\ge1\) :

\[
1+2+\cdots+k=\frac{k(k+1)}2,
\]

\[
1+3+\cdots+(2k-1)=k^2,
\]

\[
2+4+\cdots+2k=k(k+1).
\]

La somme des impairs de \(1\) à \(19\) contient \(10\) termes, pas \(19\). Elle vaut \(10^2=100\).

### Atelier I7 — Fabriquez les paires

<!-- interaction I7 | regroupement de termes puis réponse | compétence : regroupement -->
Regroupez les termes de \(7-8+9-10+11-12+13\) pour faire apparaître des paires de valeur constante. Donnez ensuite le résultat.

<details><summary>Correction</summary>

\((7-8)+(9-10)+(11-12)+13=-3+13=10\). Le dernier \(13\) n'a pas de partenaire. Le regroupement doit conserver tous les termes et leurs signes.

</details>

## Séquence 7 — Les nombres premiers : utiliser les exceptions

Un nombre premier est un entier strictement supérieur à \(1\) ayant exactement deux diviseurs positifs distincts : \(1\) et lui-même.

\[
2,3,5,7,11,13,17,19,23,29,31,37,41,43,47
\]

**\(1\) n'est pas premier. \(2\) est le seul nombre premier pair.** Un nombre impair peut être composé : \(9=3\times3\). Un nombre composé est ici un entier supérieur à \(1\) qui n'est pas premier ; ni \(0\) ni \(1\) n'est composé.

### Tester un candidat sans tout essayer

Il suffit de tester les diviseurs premiers inférieurs ou égaux à sa racine carrée. Pour \(47\), \(\sqrt{47}<7\) : on teste \(2,3,5\). Aucun ne le divise, donc il est premier.

Pourquoi ? Si \(N=ab\) avec \(a,b>1\), les deux facteurs ne peuvent pas être strictement supérieurs à \(\sqrt N\), sinon leur produit dépasserait \(N\).

Pour ces tests, rappelez-vous : divisible par \(2\) si le chiffre des unités est pair ; par \(3\) si la somme des chiffres est divisible par \(3\) ; par \(5\) si le dernier chiffre est \(0\) ou \(5\). Exemple : \(51\) est divisible par \(3\), car \(5+1=6\).

### Reconnaître les scénarios

**Deux premiers de somme impaire.** L'un est pair, donc vaut \(2\). Si la somme vaut \(19\), l'autre vaut \(17\), et le produit \(34\). Vérifiez que le second est bien premier : toute somme impaire ne permet pas forcément un tel couple.

**Deux premiers d'écart \(1\).** Ils sont nécessairement \(2\) et \(3\). Deux premiers supérieurs à \(2\) sont impairs, donc ont une différence paire.

**Un produit de deux premiers.** Pour \(143\), cherchez une factorisation : \(11\times13\). Un premier qui divise \(18\) vaut \(2\) ou \(3\), pas \(6\).

**Trois premiers \(p,p+2,p+4\).** Parmi eux, l'un est divisible par \(3\). Pour rester premier, ce terme doit être \(3\). Le seul triplet est \(3,5,7\).

**Un premier supérieur à \(3\).** Il est de la forme \(6k-1\) ou \(6k+1\) : les autres positions sont divisibles par \(2\) ou \(3\). La réciproque est fausse : \(25=6\times4+1\) n'est pas premier.

**Compter des couples.** Pour \(p+q=50\) avec \(p<q\) premiers, testez \(p<25\) et vérifiez \(50-p\). Les couples sont \((3,47),(7,43),(13,37),(19,31)\). La condition \(p<q\) évite de compter deux fois le même couple.

### Atelier I8 — Trouvez l'exception qui débloque la question

<!-- interaction I8 | QCM de méthode puis réponse numérique | compétence : premiers -->
Deux nombres premiers ont une somme égale à \(19\). Quelle observation permet de commencer ?

A. Les deux nombres sont nécessairement impairs.  
B. Au moins l'un est pair ; il vaut donc \(2\).  
C. Tous les nombres impairs sont premiers.  
D. Leur produit est nécessairement pair, donc les deux sont pairs.

Calculez ensuite leur produit.

<details><summary>Correction</summary>

**B, puis \(34\).** Une somme impaire impose des parités différentes. Le premier pair est \(2\), l'autre \(17\). Le produit est pair, mais cela ne signifie pas que ses deux facteurs sont pairs.

</details>

## Séquence 8 — Opposé et inverse : traduire en équations

| Notion | Écriture | Propriété qui définit la relation |
|---|---|---|
| Opposé de \(a\) | \(-a\) | \(a+(-a)=0\) |
| Inverse de \(a\ne0\) | \(1/a\) | \(a(1/a)=1\) |

L'opposé de \(-2/7\) est \(2/7\). Son inverse est \(-7/2\). L'inverse conserve le signe ; l'opposé d'un nombre non nul le change.

Zéro est son propre opposé et n'a pas d'inverse. Les seuls réels égaux à leur inverse sont \(1\) et \(-1\), car \(x=1/x\) implique \(x^2=1\).

### Attention à la portée d'une opération

\[
-(a+b)=-a-b,\qquad \text{mais généralement }\frac1{a+b}\ne\frac1a+\frac1b.
\]

L'inverse de l'opposé de \(4\) est \(-1/4\). Deux prises successives de l'opposé redonnent le nombre ; deux prises successives de l'inverse aussi, pour un nombre non nul.

### Exploiter une relation au lieu de chercher les deux nombres

**Opposés :** écrivez \(y=-x\). Si \(x-y=-22\), alors \(2x=-22\), donc \(x=-11\).

Si \(x,y\) sont opposés et \(x>0\), avec \(x^2+y^2=50\), alors \(2x^2=50\), d'où \(x=5\).

**Inverses :** écrivez \(xy=1\). Si \(x+y=s\), alors :

\[
x^2+y^2=(x+y)^2-2xy=s^2-2,
\]

\[
(x-y)^2=(x+y)^2-4xy=s^2-4,
\]

\[
x^3+y^3=(x+y)^3-3xy(x+y)=s^3-3s.
\]

Ces identités viennent du développement des parenthèses. Elles permettent de répondre sans calculer \(x\) et \(y\).

Avec \(xy=1\) et \(x+y=3\), \(x^3+y^3=27-9=18\). Avec \(x,y>0\) et \(|x-y|=3/2\), on a \((x+y)^2=9/4+4=25/4\), puis \(x+y=5/2\), car la somme est positive.

**Une expression qui devient constante :** si \(x,y\) sont opposés, alors \((x+5)(y+5)+x^2=(x+5)(5-x)+x^2=25\). La valeur de \(x\) disparaît. Chercher sa valeur précise serait inutile.

**Combiner plusieurs contraintes :** si \(xyz=0\), \(x+y+z=0\) et \(x^2+y^2+z^2=18\), l'un des nombres est nul. Les deux autres ne peuvent pas être nuls, sinon la somme des carrés vaudrait zéro. Ils sont donc opposés, \(t,-t\), avec \(2t^2=18\). Leur produit vaut \(-t^2=-9\). On a utilisé successivement le produit, la somme, puis les carrés.

Ne supprimez pas l'hypothèse de signe : connaître un carré donne en général deux racines opposées.

### Atelier I9 — Traduisez avant de calculer

<!-- interaction I9 | association puis calcul | compétence : opposes-inverses -->
Associez « \(x,y\) opposés » et « \(x,y\) inverses » à la bonne relation : \(x+y=0\) ou \(xy=1\).

Puis résolvez : \(x,y\) sont inverses et \(x+y=10/3\). Que vaut \(x^2+y^2\) ?

<details><summary>Correction</summary>

Opposés : \(x+y=0\). Inverses : \(xy=1\). Donc \(x^2+y^2=100/9-2=82/9\). La réponse \(100/9\) oublie le terme \(2xy\) du carré d'une somme.

</details>

## Séquence 9 — Les valeurs absolues : voir les distances

### La définition qui évite les règles apprises à moitié

\(|x|\) est la distance de \(x\) à zéro. Elle est toujours positive ou nulle :

\[
|x|=\begin{cases}x&\text{si }x\ge0,\\-x&\text{si }x<0.\end{cases}
\]

Ainsi \(|-7|=7\). Si \(a<0\), \(|a|=-a\). Écrire \(-a\) ne signifie pas que le résultat est négatif : le signe dépend de \(a\).

\(|x-a|\) est la distance entre \(x\) et \(a\), et \(|x-a|=|a-x|\).

### Une distance imposée

Pour \(r>0\) :

\[
|x-a|=r\iff x=a-r\text{ ou }x=a+r.
\]

Si \(r=0\), il n'y a qu'une solution, \(x=a\). Si \(r<0\), il n'y en a aucune.

\(|x-5|=4\) a pour solutions \(1\) et \(9\). Leur somme vaut \(10=2\times5\) : elles sont symétriques autour de \(5\).

Pour \(|2x-1|=5\), résolvez \(2x-1=5\) **ou** \(2x-1=-5\). Solutions : \(3\) et \(-2\), de produit \(-6\).

### Une distance bornée

Pour \(r>0\) :

| Condition | Position de \(x\) |
|---|---|
| \(|x-a|<r\) | \(a-r<x<a+r\) |
| \(|x-a|\le r\) | \(a-r\le x\le a+r\) |
| \(|x-a|>r\) | \(x<a-r\) **ou** \(x>a+r\) |
| \(|x-a|\ge r\) | \(x\le a-r\) **ou** \(x\ge a+r\) |

Si deux conditions doivent être satisfaites **simultanément**, prenez leur intersection. Par exemple, \(|x|\le5\) et \(|x-5|\le5\) donnent les intervalles \([-5,5]\) et \([0,10]\). Leur intersection est \([0,5]\), contenant six entiers.

Pour \(2\le|x+1|<5\), les distances entières possibles à \(-1\) sont \(2,3,4\). Chaque distance donne deux points, soit six entiers : \(-5,-4,-3,1,2,3\).

### Deux expressions ont la même valeur absolue

Pour des réels \(A,B\) :

\[
|A|=|B|\iff A=B\text{ ou }A=-B.
\]

\(|x-2|=|2x+1|\) donne \(x=-3\) ou \(x=1/3\), de somme \(-8/3\).

Cas géométrique : si \(a\ne b\), \(|x-a|=|x-b|\) signifie que \(x\) est au milieu de \(a\) et \(b\), donc \(x=(a+b)/2\). Si \(a=b\), tous les réels conviennent : il faut distinguer ce cas.

### Attention aux sommes et aux valeurs absolues imbriquées

En général, \(|a+b|\ne|a|+|b|\). Prenez \(a=6,b=-2\) : \(4\ne8\).

Si \(|a|=6\), \(|b|=2\), alors \(a+b\) peut valoir \(8,4,-4,-8\), mais \(|a+b|\) ne peut valoir que \(8\) ou \(4\).

Avec plusieurs barres imbriquées, travaillez de l'intérieur vers l'extérieur :

\[
|4-|-11||=|4-11|=7.
\]

### Deux distances : le segment central et ce qui dépasse

Pour \(a<b\), la somme \(|x-a|+|x-b|\) vaut au minimum \(b-a\), pour **tous** les \(x\) de \([a,b]\).

Entre les deux points, les distances se complètent. À l'extérieur, chaque unité d'éloignement ajoute deux unités à leur somme.

Exemple : \(|x|+|x-7|<11\). Le segment central donne une somme de \(7\). Le supplément autorisé est strictement inférieur à \(4\), donc on peut s'éloigner de moins de \(2\) de chaque côté :

\[
-2<x<9.
\]

Les entiers vont de \(-1\) à \(8\) : dix valeurs.

### Trois distances : le point du milieu

Pour \(a<b<c\), \(|x-a|+|x-b|+|x-c|\) est minimale en \(x=b\) et vaut \(c-a\).

En effet, les distances aux extrêmes ont une somme au moins égale à \(c-a\). Le choix \(x=b\) atteint cette valeur et annule en plus la distance au point central.

Pour \(4,8,15\), le minimum vaut \(11\), atteint en \(8\). Il faut prendre la **médiane**, pas la moyenne des trois nombres.

### Atelier I10 — Déplacez le point, observez le coût

<!-- interaction I10 | droite numérique à point mobile | compétence : somme-distances -->
Placez \(x\) sur une droite portant les repères \(1\) et \(5\). Observez \(|x-1|\), \(|x-5|\) et leur somme.

Avant d'afficher le résultat, prédisez : combien d'entiers vérifient \(|x-1|+|x-5|=4\) ?

<details><summary>Correction</summary>

Tous les réels entre \(1\) et \(5\), inclus, conviennent. Les entiers sont \(1,2,3,4,5\) : **cinq**. Il ne faut pas retenir uniquement les deux extrémités.

À gauche, pour \(x=0\), la somme vaut \(1+5=6\). À droite, pour \(x=6\), elle vaut aussi \(6\).

</details>

**Défi de transfert :** ajoutez le repère \(9\). Pour minimiser \(|x-1|+|x-5|+|x-9|\), choisissez \(x=5\), et le minimum vaut \(8\).

## Séquence 10 — Les chiffres : compter les symboles, pas seulement les nombres

Un **nombre** représente une valeur ; un **chiffre** est un symbole de son écriture. Le nombre \(202\) comporte trois chiffres, dont deux chiffres \(2\).

En écriture décimale usuelle, un entier strictement positif a \(d\) chiffres lorsque :

\[
10^{d-1}\le n<10^d.
\]

Zéro s'écrit avec un chiffre. Le signe moins d'un entier négatif n'est pas un chiffre. Un nombre à deux chiffres ne commence pas par zéro.

Un nombre à deux chiffres dont les chiffres sont \(a\) et \(b\) vaut \(10a+b\). En inversant les chiffres, il devient \(10b+a\) ; la différence est \(9(a-b)\). Pour trois chiffres, utilisez \(100a+10b+c\).

### Écrire une suite de nombres

Combien de chiffres faut-il pour écrire tous les entiers de \(1\) à \(120\), sans espace ? Séparez aux changements de longueur :

| Bloc | Nombre d'entiers | Chiffres par entier | Total |
|---|---:|---:|---:|
| \(1\) à \(9\) | \(9\) | \(1\) | \(9\) |
| \(10\) à \(99\) | \(90\) | \(2\) | \(180\) |
| \(100\) à \(120\) | \(21\) | \(3\) | \(63\) |

Total : \(252\) chiffres. Compter les occurrences d'un chiffre particulier serait une autre question : ici on compte tous les symboles numériques écrits.

### Atelier I11 — Repérez le changement de bloc

<!-- interaction I11 | tableau à compléter | compétence : chiffres -->
On écrit les entiers de \(1\) à \(25\). Complétez le nombre d'entiers et le nombre de chiffres pour les blocs \(1\)–\(9\) et \(10\)–\(25\).

<details><summary>Correction</summary>

Premier bloc : neuf entiers, neuf chiffres. Second bloc : \(25-10+1=16\) entiers, \(32\) chiffres. Total : **\(41\)**. La réponse \(39\) oublie un entier dans le second bloc ; \(50\) attribue deux chiffres à tous les nombres.

</details>

## Atelier avancé A — Rendre un quotient entier

**Signal à reconnaître :** on demande pour combien d'entiers une fraction contenant une variable est entière.

Pour \(n\ne3\) :

\[
\frac{n+9}{n-3}=\frac{(n-3)+12}{n-3}=1+\frac{12}{n-3}.
\]

Comme \(n\) est entier, \(n-3\) est un entier non nul. Le quotient est entier exactement lorsque \(n-3\) divise \(12\).

Les diviseurs entiers non nuls de \(12\) sont \(\pm1,\pm2,\pm3,\pm4,\pm6,\pm12\). Il y a douze possibilités, chacune donnant une valeur distincte de \(n\).

**Pièges :** oublier les diviseurs négatifs, admettre le dénominateur nul ou ne pas filtrer selon une contrainte supplémentaire sur \(n\). Si \(n>3\), seuls les six diviseurs positifs conviennent. Si \(n\) est seulement strictement positif, certains diviseurs négatifs peuvent encore convenir : testez \(n=d+3\).

Le cas où le reste obtenu après réécriture vaut zéro est différent : le quotient peut alors être entier pour tous les entiers du domaine. Ne cherchez pas une liste finie de diviseurs de zéro.

## Atelier avancé B — Optimiser en respectant les contraintes

**Deux entiers strictement positifs de somme fixée :** leur produit est maximal lorsqu'ils sont aussi proches que possible.

Pour \(a+b=S\) :

\[
ab=\frac{S^2-(a-b)^2}{4}.
\]

À somme constante, diminuer l'écart augmente donc le produit. Pour \(S=9\), on prend \(4,5\) : produit \(20\). Pour \(S=10\), on prend \(5,5\) : produit \(25\). Si les entiers doivent être distincts, \(5,5\) est interdit ; on prend \(4,6\), produit \(24\).

Pour minimiser \(|a^2-b^2|\) à somme strictement positive fixée, utilisez \(|a^2-b^2|=S|a-b|\). Avec une somme impaire, l'écart minimal entre deux entiers est \(1\). Avec une somme paire, il vaut \(0\), ou \(2\) si les entiers doivent être distincts et que le domaine autorise le couple correspondant.

**Trois facteurs strictement positifs :** rapprocher des facteurs trop éloignés aide aussi à augmenter le produit. Pour deux facteurs \(a<b-1\), remplacer \(a,b\) par \(a+1,b-1\) augmente leur produit de \(b-a-1>0\), sans changer la somme.

Avec trois entiers distincts de somme \(18\), le candidat équilibré \(5,6,7\) donne \(210\). Pour le vérifier, ordonnez \(a<b<c\), donc \(a\le5\). Si \(a\le4\), alors \(abc\le a(18-a)^2/4\le196\) ; pour \(a=5\), \(b+c=13\) et \(5<b<c\) imposent \(b=6,c=7\). Le maximum est donc bien \(210\).

La règle d'équilibrage doit toujours respecter « entier », « distinct » et les bornes. Une moyenne sert à construire un candidat ; elle ne dispense pas de vérifier qu'il est autorisé.

### Atelier I12 — Faites varier l'écart

<!-- interaction I12 | curseur entier à somme constante | compétence : optimisation -->
Deux entiers strictement positifs ont pour somme \(10\). Faites varier \(a\) de \(1\) à \(9\) ; \(b=10-a\). Prédisez d'abord le maximum du produit.

Activez ensuite la contrainte « distincts ». Quelle réponse doit changer ?

<details><summary>Correction</summary>

Sans la contrainte : \(5\times5=25\). Avec la contrainte : \(4\times6=24\). Un résultat optimal mais interdit ne répond pas à la question.

</details>

## Atelier avancé C — Compter des couples sans en oublier

### Fixer une variable et compter l'autre

Combien de couples ordonnés d'entiers strictement positifs vérifient \(x+y\le7\) ?

| \(x\) | Valeurs autorisées pour \(y\) | Nombre |
|---|---|---:|
| \(1\) | \(1\) à \(6\) | \(6\) |
| \(2\) | \(1\) à \(5\) | \(5\) |
| \(3\) | \(1\) à \(4\) | \(4\) |
| \(4\) | \(1\) à \(3\) | \(3\) |
| \(5\) | \(1,2\) | \(2\) |
| \(6\) | \(1\) | \(1\) |

Total : \(6+5+4+3+2+1=21\). Pour \(x+y\le N\), avec \(N\ge2\) entier, le total est \(N(N-1)/2\). Si zéro est autorisé, le résultat change : reconstruisez les bornes au lieu de réutiliser aveuglément la formule.

### Compter les signes avec une valeur absolue

Pour \(|x|+2|y|=6\), les possibilités pour \(|y|\) sont \(0,1,2,3\).

| \(|y|\) | \(|x|\) | Nombre de couples signés |
|---:|---:|---:|
| \(0\) | \(6\) | \(2\) |
| \(1\) | \(4\) | \(4\) |
| \(2\) | \(2\) | \(4\) |
| \(3\) | \(0\) | \(2\) |

Total : **\(12\)**. Un nombre de valeur absolue strictement positive offre deux signes ; zéro n'offre qu'une seule valeur. Pour \(|x|+|y|=m\), avec \(m\) entier strictement positif, on obtient \(4m\) couples ; pour \(m=0\), un seul couple.

### Factoriser une somme d'inverses

Pour \(a,b\) entiers strictement positifs :

\[
\frac1a+\frac1b=\frac13
\Longleftrightarrow ab-3a-3b=0
\Longleftrightarrow(a-3)(b-3)=9.
\]

Comme \(1/a<1/3\) et \(1/b<1/3\), on a \(a>3,b>3\). Les facteurs sont donc strictement positifs.

Les couples de facteurs de \(9\) sont \((1,9),(3,3),(9,1)\), donnant \((a,b)=(4,12),(6,6),(12,4)\). Il y a trois **couples ordonnés**. Si l'on impose \(a<b\), il n'en reste qu'un.

### Atelier I13 — Comptez avant de révéler les points

<!-- interaction I13 | grille de couples + saisie | compétence : couples -->
Combien de couples ordonnés d'entiers strictement positifs vérifient \(x+y\le5\) ? Complétez d'abord les nombres de possibilités par ligne, puis affichez les points.

<details><summary>Correction</summary>

Pour \(x=1,2,3,4\), il y a \(4,3,2,1\) choix de \(y\). Total : **\(10\)**. Les points des axes sont exclus, car les deux entiers doivent être strictement positifs. \((1,2)\) et \((2,1)\) sont deux couples différents.

</details>

## Atelier avancé D — Carrés parfaits et divisibilité

Un carré parfait entier est le carré d'un entier : \(0,1,4,9,16,\ldots\).

Pour trouver le plus petit entier strictement positif \(n\) tel que \(n^2>30\), encadrez : \(5^2=25<30<36=6^2\). La réponse est \(6\). Si la borne était \(36\), la condition stricte imposerait \(n=7\).

Si le carré doit aussi être divisible par un nombre donné, vérifiez **les deux contraintes**. Le plus petit carré strictement supérieur à \(30\) divisible par \(4\) est \(36\), car sa racine \(6\) est paire.

Pour un premier \(p\), si \(p\) divise \(n^2\), il divise \(n\). Mais avec un diviseur composé, on ne peut pas reprendre cette phrase sans précaution : \(12\) divise \(6^2=36\), alors que \(12\) ne divise pas \(6\). La décomposition en facteurs premiers, étudiée au chapitre Divisibilité, permet de traiter le cas général.

## La boîte à outils — Reconnaître le scénario avant de se lancer

| Ce que vous voyez | Première question à vous poser | Méthode |
|---|---|---|
| Produit de nombreux nombres | Y a-t-il zéro ? | Sinon compter les facteurs négatifs ou chercher un facteur pair |
| « Nécessairement vrai » | Quel cas limite pourrait invalider la réponse ? | Contre-exemple autorisé ou preuve générale |
| Trois ou cinq consécutifs | Quel est le terme central ? | Moyenne et symétrie |
| Différence de carrés | Connaît-on l'écart ou la somme ? | \((b-a)(b+a)\) |
| Entiers dans un intervalle | Quels sont le premier et le dernier autorisés ? | Différence + 1, avec le pas adapté |
| Longue somme | Quels termes se compensent ou se regroupent ? | Opposés, paires, nombre × moyenne |
| Deux premiers de somme impaire | Le premier pair doit-il apparaître ? | Tester \(2\), puis la primalité de l'autre |
| Inverses et somme connue | Ai-je vraiment besoin de trouver les deux nombres ? | \(xy=1\), identités sur les carrés ou cubes |
| Valeur absolue | Quelle distance représente-t-elle ? | Droite, symétrie, intervalle |
| Minimum d'une somme de distances | Deux points ou trois points ? | Segment entre deux points ; médiane pour trois |
| Quotient entier | Puis-je isoler un entier et une fraction ? | Réécriture, diviseurs et filtre du domaine |
| Produit maximal à somme fixe | Peut-on rapprocher les facteurs ? | Équilibrage sous contraintes |
| Nombre de chiffres écrits | Où change la longueur des nombres ? | Blocs 1–9, 10–99, 100–999… |
| Couples entiers | Puis-je fixer une variable ? | Tableau, décompte des signes et de l'ordre |

### Atelier I14 — Le chasseur de contre-exemples

<!-- interaction I14 | saisie de contre-exemples | compétence : logique -->
Pour chaque affirmation fausse, fournissez un cas autorisé qui la contredit :

1. « Si \(x>0\), alors \(x^2>x\). »
2. « Si \(ab\) est pair, alors \(a\) et \(b\) sont pairs », avec \(a,b\) entiers.
3. « Si \(p=6k+1\), avec \(k\) entier strictement positif, alors \(p\) est premier. »

<details><summary>Exemples de réponses</summary>

1. \(x=1/2\), ou \(x=1\) pour contredire l'inégalité stricte.
2. \(a=2,b=3\) ; le produit est pair et un facteur est impair.
3. \(k=4\), donc \(p=25\), qui vaut \(5\times5\).

Choisir une valeur interdite ne contredit pas une affirmation. Et trouver dix exemples qui fonctionnent ne démontre pas qu'elle fonctionne toujours.

</details>

### Utiliser les réponses proposées

Les choix peuvent aider à tester un candidat, éliminer une mauvaise parité ou encadrer une valeur. Si l'on cherche le plus grand de trois entiers consécutifs de somme \(72\), tester \(25\) donne \(23+24+25=72\).

Mais pour une question « nécessairement vraie », tester une seule valeur ne prouve rien. Distinguez **vérifier un candidat qui répond à une équation** et **démontrer une propriété pour tous les cas**.

Si une piste n'avance plus, revenez aux contraintes, essayez une autre représentation ou passez provisoirement à la question suivante. Le chronomètre doit vous aider à repérer les méthodes coûteuses, pas vous pousser à calculer avant d'avoir lu.

## Mission finale — Choisir, résoudre, vérifier

Pour chaque question, choisissez une réponse et indiquez votre confiance. À partir de la question 9, nommez d'abord la méthode que vous comptez utiliser : parité, symétrie, intervalle, factorisation, comptage ou autre.

Le premier passage se fait sans aide. Vous pourrez consulter les indices et reprendre les notions après le bilan. Les questions 13 à 16 constituent le défi avancé.

### F1 — Une écriture trompeuse

Quel nombre n'est pas un entier ?

A. \(\sqrt{36}\)  
B. \(-15/3\)  
C. \(11/4\)  
D. \(0\)

### F2 — Signe et ordre

Si \(a<b<0\), quelle relation est nécessairement vraie ?

A. \(|a|<|b|\)  
B. \(a/b>1\)  
C. \(a-b>0\)  
D. \(a+b>0\)

### F3 — Le produit ne dit pas tout

Le produit de deux entiers est pair. Que peut-on affirmer ?

A. Les deux entiers sont pairs.  
B. Exactement un est pair.  
C. Au moins un est pair.  
D. Leur somme est paire.

### F4 — Le centre de la liste

Cinq entiers consécutifs ont une somme de \(-15\). Quel est le plus grand ?

A. \(-5\)  
B. \(-3\)  
C. \(-1\)  
D. \(1\)

### F5 — Une borne à exclure

Combien d'entiers \(x\) vérifient \(-2<2x+1\le7\) ?

A. \(4\)  
B. \(5\)  
C. \(6\)  
D. \(7\)

### F6 — L'exception première

Deux nombres premiers ont pour somme \(21\). Quel est leur produit ?

A. \(38\)  
B. \(40\)  
C. \(42\)  
D. Aucun couple ne convient.

### F7 — Deux opérations successives

Quel est l'inverse de l'opposé de \(-3/5\) ?

A. \(-5/3\)  
B. \(3/5\)  
C. \(5/3\)  
D. \(-3/5\)

### F8 — Compter les chiffres

On écrit les entiers de \(1\) à \(32\), sans espace. Combien de chiffres écrit-on ?

A. \(32\)  
B. \(53\)  
C. \(55\)  
D. \(64\)

### F9 — Deux contraintes simultanées

Combien d'entiers vérifient à la fois \(|x|\le4\) et \(|x-4|\le4\) ?

A. \(4\)  
B. \(5\)  
C. \(9\)  
D. \(13\)

### F10 — Le produit des voisins

Que vaut \(24\times26-25^2\) ?

A. \(-1\)  
B. \(0\)  
C. \(1\)  
D. \(25\)

### F11 — Un produit maximal sous contrainte

Deux entiers strictement positifs distincts ont pour somme \(12\). Quel est leur produit maximal ?

A. \(32\)  
B. \(35\)  
C. \(36\)  
D. \(48\)

### F12 — Une somme de distances

Quelle est la plus petite valeur de \(|x-2|+|x-6|+|x-13|\), pour \(x\) réel ?

A. \(7\)  
B. \(9\)  
C. \(11\)  
D. \(13\)

### F13 — Un quotient entier

Pour combien d'entiers \(n\ne2\), le nombre \((n+8)/(n-2)\) est-il entier ?

A. \(4\)  
B. \(6\)  
C. \(8\)  
D. \(10\)

### F14 — Compter des positions

Combien de couples ordonnés d'entiers strictement positifs vérifient \(x+y\le6\) ?

A. \(10\)  
B. \(12\)  
C. \(15\)  
D. \(21\)

### F15 — Ne cherchez pas les deux nombres

\(x\) et \(y\) sont inverses, et \(x+y=4\). Que vaut \(x^3+y^3\) ?

A. \(16\)  
B. \(52\)  
C. \(60\)  
D. \(64\)

### F16 — Le signe de zéro

Combien de couples ordonnés d'entiers \((x,y)\) vérifient \(|x|+2|y|=4\) ?

A. \(6\)  
B. \(8\)  
C. \(10\)  
D. \(12\)

<details><summary>Corrigé de la mission finale — à ouvrir après votre tentative</summary>

| Question | Réponse | Raisonnement |
|---|---|---|
| F1 | C | \(11/4=2{,}75\). Les autres valent \(6,-5,0\). |
| F2 | B | \(a,b\) négatifs donnent un quotient positif, et \(|a|>|b|\), donc \(a/b>1\). |
| F3 | C | Deux facteurs impairs donneraient un produit impair. Un ou deux facteurs pairs conviennent. |
| F4 | C | Centre \(-15/5=-3\), liste \(-5,-4,-3,-2,-1\). |
| F5 | B | \(-3<2x\le6\), donc \(-1{,}5<x\le3\) : \(-1,0,1,2,3\). |
| F6 | A | Somme impaire : \(2\) et \(19\), produit \(38\). |
| F7 | C | Opposé : \(3/5\). Puis inverse : \(5/3\). |
| F8 | C | Neuf chiffres pour 1–9 ; \(32-10+1=23\) nombres à deux chiffres : \(9+46=55\). |
| F9 | B | Intersection de \([-4,4]\) et \([0,8]\) : \([0,4]\), cinq entiers. |
| F10 | A | \((25-1)(25+1)-25^2=-1\). |
| F11 | B | \(6,6\) est interdit. Le couple autorisé le plus proche est \(5,7\), produit \(35\). |
| F12 | C | La médiane est \(6\). Le minimum vaut \(13-2=11\). |
| F13 | C | \(1+10/(n-2)\). Diviseurs de \(10\) : \(\pm1,\pm2,\pm5,\pm10\), huit valeurs. |
| F14 | C | Pour \(x=1\) à \(5\), respectivement \(5,4,3,2,1\) choix : total \(15\). |
| F15 | B | \(xy=1\), donc \((x+y)^3-3xy(x+y)=64-12=52\). |
| F16 | B | Pour \(|y|=0,1,2\), on obtient \(2,4,2\) couples, soit \(8\). |

</details>

## Votre bilan — Ce que votre réponse révèle

Une erreur signale une règle à clarifier ou une contrainte à mieux lire. Choisissez la formulation qui correspond à votre difficulté :

- **« Je connais les règles mais je ne reconnais pas la méthode. »** Reprenez la boîte à outils, puis choisissez une méthode avant chaque calcul.
- **« Je me trompe aux bornes ou dans le nombre de possibilités. »** Repérez d'abord le premier et le dernier cas autorisés ; construisez une petite liste témoin.
- **« Je réussis avec des nombres, mais les lettres me bloquent. »** Traduisez les mots en relations, puis testez un exemple pour comprendre. Revenez ensuite à un raisonnement général.
- **« Je réponds vite mais j'oublie une contrainte. »** Avant de valider, contrôlez : entier ? non nul ? distinct ? borne incluse ? ordre du couple ?
- **« J'ai trouvé la bonne réponse en devinant. »** Refaites une variante et expliquez pourquoi les autres réponses ne conviennent pas.

Une notion est consolidée lorsque vous savez **reconnaître la situation, expliquer votre choix et réussir une variante sans aide**.

## Votre fiche de révision

| À reconnaître | À rappeler |
|---|---|
| Entier | Simplifier sa valeur ; une fraction ou une racine peut être entière |
| Zéro | Pair ; annule un produit ; n'a pas d'inverse |
| Signe d'un produit non nul | Pair de facteurs négatifs → positif ; impair → négatif |
| Produit pair / impair | Au moins un facteur pair / tous les facteurs impairs |
| Somme d'entiers | Sa parité dépend du nombre de termes impairs |
| Trois consécutifs | \(m-1,m,m+1\), somme \(3m\) |
| Écart régulier \(d\) | Nombre de termes \((B-A)/d+1\), si les extrêmes appartiennent à la liste |
| Somme régulière | Nombre de termes × moyenne des extrêmes |
| Opposés / inverses | Somme \(0\) / produit \(1\) |
| Carré d'une somme | \((a+b)^2=a^2+2ab+b^2\) |
| Différence de carrés | \(b^2-a^2=(b-a)(b+a)\) |
| Produit symétrique | \((m-d)(m+d)=m^2-d^2\) |
| Premier | Entier \(>1\), exactement deux diviseurs positifs ; seul premier pair : \(2\) |
| Valeur absolue | Distance ; \(|x-a|=r>0\) donne \(a-r,a+r\) |
| Deux distances | Minimum = distance entre les deux repères, sur tout le segment |
| Trois distances | Minimum au repère central, égal à l'écart entre les extrêmes |
| Quotient entier | Isoler un entier + un reste/dénominateur, puis chercher les diviseurs |
| Couples | Fixer une variable ; distinguer les positions ; zéro n'a qu'un signe |

**Prochaine étape : la divisibilité.** Vous approfondirez les multiples, les diviseurs et la décomposition en facteurs premiers. Gardez la fiche à portée de main ; revenez surtout sur les règles qui ont changé votre réponse aujourd'hui.

