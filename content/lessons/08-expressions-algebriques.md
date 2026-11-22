# Expressions algébriques : transformer sans perdre l’information

Une longue expression peut cacher une somme déjà connue, un facteur qui s’annule ou un terme constant. Développer tout ce qui se présente n’est pas toujours le chemin le plus court.

**Votre objectif :** choisir entre remplacer, réduire, développer et factoriser, puis vérifier que la nouvelle écriture représente la même valeur pour toutes les valeurs autorisées. Une bonne transformation conserve l’information et les restrictions du départ.

## Avant de commencer — Trois choix de structure

Pour chaque réponse, notez votre confiance et le geste utilisé.

<!-- interaction D1 | QCM unique + confiance | compétence : moins-parenthese -->
**D1.** Que vaut \(3+x-(x-7)\), pour tout réel x ?

A. \(-4\) · B. \(10\) · C. \(2x-4\) · D. \(2x+10\).

<details><summary>Raisonnement</summary>

**B.** Le moins devant la parenthèse multiplie tout son contenu par moins un : \(3+x-x+7=10\).

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : domaine-simplification -->
**D2.** Pour x≠3, \((x^2-9)/(x-3)\) vaut :

A. \(x-3\) · B. \(x^2+3\) · C. \(1\) · D. \(x+3\).

<details><summary>Raisonnement</summary>

**D.** Le numérateur est \((x-3)(x+3)\). On peut simplifier le facteur x−3 parce qu’il est non nul. La restriction x≠3 demeure, même après simplification.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : expression-connue -->
**D3.** Si x+y=8, que vaut \(5x+5y-3\) ?

A. \(37\) · B. \(40\) · C. \(5\) · D. Impossible sans x et y.

<details><summary>Raisonnement</summary>

**A.** Factoriser donne \(5(x+y)-3=5\times8-3=37\). On n’a pas besoin de déterminer x et y séparément.

</details>

D1 appelle S2–S3 ; D2 S5–S7 ; D3 S8–S9. Cherchez d’abord si l’énoncé vous a déjà donné un bloc entier de l’expression.

## Séquence 1 — Expression, valeur et identité

Une expression comme \(2x+3\) décrit un nombre qui dépend de x. Une égalité comme \(2x+3=11\) impose une condition à x. Une identité comme \(2(x+3)=2x+6\) est vraie pour toutes les valeurs de son domaine.

La multiplication peut être implicite : \(3x=3\times x\), \(xy=x\times y\). Elle ne signifie pas une concaténation de chiffres : pour x=2,y=5, xy vaut dix, pas vingt-cinq. Un nombre à deux chiffres de dizaine x et d’unité y se note \(10x+y\).

Les opérations gardent leurs priorités : parenthèses, puissances, multiplications/divisions, additions/soustractions. Pour remplacer x par une valeur négative, mettez des parenthèses : \(x^2\) devient \((-2)^2\), pas \(-2^2\).

### Deux évaluations ne sont pas une seule substitution

Pour \(P(x)=x^2+4x\), \(P(2)-P(1)=(4+8)-(1+4)=7\). En revanche, \(P(2-1)=P(1)=5\). Une différence d’images n’est généralement pas l’image de la différence. Évaluez les deux blocs et gardez les parenthèses autour du second avant de soustraire.

### Atelier I1 — Remplacer la lettre, puis calculer

<!-- interaction I1 | champs de substitution avec parentheses | compétence : substitution -->
Pour x=−2, calculez \(2x^2-3x+1\), puis \(2(x+3)^2-5\).

<details><summary>Correction</summary>

Première expression : \(2\times4-3\times(-2)+1=15\). Deuxième : x+3=1, donc \(2\times1-5=-3\). La puissance porte sur x dans le premier calcul et sur tout x+3 dans le second.

</details>

## Séquence 2 — Réduire seulement les termes semblables

Un terme a une partie numérique et une partie littérale : dans \(-4x^2\), le coefficient est moins quatre. Les termes \(3x\) et \(5x\) sont semblables ; \(3x\) et \(5x^2\) ne le sont pas.

\[
3x+5x-2+7=8x+5,
\qquad 3x+5x^2\text{ ne se réduit pas en }8x^3.
\]

Dans une somme, on additionne les coefficients des mêmes parties littérales. Dans un produit, on multiplie les coefficients et combine les puissances : \((3x)(5x^2)=15x^3\).

Le coefficient de x dans \(-x+4\) est moins un, pas zéro. L’absence de terme en x correspond au coefficient zéro. Un terme constant ne dépend pas de x, mais peut dépendre d’un paramètre k.

### Atelier I2 — Le tri des termes

<!-- interaction I2 | classement par partie litterale | compétence : termes-semblables -->
Réduisez \(4x^2-3x+7+2x-x^2-5\). Identifiez le coefficient de x², le coefficient de x et le terme constant.

<details><summary>Correction</summary>

\(3x^2-x+2\). Les coefficients demandés sont trois, moins un et deux. On regroupe les puissances identiques, sans mélanger x et x².

</details>

## Séquence 3 — Développer : distribuer chaque facteur à chaque terme

\[
a(b+c)=ab+ac,\qquad a(b-c)=ab-ac.
\]

Un moins devant une parenthèse signifie un facteur moins un : \(-(u-v)=-u+v\). Un facteur négatif ne change pas seulement le premier signe.

\[
5(x+2)-2(x-3)=5x+10-2x+6=3x+16.
\]

Pour deux parenthèses, chaque terme de la première multiplie chaque terme de la seconde :

\[
(x+3)(x+5)=x^2+5x+3x+15=x^2+8x+15.
\]

Une grille à quatre cases aide à compter les quatre produits. La somme de deux binômes, elle, ne demande pas cette double distributivité.

### Atelier I3 — Les quatre produits avant la réduction

<!-- interaction I3 | grille 2x2 et reduction | compétence : distributivite -->
Développez \((2x-3)(x+4)\), puis vérifiez votre résultat pour x=0 et x=1.

<details><summary>Correction</summary>

Produits \(2x^2,8x,-3x,-12\), soit \(2x^2+5x-12\). Pour zéro, les deux écritures valent moins douze ; pour un, elles valent moins cinq. Ces tests détectent des erreurs, mais c’est la distributivité qui établit l’identité.

</details>

## Séquence 4 — Chercher le coefficient demandé sans tout développer

Dans \((ax+b)(cx+d)\), le coefficient de x² vaut ac, celui de x vaut ad+bc et le terme constant bd.

Si l’on ne demande que le terme constant de \((3x-2)(4x+5)\), il suffit de calculer \((-2)\times5=-10\). On peut aussi substituer x=0 à tout le produit : tous les termes contenant x s’annulent.

Si l’on demande le coefficient de x dans \((x+3)(x+5)\), seuls les deux produits croisés contribuent : cinq plus trois, soit huit. Le produit des constantes quinze ne contribue pas à ce coefficient.

### Atelier I4 — Le minimum de calcul nécessaire

<!-- interaction I4 | selection des cases contributrices | compétence : coefficients -->
Dans \((4x-1)(2x+3)\), trouvez séparément le coefficient de x², le coefficient de x et le terme constant. Quelles cases de la grille contribuent à chacun ?

<details><summary>Correction</summary>

x² : huit ; x : \(12-2=10\) ; constante : moins trois. Les deux cases croisées se réunissent dans le coefficient de x.

</details>

## Séquence 5 — Factoriser : reconstruire un produit utile

Factoriser est le mouvement inverse du développement. On cherche un facteur qui multiplie **tout** le groupe :

\[
6x+18=6(x+3),\qquad x^2+3x=x(x+3).
\]

Le facteur peut être une expression : \((x+1)y+3(x+1)=(x+1)(y+3)\). Il peut être négatif : \(5-x=-(x-5)\). Cette dernière transformation aide à reconnaître deux facteurs opposés.

Choisissez une factorisation en fonction du but : simplifier un quotient, exploiter une somme connue ou résoudre un produit nul au chapitre suivant. Factoriser n’est pas forcément « calculer moins » dans toutes les situations ; c’est rendre une structure visible.

### Atelier I5 — Le même bloc deux fois

<!-- interaction I5 | surlignage de facteur et reconstitution | compétence : facteur-commun -->
Factorisez \(3(x-2)+x(x-2)\), puis \(2x-6\). Vérifiez en redéveloppant.

<details><summary>Correction</summary>

\((x-2)(x+3)\), puis \(2(x-3)\). Le facteur commun n’est pas toujours une seule lettre ou un seul nombre.

</details>

## Séquence 6 — Trois identités remarquables à lire dans les deux sens

\[
\boxed{(a+b)^2=a^2+2ab+b^2},
\]
\[
\boxed{(a-b)^2=a^2-2ab+b^2},
\]
\[
\boxed{(a-b)(a+b)=a^2-b^2}.
\]

La deuxième identité garde \(+b^2\). La différence de carrés factorise \(x^2-9\), mais \(x^2+9\) n’a pas cette factorisation réelle. Et \((a+b)^2\) contient un terme croisé ; ce n’est pas seulement a²+b².

Pour reconnaître \(x^2+6x+9\), cherchez les deux carrés et vérifiez le terme du milieu : \(2\times x\times3=6x\). Il vaut donc \((x+3)^2\).

### Compléter un carré

\[
x^2+6x+k=(x+3)^2+(k-9).
\]

Pour que l’expression soit identiquement le carré de x+3, il faut k=9. Une égalité vraie pour **tout x** n’est pas une égalité à vérifier pour un seul x choisi par commodité.

### Atelier I6 — Le terme manquant

<!-- interaction I6 | cartes carre/terme-croise et parametre | compétence : identites -->
Complétez \(x^2-10x+k=(x-5)^2\), puis factorisez \(9x^2-16\).

<details><summary>Correction</summary>

k=25. La seconde expression vaut \((3x-4)(3x+4)\). Il faut reconnaître neuf x² comme le carré de 3x, pas comme le carré de 9x.

</details>

## Séquence 7 — Fractions algébriques : simplifier sans effacer les interdits

Le dénominateur de l’expression initiale doit être non nul. Notez les valeurs interdites **avant** de simplifier.

\[
\frac{x^2-9}{x-3}=x+3\quad\text{pour }x\ne3.
\]

Le résultat x+3 est défini en trois, mais l’expression initiale ne l’est pas. La transformation ne remplit pas ce « trou » du domaine.

On simplifie des facteurs, pas des termes de somme : \((x+3)/x\ne3\). En revanche, \((x^2+3x)/x=x+3\) pour x≠0, après factorisation du numérateur.

Pour additionner \(1/x+1/(x+1)\), les deux interdits sont x≠0 et x≠−1, puis le résultat est \((2x+1)/[x(x+1)]\). Chacun des deux facteurs du dénominateur doit rester non nul.

### Atelier I7 — La simplification n’est pas un nouveau domaine

<!-- interaction I7 | domaine puis simplification puis test interdit | compétence : domaine -->
Simplifiez \((x^2+8x+16)/(x+4)-x\). Le résultat est-il une justification pour accepter x=−4 ?

<details><summary>Correction</summary>

Domaine : x≠−4. Le numérateur est \((x+4)^2\), donc l’expression vaut \(x+4-x=4\) sur ce domaine. Même si la constante quatre est définie partout, l’original reste indéfini en moins quatre.

</details>

## Séquence 8 — Substituer une expression entière

Si \(2x+1=4\), l’expression \((2x+1)^2-3(2x+1)\) vaut directement \(4^2-3\times4=4\). Résoudre d’abord x puis tout redévelopper fonctionnerait, mais ajoute du calcul inutile.

Même principe avec \(x+y=s\) ou xy=p :

\[
4x+4y+7=4(x+y)+7,
\quad(3x)(2y)=6xy,
\quad5y-5x=-5(x-y).
\]

Les données peuvent déterminer l’expression demandée sans déterminer les inconnues. Ne concluez pas « impossible » trop vite.

### Atelier I8 — Remplacer le bloc, pas la lettre

<!-- interaction I8 | choix d’une sous-expression a substituer | compétence : bloc-connu -->
On sait \(3x-2=7\). Calculez \(6x-4\), puis \((3x-2)^2+(3x-2)\), sans résoudre x.

<details><summary>Correction</summary>

Le premier vaut deux fois le bloc connu : quatorze. Le second vaut \(7^2+7=56\). La substitution peut porter sur une expression composée.

</details>

## Séquence 9 — Somme et produit connus : retrouver les expressions symétriques

Si x+y=s et xy=p :

\[
x^2+y^2=s^2-2p,\qquad(x-y)^2=s^2-4p,
\]
\[
(x+a)(y+a)=p+as+a^2.
\]

Exemple : x+y=7,xy=10. Alors x²+y²=29 et (x−y)²=9. On ne connaît pas le signe de x−y sans savoir lequel est le plus grand.

Pour \((2x+y)(x+2y)\), développer intelligemment donne \(2x^2+5xy+2y^2=2s^2+p\). On vise la somme et le produit connus, pas forcément x et y.

Pour des réels x,y, \((x-y)^2\ge0\), donc les données doivent vérifier \(s^2\ge4p\). Si elles ne le font pas, aucun couple réel ne les satisfait. Ce contrôle évite de donner une valeur à un problème incohérent.

### Atelier I9 — Deux données, trois résultats

<!-- interaction I9 | tableau expressions en s et p | compétence : somme-produit -->
x+y=9 et xy=14. Trouvez x²+y², (x−y)² et (x+2)(y+2).

<details><summary>Correction</summary>

\(81-28=53\), \(81-56=25\), \(14+18+4=36\). Ces valeurs se déduisent des deux données sans attribuer un ordre à x et y.

</details>

## Séquence 10 — Paramètres et identité vraie pour tout x

Si \(kx+3x=7x\) pour tout réel x, les coefficients de x doivent être égaux : k+3=7, donc k=4. Tester uniquement x=0 ne donne aucune information ici : l’égalité 0=0 serait vraie pour tout k.

Pour que \(5(x+2)+k(x-1)\) soit constant en x, développez seulement ce qui dépend de x : \((5+k)x+(10-k)\). Le coefficient de x doit être nul : k=−5. La constante résultante vaut quinze.

Une fois deux polynômes réduits, une identité exige l’égalité des coefficients de chaque puissance. Ne pas confondre le paramètre qui définit l’expression et l’inconnue dont on cherche une valeur particulière au chapitre suivant.

### Atelier I10 — Annuler la dépendance

<!-- interaction I10 | coefficient de x puis parametre | compétence : identite-parametre -->
Pour quelle valeur de k l’expression \(3(x+4)+k(x-2)\) ne dépend-elle plus de x ? Quelle est alors sa valeur ?

<details><summary>Correction</summary>

\((3+k)x+12-2k\). Il faut k=−3, et l’expression devient dix-huit. Le terme constant doit lui aussi être évalué après choix du paramètre.

</details>

## Atelier avancé A — Expressions réciproques

Pour x≠0, si \(x+1/x=t\), alors :

\[
\left(x+\frac1x\right)^2=x^2+2+\frac1{x^2},
\qquad x^2+\frac1{x^2}=t^2-2.
\]

Le terme croisé vaut deux car \(x\times(1/x)=1\). Pour t=3, on obtient sept. Et \(x^2+1/x^2+x+1/x\) vaut dix.

On peut aussi déduire \((x-1/x)^2=t^2-4\). La connaissance de ce carré ne donne pas le signe de x−1/x. Si x est réel non nul, la donnée doit satisfaire \(|t|\ge2\), conséquence du carré non négatif.

### Atelier I11 — Le terme croisé caché

<!-- interaction I11 | developpement de carre et valeurs derivees | compétence : reciproque -->
x≠0 et \(x+1/x=4\). Calculez \(x^2+1/x^2\) puis \((x-1/x)^2\).

<details><summary>Correction</summary>

Quatorze et douze. Élever au carré le bloc connu ne donne pas directement la somme des carrés : il faut retirer le terme croisé deux.

</details>

## Atelier avancé B — Restes polynomiaux et différences de cubes

### Reste d’une division par x−a

Si un polynôme s’écrit \(P(x)=(x-a)Q(x)+r\), avec r constant, remplacer x par a donne r=P(a). Il suffit donc d’évaluer P(a) pour connaître le reste de la division par x−a.

Pour \(P(x)=x^2+5x+7\), le reste par x−1 vaut P(1)=13. Pour une division par x+2, la valeur à utiliser est **moins deux**.

Cette méthode concerne un diviseur linéaire x−a ; un reste pour une division par un polynôme de degré deux n’est généralement pas une constante.

### Différence de cubes

\[
x^3-a^3=(x-a)(x^2+ax+a^2).
\]

Pour x≠5, \((x^3-125)/(x-5)-x^2-5x=25\). La forme du produit explique l’annulation des termes. \((x-a)^3\) n’est pas x³−a³.

### Atelier I12 — Le reste sans la division complète

<!-- interaction I12 | choix de substitution et factorisation | compétence : reste-cube -->
Pour \(P(x)=x^2+3x+8\), trouvez le reste de la division par x+2. Puis simplifiez \((x^3-8)/(x-2)-x^2-2x\), avec x≠2.

<details><summary>Correction</summary>

P(−2)=4−6+8=6. La seconde expression vaut quatre, puisque x³−8=(x−2)(x²+2x+4). La valeur interdite deux reste exclue.

</details>

## La boîte à outils — Quelle écriture rend la donnée visible ?

| But | Geste prioritaire | À conserver |
|---|---|---|
| Valeur pour x donné | Substituer avec parenthèses | Priorités et signes |
| Réduire une somme | Regrouper les termes semblables | Puissance de chaque lettre |
| Coefficient particulier | Ne calculer que les produits contributeurs | Terme constant / linéaire / quadratique |
| Simplifier un quotient | Domaine puis factorisation | Valeurs interdites initiales |
| Bloc connu | Le faire apparaître et le substituer | Exactement le même bloc |
| Somme et produit connus | Identités symétriques | Signe non déterminé par un carré |
| Identité en x | Comparer les coefficients | « Pour tout x » |
| Reste par x−a | Évaluer P(a) | Signe de a |

### Atelier I13 — Choisissez avant de calculer

<!-- interaction I13 | association de buts et strategies | compétence : selection-methode -->
Associez une stratégie à chaque demande : valeur de \(5x+5y\) connaissant x+y ; terme constant d’un produit ; simplification de \((x^2-16)/(x-4)\) ; coefficient annulant la dépendance en x.

<details><summary>Correction</summary>

Factoriser cinq ; évaluer en zéro ou multiplier les constantes ; écrire x≠4 puis factoriser une différence de carrés ; réduire et annuler le coefficient de x. Le développement intégral n’est pas obligatoire dans chacun des cas.

</details>

### Atelier I14 — Tester n’est pas démontrer

<!-- interaction I14 | contre-exemple libre + choix de preuve | compétence : controle-identite -->
L’égalité \((x+1)^2=x^2+1\) est vraie pour x=0. Est-ce une identité ? Donnez un contre-exemple et la différence exacte entre les deux membres.

<details><summary>Correction</summary>

Pour x=1, les membres valent quatre et deux : ce n’est pas une identité. Leur différence est 2x. Un test qui échoue réfute une identité ; un test qui réussit ne la démontre pas pour tous les réels.

</details>

## Mission finale — Choisir, calculer, vérifier

Répondez aux vingt questions avant d’ouvrir la correction. Les huit premières consolident les fondations ; les huit suivantes combinent les outils ; les quatre dernières demandent un transfert ou un contrôle plus exigeant. Aucune limite de temps au premier passage. Indiquez votre confiance et la méthode choisie.

### F1

Pour x=−3, calculer \(2x^2-x+4\).

A. \(-11\)  
B. \(19\)  
C. \(25\)  
D. \(13\)  

### F2

Réduire \(4x^2-x+3+2x-x^2-5\).

A. \(3x^2+x-2\)  
B. \(5x^2+x-2\)  
C. \(3x^2+x+8\)  
D. \(3x^2-3x-2\)  

### F3

Développer et réduire \(3(x-2)-2(x+4)\).

A. \(x-14\)  
B. \(5x-14\)  
C. \(x-2\)  
D. \(x+2\)  

### F4

Quel est le coefficient de x dans \((2x-3)(x+5)\) ?

A. \(10\)  
B. \(7\)  
C. \(-3\)  
D. \(-15\)  

### F5

Quel est le terme constant de \((4x-2)(3x+7)\) ?

A. \(-14\)  
B. \(14\)  
C. \(22\)  
D. \(12\)  

### F6

Quelle factorisation de \(6x+12\) est correcte ?

A. \(3(x+4)\)  
B. \(6(x-2)\)  
C. \(6(x+12)\)  
D. \(6(x+2)\)  

### F7

Pour x≠5, simplifier \((x^2-25)/(x-5)\).

A. \(x-5\)  
B. \(1\)  
C. \(x+5\)  
D. \(x^2+5\)  

### F8

Pour x≠−3, que vaut \((x^2+6x+9)/(x+3)-x\) ?

A. \(9\)  
B. \(3\)  
C. \(-3\)  
D. \(0\)  

### F9

Si x+y=11 et xy=24, que vaut \(x^2+y^2\) ?

A. \(169\)  
B. \(97\)  
C. \(73\)  
D. \(121\)  

### F10

Pour les mêmes données x+y=11 et xy=24, que vaut \((x-y)^2\) ?

A. \(97\)  
B. \(5\)  
C. \(25\)  
D. \(73\)  

### F11

Si x+y=7 et xy=10, que vaut \((x+2)(y+2)\) ?

A. \(19\)  
B. \(24\)  
C. \(28\)  
D. \(49\)  

### F12

On sait \(2x-3=5\). Que vaut \(4x-6\) ?

A. \(10\)  
B. \(20\)  
C. \(8\)  
D. \(2\)  

### F13

On sait \(3x+2=7\). Que vaut \((3x+2)^2-(3x+2)\) ?

A. \(56\)  
B. \(49\)  
C. \(7\)  
D. \(42\)  

### F14

Pour quelle valeur de k l’expression \(4(x+1)+k(x-2)\) ne dépend-elle plus de x ?

A. \(2\)  
B. \(-4\)  
C. \(4\)  
D. \(-2\)  

### F15

Pour tout x, \(x^2-12x+k=(x-6)^2\). Que vaut k ?

A. \(6\)  
B. \(12\)  
C. \(-36\)  
D. \(36\)  

### F16

x≠0 et \(x+1/x=5\). Que vaut \(x^2+1/x^2\) ?

A. \(5\)  
B. \(27\)  
C. \(23\)  
D. \(25\)  

### F17

Pour \(P(x)=x^2-2x+9\), quel est le reste de la division par x+1 ?

A. \(8\)  
B. \(12\)  
C. \(6\)  
D. \(9\)  

### F18

Pour x≠3, simplifier \((x^3-27)/(x-3)-x^2-3x\).

A. \(27\)  
B. \(0\)  
C. \(3\)  
D. \(9\)  

### F19

Pour tout x, \((x+a)^2-(x-a)^2=20x\). Que vaut a ?

A. \(20\)  
B. \(5\)  
C. \(10\)  
D. \(4\)  

### F20

Si x+y=5 et xy=6, que vaut \((2x+y)(x+2y)\) ?

A. \(62\)  
B. \(56\)  
C. \(31\)  
D. \(50\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | C | Substitution avec parenthèses : 18+3+4=25. | S1 |
| F2 | A | Regrouper séparément les termes en x², en x et les constantes. | S2 |
| F3 | A | 3x−6−2x−8=x−14. | S3 |
| F4 | B | Les deux termes croisés donnent 10x−3x. | S4 |
| F5 | A | Il provient du produit (−2)×7. | S4 |
| F6 | D | Le six doit multiplier x et deux pour retrouver 6x+12. | S5 |
| F7 | C | Factorisation (x−5)(x+5) ; l’interdit cinq demeure. | S7 |
| F8 | B | Le quotient vaut x+3 ; retirer x laisse trois. | S7 |
| F9 | C | (x+y)²−2xy=121−48=73. | S9 |
| F10 | C | (x+y)²−4xy=121−96=25. | S9 |
| F11 | C | xy+2(x+y)+4=10+14+4=28. | S9 |
| F12 | A | L’expression demandée est deux fois le bloc connu. | S8 |
| F13 | D | Remplacer le bloc par sept : 49−7=42. | S8 |
| F14 | B | Le coefficient de x vaut 4+k ; il doit être nul. | S10 |
| F15 | D | Le carré de six donne le terme constant trente-six. | S6 |
| F16 | C | Le carré du bloc connu comprend le terme croisé deux : 25−2. | Avancé A |
| F17 | B | Le diviseur est x−(−1) ; le reste est P(−1)=1+2+9=12. | Avancé B |
| F18 | D | Le quotient vaut x²+3x+9 ; les termes variables s’annulent. | Avancé B |
| F19 | B | La différence vaut 4ax. L’identité impose 4a=20. | S10 |
| F20 | B | Le produit vaut 2(x+y)²+xy=50+6. | S9 |

</details>

## Votre bilan — Reprendre la structure, pas mémoriser le résultat

Une erreur doit d’abord être localisée : traduction, choix de règle, calcul, domaine ou réponse à une autre grandeur. Reprenez le passage indiqué dans le corrigé, expliquez votre choix de méthode en une phrase, puis essayez une variante sans ouvrir les aides.

Une réponse juste après un indice est une réussite accompagnée ; elle ne confirme pas encore le transfert autonome. Les ateliers avancés ne doivent pas masquer une fragilité de fondation, ni bloquer le chapitre suivant lorsque les prérequis sont acquis. Ce bilan est propre à la leçon et ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Réduction | Additionner seulement les coefficients des termes semblables |
| Distributivité | Multiplier chaque terme ; un moins porte sur toute la parenthèse |
| Double distributivité | Quatre produits pour deux binômes |
| Coefficient / constante | Isoler les produits contributeurs ; P(0) donne le terme constant |
| Factorisation | Transformer une somme en produit commun |
| Identités remarquables | Carré d’une somme/différence ; produit des conjugués |
| Fraction algébrique | Domaine initial puis simplification de facteurs |
| Bloc connu | Réécrire l’expression pour substituer tout le bloc |
| Somme s et produit p connus | x²+y²=s²−2p ; (x−y)²=s²−4p |
| Identité en x | Les coefficients de toutes les puissances doivent coïncider |
| Expression réciproque | Si x+1/x=t, alors x²+1/x²=t²−2, x≠0 |
| Reste par x−a | Évaluer P(a) ; attention au signe de a |

**Prochaine étape : les équations et les inégalités.** Emportez le même réflexe : identifier la structure et les contraintes avant de développer le calcul.
