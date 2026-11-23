# Suites et régularités : compter les étapes, pas seulement les nombres

Le cinquième terme n’est pas obtenu après cinq opérations si l’on connaît déjà le premier. Un bloc de quatre valeurs ne place pas le vingtième terme dans sa première case. Une suite qui alterne deux opérations ne se traite pas toujours comme une suite de raison constante.

**Votre objectif :** identifier une règle, suivre les rangs et choisir un raccourci justifié pour calculer un terme ou une somme. Une régularité utile doit expliquer tous les éléments présentés, pas seulement le dernier écart.

## Avant de commencer — Trois compteurs

Donnez votre réponse et votre confiance. Notez surtout le nombre d’opérations effectuées.

<!-- interaction D1 | QCM unique + confiance | compétence : rang-etapes -->
**D1.** Une suite arithmétique a pour premier terme trois et pour raison deux. Son cinquième terme vaut :

A. Treize. · B. Onze. · C. Dix. · D. Huit.

<details><summary>Raisonnement</summary>

**B.** Du premier au cinquième, il y a quatre pas : 3+4×2=11.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : recurrence -->
**D2.** Avec u₁=2 et uₙ₊₁=2uₙ+1, que vaut u₃ ?

A. Cinq. · B. Sept. · C. Onze. · D. Neuf.

<details><summary>Raisonnement</summary>

**C.** u₂=5 puis u₃=11. Le rang trois ne signifie pas qu’on remplace directement uₙ par trois.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : cycle-reste-zero -->
**D3.** La suite répète le bloc 2,5,9,4, depuis le rang un. Quel est le terme de rang vingt ?

A. Deux. · B. Cinq. · C. Neuf. · D. Quatre.

<details><summary>Raisonnement</summary>

**D.** Vingt est un multiple de quatre : il tombe sur la quatrième et dernière case du bloc, pas sur la première.

</details>

D1 appelle S1–S3, D2 S7 et D3 S8. Le mot « rang » ne désigne pas une valeur de la suite.

## Séquence 1 — Un terme, son rang et sa règle

Une suite associe une valeur uₙ à chaque rang entier de son domaine. Dans cette leçon, les rangs commencent à un sauf indication contraire. Le premier terme est donc u₁ ; si une autre convention commence à zéro, il faut adapter le nombre de pas.

Une formule explicite donne directement uₙ à partir de n : uₙ=3n+2. Une récurrence donne le terme suivant à partir d’un ou plusieurs termes précédents : uₙ₊₁=2uₙ+1, avec un premier terme donné.

Une liste finie de valeurs ne détermine pas, à elle seule, une unique continuation mathématique. Dans un exercice de reconnaissance, cherchez la règle annoncée ou le modèle simple attendu qui explique la liste et les choix. Une hypothèse reconnue n’est pas une preuve d’unicité parmi toutes les règles imaginables.

### Atelier I1 — Étiquetez les rangs

<!-- interaction I1 | tableau rang/valeur et transitions | compétence : indexation -->
On donne u₁=5 puis on ajoute trois à chaque étape. Complétez les rangs un à cinq et indiquez le nombre d’ajouts entre u₁ et u₅. Quel terme obtient-on après cinq ajouts ?

<details><summary>Correction</summary>

Valeurs 5,8,11,14,17. Quatre ajouts mènent à u₅. Après cinq ajouts, on atteint u₆=20. Les deux questions n’ont pas la même réponse.

</details>

## Séquence 2 — Suite arithmétique : un écart constant

Une suite est arithmétique de raison r si uₙ₊₁=uₙ+r. Alors :

\[
\boxed{u_n=u_1+(n-1)r},\qquad\boxed{u_j-u_i=(j-i)r}.
\]

La raison peut être positive, négative ou nulle. Avec r<0, la suite décroît ; avec r=0, elle est constante. Pour une suite commençant à u₀, la formule devient uₙ=u₀+nr.

Si u₃=11 et u₇=31, quatre pas séparent les termes : r=(31−11)/4=5. Pour retrouver u₁, retrancher deux raisons à u₃. Remonter une suite de raison négative exige d’ajouter la valeur absolue du pas.

### Atelier I2 — Raison et retour au début

<!-- interaction I2 | deux rangs connus et raison | compétence : suite-arithmetique -->
Une suite arithmétique vérifie u₄=17 et u₉=37. Trouvez sa raison, son premier terme et son onzième terme.

<details><summary>Correction</summary>

Cinq pas pour un écart vingt, donc r=4. u₁=17−3×4=5 ; u₁₁=5+10×4=45. Le onze du rang n’est pas le nombre de pas depuis le premier terme.

</details>

## Séquence 3 — Chercher un rang et respecter son domaine

Dans uₙ=2+3(n−1), le terme trente-cinq apparaît lorsque 2+3(n−1)=35, soit n=12. Le rang doit être un entier du domaine. Une solution n=12,5 signifie que la valeur n’est pas un terme de cette suite indexée par des entiers.

Pour trouver le premier dépassement d’un seuil, résoudre une inégalité, puis prendre le premier rang entier admissible. Avec uₙ=4+3(n−1), dépasser strictement vingt-neuf donne n>28/3, donc n=10. Vérifiez le terme précédent : u₉=28, u₁₀=31.

Pour une suite décroissante, l’inégalité s’inverse lors d’une division par r<0. Une suite constante peut ne jamais atteindre un seuil ou le satisfaire dès le premier terme ; on ne divise pas par une raison nulle.

### Atelier I3 — Atteindre ou dépasser ?

<!-- interaction I3 | equation de rang et seuil strict | compétence : recherche-rang -->
Pour uₙ=5+4(n−1), à quel rang apparaît vingt-neuf ? À quel premier rang dépasse-t-on vingt-neuf ? Trente apparaît-il ?

<details><summary>Correction</summary>

Vingt-neuf au rang sept ; dépassement au rang huit, valeur trente-trois. Trente demanderait n=29/4, non entier : ce n’est pas un terme. Atteindre et dépasser strictement diffèrent à la borne.

</details>

## Séquence 4 — Sommes arithmétiques et paires symétriques

Pour n termes d’une suite arithmétique :

\[
\boxed{S_n=\frac{n(u_1+u_n)}2}.
\]

Les termes symétriques ont la même somme. Cela fonctionne avec un nombre pair ou impair de termes : si le nombre est impair, le terme central est la moitié de la somme des extrêmes.

Si u₁=3,u₉=35, alors u₃+u₇=u₁+u₉=38. On n’a pas besoin de calculer r pour cette somme précise.

### Des rangs impairs forment leur propre suite

Les termes u₁,u₃,u₅,… d’une suite arithmétique ont pour raison 2r. Les rangs pairs aussi, mais leur premier terme est u₂. Dans uₙ=4+2(n−1), les rangs 1,3,5,7,9 donnent 4,8,12,16,20 : somme soixante.

Comptez les termes sélectionnés avant d’appliquer une formule de somme. Le dernier rang neuf ne signifie pas qu’on additionne neuf termes dans cette sélection.

### Atelier I4 — Somme complète et somme choisie

<!-- interaction I4 | appariement et filtre de rangs | compétence : somme-arithmetique -->
Une suite arithmétique de premier terme deux et de raison trois a huit termes. Donnez son dernier terme, la somme totale et la somme de ses termes de rangs 2,4,6,8.

<details><summary>Correction</summary>

Dernier vingt-trois ; somme 8(2+23)/2=100. Les rangs pairs donnent cinq, onze, dix-sept, vingt-trois, soit cinquante-six. La somme sélectionnée ne se calcule pas avec les extrêmes deux et vingt-trois.

</details>

## Séquence 5 — Suite géométrique : un facteur constant

Une suite est géométrique de raison q si uₙ₊₁=quₙ. Pour q≠0 :

\[
\boxed{u_n=u_1q^{n-1}}.
\]

Pour q=0, le premier terme reste u₁ et tous les suivants valent zéro ; on traite u₁ séparément pour ne pas faire apparaître 0⁰. Pour q=1, la suite est constante.

Pour des termes non nuls, le quotient de deux termes consécutifs donne la raison. Doubler ou diviser par deux est une évolution géométrique, pas arithmétique. Avec u₁>0 et 0<q<1, la suite décroît en restant positive. Avec q<0 et u₁≠0, les signes alternent ; la suite n’est généralement pas monotone.

Une quantité de cent quatre-vingt-douze divisée par deux **quatre fois** devient douze. Si elle est u₁, ce douze est u₅, pas u₄.

### Atelier I5 — Comptez les multiplications

<!-- interaction I5 | echelle multiplicative et rang | compétence : suite-geometrique -->
u₁=3 et q=2. Que valent u₅ et le résultat après cinq multiplications par deux ? Pour une autre suite u₁=64,q=1/2, à quel rang obtient-on quatre ?

<details><summary>Correction</summary>

u₅=48 ; après cinq multiplications, u₆=96. La seconde suite donne 64,32,16,8,4 : rang cinq. Un total de quatre divisions suffit à atteindre ce cinquième terme.

</details>

## Séquence 6 — Sommes géométriques : compter les termes avant de factoriser

Pour q≠1 et n≥1 :

\[
\boxed{S_n=u_1\frac{1-q^n}{1-q}}.
\]

La puissance est n, car on additionne n termes de puissances zéro à n−1. La formule se justifie en soustrayant qSₙ de Sₙ : tous les termes intérieurs se simplifient. Pour q=1, Sₙ=nu₁.

Avec 1,2,4,8, la somme vaut quinze, pas seize. Avec u₁=3,q=−2, six termes totalisent moins soixante-trois : la formule reste valable, mais il faut conserver le signe de qⁿ et les parenthèses.

Pour une somme de termes d’un rang p à un rang r≥p, il y a r−p+1 termes et le premier est uₚ. On peut appliquer la même formule à ce morceau de suite.

### Atelier I6 — Le dernier exposant n’est pas le nombre de termes

<!-- interaction I6 | sommes explicite et geometrique | compétence : somme-geometrique -->
Calculez 2+6+18+54, puis 1−2+4−8+16. Indiquez dans chaque cas le premier terme, la raison et le nombre de termes.

<details><summary>Correction</summary>

Premier : u₁=2,q=3,n=4, somme quatre-vingts. Second : premier un, raison moins deux, cinq termes, somme onze. La présence d’un signe moins ne transforme pas la somme en une simple alternance +1/−1.

</details>

## Séquence 7 — Récurrence : une ligne par transition

Pour u₁=2 et uₙ₊₁=2uₙ+n, les étapes sont :

| n utilisé | uₙ connu | Calcul du suivant |
|---|---|---|
| 1 | 2 | u₂=2×2+1=5 |
| 2 | 5 | u₃=2×5+2=12 |
| 3 | 12 | u₄=2×12+3=27 |
| 4 | 27 | u₅=2×27+4=58 |

L’indice n dans la règle correspond au terme **de départ** de la transition. Remplacer n par le rang d’arrivée produit une autre suite.

Une récurrence à deux termes, comme uₙ₊₂=uₙ₊₁+uₙ, demande deux valeurs initiales. Avec u₁=4,u₂=5, on obtient 9,14,23. Connaître seulement u₁ ne suffit pas à définir cette suite.

### Atelier I7 — Gardez la colonne des indices

<!-- interaction I7 | tableau de recurrence a completer | compétence : recurrence-indice -->
u₁=1 et uₙ₊₁=2uₙ+n. Calculez u₂,u₃,u₄. Puis, indépendamment, avec v₁=2,v₂=3 et vₙ₊₂=vₙ₊₁+vₙ, trouvez v₅.

<details><summary>Correction</summary>

u₂=3,u₃=8,u₄=19. Pour v : deux, trois, cinq, huit, treize, donc v₅=13. Les deux règles ne doivent pas être combinées.

</details>

## Séquence 8 — Suites périodiques : le reste zéro désigne la dernière case

Pour un bloc de longueur k répété depuis le rang un, la position dans le bloc vaut :

\[
\boxed{1+((n-1)\bmod k)}.
\]

On peut aussi diviser n par k : un reste r>0 désigne la case r ; un reste nul désigne la case k. Dans le bloc 2,5,9,4, le terme quinze vaut neuf et le terme seize quatre.

Une alternance de signes est un cycle de longueur deux. Si la suite commence par quatre puis moins quatre, les rangs impairs valent quatre, les pairs moins quatre. L’origine de numérotation doit être conservée.

### Atelier I8 — Une case, pas une valeur de reste

<!-- interaction I8 | roue de cycle et rangs eleves | compétence : periodicite -->
Le bloc 3,6,8 se répète depuis u₁. Donnez u₁₇,u₁₈ et u₁₉.

<details><summary>Correction</summary>

Six, huit et trois. Les restes de dix-sept, dix-huit et dix-neuf modulo trois sont deux, zéro et un ; zéro renvoie à la troisième case.

</details>

## Séquence 9 — Deux opérations alternées et deux suites entrelacées

La suite 10,13,12,15,14 suit +3 puis −1. Deux opérations complètes augmentent la valeur de deux ; pour un rang éloigné, compter les cycles puis l’éventuelle opération supplémentaire.

Une autre structure alterne deux suites différentes : rangs impairs 1,2,3,… ; rangs pairs 10,20,30,… La suite totale est 1,10,2,20,3,30,… Le rang pair 2k correspond au k-ième terme de la seconde suite ; le rang impair 2k−1 au k-ième terme de la première.

Ce modèle n’est pas une alternance de deux additions fixes. Séparer les colonnes de rangs pairs et impairs aide à le reconnaître, mais ce n’est qu’un modèle à vérifier sur toutes les valeurs données.

### Atelier I9 — Deux colonnes ou un cycle d’opérations ?

<!-- interaction I9 | separation des rangs et cycles d’operations | compétence : alternance-entrelacement -->
A : partir de quatre, multiplier par deux puis ajouter trois ; répéter ce cycle deux fois. B : les rangs impairs valent 2,4,6,… et les pairs 5,10,15,… Trouvez le résultat final de A et le terme de rang huit de B.

<details><summary>Correction</summary>

A : 4→8→11→22→25, résultat vingt-cinq après quatre opérations. B : le rang huit est la quatrième case paire, donc vingt.

</details>

## Séquence 10 — Écarts croissants et régularités quadratiques

La liste 1,4,9,16,25 correspond aux carrés successifs ; les écarts sont 3,5,7,9. Plus généralement :

\[
(n+1)^2-n^2=2n+1.
\]

Des premières différences arithmétiques suggèrent un modèle quadratique : pour 3,5,9,15,23, les écarts 2,4,6,8 conduisent à ajouter dix, donc trente-trois. Cela décrit la règle annoncée ou retenue, pas l’unique suite possible à partir de cinq valeurs.

Si uₙ=n²+cn, alors uₙ₊₁−uₙ=2n+1+c. Il est souvent plus rapide de simplifier la différence avant de remplacer n.

### Atelier I10 — Une suite sous la suite

<!-- interaction I10 | ligne de termes et ligne de differences | compétence : differences -->
Les écarts de 4,7,12,19,28 augmentent régulièrement de deux. Quel est le terme suivant selon cette règle ? Pour uₙ=n²+2n, que vaut u₆−u₅ ?

<details><summary>Correction</summary>

Écarts 3,5,7,9, puis onze ; prochain terme trente-neuf. Dans la formule, uₙ₊₁−uₙ=2n+3 ; pour n=5, treize.

</details>

## Atelier avancé A — Un point fixe peut supprimer tout calcul répétitif

Pour uₙ₊₁=auₙ+b, une valeur stable L vérifie L=aL+b. Si a≠1, L=b/(1−a). Si u₁=L, tous les termes restent L.

Avec u₁=5 et uₙ₊₁=2uₙ−5, chaque terme vaut cinq. Aucun besoin de calculer neuf étapes pour u₁₀.

Si u₁≠L, poser vₙ=uₙ−L donne vₙ₊₁=avₙ. Le décalage à L forme donc une suite géométrique. Exemple : u₁=11, uₙ₊₁=(uₙ+3)/2 ; L=3 et uₙ=3+8(1/2)ⁿ⁻¹. On obtient u₄=4. Le cas a=1 donne une suite arithmétique, pas la même formule de point fixe.

### Atelier I11 — Décalez le bon centre

<!-- interaction I11 | recherche de valeur stable et ecarts | compétence : point-fixe -->
Avec u₁=18 et uₙ₊₁=(uₙ+6)/2, trouvez la valeur stable, puis u₄ en suivant les écarts à cette valeur.

<details><summary>Correction</summary>

L=6. Écart initial douze, divisé par deux à chaque étape : six, trois, un et demi. u₄=7,5. Les termes eux-mêmes ne sont pas simplement divisés par deux.

</details>

## Atelier avancé B — Sommes cumulées et télescopage

Si Sₙ désigne la somme des n premiers termes et S₀=0 : uₙ=Sₙ−Sₙ₋₁. Plus généralement, Sᵣ−Sₚ additionne seulement les termes de rangs p+1 à r, pour r>p≥0.

Pour 5,6,7,8,…, S₄−S₂ vaut sept plus huit, soit quinze. Ce n’est ni S₂ ni la différence entre deux termes individuels.

Une somme de différences successives se télescope pour **toute suite**, sans hypothèse arithmétique :

\[
(u_2-u_1)+(u_3-u_2)+\cdots+(u_n-u_{n-1})=u_n-u_1.
\]

### Atelier I12 — Quelles valeurs survivent ?

<!-- interaction I12 | annulations de termes et sommes cumulees | compétence : telescopage -->
Une suite quelconque vérifie u₁=7,u₉=31. Calculez la somme des différences de u₂−u₁ jusqu’à u₉−u₈. Puis, pour la suite 2,4,6,8,10,…, calculez S₅−S₂.

<details><summary>Correction</summary>

Première somme vingt-quatre. Deuxième : u₃+u₄+u₅=6+8+10=24. Les deux valeurs coïncident, mais leurs justifications sont différentes.

</details>

## La boîte à outils — Règle, rang, nombre de termes

| Structure | Geste utile | Piège |
|---|---|---|
| Écart constant r | u₁+(n−1)r | Confondre rang et nombre de pas |
| Facteur constant q | u₁qⁿ⁻¹, avec cas q=0 séparé | Ajouter au lieu de multiplier |
| Somme arithmétique | Nombre de termes × moyenne des extrêmes | Compter les indices au lieu des termes choisis |
| Somme géométrique | u₁(1−qⁿ)/(1−q), q≠1 | Mettre n−1 au numérateur |
| Période k | Case 1+((n−1) mod k) | Reste zéro pris pour première case |
| Récurrence | Tableau n,uₙ,uₙ₊₁ | Utiliser le rang d’arrivée dans la règle |
| Entrelacement | Deux colonnes de rangs | Confondre avec deux opérations fixes |
| Point fixe | Chercher L puis décaler | Supposer les valeurs elles-mêmes géométriques |
| Somme de différences | Garder les extrémités | Chercher une raison inutile |

### Atelier I13 — Choisissez une méthode sans dérouler tous les termes

<!-- interaction I13 | association de demandes et outils | compétence : selection-methode -->
Associez : terme mille d’un bloc périodique ; somme de deux termes symétriques d’une suite arithmétique ; u₈ d’une récurrence à deux termes ; somme de différences d’une suite sans règle connue.

<details><summary>Correction</summary>

Reste modulo la période ; somme des extrêmes correspondants ; tableau utilisant les deux termes précédents et deux données initiales ; télescopage. Les quatre problèmes ne nécessitent pas la même information.

</details>

### Atelier I14 — Reconnaître une régularité sans surpromettre l’unicité

<!-- interaction I14 | comparaison de regles et justification | compétence : controle-regle -->
À partir de 2,4,6, peut-on prouver que la prochaine valeur sera huit sans aucune règle supplémentaire ? Pourquoi est-il pourtant raisonnable de proposer huit dans un exercice qui annonce un écart constant ?

<details><summary>Correction</summary>

La liste seule admet de nombreuses prolongations. L’annonce d’un écart constant impose une suite arithmétique de raison deux, donc huit. La justification doit citer la règle, pas seulement l’habitude de prolonger un motif.

</details>

## Mission finale — Choisir, compter et vérifier

Répondez avant d’ouvrir le corrigé. F1–F8 consolident les fondations ; F9–F16 combinent les outils ; F17–F20 demandent du transfert. Indiquez votre confiance et une méthode. Il n’y a pas de temps imposé au premier passage.

### F1

Une suite arithmétique commence à quatre et a pour raison trois. Quel est son sixième terme ?

A. \(22\)  
B. \(18\)  
C. \(19\)  
D. \(15\)  

### F2

Une suite arithmétique vérifie u₃=14 et u₈=34. Quelle est sa raison ?

A. \(20\)  
B. \(5\)  
C. \(4\)  
D. \(\frac{10}{3}\)  

### F3

Une suite arithmétique de raison quatre a pour septième terme vingt-neuf. Quel est son premier terme ?

A. \(1\)  
B. \(5\)  
C. \(9\)  
D. \(25\)  

### F4

Dans uₙ=7+5(n−1), à quel rang apparaît quarante-sept, pour n entier au moins un ?

A. \(7\)  
B. \(9\)  
C. \(8\)  
D. \(10\)  

### F5

Pour la même suite uₙ=7+5(n−1), à quel premier rang dépasse-t-on strictement quarante-sept ?

A. \(11\)  
B. \(10\)  
C. \(8\)  
D. \(9\)  

### F6

Une suite géométrique a u₁=5 et une raison trois. Que vaut u₄ ?

A. \(135\)  
B. \(405\)  
C. \(15\)  
D. \(45\)  

### F7

On part de cent soixante et divise par deux à chaque étape. Quelle valeur après quatre divisions ?

A. \(20\)  
B. \(40\)  
C. \(10\)  
D. \(5\)  

### F8

Quelle est la somme des six premiers termes d’une suite arithmétique de premier terme deux et de raison trois ?

A. \(54\)  
B. \(102\)  
C. \(57\)  
D. \(51\)  

### F9

Quelle est la somme des cinq premiers termes de la suite géométrique de premier terme trois et de raison deux ?

A. \(93\)  
B. \(48\)  
C. \(45\)  
D. \(96\)  

### F10

Le bloc 3,7,2,9 se répète depuis le rang un. Quel est le terme de rang vingt-huit ?

A. \(2\)  
B. \(9\)  
C. \(7\)  
D. \(3\)  

### F11

Les rangs impairs portent 2,4,6,… et les rangs pairs 10,20,30,… Quel est le terme de rang neuf ?

A. \(18\)  
B. \(40\)  
C. \(50\)  
D. \(10\)  

### F12

Avec u₁=3 et uₙ₊₁=2uₙ+1, que vaut u₄ ?

A. \(31\)  
B. \(23\)  
C. \(63\)  
D. \(15\)  

### F13

Avec u₁=1 et uₙ₊₁=2uₙ+n, que vaut u₄ ?

A. \(23\)  
B. \(15\)  
C. \(8\)  
D. \(19\)  

### F14

On donne u₁=2,u₂=5 et uₙ₊₂=uₙ₊₁+uₙ. Que vaut u₅ ?

A. \(17\)  
B. \(12\)  
C. \(19\)  
D. \(24\)  

### F15

Les écarts de 5,8,13,20,29 augmentent de deux à chaque étape. Quel terme vient ensuite selon cette règle ?

A. \(39\)  
B. \(42\)  
C. \(40\)  
D. \(38\)  

### F16

Avec uₙ=n²+3n, que vaut u₆−u₅ ?

A. \(13\)  
B. \(14\)  
C. \(11\)  
D. \(54\)  

### F17

u₁=7 et uₙ₊₁=3uₙ−14. Que vaut u₅₀ ?

A. \(21\)  
B. \(7\)  
C. \(49\)  
D. \(350\)  

### F18

u₁=22 et uₙ₊₁=(uₙ+2)/2. Que vaut u₄ ?

A. \(\frac{11}{4}\)  
B. \(\frac{9}{2}\)  
C. \(3\)  
D. \(6\)  

### F19

Une suite arithmétique commence à trois et a pour raison deux. Quelle est la somme des termes de rangs 2,4,6,8 ?

A. \(44\)  
B. \(48\)  
C. \(80\)  
D. \(40\)  

### F20

Une suite quelconque vérifie u₁=8,u₁₀=35. Que vaut la somme des différences u₂−u₁ jusqu’à u₁₀−u₉ ?

A. \(27\)  
B. \(43\)  
C. \(35\)  
D. \(9\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | C | Cinq pas depuis le premier : 4+5×3. | S2 |
| F2 | C | Cinq intervalles pour un écart vingt : raison quatre. | S2 |
| F3 | B | Six pas séparent premier et septième : 29−6×4. | S2 |
| F4 | B | 5(n−1)=40, donc n=9. | S3 |
| F5 | B | Le rang neuf donne l’égalité ; le suivant dépasse. | S3 |
| F6 | A | Trois multiplications : 5×3³=135. | S5 |
| F7 | C | 160/2⁴=10 ; si 160 est u₁, il s’agit de u₅. | S5 |
| F8 | C | Dernier terme dix-sept ; somme 6(2+17)/2=57. | S4 |
| F9 | A | 3(1+2+4+8+16)=3×31. | S6 |
| F10 | B | Le rang est multiple de quatre : dernière case du bloc. | S8 |
| F11 | D | Neuf=2×5−1 : cinquième terme de la suite impaire, soit dix. | S9 |
| F12 | A | Les termes sont trois, sept, quinze, trente et un. | S7 |
| F13 | D | Transitions avec n=1,2,3 : 1→3→8→19. | S7 |
| F14 | C | Termes deux, cinq, sept, douze, dix-neuf. | S7 |
| F15 | C | Écarts trois, cinq, sept, neuf, puis onze. | S10 |
| F16 | B | 54−40=14, ou la formule 2n+4 pour n=5. | S10 |
| F17 | B | Sept est une valeur fixe de la règle et le premier terme vaut déjà sept. | Avancé A |
| F18 | B | Valeur stable deux ; écart vingt divisé par huit après trois étapes : deux plus cinq demis. | Avancé A |
| F19 | A | Termes cinq, neuf, treize, dix-sept ; quatre termes de moyenne onze. | S4 |
| F20 | A | Télescopage : seul u₁₀−u₁ subsiste. Aucune raison n’est nécessaire. | Avancé B |

</details>

## Votre bilan — Revenir à la bonne structure

Une erreur peut porter sur le modèle, le calcul, une unité, un rang, un événement ou la demande finale. Reprenez le passage indiqué, formulez la règle et ses conditions en une phrase, puis essayez une variante sans aide. Une réponse correcte après lecture du corrigé reste une réussite accompagnée jusqu’à confirmation sur un autre énoncé. Ce bilan ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Indexation | Rangs depuis un par défaut ; n−1 transitions entre premier et n-ième |
| Arithmétique | uₙ=u₁+(n−1)r ; uⱼ−uᵢ=(j−i)r |
| Somme arithmétique | Nombre de termes × demi-somme des extrêmes |
| Sélection d’un rang sur deux | Nouvelle raison 2r ; premier terme adapté à la parité |
| Géométrique | uₙ=u₁qⁿ⁻¹, avec q=0 traité séparément |
| Somme géométrique | u₁(1−qⁿ)/(1−q) si q≠1 ; nu₁ si q=1 |
| Recherche de rang | Équation/inégalité puis rang entier admissible |
| Récurrence | Un tableau avec indice de départ ; assez de valeurs initiales |
| Période k | Case 1+((n−1) mod k), numérotation depuis un |
| Entrelacement | Séparer les rangs pairs et impairs |
| Point fixe | L=aL+b ; étudier uₙ−L si nécessaire |
| Sommes cumulées et télescopage | Sᵣ−Sₚ=somme des termes p+1 à r ; différences successives donnent les extrémités |

**Prochaine étape : la combinatoire.** Conservez le même réflexe : définir les objets, les unités et les conditions avant de choisir une formule.
