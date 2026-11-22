# Puissances et racines : reconnaître la structure sans développer

Comparer de grandes puissances ne demande pas toujours de calculer leur valeur. Simplifier une racine ne demande pas une approximation. Dans les deux cas, il faut reconnaître la structure : même base, carré parfait, inverse ou facteurs conjugués.

**Votre objectif :** manipuler ces écritures en conservant leur domaine, leur signe et leur valeur exacte. Les règles sont courtes ; savoir quand elles sont autorisées fait toute la différence.

## Avant de commencer — Trois pièges à repérer

Répondez avec votre confiance et une justification courte.

<!-- interaction D1 | QCM unique + confiance | compétence : signe-parentheses -->
**D1.** Que vaut \(-3^2+(-3)^2\) ?

A. \(-18\) · B. \(18\) · C. \(0\) · D. \(-6\).

<details><summary>Raisonnement</summary>

**C.** Dans le premier terme, la puissance porte sur trois, puis on prend l’opposé : moins neuf. Dans le second, la base est moins trois : son carré vaut neuf. La somme est nulle.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : racine-carre -->
**D2.** Pour x=−5, que vaut \(\sqrt{x^2}\) ?

A. \(-5\) · B. \(25\) · C. \(\pm5\) · D. \(5\).

<details><summary>Raisonnement</summary>

**D.** La racine carrée principale est non négative : \(\sqrt{25}=5\). La formule générale est \(\sqrt{x^2}=|x|\).

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : somme-puissances -->
**D3.** Que vaut \(2^5+2^5\) ?

A. \(2^{10}\) · B. \(2^6\) · C. \(4^{10}\) · D. \(2^{25}\).

<details><summary>Raisonnement</summary>

**B.** On additionne deux copies du même nombre : \(2\times2^5=2^6\). Ajouter des exposants est une règle de produit, pas une règle d’addition.

</details>

D1 invite à S1 ; D2 à S6–S8 ; D3 à S2–S4. Les grands nombres sont souvent un signal pour changer l’écriture, pas pour allonger le calcul.

## Séquence 1 — Base, exposant et parenthèses

Pour un entier n≥1, \(a^n\) est le produit de n facteurs égaux à a. \(a^1=a\). L’exposant n’est pas un facteur multiplicatif : \(3^4=81\), pas douze.

Une base négative élevée à une puissance entière paire donne un résultat strictement positif ; avec une puissance impaire, il est négatif. Une puissance paire de zéro vaut zéro : ne généralisez pas « paire donc strictement positive » à la base nulle.

\[
(-2)^4=16,\qquad(-2)^3=-8,\qquad-2^4=-16.
\]

Les parenthèses indiquent si le signe fait partie de la base. Elles distinguent aussi \((ab)^n\) de \(ab^n\).

Une tour de puissances sans parenthèses se lit usuellement depuis le haut : \(2^{3^2}=2^9\), différent de \((2^3)^2=2^6\). Dans ce cours, nous affichons les parenthèses nécessaires plutôt que de laisser l’écriture ambiguë.

### Atelier I1 — Surlignez la base avant de calculer

<!-- interaction I1 | identification de base puis calcul | compétence : signe-parentheses -->
Calculez \((-4)^2\), \(-4^2\), \((-4)^3\) et \(-(4^3)\). Quelles expressions ont la même valeur ?

<details><summary>Correction</summary>

Seize ; moins seize ; moins soixante-quatre ; moins soixante-quatre. Les deux dernières coïncident parce que l’exposant trois est impair, pas parce que les parenthèses seraient toujours inutiles.

</details>

## Séquence 2 — Les règles des puissances : une opération, un geste

Dans le tableau, les exposants sont entiers. Pour des exposants négatifs ou des quotients, les bases concernées sont non nulles.

| Structure | Transformation | Ce qu’on fait aux exposants |
|---|---|---|
| Même base, produit | a^m a^n=a^(m+n) | Additionner |
| Même base non nulle, quotient | a^m/a^n=a^(m−n) | Soustraire |
| Puissance d’une puissance | (a^m)^n=a^(mn) | Multiplier |
| Puissance d’un produit | (ab)^n=a^n b^n | Distribuer sur les facteurs |
| Puissance d’un quotient | (a/b)^n=a^n/b^n | Distribuer, avec b non nul |

Pour les exposants entiers non négatifs, les identités de produit et de puissance d’un produit s’appliquent aussi à la base zéro lorsque chaque expression est définie. Dès qu’une écriture fait apparaître \(0^0\) ou une division par zéro, elle doit être traitée à part.

Exemple : \((3^2)^4/3^5=3^{8-5}=3^3=27\). On ne calcule ni \(3^8\) ni \(3^5\) en écriture ordinaire.

### Ni même base ni même exposant ?

Dans \(2^3\times5^3\), l’exposant commun permet \((2\times5)^3=1000\). Dans \(2^3\times5^2\), on peut isoler \(2(2^2 5^2)=200\). On ne peut pas additionner trois et deux en changeant la base au hasard.

### Atelier I2 — Choisissez le geste avant le résultat

<!-- interaction I2 | association operation/regle | compétence : lois-puissances -->
Réécrivez comme puissance de deux : \(2^3 2^4\), \(2^9/2^5\), \((2^3)^4\). Comparez le deuxième résultat à \(2^9-2^5\).

<details><summary>Correction</summary>

\(2^7,2^4,2^{12}\). La soustraction \(2^9-2^5=2^5(2^4-1)=480\) n’est pas le quotient seize. Les règles de quotient ne traversent pas un signe moins.

</details>

## Séquence 3 — Exposant zéro, négatif et inverse

Pour a≠0 :

\[
\boxed{a^0=1},\qquad \boxed{a^{-n}=\frac1{a^n}}\quad(n\ge1\text{ entier}).
\]

L’exposant négatif demande un inverse, pas un signe négatif : \(2^{-3}=1/8\), et non moins huit. \((-2)^{-3}=-1/8\) à cause de la base négative et de l’exposant impair.

\[
\left(\frac34\right)^{-2}=\left(\frac43\right)^2=\frac{16}{9}.
\]

Dans cette leçon, \(0^0\) n’est pas défini. Zéro à une puissance entière strictement positive vaut zéro ; zéro à une puissance négative n’est pas défini.

### Atelier I3 — L’inverse change la taille

<!-- interaction I3 | trois valeurs exactes et domaine | compétence : exposant-negatif -->
Calculez \(5^0\), \(5^{-2}\), \((2/3)^{-1}\). Peut-on appliquer la même règle à \(0^{-1}\) ?

<details><summary>Correction</summary>

Un ; \(1/25\) ; \(3/2\). Zéro n’a pas d’inverse, donc \(0^{-1}\) n’est pas défini. Les trois premières expressions ne deviennent pas négatives.

</details>

## Séquence 4 — Sommes de puissances : factoriser au lieu d’inventer une règle

Il n’existe pas de règle générale \(a^m+a^n=a^{m+n}\). Lorsque les termes sont identiques, on compte leurs copies : cinq fois \(5^4\) donnent \(5^5\).

Pour des exposants entiers m≥n≥0 et une base non nulle :

\[
a^m+a^n=a^n(a^{m-n}+1).
\]

Ainsi \((3^5+3^3)/3^3=3^2+1=10\), tandis que le même quotient avec un signe moins vaut huit. La factorisation rend visible le facteur qui peut se simplifier.

### Atelier I4 — Produit ou somme ?

<!-- interaction I4 | classement d’egalites et correction | compétence : factorisation-puissances -->
Classez vrai ou faux :

A. \(3^4+3^4=3^8\).  
B. \(3^4\times3^4=3^8\).  
C. \((3^4+3^2)/3^2=10\).  
D. \(3^4+3^4+3^4=3^5\).

<details><summary>Correction</summary>

B, C et D sont vraies. A vaut deux fois quatre-vingt-un, pas \(3^8\). Pour C, diviser chacun des deux termes par \(3^2\) donne neuf plus un.

</details>

## Séquence 5 — Changer de base, comparer et retrouver un exposant

Quatre, huit et seize sont des puissances de deux ; neuf, vingt-sept et quatre-vingt-un des puissances de trois. Exploitez les facteurs premiers avant de calculer.

\[
4^{x-1}\,2^{x+1}=2^{2x-2+x+1}=2^{3x-1}.
\]

Si cette expression vaut \(2^5\), on obtient \(3x-1=5\), donc x=2.

L’implication \(a^u=a^v\Rightarrow u=v\) est valable pour une base réelle **a>0 et a≠1**, avec des exposants réels. La base un donne toujours un ; la base moins un, avec exposants entiers, ne distingue que leur parité. Ne comparez pas automatiquement les exposants pour ces bases particulières.

### Le sens de comparaison dépend de la base

- Si a>1, augmenter l’exposant augmente \(a^x\).
- Si 0<a<1, augmenter l’exposant diminue \(a^x\).

Par exemple \((1/2)^3<(1/2)^2\). Une autre méthode compare les puissances au même exposant positif : \(8^2/4^2=2^2\). Pour comparer \(2^{12}\) et \(3^8\), les réécrire \(8^4\) et \(9^4\) suffit : le second est plus grand.

### Atelier I5 — Un seul langage de bases

<!-- interaction I5 | arbre de conversion et equation | compétence : base-commune -->
Résolvez \(9^x/3^{x+1}=27\). Puis comparez \((1/3)^4\) et \((1/3)^2\) sans calcul décimal.

<details><summary>Correction</summary>

Le quotient devient \(3^{2x-(x+1)}=3^{x-1}\), donc x−1=3 et x=4. Pour la comparaison, la base est entre zéro et un : le premier nombre est plus petit.

</details>

## Séquence 6 — Racine carrée : une valeur principale, pas deux solutions

Pour a≥0, \(\sqrt a\) est l’unique réel **non négatif** dont le carré est a. Ainsi \(\sqrt{25}=5\). L’équation \(x^2=25\), en revanche, possède deux solutions : moins cinq et cinq.

Dans les réels, \(\sqrt a\) n’est pas définie si a<0. \((\sqrt a)^2=a\) pour a≥0, mais :

\[
\boxed{\sqrt{x^2}=|x|}\quad\text{pour tout réel }x.
\]

Pour x=−4, le résultat vaut quatre. Pour \(5-\sqrt{26}\), négatif puisque \(\sqrt{26}>5\), on a :

\[
\sqrt{(5-\sqrt{26})^2}=\sqrt{26}-5.
\]

Le carré a effacé le signe ; la racine ne peut pas le reconstruire. La valeur absolue choisit le résultat non négatif.

### Atelier I6 — Signe avant simplification

<!-- interaction I6 | choix du signe puis expression | compétence : racine-valeur-absolue -->
Sachant que \(\sqrt{10}>3\), simplifiez \(\sqrt{(3-\sqrt{10})^2}\). Puis donnez les solutions de \(x^2=10\).

<details><summary>Correction</summary>

La première expression vaut \(\sqrt{10}-3\), non négative. L’équation possède les deux solutions \(-\sqrt{10}\) et \(\sqrt{10}\). Ne mélangez pas la valeur d’une expression et l’ensemble des solutions d’une équation.

</details>

## Séquence 7 — Produits, quotients et extraction de carrés

Pour a,b≥0, \(\sqrt a\sqrt b=\sqrt{ab}\). Pour a≥0,b>0, \(\sqrt{a/b}=\sqrt a/\sqrt b\). Ces conditions assurent que toutes les racines sont réelles et que le quotient existe.

Pour extraire un carré parfait :

\[
\sqrt{72}=\sqrt{36\times2}=6\sqrt2.
\]

Cherchez le plus grand carré qui divise l’entier ; la factorisation première fournit une méthode systématique. Les exposants pairs sortent de la racine par moitié. S’ils portent sur une expression de signe inconnu, pensez à la valeur absolue : \(\sqrt{9x^2}=3|x|\).

Deux facteurs négatifs peuvent avoir un produit positif sans que leurs racines séparées soient réelles : \(\sqrt{(-2)(-8)}=4\), mais \(\sqrt{-2}\sqrt{-8}\) n’est pas une écriture réelle autorisée.

### Atelier I7 — Sortez les paires

<!-- interaction I7 | facteurs premiers groupes par paires | compétence : extraire-carre -->
Simplifiez \(\sqrt{180}\), puis \(\sqrt{50}/\sqrt2\). Expliquez pourquoi aucune approximation n’est nécessaire.

<details><summary>Correction</summary>

\(180=36\times5\), donc \(6\sqrt5\). Le quotient vaut \(\sqrt{25}=5\). Il s’agit de valeurs exactes, même lorsque la première racine restante est irrationnelle.

</details>

## Séquence 8 — Addition de racines : chercher des termes semblables

\(\sqrt a+\sqrt b\) n’est généralement pas \(\sqrt{a+b}\). Avec neuf et seize, la somme vaut sept et la racine de la somme cinq.

Après simplification, des racines peuvent avoir la même partie irrationnelle :

\[
\sqrt{18}+\sqrt{72}=3\sqrt2+6\sqrt2=9\sqrt2.
\]

On additionne alors les coefficients. \(\sqrt2+\sqrt3\) ne se réduit pas à une seule racine par une règle d’addition.

Pour un carré de somme :

\[
(\sqrt a+\sqrt b)^2=a+b+2\sqrt{ab},\qquad a,b\ge0.
\]

Le terme croisé est essentiel. \((\sqrt5+1)^2+(\sqrt5-1)^2=12\) parce que les deux termes croisés s’annulent **entre les deux développements**, et non parce qu’ils n’existaient pas.

### Atelier I8 — Ce qui peut être regroupé

<!-- interaction I8 | cartes de racines a simplifier puis regrouper | compétence : racines-semblables -->
Calculez \(\sqrt{12}+\sqrt{27}-\sqrt3\), puis \((\sqrt3+1)^2\).

<details><summary>Correction</summary>

\(2\sqrt3+3\sqrt3-\sqrt3=4\sqrt3\). Le carré vaut \(4+2\sqrt3\), pas quatre. Les radicaux égaux peuvent se regrouper ; le carré d’une somme doit être développé.

</details>

## Séquence 9 — Encadrer une racine sans l’arrondir

La fonction racine carrée conserve l’ordre sur les réels non négatifs. Comme \(7^2<60<8^2\), on a \(7<\sqrt{60}<8\). Sa partie entière vaut sept.

Si le nombre est un carré parfait, adaptez la borne : \(\sqrt{64}=8\). La partie entière est huit, mais le plus grand entier **strictement inférieur** à \(\sqrt{64}\) est sept. Les deux demandes diffèrent au point d’égalité.

Pour comparer deux quantités non négatives, comparer leurs carrés est équivalent. Ainsi \(3\sqrt2<\sqrt{19}\) car dix-huit est inférieur à dix-neuf. On ne peut pas élever une inégalité au carré en conservant son sens sans examiner les signes : moins cinq est inférieur à deux, mais vingt-cinq dépasse quatre.

### Valeur exacte ou arrondi demandé ?

Si l’énoncé demande la valeur exacte de \(\sqrt{13}\), conservez cette racine. S’il demande une valeur au centième, on peut écrire \(\sqrt{13}\approx3{,}61\). L’arrondi se fait à la fin ; remplacer une racine par son approximation dans les calculs intermédiaires peut déplacer la réponse finale. Les signes = et ≈ ne portent pas la même information.

### Atelier I9 — Deux bornes, deux sens possibles

<!-- interaction I9 | droite numerique et bornes strictes | compétence : encadrement-racine -->
Donnez la partie entière de \(\sqrt{48}\), puis le plus grand entier strictement inférieur à \(\sqrt{49}\). Comparez ensuite \(5\sqrt2\) et sept.

<details><summary>Correction</summary>

Six ; six ; \(5\sqrt2>7\), car les deux quantités sont positives et leurs carrés valent cinquante et quarante-neuf. L’arrondi décimal n’est utile dans aucun de ces cas.

</details>

## Séquence 10 — Notation scientifique : isoler l’ordre de grandeur

Une écriture scientifique d’un réel non nul est \(c\times10^n\), où n est entier et \(1\le|c|<10\). Pour un nombre positif, \(1\le c<10\). Zéro n’a pas une écriture normalisée unique de ce type.

\[
0{,}00072=7{,}2\times10^{-4},\qquad
48\times10^5=4{,}8\times10^6.
\]

Le coefficient et la puissance doivent changer ensemble : déplacer la virgule dans le coefficient modifie son facteur dix.

Produit : multiplier les coefficients et additionner les exposants, puis normaliser. Quotient : diviser les coefficients et soustraire les exposants. Pour une somme, commencez par la même puissance de dix ; n’additionnez pas les exposants.

Exemple : \((3\times10^4)(4\times10^{-2})=12\times10^2=1{,}2\times10^3\). Et \(3\times10^4+4\times10^3=3{,}4\times10^4\).

### Atelier I10 — Réparez une écriture non normalisée

<!-- interaction I10 | coefficient et exposant lies | compétence : notation-scientifique -->
Écrivez \(0{,}00056\) en notation scientifique, puis normalisez \(32\times10^{-5}\).

<details><summary>Correction</summary>

\(5{,}6\times10^{-4}\), puis \(3{,}2\times10^{-4}\). Dans le second cas, diviser le coefficient par dix impose de multiplier la puissance de dix par dix.

</details>

## Atelier avancé A — Conjugués : faire disparaître un radical du dénominateur

\[
(u-v)(u+v)=u^2-v^2.
\]

Ainsi \((\sqrt7+\sqrt5)(\sqrt7-\sqrt5)=2\). Pour rationaliser :

\[
\frac1{\sqrt{10}+3}
=\frac{\sqrt{10}-3}{10-9}
=\sqrt{10}-3.
\]

On multiplie le numérateur **et** le dénominateur par le conjugué. Vérifiez que ce facteur est non nul ; une rationalisation qui crée une division par zéro n’est pas une transformation autorisée.

Pour \(1/\sqrt a\), avec a>0, on obtient \(\sqrt a/a\). Si a=0, l’expression initiale est déjà indéfinie.

### Atelier I11 — Le bon partenaire

<!-- interaction I11 | choix du conjugue et calcul exact | compétence : rationalisation -->
Simplifiez \(1/(\sqrt5+2)\), puis \((\sqrt5-2)(\sqrt5+2)\).

<details><summary>Correction</summary>

Le conjugué donne \(\sqrt5-2\), et le produit vaut un. Les deux résultats sont cohérents : les deux facteurs du produit sont des inverses.

</details>

## Atelier avancé B — Racines et équations : créer une inconnue intermédiaire

Si \(\sqrt x+\sqrt y=5\) et \(\sqrt x-\sqrt y=1\), posez \(u=\sqrt x\), \(v=\sqrt y\), avec u,v≥0. Additionner les deux égalités donne u=3, puis v=2. On en déduit x=9,y=4 et xy=36.

Pour une équation avec une racine, élever au carré peut créer de fausses solutions. Dans \(\sqrt{x+2}=x\), le membre de droite doit être non négatif, donc x≥0. Après carré, \(x+2=x^2\), qui donne les candidats deux et moins un. Seul deux satisfait l’équation initiale. L’expression \(\sqrt{x+2}\) seule autorise x≥−2, mais l’égalité ajoute la contrainte x≥0.

### Atelier I12 — Candidat ou solution ?

<!-- interaction I12 | liste de candidats et verification dans l'original | compétence : carre-extraneous -->
Résolvez \(\sqrt{x+6}=x\). Les candidats de l’équation après carré sont trois et moins deux : lesquels conserver ?

<details><summary>Correction</summary>

x doit être non négatif. Trois convient : \(\sqrt9=3\). Moins deux ne convient pas : \(\sqrt4=2\ne-2\). Une racine principale ne peut pas donner un résultat négatif.

</details>

## Atelier avancé C — Racine cubique et exposants fractionnaires

La racine cubique réelle \(\sqrt[3]a\) est définie pour tout réel a : \(\sqrt[3]{-8}=-2\). Contrairement au carré, le cube conserve le signe et l’équation \(x^3=a\) a une seule solution réelle.

Pour a>0 et un rationnel m/n, n entier positif :

\[
a^{m/n}=\left(\sqrt[n]a\right)^m.
\]

Ainsi \(16^{3/4}=2^3=8\) et \(27^{-2/3}=1/9\). Les règles de puissances s’emploient sans ambiguïté pour une base strictement positive. Pour une base négative, il faut traiter l’existence de chaque racine réelle séparément ; ne transportez pas automatiquement toutes les règles des exposants réels. Ce complément n’exige pas les logarithmes.

### Atelier I13 — Quel degré de racine ?

<!-- interaction I13 | trois calculs avec choix du domaine | compétence : exposants-fractionnaires -->
Calculez \(\sqrt[3]{-27}\), \(81^{1/4}\) et \(8^{-2/3}\). La racine carrée réelle de moins vingt-sept existe-t-elle ?

<details><summary>Correction</summary>

Moins trois ; trois ; un quart. La racine carrée réelle de moins vingt-sept n’existe pas. Le degré pair ou impair change le domaine.

</details>

## La boîte à outils — Chercher une structure avant une valeur

| Ce que vous voyez | Geste utile | Piège |
|---|---|---|
| Produit ou quotient de même base | Combiner les exposants | Appliquer la règle à une somme |
| Somme de puissances | Compter les copies ou factoriser | Additionner les exposants |
| Bases différentes mais reliées | Même base première | Développer les grands nombres |
| Racine d’un carré | Valeur absolue | Restituer un signe négatif |
| Racine d’un entier | Extraire les carrés parfaits | Sortir un facteur non carré |
| Somme de racines | Simplifier puis regrouper | Racine de la somme |
| Dénominateur avec deux termes | Conjugué | Multiplier un seul membre de la fraction |
| Équation avec racine | Domaine, candidats, vérification | Confondre carré et équivalence sans condition |

### Atelier I14 — Détruisez une fausse règle

<!-- interaction I14 | contre-exemples libres | compétence : transfert -->
Donnez un contre-exemple à chacune de ces affirmations : \(\sqrt{a+b}=\sqrt a+\sqrt b\) pour tous a,b≥0 ; \(\sqrt{x^2}=x\) pour tout réel x ; \(a^{-2}=-a^2\) pour tout a≠0.

<details><summary>Corrections possibles</summary>

a=9,b=16 donne cinq contre sept ; x=−3 donne trois contre moins trois ; a=2 donne un quart contre moins quatre. Les exemples doivent respecter les domaines, pas seulement produire deux écritures différentes.

</details>

## Mission finale — Choisir, calculer, vérifier

Répondez aux vingt questions avant d’ouvrir la correction. Les huit premières consolident les fondations ; les huit suivantes combinent les outils ; les quatre dernières demandent un transfert ou un contrôle plus exigeant. Aucune limite de temps au premier passage. Indiquez votre confiance et la méthode choisie.

### F1

Calculer \(-4^2+(-4)^3\).

A. \(48\)  
B. \(-48\)  
C. \(80\)  
D. \(-80\)  

### F2

On écrit \(3^4\times3^2/3^3=3^n\). Que vaut n ?

A. \(8\)  
B. \(9\)  
C. \(2\)  
D. \(3\)  

### F3

Calculer \((2^3)^2/2^4\).

A. \(64\)  
B. \(2\)  
C. \(16\)  
D. \(4\)  

### F4

Calculer \((2/5)^{-2}\).

A. \(\frac{5}{2}\)  
B. \(\frac{25}{4}\)  
C. \(\frac{-25}{4}\)  
D. \(\frac{4}{25}\)  

### F5

La somme de cinq copies de \(5^3\) vaut \(5^n\). Que vaut n ?

A. \(4\)  
B. \(15\)  
C. \(8\)  
D. \(3\)  

### F6

Calculer \((2^7-2^4)/2^4\).

A. \(16\)  
B. \(8\)  
C. \(7\)  
D. \(3\)  

### F7

Que vaut \(\sqrt{196}\) ?

A. \(196\)  
B. \(14\)  
C. \(-14\)  
D. \(28\)  

### F8

Quelle est la forme simplifiée de \(\sqrt{75}\) ?

A. \(5\sqrt3\)  
B. \(3\sqrt5\)  
C. \(15\)  
D. \(25\sqrt3\)  

### F9

Simplifier \(\sqrt{12}+\sqrt{48}\).

A. \(6\sqrt3\)  
B. \(6\sqrt6\)  
C. \(\sqrt{60}\)  
D. \(4\sqrt3\)  

### F10

Calculer \(\sqrt{(-7)^2}+(-7)\).

A. \(42\)  
B. \(-14\)  
C. \(14\)  
D. \(0\)  

### F11

Calculer \((\sqrt6+\sqrt2)(\sqrt6-\sqrt2)\).

A. \(8\)  
B. \(4\)  
C. \(12\)  
D. \(2\)  

### F12

Quelle est l’écriture scientifique normalisée de \(0{,}00048\) ?

A. \(4{,}8\times10^4\)  
B. \(48\times10^{-5}\)  
C. \(4{,}8\times10^{-4}\)  
D. \(4{,}8\times10^{-5}\)  

### F13

Si \(4^x\times2^{x-1}=2^8\), que vaut x ?

A. \(4\)  
B. \(2\)  
C. \(9\)  
D. \(3\)  

### F14

Si \((1/3)^x=27^2\), que vaut x ?

A. \(6\)  
B. \(-3\)  
C. \(3\)  
D. \(-6\)  

### F15

Quelle est la partie entière de \(\sqrt{80}\) ?

A. \(40\)  
B. \(8\)  
C. \(7\)  
D. \(9\)  

### F16

Simplifier \(1/(\sqrt{17}+4)\).

A. \(\sqrt{17}+4\)  
B. \(4-\sqrt{17}\)  
C. \((\sqrt{17}-4)/33\)  
D. \(\sqrt{17}-4\)  

### F17

Simplifier \(\sqrt{(4-\sqrt{19})^2}\), sachant que \(\sqrt{19}>4\).

A. \(3\)  
B. \(4-\sqrt{19}\)  
C. \(\sqrt{19}-4\)  
D. \(19-4\)  

### F18

Quelle est la solution réelle de \(\sqrt{x+12}=x\) ?

A. \(-3\)  
B. \(4\)  
C. \(12\)  
D. \(3\)  

### F19

Calculer \(64^{2/3}\).

A. \(\frac{1}{16}\)  
B. \(32\)  
C. \(8\)  
D. \(16\)  

### F20

Des réels non négatifs x,y vérifient \(\sqrt x+\sqrt y=7\) et \(\sqrt x-\sqrt y=3\). Que vaut xy ?

A. \(25\)  
B. \(10\)  
C. \(49\)  
D. \(100\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | D | Le premier terme vaut moins seize, le second moins soixante-quatre. | S1 |
| F2 | D | Même base : n=4+2−3. | S2 |
| F3 | D | Les exposants donnent 3×2−4=2 ; la valeur est 2²=4. | S2 |
| F4 | B | Inverser puis élever au carré : (5/2)². | S3 |
| F5 | A | 5×5³=5⁴. Une somme de copies n’est pas un produit de cinq puissances. | S4 |
| F6 | C | Factoriser 2⁴ : le résultat est 2³−1=7. | S4 |
| F7 | B | La racine principale non négative vaut quatorze. | S6 |
| F8 | A | 75=25×3, donc on extrait cinq. | S7 |
| F9 | A | Deux racines de trois plus quatre racines de trois donnent six racines de trois. | S8 |
| F10 | D | La racine vaut la valeur absolue de moins sept, donc sept ; la somme est nulle. | S6 |
| F11 | B | Les facteurs conjugués donnent 6−2. | Avancé A |
| F12 | C | Le coefficient doit être entre un inclus et dix exclu. 48×10⁻⁵ a la bonne valeur mais n’est pas normalisé. | S10 |
| F13 | D | La base deux donne 2x+x−1=8, donc x=3. | S5 |
| F14 | D | À base trois : −x=6. | S5 |
| F15 | B | 64<80<81, donc 8<√80<9. | S9 |
| F16 | D | Le produit des conjugués vaut 17−16=1. | Avancé A |
| F17 | C | La racine d’un carré est une valeur absolue ; le bloc intérieur est négatif. | S6 |
| F18 | B | Les candidats après carré sont quatre et moins trois. x doit être non négatif ; seul quatre convient. | Avancé B |
| F19 | D | La racine cubique de 64 vaut quatre ; son carré seize. | Avancé C |
| F20 | D | Les racines valent cinq et deux ; x=25,y=4, donc xy=100. | Avancé B |

</details>

## Votre bilan — Reprendre la structure, pas mémoriser le résultat

Une erreur doit d’abord être localisée : traduction, choix de règle, calcul, domaine ou réponse à une autre grandeur. Reprenez le passage indiqué dans le corrigé, expliquez votre choix de méthode en une phrase, puis essayez une variante sans ouvrir les aides.

Une réponse juste après un indice est une réussite accompagnée ; elle ne confirme pas encore le transfert autonome. Les ateliers avancés ne doivent pas masquer une fragilité de fondation, ni bloquer le chapitre suivant lorsque les prérequis sont acquis. Ce bilan est propre à la leçon et ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Puissances entières | Même base : produit → ajouter les exposants ; quotient → les soustraire |
| Puissance d’une puissance | Multiplier les exposants lorsque les expressions sont définies |
| Exposant zéro / négatif | a⁰=1 et a⁻ⁿ=1/aⁿ pour a≠0 |
| Somme de puissances | Factoriser ou compter les copies ; pas de règle d’addition des exposants |
| Racine carrée principale | Définie pour a≥0, toujours non négative |
| Racine d’un carré | √(x²)= valeur absolue de x |
| Produit / quotient de racines | Radicandes non négatifs ; dénominateur strictement positif |
| Somme de racines | Extraire les carrés puis regrouper les radicaux semblables |
| Carré d’une somme | Ne pas oublier le terme croisé |
| Conjugués | (u−v)(u+v)=u²−v² |
| Écriture scientifique | c×10ⁿ, n entier, 1≤valeur absolue de c<10 |
| Équation avec racine | Domaine, candidats après carré, puis vérification |

**Prochaine étape : les expressions algébriques.** Emportez le même réflexe : identifier la structure et les contraintes avant de développer le calcul.
