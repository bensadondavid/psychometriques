# Appliquer des règles : construire le possible et démontrer l'impossible

Quatre exposés à ordonner. Une personne qui ne peut pas être en bout de rangée. Deux présentations qui doivent se suivre. La difficulté n'est pas de garder tous les noms en mémoire : c'est de représenter les règles de façon à pouvoir les vérifier ensemble.

**Votre mission :** construire une configuration valide, reconnaître une conséquence obligatoire et expliquer pourquoi une configuration est impossible.

## Avant de commencer — Respecter toutes les règles

Dans les questions suivantes, A, B, C et D sont quatre présentations, chacune placée une seule fois dans une rangée de quatre positions. **A précède B ; C vient immédiatement avant D.** « Précède » ne signifie pas « immédiatement avant ».

<!-- interaction L15-D1 | QCM unique | competence: configuration-valide -->
**D1.** Quel ordre est possible ?

A. A – C – B – D  
B. B – A – C – D  
C. A – C – D – B  
D. D – C – A – B

<details><summary>Correction</summary>

**C.** A est avant B et C est directement avant D. A sépare C et D ; B inverse A et B ; D inverse le bloc C–D. Une seule règle enfreinte suffit à éliminer une configuration.

</details>

<!-- interaction L15-D2 | QCM unique | competence: possible-vs-obligatoire -->
**D2.** Avec ces seules règles, quelle affirmation est obligatoire ?

A. A est premier.  
B. B est dernier.  
C. D est dernier.  
D. C n'est pas dernier.

<details><summary>Correction</summary>

**D.** C doit laisser une place immédiatement après lui à D. A n'est pas forcément premier : C–D–A–B fonctionne. B n'est pas forcément dernier : A–B–C–D fonctionne. D n'est pas forcément dernier : A–C–D–B fonctionne.

</details>

## Séquence 1 — Définir l'univers avant de déduire

Avant les règles, repérez les objets, les places et les conventions :

- chaque personne apparaît-elle exactement une fois ?
- la rangée a-t-elle un sens gauche–droite donné ?
- certaines places peuvent-elles rester vides ?
- s'agit-il d'une ligne ou d'un cercle ?
- parle-t-on d'avant/après ou d'immédiatement avant/après ?

Un cercle n'a pas les mêmes extrémités qu'une rangée. « À gauche » suppose un point de vue fixé ; dans les exercices de ce cours, on lit la rangée de gauche à droite telle qu'elle est écrite.

N'inventez pas un voisinage immédiat lorsque le texte dit seulement « avant ». A – C – D – B respecte bien « A avant B ».

## Séquence 2 — Donner une forme à chaque règle

| Formulation | Représentation pratique | Attention |
|---|---|---|
| A avant B | position(A) < position(B) | Pas forcément voisins |
| C immédiatement avant D | Bloc ordonné [C D] | Ni séparation ni inversion |
| E à une extrémité | E en première ou dernière place | Pas nécessairement première |
| F hors des extrémités | F en position intérieure | Selon le nombre de places |
| A et B non voisins | Au moins un élément entre eux | Les deux sens restent possibles |
| Si L est choisi, M l'est aussi | L → M | M seul reste autorisé |
| Exactement deux éléments | Ni un ni trois | Vérifier le nombre, pas seulement les identités |

Écrivez une règle par ligne. Les blocs réduisent le nombre d'éléments à déplacer, mais occupent toujours plusieurs places réelles.

<!-- interaction L15-I1 | validation de configurations | competence: verifier-toutes-regles -->
### Atelier — Quelle règle casse ?

Reprenez A avant B et le bloc C–D. Pour chaque ordre, indiquez valide ou la règle violée :

1. A – B – C – D  
2. C – D – B – A  
3. A – D – C – B  
4. A – C – B – D  
5. C – D – A – B

<details><summary>Correction</summary>

1 et 5 sont **valides**. 2 viole A avant B. 3 inverse C et D. 4 sépare C et D. Même si 2 à 4 respectent une partie des contraintes, aucune n'est acceptable : toutes les règles doivent tenir simultanément.

</details>

## Séquence 3 — Exploiter la contrainte la plus forte

Un bloc de deux éléments adjacents est plus contraignant qu'un simple ordre relatif. Placez-le d'abord, puis répartissez le reste.

Avec A avant B et [C D], considérez trois unités à ordonner : A, B et le bloc [C D]. Comme A doit précéder B, il existe exactement trois ordres d'unités :

| Ordre des unités | Configuration réelle |
|---|---|
| A, B, [C D] | A – B – C – D |
| A, [C D], B | A – C – D – B |
| [C D], A, B | C – D – A – B |

Cette liste est exhaustive parce qu'elle énumère toutes les positions du bloc relativement à A puis B. Elle permet de conclure que A n'est ni deuxième ni quatrième, sans imposer qu'il soit premier.

Une liste de quelques exemples ne devient pas exhaustive simplement parce qu'elle est longue. Il faut pouvoir expliquer pourquoi toutes les possibilités ont été couvertes.

## Séquence 4 — Possible, obligatoire, impossible : trois preuves

**Possible :** une configuration complète qui respecte toutes les règles suffit.

**Obligatoire :** il faut une conséquence des règles, ou une liste exhaustive dont toutes les lignes possèdent la propriété. Une seule configuration ne suffit pas.

**Impossible :** il faut montrer qu'aucune configuration ne peut la réaliser. Une contradiction courte vaut mieux qu'une série de tentatives ratées.

Exemple : C en quatrième position est impossible, car D devrait être immédiatement après lui et qu'il n'existe pas de cinquième place.

<!-- interaction L15-I2 | scenario et preuve | competence: preuve-possibilite -->
### Atelier — Le même fait, deux questions

Avec les règles de départ, « B est dernier » est-il possible ? Est-il obligatoire ? Donnez une preuve distincte pour chaque réponse.

<details><summary>Correction</summary>

**Possible :** A–C–D–B est une configuration témoin. **Pas obligatoire :** A–B–C–D est un contre-exemple valide. On n'utilise pas la même preuve : un témoin établit une possibilité, un contre-exemple annule une obligation.

</details>

## Séquence 5 — Ajouter une condition sans modifier les autres questions

Une consigne « si l'on ajoute que B vient avant C » crée un sous-cas. Gardez les règles de base et ajoutez cette condition uniquement pour cette question.

Dans notre exemple, B avant C force **A–B–C–D**. Si, dans une autre question, on ajoute D avant A, on obtient **C–D–A–B**. Ces deux sous-cas ne doivent pas être cumulés : ils seraient incompatibles.

Dans votre brouillon, séparez clairement : **règles communes** et **condition locale**. Après une question, effacez seulement le sous-cas.

### Brancher plutôt que deviner

Lorsqu'un élément a deux positions possibles, ouvrez deux branches nommées. Appliquez les règles dans chacune. Fermez une branche dès qu'une contradiction apparaît. Évitez de mélanger dans une seule disposition des déductions provenant de branches différentes.

## Séquence 6 — Sélection et quantités exactes

Les règles peuvent porter sur des choix plutôt que sur un ordre. « Si L est sélectionné, M l'est aussi » autorise L et M ensemble ou M sans L. Elle interdit L sans M.

Si l'on choisit **exactement deux** éléments parmi L, M et N, les paires possibles sont :

| Paire | Règle L → M | Nombre exact | Verdict |
|---|---|---|---|
| L et M | Respectée | Deux | Possible |
| L et N | Violée | Deux | Impossible |
| M et N | Respectée | Deux | Possible |

Une implication n'est pas une obligation de choisir L. Quand L est absent, la règle n'exige pas son apparition.

<!-- interaction L15-I3 | ensemble de choix | competence: selection-conditionnelle -->
### Atelier — Une règle n'est pas sa réciproque

On choisit exactement deux éléments parmi L, M et N, avec L → M. Si N est choisi, quelle est la paire complète ? Pourquoi ?

<details><summary>Correction</summary>

**M et N.** Ajouter L à N exigerait aussi M, ce qui ferait trois éléments. Comme il en faut exactement deux, L est exclu et M complète la paire. Il s'agit d'une déduction combinant implication et quota, pas de la réciproque M → L.

</details>

## Séquence 7 — Éviter les erreurs de méthode

- Un choix qui respecte la première règle peut violer la dernière.
- « Immédiatement » ne se supprime pas pendant la reformulation.
- Une absence de réussite dans vos essais ne prouve pas l'impossibilité.
- Une configuration témoin ne prouve pas qu'un fait est obligatoire.
- « Exactement », « au moins » et « au plus » sont trois contraintes différentes.
- Les conditions locales ne survivent pas automatiquement à la question suivante.

Pour gagner du temps, contrôlez d'abord les contraintes les plus visibles : effectif, éléments répétés, bloc, extrémités. Puis vérifiez les ordres relatifs et les implications.

## Mission finale — Trois types de preuves

Pour F1 à F5, reprenez uniquement les règles communes : quatre éléments A, B, C, D, une occurrence chacun ; A avant B ; C immédiatement avant D. Les conditions ajoutées à F4 et F5 sont indépendantes.

<!-- interaction L15-F1 | QCM unique | competence: configuration-valide -->
**F1.** Quel ordre est possible ? A. B–A–C–D ; B. C–A–D–B ; C. D–C–A–B ; D. C–D–A–B.

<!-- interaction L15-F2 | QCM unique | competence: necessite -->
**F2.** Quelle affirmation est obligatoire ? A. A est premier ; B. B est dernier ; C. C n'est pas dernier ; D. D est dernier.

<!-- interaction L15-F3 | QCM unique | competence: impossibilite -->
**F3.** Quelle situation est impossible ? A. A est premier ; B. A est troisième ; C. B est quatrième ; D. A est deuxième.

<!-- interaction L15-F4 | QCM unique | competence: condition-locale -->
**F4.** On ajoute uniquement pour cette question : B avant C. Quel ordre reste possible ? A. A–B–C–D ; B. A–C–D–B ; C. C–D–A–B ; D. B–A–C–D.

<!-- interaction L15-F5 | QCM unique | competence: condition-locale -->
**F5.** On ajoute uniquement pour cette question : D avant A. Quel ordre reste possible ? A. A–B–C–D ; B. A–C–D–B ; C. C–D–A–B ; D. D–C–A–B.

<!-- interaction L15-F6 | QCM unique | competence: selection-conditionnelle -->
**F6.** On choisit exactement deux éléments parmi L, M, N. Si L est choisi, M l'est aussi. Quel choix est possible ? A. L seul ; B. L et N ; C. M et N ; D. L, M et N.

<details><summary>Corrigé de la mission</summary>

**F1 : D.** Le bloc C–D est présent et A précède B. A inverse A/B ; B sépare C/D ; C inverse C/D.

**F2 : C.** D suit immédiatement C ; C doit donc laisser une place après lui. Les trois configurations exhaustives du cours fournissent des contre-exemples à A, B et D.

**F3 : D.** La liste exhaustive place A uniquement premier ou troisième. Si A était deuxième, B serait ensuite ; il ne resterait pas deux places adjacentes dans le bon sens pour C–D. A, B et C ont chacune un témoin valide dans le tableau de S3.

**F4 : A.** A avant B, B avant C et C immédiatement avant D imposent A–B–C–D. B et C violent la condition locale ; D viole A avant B.

**F5 : C.** Le bloc C–D doit précéder A, qui précède B. A et B placent D après A ; D retourne le bloc.

**F6 : C.** Deux éléments et aucune violation de L → M. A n'en choisit qu'un ; B choisit L sans M ; D en choisit trois. L et M serait aussi possible, mais n'est pas une réponse proposée.

</details>

## Votre fiche de révision

**Univers → règles → blocs et contraintes fortes → sous-cas → vérification complète.**

Un témoin prouve le possible. Une contradiction ou une énumération exhaustive prouve l'impossible. Un contre-exemple suffit à réfuter l'obligatoire. « Avant » n'est pas « immédiatement avant ».

**Pour poursuivre :** la leçon 16 conserve ces structures pour reconnaître des raisonnements semblables dans des histoires différentes.
