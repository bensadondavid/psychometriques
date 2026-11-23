# Combinatoire : compter chaque résultat une fois

Choisir trois personnes n’est pas leur attribuer trois postes. Ranger des objets distincts n’est pas ranger des objets identiques. Et choisir deux cases non voisines n’est pas forcément diviser un total par deux.

**Votre objectif :** définir précisément ce qui rend deux résultats différents, construire le comptage, puis vérifier que chaque résultat est compté une seule fois. La formule vient après cette définition.

## Avant de commencer — Trois questions d’organisation

Indiquez votre confiance et expliquez si l’ordre compte.

<!-- interaction D1 | QCM unique + confiance | compétence : produit-choix -->
**D1.** Trois hauts et quatre bas permettent combien de tenues, si l’on choisit un haut et un bas et que toutes les associations sont permises ?

A. Sept. · B. Douze. · C. Vingt-quatre. · D. Trois.

<details><summary>Raisonnement</summary>

**B.** Chacun des trois hauts peut être associé aux quatre bas : 3×4=12. Une tenue comprend les deux choix, pas l’un ou l’autre.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : ordre-roles -->
**D2.** Parmi cinq personnes, combien de binômes **sans rôles distincts** peut-on former ?

A. Vingt. · B. Vingt-cinq. · C. Dix. · D. Cinq.

<details><summary>Raisonnement</summary>

**C.** Cinq choix puis quatre comptent chaque paire dans deux ordres. Le même binôme ne change pas quand on inverse les noms ; 5×4/2=10.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : repetition -->
**D3.** Un code a trois positions, chacune choisie parmi quatre symboles, avec répétition autorisée. Combien de codes ?

A. Douze. · B. Vingt-quatre. · C. Quatre-vingt-un. · D. Soixante-quatre.

<details><summary>Raisonnement</summary>

**D.** Chaque position conserve quatre choix : 4³=64. On ne retire pas un symbole après l’avoir utilisé.

</details>

D1 appelle S2, D2 S3–S5, D3 S6. Avant toute formule, reformulez la définition d’un résultat final.

## Séquence 1 — La fiche d’identité d’un problème de comptage

Posez ces questions dans cet ordre :

1. Que choisit-on : objets, personnes, symboles ou positions ?
2. Les éléments sont-ils distincts ou certains sont-ils indistinguables ?
3. L’ordre ou les rôles changent-ils le résultat ?
4. Peut-on réutiliser un élément ?
5. Quelles contraintes limitent les choix : obligatoire, exclu, voisinage, effectif ?

Le choix {A,B} désigne un binôme non ordonné. Les désignations « A responsable, B adjoint » et « B responsable, A adjoint » sont distinctes. Un code AB est différent de BA même si les mêmes lettres sont employées.

« Au hasard » n’est pas nécessaire pour compter les possibilités. La question de leur probabilité viendra au chapitre suivant ; des résultats dénombrés ne sont pas automatiquement équiprobables.

### Atelier I1 — Le même duo, ou un autre résultat ?

<!-- interaction I1 | classement ordre/roles/repetition | compétence : definir-resultat -->
Dites si échanger A et B change le résultat : deux personnes choisies pour porter une table ; une présidence et une vice-présidence ; deux lettres d’un mot de passe ; deux boules rouges identiques sur une étagère.

<details><summary>Correction</summary>

Non pour le binôme sans rôles ; oui pour les deux postes ; oui pour les positions du mot de passe si A≠B ; non pour deux boules physiquement distinctes mais déclarées visuellement identiques dans le résultat observé.

</details>

## Séquence 2 — Multiplier les étapes, additionner les cas disjoints

Si un résultat se construit en choisissant successivement un élément parmi a possibilités puis un parmi b pour chacune des premières possibilités, il y a ab résultats. Le nombre de choix de la deuxième étape peut dépendre de l’objet choisi ; le produit simple exige un même nombre b dans chaque branche, sinon on additionne les nombres de branches.

Pour une entrée parmi deux, un plat parmi trois et un dessert parmi deux : 2×3×2=12 menus. Pour un cadeau qui est **soit** un livre parmi quatre, **soit** un jeu parmi sept, sans prendre les deux : 4+7=11 choix.

On peut multiplier des comptes successifs même si les choix sont contraints : cinq personnes pour le premier rôle, puis quatre pour le second donnent vingt. Le second choix dépend du premier, mais chaque branche conserve quatre possibilités. Il ne faut pas confondre ce principe avec l’indépendance probabiliste.

### Éviter une addition qui compte deux fois

Si les cas se recoupent, on doit retirer leur intersection : nombre de A ou B = nombre de A + nombre de B − nombre de A et B. Le « ou » est en général inclusif, sauf précision « exactement l’un des deux ».

### Atelier I2 — Et, ou, ou double comptage ?

<!-- interaction I2 | arbre de choix et cas disjoints | compétence : addition-produit -->
Un sac existe en quatre couleurs, avec ou sans pochette : combien de versions ? Pour un cadeau, on choisit à la place soit un sac parmi ces versions, soit un jeu parmi cinq : combien de choix ?

<details><summary>Correction</summary>

Huit versions de sac ; puis huit plus cinq, soit treize cadeaux. Le choix de couleur et le choix de pochette se combinent ; les catégories sac/jeu sont alternatives et disjointes.

</details>

## Séquence 3 — Ordres et permutations d’objets distincts

Ranger n objets distincts dans n places donne :

\[
\boxed{n!=n(n-1)\cdots2\times1}.
\]

Par convention 0!=1 : il y a une seule organisation vide. Le produit décroissant vient de l’absence de réutilisation : un objet placé n’est plus disponible.

Attribuer k rôles distincts à k personnes différentes parmi n, avec 0≤k≤n, donne :

\[
\boxed{n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}}.
\]

Pour seulement deux rôles parmi six personnes : 6×5=30, pas 6!. On ne range pas les quatre personnes non retenues.

### Atelier I3 — Le nombre de places compte aussi

<!-- interaction I3 | cases de roles et choix restants | compétence : arrangements -->
Combien de façons de ranger quatre livres distincts ? Combien de façons d’attribuer deux cadeaux distincts à deux personnes différentes parmi six ?

<details><summary>Correction</summary>

4!=24 rangements. Pour les cadeaux : six choix du premier destinataire, cinq du second, soit trente. S’il était permis de donner les deux à la même personne, on aurait trente-six.

</details>

## Séquence 4 — Groupes sans ordre : corriger une multiplicité connue

Choisir un groupe de k éléments distincts parmi n, sans ordre, donne :

\[
\boxed{\binom nk=\frac{n!}{k!(n-k)!}}\quad(0\le k\le n).
\]

Le comptage ordonné donne chaque groupe k! fois, une fois pour chacun de ses ordres internes. C’est **cette multiplicité constante** qui justifie la division, pas le simple désir d’obtenir un nombre plus petit.

Pour une paire : \(\binom n2=n(n-1)/2\). Les poignées de main entre n personnes, chacune une fois par paire, utilisent cette formule. Si l’événement est un message envoyé de A vers B, son sens distingue deux résultats et l’on ne divise pas par deux.

Choisir k membres revient à choisir les n−k exclus : \(\binom nk=\binom n{n-k}\). Cette symétrie peut réduire le calcul. Choisir aucun membre est une sélection possible, l’ensemble vide, donc \(\binom n0=1\).

### Atelier I4 — Où le double comptage se produit-il ?

<!-- interaction I4 | paires ordonnees a fusionner | compétence : combinaisons -->
Avec cinq personnes, comptez les binômes sans rôles et les poignées de main. Puis comptez les choix d’une présidence et d’une vice-présidence.

<details><summary>Correction</summary>

Dix binômes ; dix poignées ; vingt choix de deux postes. Dans les deux premiers cas, A/B et B/A décrivent le même résultat. Dans le dernier, les rôles les distinguent.

</details>

## Séquence 5 — Groupes avec personne imposée, exclue ou incompatible

Un comité de trois parmi huit, incluant une personne précise, demande seulement deux choix parmi les sept autres : \(\binom72=21\). La personne imposée n’a pas à être choisie une deuxième fois.

Si une autre personne précise est exclue, il reste deux membres à choisir parmi six : quinze groupes. Si la même personne est à la fois obligatoire et exclue, aucun résultat ne satisfait les contraintes.

Pour deux cours parmi quatre, dont une paire interdite, il existe six paires au total et une interdite : cinq autorisées.

### Plusieurs catégories imposées

Pour deux adultes parmi quatre et un adolescent parmi trois : \(\binom42\binom31=18\). Les groupes sont disjoints et la composition exacte est donnée ; on ne choisit pas simplement trois personnes parmi sept, car cela admettrait des compositions interdites.

### Atelier I5 — Déduisez les éléments déjà décidés

<!-- interaction I5 | composition de groupe et contraintes | compétence : obligatoire-exclu -->
On choisit trois personnes parmi sept. A doit être incluse et B exclue. Combien de groupes ? Puis, indépendamment, combien de groupes de deux adultes parmi cinq et un enfant parmi quatre ?

<details><summary>Correction</summary>

Premier : deux membres parmi cinq, soit dix. Second : dix paires d’adultes et quatre enfants, soit quarante. Les deux contraintes du premier problème retirent deux personnes du réservoir libre pour des raisons différentes.

</details>

## Séquence 6 — Codes : positions, répétition et symbole imposé

Avec s symboles et n positions, répétition autorisée : sⁿ codes. Sans répétition et n≤s : s(s−1)…(s−n+1).

Si la dernière position est fixée et la répétition autorisée, il reste n−1 positions libres. Si première et dernière doivent être égales, on choisit leur symbole une fois, pas deux.

Dans un code de trois lettres parmi quatre, avec lettres voisines différentes, les choix sont quatre, trois, trois : trente-six. La troisième peut égaler la première ; « voisines différentes » n’est pas « toutes différentes ».

### Code ou nombre à plusieurs chiffres ?

Un code numérique peut commencer par zéro si l’énoncé l’autorise. Un nombre à trois chiffres ne le peut pas. Avec les dix chiffres sans répétition : 10×9×8 codes, mais 9×9×8 nombres à trois chiffres. Après un premier chiffre non nul, zéro reste disponible dans la deuxième position.

### Atelier I6 — Remplissez d’abord les cases dépendantes

<!-- interaction I6 | positions de code liees | compétence : contraintes-code -->
Un code de quatre symboles, choisis parmi cinq, doit avoir ses deux premiers identiques et ses deux derniers identiques. Les deux paires peuvent employer le même symbole. Combien de codes ? Et si leurs symboles doivent être différents ?

<details><summary>Correction</summary>

Cinq choix pour le symbole de la première paire et cinq pour la seconde : vingt-cinq. S’ils doivent différer, cinq puis quatre, soit vingt. Chaque paire n’est pas une nouvelle permutation de deux positions.

</details>

## Séquence 7 — Au moins un : enlever le cas contraire

Pour un groupe de quatre parmi neuf personnes, dont deux sont « spéciales », compter au moins une spéciale est plus facile par complément :

\[
\binom94-\binom74=126-35=91.
\]

Le contraire de « au moins une » est « aucune », pas « exactement une ». Si l’on veut exactement une parmi ces deux, il faut choisir laquelle, puis les trois autres parmi les sept ordinaires : \(2\binom73=70\).

Pour une suite de n≥1 lettres A/B contenant au moins un A et au moins un B, il y a 2ⁿ suites au total ; enlever tout-A et tout-B donne 2ⁿ−2. Ces deux cas interdits sont distincts pour n≥1.

### Atelier I7 — Au moins une n’est pas exactement une

<!-- interaction I7 | total moins complement et cas exact | compétence : complement-comptage -->
Parmi six personnes, dont A et B, on choisit trois. Combien de groupes contiennent au moins l’une de A,B ? Combien en contiennent exactement une ?

<details><summary>Correction</summary>

Au moins une : vingt groupes totaux moins quatre sans A ni B, soit seize. Exactement une : deux choix de spéciale puis deux parmi quatre, soit douze. Les quatre groupes contenant A et B expliquent la différence.

</details>

## Séquence 8 — Voisinage : créer un bloc ou le soustraire

Pour n personnes distinctes rangées en ligne, deux personnes précises devant rester voisines peuvent être traitées comme un bloc. Il y a n−1 objets à ranger et deux ordres à l’intérieur du bloc :

\[
\boxed{2(n-1)!}.
\]

Sans voisinage entre ces deux personnes : total n! moins ce compte. Pour six personnes : 720−240=480. Le bloc n’est pas un seul ordre interne imposé, sauf si l’énoncé exige A juste avant B.

### Deux emplacements non voisins

Choisir deux cases parmi n cases alignées donne \(\binom n2\) paires ; il existe n−1 paires voisines. Donc \(\binom n2-(n-1)\) paires non voisines. Ici, on choisit des cases ; on ne range pas n personnes, donc la formule factorielle de bloc serait inadaptée.

### Atelier I8 — Les voisins n’ont pas disparu, ils forment un objet

<!-- interaction I8 | bloc mobile et comptage complementaire | compétence : adjacence -->
Cinq personnes distinctes se rangent en ligne. Combien d’ordres avec A et B voisines ? Sans voisinage entre elles ? Indépendamment, combien de paires de cases non voisines parmi six cases alignées ?

<details><summary>Correction</summary>

Voisines : 2×4!=48. Non voisines : 120−48=72. Cases non voisines : quinze moins cinq, soit dix. Ces deux dernières questions partagent une idée de complément mais pas le même univers.

</details>

## Séquence 9 — Ordre relatif : exploiter une symétrie réelle

Dans les n! ordres de n personnes distinctes, exactement la moitié placent A avant B. Échanger leurs positions associe chaque ordre à un ordre du cas contraire, sans laisser de configuration fixe. Donc n!/2.

La symétrie ne signifie pas que A et B sont voisins. « A avant B » autorise toutes les positions intermédiaires ; « A immédiatement avant B » impose un bloc avec un seul ordre interne.

Si trois personnes distinctes doivent apparaître dans l’ordre A puis B puis C, leurs 3! ordres relatifs se répartissent également : n!/6, pour n≥3. D’autres contraintes peuvent briser cette symétrie ; ne divisez pas avant de vérifier ce qui reste interchangeable.

### Atelier I9 — Avant n’est pas immédiatement avant

<!-- interaction I9 | comparaison de contraintes d’ordre | compétence : symetrie-ordre -->
Parmi les rangements de quatre personnes distinctes, comptez ceux où A est avant B, puis ceux où A est immédiatement avant B.

<details><summary>Correction</summary>

A avant B : 24/2=12. A immédiatement avant B : bloc AB et deux autres personnes, soit 3!=6. Le bloc BA est interdit dans la seconde question.

</details>

## Séquence 10 — Objets identiques : retirer les échanges invisibles

Si n objets comportent des catégories d’objets indistinguables d’effectifs n₁,n₂,…, la quantité de rangements visuellement différents est :

\[
\boxed{\frac{n!}{n_1!n_2!\cdots}}.
\]

Avec deux rouges identiques et deux jetons portant chacun un numéro différent, on obtient 4!/2!=12. Les jetons numérotés ne sont pas identiques entre eux ; on ne divise pas une deuxième fois par deux pour eux.

Avec les lettres A,A,B,B,C, on obtient 5!/(2!2!)=30. Cette formule compte tous les ordres sans autre contrainte ; une interdiction de voisinage demande un traitement supplémentaire.

### Atelier I10 — Quels échanges sont réellement invisibles ?

<!-- interaction I10 | etiquettes temporaires sur objets identiques | compétence : repetitions-identiques -->
On range les lettres A,A,A,B,C. Combien de mots distincts, sans exigence de sens ? Que devient le compte si les trois A portent désormais trois numéros visibles distincts ?

<details><summary>Correction</summary>

5!/3!=20. Avec des numéros visibles, tous les objets sont distincts et le total devient 5!=120. L’identité dépend de ce qui distingue les résultats observés.

</details>

## Atelier avancé A — Un rôle et un groupe, ou deux groupes aux fonctions différentes

Choisir une responsable puis deux assistantes sans distinction de rôles entre elles, parmi quatre personnes, donne \(4\binom32=12\). Autre voie : choisir l’équipe de trois, puis sa responsable, soit \(\binom43\times3=12\).

Former deux binômes disjoints chargés de l’accueil et du rangement, parmi six personnes, donne \(\binom62\binom42=90\). Leurs fonctions distinguent les binômes : on ne divise pas par deux. Si les deux binômes sont au contraire non étiquetés et interchangeables, on divise par deux car chaque résultat a été compté deux fois.

### Atelier I11 — Où l’ordre existe-t-il encore ?

<!-- interaction I11 | choix de groupe puis designation de chef | compétence : role-et-groupe -->
On choisit trois personnes parmi cinq, puis un chef parmi les trois. Combien de résultats ? Retrouvez le même compte en choisissant le chef d’abord.

<details><summary>Correction</summary>

Dix équipes puis trois chefs : trente. Chef d’abord : cinq choix puis deux équipiers parmi quatre, soit 5×6=30. L’ordre des deux équipiers ne compte dans aucune des deux voies.

</details>

## Atelier avancé B — Chemins et positions de lettres

Un chemin comprenant exactement r pas à droite et h pas vers le haut, sans obstacles, est déterminé par les positions des h pas vers le haut parmi r+h places :

\[
\boxed{\binom{r+h}{h}}.
\]

Quatre pas à droite et deux vers le haut donnent quinze chemins. De même, les suites binaires de longueur six contenant exactement deux A sont comptées par \(\binom62=15\). Les symboles identiques ne se distinguent pas entre eux ; ce sont leurs positions qui font le résultat.

Si le chemin doit passer par un point intermédiaire atteignable avec ces déplacements, on peut multiplier les comptes des deux morceaux, chacun avec ses propres nombres de pas. Ce raisonnement suppose l’absence d’obstacles supplémentaires et une décomposition unique au point imposé.

### Atelier I12 — Choisissez les positions, pas l’ordre des copies

<!-- interaction I12 | cases de mot et chemins equivalents | compétence : positions-imposees -->
Combien de suites de cinq lettres A/B contiennent exactement deux A ? Combien de chemins comportent trois pas à droite et deux vers le haut ?

<details><summary>Correction</summary>

Dix dans chaque cas : choisir deux positions parmi cinq. Un chemin et un mot binaire peuvent être mis en correspondance en codant haut par A et droite par B.

</details>

## Atelier avancé C — Sous-ensembles et répartitions d’objets identiques

### Choisir n’importe quelles options distinctes

Pour n options chacune prise ou non, le nombre de sous-ensembles vaut 2ⁿ, y compris la sélection vide. Si l’on exige au moins une option, retirer un. Si l’on exige exactement k options, utiliser \(\binom nk\).

### Répartir des objets identiques entre des destinataires distincts

Distribuer N bonbons identiques à k enfants distincts revient à compter des k-uplets d’entiers non négatifs de somme N. Pour k≥1, le compte est :

\[
\binom{N+k-1}{k-1}.
\]

Une représentation par N objets et k−1 séparateurs explique la formule : les séparateurs délimitent les parts, éventuellement vides. S’il faut au moins un bonbon par enfant et N≥k, donner d’abord un à chacun laisse N−k bonbons ; le compte devient \(\binom{N-1}{k-1}\). Si N<k, aucune distribution n’est possible.

Cette méthode suppose les bonbons identiques et les enfants distincts, sans plafond individuel. Pour des cadeaux distincts, il faut un autre modèle.

### Atelier I13 — Retirez d’abord le minimum obligatoire

<!-- interaction I13 | allocations entieres et minimum par case | compétence : repartition -->
Sept bonbons identiques sont donnés à trois enfants distincts, au moins un chacun. Combien de répartitions ? Et combien de sélections de garnitures parmi cinq, y compris aucune ?

<details><summary>Correction</summary>

Après trois bonbons obligatoires, répartir quatre unités libres : \(\binom62=15\). Pour les garnitures : 2⁵=32. Les deux situations portent sur des choix différents ; la formule des sous-ensembles ne distribue pas des bonbons.

</details>

## La boîte à outils — Un objet final, une multiplicité

| Situation | Modèle | Contrôle |
|---|---|---|
| Plusieurs étapes de construction | Produit, si même nombre de branches à chaque étape | Toutes les associations autorisées ? |
| Cas alternatifs | Somme de cas disjoints | Intersection déjà comptée ? |
| Rôles distincts sans répétition | Produit décroissant | Seulement les rôles à attribuer |
| Groupe sans ordre | Combinaison | Combien d’ordres décrivent le même groupe ? |
| Au moins un | Total moins aucun | « Exactement un » serait différent |
| Deux voisins | Bloc et ordres internes | Positions ou personnes ? |
| Objets identiques | Diviser par les échanges invisibles | Objets réellement indistinguables ? |
| Code contraint | Positions libres et positions imposées | Répétition et zéro initial ? |
| Répartition | Identiques/distincts, minima et cases | Ne pas importer une formule d’un autre modèle |

### Atelier I14 — La division par deux doit avoir une raison

<!-- interaction I14 | critique de double comptage | compétence : transfert -->
Pourquoi divise-t-on par deux pour un binôme sans rôles, mais pas pour deux postes distincts ni pour deux binômes affectés à des missions différentes ? Donnez la transformation qui conserve ou change le résultat dans chaque cas.

<details><summary>Correction</summary>

Échanger les deux noms conserve le binôme sans rôles et corrige un comptage double. Pour deux postes, l’échange change les affectations. Pour accueil/rangement, échanger les deux binômes change leurs missions. Une division automatique par deux confond ces objets finaux.

</details>

## Mission finale — Choisir, compter et vérifier

Répondez avant d’ouvrir le corrigé. F1–F8 consolident les fondations ; F9–F16 combinent les outils ; F17–F20 demandent du transfert. Indiquez votre confiance et une méthode. Il n’y a pas de temps imposé au premier passage.

### F1

Quatre hauts et trois bas peuvent être associés librement. Combien de tenues avec un haut et un bas ?

A. \(12\)  
B. \(24\)  
C. \(7\)  
D. \(4\)  

### F2

Un menu comprend une entrée parmi deux, un plat parmi trois et un dessert parmi quatre. Combien de menus ?

A. \(12\)  
B. \(6\)  
C. \(9\)  
D. \(24\)  

### F3

Un cadeau est soit un livre parmi cinq, soit un jeu parmi sept, sans prendre les deux. Combien de choix ?

A. \(35\)  
B. \(7\)  
C. \(12\)  
D. \(70\)  

### F4

Combien de façons de ranger quatre livres distincts sur une étagère ?

A. \(24\)  
B. \(4\)  
C. \(12\)  
D. \(16\)  

### F5

Parmi six personnes, on attribue une présidence puis une vice-présidence à deux personnes différentes. Combien de résultats ?

A. \(36\)  
B. \(15\)  
C. \(30\)  
D. \(720\)  

### F6

Combien de binômes sans rôles parmi sept personnes distinctes ?

A. \(21\)  
B. \(49\)  
C. \(14\)  
D. \(42\)  

### F7

Un code de trois positions utilise cinq symboles, avec répétition autorisée. Combien de codes ?

A. \(125\)  
B. \(25\)  
C. \(60\)  
D. \(15\)  

### F8

Même alphabet de cinq symboles, trois positions, mais sans répétition : combien de codes ?

A. \(10\)  
B. \(15\)  
C. \(60\)  
D. \(125\)  

### F9

Un code de trois positions parmi cinq symboles, avec répétition, commence et se termine par le même symbole. Combien de codes ?

A. \(125\)  
B. \(5\)  
C. \(25\)  
D. \(20\)  

### F10

Un code de quatre lettres utilise un alphabet de trois lettres. Deux lettres voisines doivent différer, mais des lettres non voisines peuvent être égales. Combien de codes ?

A. \(81\)  
B. \(6\)  
C. \(24\)  
D. \(18\)  

### F11

On choisit quatre personnes parmi huit ; A est obligatoire et B exclue. Combien de groupes ?

A. \(15\)  
B. \(20\)  
C. \(35\)  
D. \(70\)  

### F12

Un jury comprend exactement deux adultes parmi cinq et un enfant parmi quatre. Combien de jurys ?

A. \(84\)  
B. \(10\)  
C. \(20\)  
D. \(40\)  

### F13

Parmi sept personnes dont A et B, on choisit trois membres. Combien de groupes contiennent au moins l’un de A,B ?

A. \(20\)  
B. \(15\)  
C. \(25\)  
D. \(35\)  

### F14

Six personnes distinctes sont rangées en ligne. Deux personnes précises doivent être voisines. Combien d’ordres ?

A. \(720\)  
B. \(480\)  
C. \(240\)  
D. \(120\)  

### F15

On choisit deux cases non voisines parmi six cases alignées. Combien de paires ?

A. \(15\)  
B. \(10\)  
C. \(20\)  
D. \(5\)  

### F16

Combien de mots distincts, sans exigence de sens, avec les lettres A,A,B,B,C ?

A. \(30\)  
B. \(120\)  
C. \(20\)  
D. \(60\)  

### F17

Un chemin comprend exactement quatre pas à droite et trois vers le haut, sans obstacle. Combien d’ordres de pas ?

A. \(5040\)  
B. \(7\)  
C. \(12\)  
D. \(35\)  

### F18

Parmi six personnes, on désigne un chef puis deux équipiers sans distinction entre les équipiers. Combien de résultats ?

A. \(120\)  
B. \(30\)  
C. \(20\)  
D. \(60\)  

### F19

On distribue huit bonbons identiques à trois enfants distincts, au moins un chacun. Combien de répartitions ?

A. \(21\)  
B. \(15\)  
C. \(45\)  
D. \(56\)  

### F20

Parmi six personnes, on forme un binôme d’accueil puis un binôme de rangement, sans personne commune. Les membres internes ne sont pas ordonnés. Combien de résultats ?

A. \(180\)  
B. \(90\)  
C. \(15\)  
D. \(45\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | A | Quatre choix puis trois : douze résultats. | S2 |
| F2 | D | Le menu combine les trois étapes : 2×3×4. | S2 |
| F3 | C | Cas disjoints : cinq plus sept. | S2 |
| F4 | A | Quatre choix, puis trois, deux, un : 4!=24. | S3 |
| F5 | C | Les deux rôles sont distincts : 6×5, pas une combinaison. | S3 |
| F6 | A | Chaque paire ordonnée apparaît deux fois : 7×6/2. | S4 |
| F7 | A | Cinq possibilités conservées à chaque position : 5³. | S6 |
| F8 | C | Les nombres de choix sont cinq, quatre et trois. | S6 |
| F9 | C | Premier symbole cinq choix, milieu cinq, dernier imposé. | S6 |
| F10 | C | Trois choix puis deux à chacune des trois positions suivantes. | S6 |
| F11 | B | Trois autres membres parmi les six personnes libres : C(6,3)=20. | S5 |
| F12 | D | Dix paires d’adultes, quatre choix d’enfant. | S5 |
| F13 | C | Total C(7,3)=35, moins C(5,3)=10 sans A ni B. | S7 |
| F14 | C | Un bloc et quatre autres objets : 5!, fois deux ordres internes. | S8 |
| F15 | B | Quinze paires totales moins cinq voisines. | S8 |
| F16 | A | 5!/(2!2!) : les échanges entre les deux A et entre les deux B sont invisibles. | S10 |
| F17 | D | Choisir les trois positions des pas vers le haut parmi sept : C(7,3). | Avancé B |
| F18 | D | Six chefs possibles, puis C(5,2)=10 paires d’équipiers. | Avancé A |
| F19 | A | Après trois bonbons imposés, cinq libres ; C(7,2)=21. | Avancé C |
| F20 | B | C(6,2)×C(4,2)=15×6 ; les deux missions distinguent les binômes. | Avancé A |

</details>

## Votre bilan — Revenir à la bonne structure

Une erreur peut porter sur le modèle, le calcul, une unité, un rang, un événement ou la demande finale. Reprenez le passage indiqué, formulez la règle et ses conditions en une phrase, puis essayez une variante sans aide. Une réponse correcte après lecture du corrigé reste une réussite accompagnée jusqu’à confirmation sur un autre énoncé. Ce bilan ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Définir le résultat | Ordre, rôles, répétition, identité et contraintes |
| Étapes de choix | Produit si le nombre de choix est constant dans chaque branche correspondante |
| Cas alternatifs | Somme des cas disjoints ; retirer une intersection comptée deux fois |
| Rangement de n distincts | n! ; convention 0!=1 |
| k rôles distincts | n!/(n−k)! sans réutilisation |
| Groupe sans ordre | C(n,k)=n!/[k!(n−k)!] |
| Code avec répétition | sⁿ ; retirer les positions réellement imposées |
| Au moins un | Total moins aucun |
| Deux voisins en ligne | Bloc puis deux ordres internes : 2(n−1)! |
| Objets identiques | n! divisé par les factorielles des multiplicités |
| Chemins droite/haut | C(r+h,h), sans obstacles supplémentaires |
| Répartition de N identiques à k distincts | C(N+k−1,k−1) ; au moins un chacun : C(N−1,k−1) si N≥k |

**Prochaine étape : les probabilités.** Conservez le même réflexe : définir les objets, les unités et les conditions avant de choisir une formule.
