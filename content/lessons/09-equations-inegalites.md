# Équations et inégalités : trouver toutes les solutions autorisées

Trouver une valeur qui fonctionne n’est pas toujours avoir terminé. Il peut y avoir deux solutions, aucune, tout un intervalle ou seulement quelques entiers autorisés. Une transformation mal choisie peut faire disparaître une solution ou en créer une fausse.

**Votre objectif :** conserver le domaine, effectuer des transformations équivalentes et répondre à la demande exacte : valeur, ensemble, plus petite solution, somme ou nombre de solutions.

## Avant de commencer — Trois décisions avant le calcul

Pour chaque réponse, indiquez votre confiance et la règle utilisée.

<!-- interaction D1 | QCM unique + confiance | compétence : inegalite-negatif -->
**D1.** L’inégalité \(-2x\ge-6\) équivaut à :

A. \(x\ge3\) · B. \(x\le3\) · C. \(x\le-3\) · D. \(x\ge-3\).

<details><summary>Raisonnement</summary>

**B.** Diviser par moins deux inverse le sens. Le test x=0 confirme que les petites valeurs doivent être autorisées.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : deux-racines -->
**D2.** Combien de solutions réelles possède \(x^2=16\) ?

A. Zéro. · B. Une. · C. Une infinité. · D. Deux.

<details><summary>Raisonnement</summary>

**D.** Moins quatre et quatre ont tous deux pour carré seize. Le symbole \(\sqrt{16}\) désigne quatre, mais l’équation demande tous les nombres dont le carré vaut seize.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : produit-nul -->
**D3.** Quelles sont les solutions de \(x(x-5)=0\) ?

A. Seulement cinq. · B. Seulement zéro. · C. Zéro et cinq. · D. Tous les réels.

<details><summary>Raisonnement</summary>

**C.** Un produit nul a au moins un facteur nul. Diviser immédiatement par x aurait supprimé la solution zéro.

</details>

D1 oriente vers S7 ; D2 vers S5 ; D3 vers S4. Gardez un espace pour écrire le domaine avant les transformations.

## Séquence 1 — Une solution doit vérifier l’énoncé initial

Résoudre une équation, c’est trouver toutes les valeurs du domaine pour lesquelles les deux membres sont égaux. Vérifier une valeur, c’est la substituer dans **l’équation d’origine**, pas seulement dans la dernière ligne transformée.

Pour les opérations ordinaires sur les réels : ajouter le même nombre aux deux membres, multiplier par un même nombre non nul ou diviser par un même nombre non nul conserve les solutions. Développer et factoriser sont des changements d’écriture.

« Passer de l’autre côté en changeant de signe » résume une addition ou une soustraction faite aux deux membres. Comprendre l’opération évite les erreurs quand le terme contient une parenthèse.

Une division par une expression contenant x n’est autorisée que si elle est non nulle. Si cette expression peut s’annuler, il faut conserver ce cas séparément au lieu de l’effacer.

### Atelier I1 — La balance, puis la vérification

<!-- interaction I1 | operations identiques sur deux membres | compétence : equivalence -->
Résolvez \(3x+6=2x+13\). Pour chaque étape, nommez l’opération sur les deux membres et vérifiez le résultat dans l’équation initiale.

<details><summary>Correction</summary>

Soustraire 2x donne x+6=13 ; soustraire six donne x=7. Vérification : les deux membres valent vingt-sept. Le « déplacement » d’un terme n’est pas une opération indépendante sur un seul membre.

</details>

## Séquence 2 — Premier degré et inconnue des deux côtés

Réduisez une équation linéaire sous la forme ax=b.

- Si a≠0 : une solution, x=b/a.
- Si a=0 et b≠0 : aucune solution.
- Si a=0 et b=0 : tous les réels du domaine sont solutions.

Exemples : \(4x+5=4x+6\) demanderait 5=6, donc aucune solution. \(2(x+3)=2x+6\) est une identité sur les réels, donc une infinité de solutions.

Pour \(4(x-4)=2(x+4)\), développer donne \(4x-16=2x+8\), puis x=12. Mais on peut parfois diviser d’abord par un facteur numérique commun pour réduire le calcul.

### Atelier I2 — Une valeur, aucune, ou toutes ?

<!-- interaction I2 | classement de trois equations | compétence : classification-lineaire -->
Classez : A. \(3(x+2)=3x+6\) ; B. \(5x-1=5x+4\) ; C. \(2(x-1)=8\).

<details><summary>Correction</summary>

A : tous les réels. B : aucune solution. C : unique solution cinq. Une disparition de x n’est pas toujours une erreur ; elle peut révéler une identité ou une contradiction.

</details>

## Séquence 3 — Fractions : supprimer les dénominateurs, pas une partie des termes

Pour \((x-6)/2+(x-4)/3=4\), le PPCM des dénominateurs vaut six. Multiplier **chaque terme** des deux membres par six donne :

\[
3(x-6)+2(x-4)=24.
\]

Le résultat est x=10. Oublier le facteur six sur le membre de droite change l’équation.

Une équation \((3/2)x=15\) se résout en multipliant par l’inverse \(2/3\), donc x=10. Ce n’est pas une addition de \(2/3\).

### Inconnue au dénominateur

Pour \(5/(x-1)=2\), le domaine exige x≠1. Multiplier par x−1 donne \(5=2(x-1)\), d’où x=7/2, admissible. Une égalité autorise cette multiplication dès que l’expression n’est pas nulle ; son signe n’a pas d’importance pour une **égalité**.

Pour \((x^2-1)/(x-1)=2\), le domaine x≠1 conduit à x+1=2, donc au candidat x=1. Ce candidat est interdit : il n’y a **aucune** solution. La simplification n’a pas rétabli la valeur manquante.

### Atelier I3 — Candidat interdit

<!-- interaction I3 | domaine puis candidats filtres | compétence : equation-rationnelle -->
Résolvez \(1/(x-2)=2/(x+2)\). Puis déterminez les solutions de \((x^2-4)/(x-2)=4\).

<details><summary>Correction</summary>

Première : x≠2,−2 ; x+2=2x−4, donc x=6, qui convient. Seconde : x≠2 ; x+2=4 donne seulement le candidat deux, interdit, donc aucune solution.

</details>

## Séquence 4 — Produit nul : séparer les facteurs, ne pas diviser par une inconnue

\[
AB=0\quad\Longleftrightarrow\quad A=0\ \text{ou}\ B=0.
\]

Pour \((x+3)(x-8)=0\), on obtient x=−3 ou x=8. Si l’on demande la plus petite, on répond moins trois ; si l’on demande leur somme, cinq.

La règle ne s’applique pas à une somme : A+B=0 n’impose pas A=0 ou B=0. Elle ne s’applique pas non plus directement à AB=6 : un facteur peut prendre plusieurs valeurs.

Pour \(x^2-5x=0\), factoriser x(x−5) donne zéro et cinq. Diviser par x n’est permis que dans le cas x≠0 ; il faut d’abord garder le cas x=0.

### Atelier I4 — Retrouvez la solution effacée

<!-- interaction I4 | analyse d’une fausse resolution | compétence : perte-solution -->
Un élève transforme \(x(x-4)=0\) en x−4=0, puis répond quatre. Quelle opération a supprimé une solution ? Donnez l’ensemble complet.

<details><summary>Correction</summary>

Il a divisé par x sans traiter x=0. L’ensemble est \(\{0,4\}\). Accepter une explication qui nomme la division par une expression éventuellement nulle.

</details>

## Séquence 5 — Carrés, factorisation et nombre de solutions

Pour \(x^2=c\) : c>0 donne deux solutions opposées ; c=0 une solution zéro ; c<0 aucune solution réelle. Si l’énoncé exige x>0, on ne conserve que la solution strictement positive lorsqu’elle existe.

Une équation de second degré simple peut se factoriser :

\[
x^2-8x+12=(x-2)(x-6).
\]

Les solutions sont deux et six. Cherchez deux nombres dont la somme est huit et le produit douze. En cas de racine double, \((x-3)^2=0\) ne possède qu’une **valeur** solution, trois.

Pour un second degré général ax²+bx+c=0, a≠0, le discriminant \(\Delta=b^2-4ac\) indique zéro, une ou deux solutions réelles selon qu’il est négatif, nul ou positif. Si \(\Delta\ge0\), les solutions sont \((-b\pm\sqrt\Delta)/(2a)\). La factorisation reste souvent plus rapide lorsque les facteurs sont visibles.

Si l’on veut seulement la somme ou le produit des deux racines comptées avec multiplicité, ils valent −b/a et c/a lorsque les racines réelles existent. Pour une racine double, la somme **des valeurs distinctes** ne doit pas être confondue avec la somme comptant deux fois la racine.

### Atelier I5 — Solution double n’est pas deux valeurs

<!-- interaction I5 | factorisation et selection de demande | compétence : second-degre -->
Résolvez \(x^2-7x+12=0\), puis \((x-3)^2=0\). Combien de valeurs distinctes dans chaque cas ?

<details><summary>Correction</summary>

Premier cas : (x−3)(x−4)=0, valeurs trois et quatre, deux distinctes. Second : valeur trois seulement. L’écriture d’un carré n’autorise pas à compter deux fois la même valeur dans un ensemble.

</details>

## Séquence 6 — Systèmes : éliminer, substituer ou combiner directement

Deux équations portent sur les **mêmes** inconnues. Additionner ou soustraire leurs membres peut faire disparaître l’une d’elles. Multiplier préalablement une équation par une constante non nulle est autorisé.

\[
x+y=6,\quad x-y=2
\Rightarrow2x=8\Rightarrow x=4,y=2.
\]

Par substitution : avec x+y=5 et 2x+3y=12, écrire x=5−y donne y=2 puis x=3.

### Si l’on demande seulement une combinaison

Avec 2x+y=16 et x+2y=14, additionner donne 3(x+y)=30, donc x+y=10. Résoudre séparément x et y est possible mais non nécessaire.

Un système peut aussi être incompatible ou indéterminé : x+y=3 et 2x+2y=7 se contredisent ; avec six à droite, la seconde équation répète la première. Avoir deux lignes ne garantit pas deux informations indépendantes.

### Atelier I6 — Visez ce qui est demandé

<!-- interaction I6 | choix de combinaison puis calcul | compétence : systeme-combinaison -->
On sait 3x+y=17 et x+3y=19. Trouvez x+y sans résoudre les deux inconnues, puis vérifiez en trouvant x et y.

<details><summary>Correction</summary>

Somme : 4(x+y)=36, donc x+y=9. Ensuite x=4,y=5 vérifient les deux lignes. La combinaison demandée pouvait être obtenue avant les valeurs individuelles.

</details>

## Séquence 7 — Inégalités : le signe du facteur décide du sens

Ajouter ou soustraire une même quantité conserve le sens d’une inégalité. Multiplier ou diviser par une quantité strictement positive le conserve ; par une quantité strictement négative l’inverse.

\[
20-2x\ge16\Rightarrow-2x\ge-4\Rightarrow x\le2.
\]

Multiplier par zéro détruit l’information et n’est pas une transformation équivalente. Multiplier par une expression de signe inconnu demande de séparer les cas ou d’utiliser un tableau de signes.

Une inégalité stricte garde sa borne exclue : x<3 n’est pas x≤3. Vérifier la borne dans l’original permet de voir si l’égalité est admise.

### Atelier I7 — Un point qui contrôle le sens

<!-- interaction I7 | operation puis representation sur droite | compétence : inegalite-negatif -->
Résolvez \(7-3x>1\). La borne est-elle incluse ? Testez zéro, deux et trois dans l’original.

<details><summary>Correction</summary>

−3x>−6 donne x<2. Zéro convient, deux donne égalité et est exclu, trois ne convient pas. Le point deux doit être ouvert sur la droite.

</details>

## Séquence 8 — Doubles inégalités et comptage des entiers

Pour \(3\le2x+1\le13\), soustraire un puis diviser par deux **dans les trois membres** donne \(1\le x\le6\). Il y a six entiers, car les deux bornes sont incluses.

Pour \(4<x+2<12\), on obtient \(2<x<10\), donc les sept entiers de trois à neuf. Compter « dix moins deux » oublierait les bornes strictes.

| Intervalle | Entiers admissibles |
|---|---|
| L≤x≤U | De ceil(L) à floor(U) |
| L<x<U | De floor(L)+1 à ceil(U)−1 |
| L<x≤U | De floor(L)+1 à floor(U) |
| L≤x<U | De ceil(L) à ceil(U)−1 |

Ici floor signifie l’entier inférieur ou égal ; ceil l’entier supérieur ou égal. Si le premier entier dépasse le dernier, le nombre est zéro. Sinon : dernier moins premier plus un.

Le plus grand entier x tel que 3x<10 est trois. Mais le plus grand entier tel que 3x<9 est deux. Un arrondi automatique du seuil ne traite pas correctement le cas d’une borne entière exclue.

### Atelier I8 — Comptez après avoir isolé

<!-- interaction I8 | intervalle reel puis liste d’entiers | compétence : bornes-entieres -->
Combien d’entiers vérifient \(-3<2x+1\le9\) ? Écrivez l’intervalle réel avant de compter.

<details><summary>Correction</summary>

\(-4<2x\le8\), donc \(-2<x\le4\). Entiers : −1,0,1,2,3,4, soit six. La borne moins deux est exclue ; quatre est incluse.

</details>

## Séquence 9 — Valeur absolue : une distance

Pour r≥0, \(|x-a|=r\) signifie une distance r au point a : x=a−r ou x=a+r. Avec r=0, les deux écritures désignent une seule solution. Si r<0, il n’y a aucune solution.

\[
|x-a|\le r\Longleftrightarrow a-r\le x\le a+r\quad(r\ge0).
\]

Pour \(|x-a|>r\), avec r≥0, on est **à l’extérieur** : x<a−r ou x>a+r. Les conditions du cas intérieur s’ajoutent avec « et » ; celles du cas extérieur s’unissent avec « ou ».

Pour \(|2x-6|\le7\), on peut écrire \(-7\le2x-6\le7\), d’où \(-1/2\le x\le13/2\). Les entiers sont zéro à six, soit sept.

### Atelier I9 — Dedans ou dehors ?

<!-- interaction I9 | deux intervalles sur droite | compétence : distance-intervalle -->
Résolvez \(|x-2|\le3\), puis \(|x-2|>3\). Comptez les entiers du premier ensemble.

<details><summary>Correction</summary>

Premier : −1≤x≤5, sept entiers. Second : x<−1 ou x>5. Les deux ensembles se complètent ; les bornes appartiennent au premier seulement.

</details>

## Séquence 10 — Signe d’un produit : raisonner par intervalles

Pour a<b, le produit (x−a)(x−b) est positif à l’extérieur des racines, négatif à l’intérieur et nul aux deux racines. Il suffit de suivre le signe de chacun des deux facteurs.

Ainsi (x−3)(x−10)<0 équivaut à 3<x<10. Six entiers conviennent : quatre à neuf. Si un signe moins multiplie tout le produit, les signes s’inversent ; s’il faut ≤0, les racines sont ajoutées à l’intervalle.

On ne peut pas diviser par x−3 sans connaître son signe et sans préserver son éventuelle annulation.

### Atelier I10 — Un tableau, trois zones

<!-- interaction I10 | tableau de signes a remplir | compétence : produit-signes -->
Résolvez \((x+2)(x-4)\ge0\). Quels entiers entre moins trois et cinq inclus conviennent ?

<details><summary>Correction</summary>

Racines −2 et 4. Produit non négatif pour x≤−2 ou x≥4. Dans l’intervalle demandé : −3,−2,4,5, soit quatre entiers. Les racines sont incluses car l’égalité est autorisée.

</details>

## Atelier avancé A — Inégalité avec un dénominateur variable

Pour x>0, \(5/x>2\) autorise une multiplication par x sans changer le sens : \(5>2x\). En conservant la contrainte de départ, on obtient \(0<x<5/2\), pas simplement x<5/2.

Si le signe n’est pas donné, ramenez tout d’un côté et étudiez le quotient. Par exemple :

\[
\frac3{x-1}>1
\Longleftrightarrow\frac{4-x}{x-1}>0,\qquad x\ne1.
\]

Le numérateur s’annule en quatre, le dénominateur en un. Le quotient est positif uniquement pour 1<x<4. La borne un est interdite par le domaine ; quatre est exclue par l’inégalité stricte. Pour une inégalité large, seul quatre pourrait être ajouté.

### Atelier I11 — L’interdit n’est pas une racine

<!-- interaction I11 | domaine et signes du quotient | compétence : quotient-signes -->
Résolvez \((x-2)/(x+1)\le0\). Peut-on inclure moins un ? Et deux ?

<details><summary>Correction</summary>

Domaine x≠−1. Le quotient est non positif pour −1<x≤2. Moins un est toujours interdit ; deux annule le numérateur et est autorisé. Les deux bornes n’ont pas le même rôle.

</details>

## Atelier avancé B — Paramètres : isoler d’abord le cas qui annule le coefficient

Pour \((k-3)x=7\), k=3 donne une contradiction, donc aucune solution. Pour tout autre k, il existe une solution \(7/(k-3)\).

Pour \((k-3)x=0\), k=3 donne tous les réels ; sinon, seule la solution zéro reste. Diviser d’emblée par k−3 aurait supprimé le cas important du problème.

Si l’on impose x=5 comme solution de kx+5=3x+15, substituer cinq donne 5k+5=30, donc k=5. « Admet x=5 » ne veut pas toujours dire « admet uniquement x=5 » ; il faut examiner l’équation après le choix du paramètre si l’unicité est demandée.

### Atelier I12 — Trois comportements d’une même famille

<!-- interaction I12 | classification selon le parametre | compétence : parametre -->
Pour \((k-2)x=k-2\), combien de solutions existe-t-il lorsque k=2 ? Lorsque k≠2 ?

<details><summary>Correction</summary>

k=2 donne 0=0 : tous les réels. Pour k≠2, diviser par k−2 est autorisé et donne l’unique solution un. Les deux cas doivent être conservés.

</details>

## Atelier avancé C — Sommes de distances et minimum possible

\(|x-a|+|x-b|\) est au moins \(|a-b|\). Si a≤b, le minimum est atteint pour tout x du segment [a,b]. Entre les deux points, les deux distances s’additionnent exactement à l’écart entre eux.

En particulier, une somme de valeurs absolues ne peut être nulle que si chaque terme est nul. \(|x-4|+|x-8|=0\) n’a donc aucune solution. Il faudrait simultanément x=4 et x=8.

### Atelier I13 — Une égalité, tout un segment

<!-- interaction I13 | deux distances et intervalle cible | compétence : somme-distances -->
Résolvez \(|x-1|+|x-5|=4\). Existe-t-il une solution à la même équation avec trois à droite ?

<details><summary>Correction</summary>

L’ensemble est 1≤x≤5. Le minimum de la somme est quatre, donc trois à droite est impossible. Tester seulement le milieu trois donnerait une solution, mais pas toutes.

</details>

## La boîte à outils — Domaine, ensemble, demande finale

| Structure | Méthode | Risque à contrôler |
|---|---|---|
| Premier degré | Réduire à ax=b | Cas a=0 |
| Fractions | Domaine, puis dénominateur commun | Interdits persistants |
| Produit nul | Un facteur nul ou l’autre | Ne pas perdre zéro par division |
| Carré égal à c | Signe de c puis deux branches éventuelles | Une racine principale n’est pas un ensemble de solutions |
| Système | Substitution ou élimination | Informations indépendantes ? |
| Inégalité | Signe du multiplicateur | Borne stricte ou incluse |
| Valeur absolue | Distance, intérieur ou extérieur | « Et » ou « ou » |
| Produit/quotient | Tableau de signes | Zéro du numérateur / interdit du dénominateur |

### Atelier I14 — Le contrôle final en trois questions

<!-- interaction I14 | audit de solutions proposees | compétence : verification -->
Un corrigé propose x=1 pour \((x^2-1)/(x-1)=2\), seulement x=3 pour x²=9, et x≥2 pour −x≤−2. Que faut-il corriger ?

<details><summary>Correction</summary>

Première : x=1 est interdit, donc aucune solution. Deuxième : ajouter moins trois dans le domaine réel. Troisième : x≥2 est correct ; toutes les propositions ne sont pas nécessairement fausses. Contrôler domaine, exhaustivité et sens de l’inégalité.

</details>

## Mission finale — Choisir, calculer, vérifier

Répondez aux vingt questions avant d’ouvrir la correction. Les huit premières consolident les fondations ; les huit suivantes combinent les outils ; les quatre dernières demandent un transfert ou un contrôle plus exigeant. Aucune limite de temps au premier passage. Indiquez votre confiance et la méthode choisie.

### F1

Résoudre \(5x-7=18\).

A. \(-5\)  
B. \(25\)  
C. \(\frac{11}{5}\)  
D. \(5\)  

### F2

Résoudre \(3(x-2)=2x+5\).

A. \(11\)  
B. \(1\)  
C. \(5\)  
D. \(-11\)  

### F3

Résoudre \(x/3+x/6=9\).

A. \(6\)  
B. \(9\)  
C. \(54\)  
D. \(18\)  

### F4

Résoudre \(2/(x-1)=1\), avec x≠1.

A. \(3\)  
B. \(2\)  
C. \(1\)  
D. \(-1\)  

### F5

Combien de solutions réelles possède \((x^2-9)/(x-3)=6\) ?

A. \(3\)  
B. \(0\)  
C. \(1\)  
D. \(2\)  

### F6

Quelle est la plus petite solution de \(x(x+6)=0\) ?

A. \(-3\)  
B. \(6\)  
C. \(0\)  
D. \(-6\)  

### F7

Combien de solutions réelles possède \(x^2=49\) ?

A. \(1\)  
B. \(49\)  
C. \(2\)  
D. \(0\)  

### F8

Quelle est la plus grande solution de \(x^2-9x+20=0\) ?

A. \(5\)  
B. \(9\)  
C. \(4\)  
D. \(20\)  

### F9

Si 2x+y=17 et x+2y=19, que vaut x+y ?

A. \(18\)  
B. \(36\)  
C. \(12\)  
D. \(6\)  

### F10

Si 3x+2y=34 et x+2y=18, que vaut x ?

A. \(16\)  
B. \(4\)  
C. \(6\)  
D. \(8\)  

### F11

Quelle est la solution de \(12-3x\ge3\) ?

A. \(x\le3\)  
B. \(x\le-3\)  
C. \(x\ge3\)  
D. \(x<3\)  

### F12

Combien d’entiers x vérifient \(-2<3x+1\le13\) ?

A. \(5\)  
B. \(4\)  
C. \(3\)  
D. \(6\)  

### F13

Quelle est la somme des solutions de \(|x-4|=3\) ?

A. \(8\)  
B. \(3\)  
C. \(7\)  
D. \(4\)  

### F14

Combien d’entiers x vérifient \(|2x-8|\le5\) ?

A. \(5\)  
B. \(6\)  
C. \(7\)  
D. \(4\)  

### F15

Combien d’entiers x rendent \((x-2)(x-7)\) strictement négatif ?

A. \(6\)  
B. \(3\)  
C. \(5\)  
D. \(4\)  

### F16

Combien d’entiers x vérifient \((x-1)/(x+2)\le0\) ?

A. \(2\)  
B. \(4\)  
C. \(3\)  
D. \(5\)  

### F17

Pour quelle valeur de k l’équation \((k-4)x=9\) n’a-t-elle aucune solution ?

A. \(9\)  
B. \(4\)  
C. \(-4\)  
D. \(0\)  

### F18

Lorsque k=2, combien de solutions réelles possède \((k-2)x=k-2\) ?

A. Une infinité.  
B. Exactement deux.  
C. Aucune.  
D. Une seule.  

### F19

Combien de solutions réelles possède \(|x-1|+|x-6|=0\) ?

A. \(1\)  
B. \(2\)  
C. \(0\)  
D. \(5\)  

### F20

Pour x>0, quelle condition équivaut à \(6/x>4\) ?

A. \(0<x\le3/2\)  
B. \(x<3/2\)  
C. \(0<x<3/2\)  
D. \(x>3/2\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | D | 5x=25, donc x=5. | S2 |
| F2 | A | 3x−6=2x+5, donc x=11. | S2 |
| F3 | D | Multiplier toute l’égalité par six : 2x+x=54. | S3 |
| F4 | A | 2=x−1, donc x=3, qui est admissible. | S3 |
| F5 | B | x≠3 ; l’équation réduite x+3=6 donne seulement trois, interdit. | S3 |
| F6 | D | Les solutions sont zéro et moins six. | S4 |
| F7 | C | Moins sept et sept sont deux solutions distinctes. | S5 |
| F8 | A | Factorisation (x−4)(x−5) ; la plus grande est cinq. | S5 |
| F9 | C | Addition : 3(x+y)=36. | S6 |
| F10 | D | Soustraire les deux lignes : 2x=16. | S6 |
| F11 | A | −3x≥−9 ; diviser par un nombre négatif inverse le sens. Trois est inclus. | S7 |
| F12 | A | −1<x≤4 ; les entiers zéro à quatre sont cinq. | S8 |
| F13 | A | Solutions un et sept ; leur somme est huit. | S9 |
| F14 | A | 3/2≤x≤13/2 ; entiers deux à six. | S9 |
| F15 | D | 2<x<7 : trois, quatre, cinq et six. | S10 |
| F16 | C | −2<x≤1 ; les entiers sont moins un, zéro et un. Moins deux est interdit. | Avancé A |
| F17 | B | k=4 donne 0=9 ; sinon le coefficient non nul donne une solution. | Avancé B |
| F18 | A | La condition devient 0=0 pour tout réel x. | Avancé B |
| F19 | C | Les deux valeurs absolues devraient s’annuler simultanément, ce qui imposerait un et six à x. | Avancé C |
| F20 | C | La multiplication par x positif donne x<3/2 ; la contrainte x>0 demeure et l’égalité est exclue. | Avancé A |

</details>

## Votre bilan — Reprendre la structure, pas mémoriser le résultat

Une erreur doit d’abord être localisée : traduction, choix de règle, calcul, domaine ou réponse à une autre grandeur. Reprenez le passage indiqué dans le corrigé, expliquez votre choix de méthode en une phrase, puis essayez une variante sans ouvrir les aides.

Une réponse juste après un indice est une réussite accompagnée ; elle ne confirme pas encore le transfert autonome. Les ateliers avancés ne doivent pas masquer une fragilité de fondation, ni bloquer le chapitre suivant lorsque les prérequis sont acquis. Ce bilan est propre à la leçon et ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Premier degré ax=b | a≠0 : une solution ; a=0 : contradiction ou identité |
| Dénominateurs variables | Écrire les valeurs interdites avant toute simplification |
| Produit nul | Un facteur nul ou l’autre ; ne pas diviser sans traiter zéro |
| x²=c | c>0 : deux réels opposés ; c=0 : zéro ; c<0 : aucun réel |
| Systèmes | Substitution, élimination ou combinaison correspondant à la demande |
| Inégalité | Division/multiplication par un négatif → inverser le sens |
| Entiers dans un intervalle | Premier et dernier entiers admissibles ; compter avec les bornes |
| Valeur absolue | Distance ; intérieur avec « et », extérieur avec « ou » |
| Signe d’un produit | Découper la droite aux zéros des facteurs |
| Signe d’un quotient | Zéros et valeurs interdites ont des rôles distincts |
| Paramètres | Traiter d’abord le cas qui annule un coefficient |
| Vérification finale | Domaine, exhaustivité, puis grandeur demandée |

**Prochaine étape : les problèmes algébriques.** Emportez le même réflexe : identifier la structure et les contraintes avant de développer le calcul.
