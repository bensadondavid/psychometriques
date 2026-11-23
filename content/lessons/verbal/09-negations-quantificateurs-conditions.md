# Tous, certains, seulement si : comprendre la portée exacte d'une phrase

« Seuls les membres entrent. » Cela veut-il dire que tous les membres entrent ? Non : la phrase impose une condition à ceux qui entrent ; elle ne promet pas l'entrée à chaque membre.

**Votre mission :** traduire les quantificateurs, les négations et les conditions sans renforcer ce que le texte affirme.

Les lettres et les flèches servent ici de raccourcis facultatifs. Vous pouvez toujours revenir à une phrase en français.

## Avant de commencer — Deux pièges minuscules

<!-- interaction L09-D1 | QCM unique | competence: seulement-si -->
**D1.** Seuls les dossiers signés sont examinés. Le dossier de Lina est examiné. Que sait-on ?

A. Il est signé.  
B. Tous les dossiers signés sont examinés.  
C. Il est le seul dossier signé.  
D. Il n'est pas signé.

<details><summary>Correction</summary>

**A.** Être signé est nécessaire pour être examiné. B est la réciproque non donnée ; C ajoute une unicité ; D contredit la règle et le cas observé.

</details>

<!-- interaction L09-D2 | QCM unique | competence: negation-quantificateur -->
**D2.** Quelle phrase est la négation exacte de « Tous les candidats sont prêts » ?

A. Aucun candidat n'est prêt.  
B. Tous les candidats sont presque prêts.  
C. Au moins un candidat n'est pas prêt.  
D. Au moins un candidat est prêt.

<details><summary>Correction</summary>

**C.** Un seul candidat non prêt suffit à rendre l'affirmation universelle fausse. A est beaucoup plus forte : elle refuse que quiconque soit prêt. D peut être vraie en même temps que la phrase de départ.

</details>

## Séquence 1 — Tous, aucun, certains

| Formulation | Ce qu'elle affirme | Ce qu'elle n'affirme pas |
|---|---|---|
| Tous les A sont B | Aucun A n'est en dehors de B | Tous les B sont A |
| Aucun A n'est B | Pas de membre commun entre A et B | Qu'il existe des A |
| Certains A sont B | Au moins un élément est à la fois A et B | Que d'autres A ne sont pas B |
| Certains A ne sont pas B | Au moins un A est hors de B | Que tous les A sont hors de B |

Dans les exercices de déduction, **certains signifie au moins un**, pas « quelques-uns et pas tous », sauf précision explicite. « Certains inscrits sont venus » reste compatible avec « tous sont venus ».

Une règle universelle ne fournit pas à elle seule un exemple existant. « Tous les dragons de cette salle sont verts » ne permet pas de conclure qu'il y a un dragon dans la salle. Pour déduire l'existence d'un élément, cherchez « certains », « au moins un », un nom ou un effectif positif.

## Séquence 2 — Nier sans exagérer

Nier une phrase revient à décrire exactement les cas où elle est fausse.

| Phrase | Négation exacte |
|---|---|
| Tous les A sont B | Au moins un A n'est pas B |
| Aucun A n'est B | Au moins un A est B |
| Au moins un A est B | Aucun A n'est B |
| Au moins un A n'est pas B | Tous les A sont B |

« Pas tous » n'est pas « aucun ». « Pas toujours » signifie au moins une exception, pas « jamais ». « Pas nécessairement » indique l'absence de garantie, pas une impossibilité.

<!-- interaction L09-I1 | appariement | competence: negation-quantificateur -->
### Atelier — Trouvez le contre-exemple minimal

Pour rendre chacune de ces affirmations fausse, que suffit-il de montrer ?

1. Tous les livres sont disponibles.  
2. Aucun livre n'est annoté.  
3. Au moins un livre est traduit.

<details><summary>Correction</summary>

1. **Au moins un livre indisponible.** 2. **Au moins un livre annoté.** 3. **Aucun livre traduit.** Pour 3, constater qu'un livre n'est pas traduit ne suffit pas : un autre peut l'être.

</details>

## Séquence 3 — Si A, alors B

« Si un badge est valide, la porte s'ouvre » s'abrège **A → B** : badge valide → ouverture.

Dans la lecture logique de l'exercice, on tient la règle pour vraie. Deux inférences sont alors sûres :

- A est établi → B est établi.
- B est faux → A est faux. C'est la **contraposée** : si la porte ne s'ouvre pas, le badge ne remplit pas la condition suffisante de validité décrite par cette règle.

Deux autres inférences ne sont pas autorisées sans information supplémentaire :

- B est établi → A : la porte peut s'ouvrir par un autre moyen.
- A est faux → B est faux : un badge invalide n'exclut pas un autre moyen d'ouverture.

Dans la vie réelle, une panne peut invalider une règle technique. Dans l'exercice, on n'invente pas cette panne contre une règle explicitement donnée comme vraie.

## Séquence 4 — Nécessaire et suffisant

Une condition **nécessaire** est exigée ; elle n'assure pas, à elle seule, le résultat. Une condition **suffisante** assure le résultat selon la règle ; elle n'est pas forcément la seule manière de l'obtenir.

| Phrase | Traduction |
|---|---|
| Si A, alors B | A → B |
| A seulement si B | A → B |
| Seuls les B peuvent être A | A → B |
| Il faut B pour A | A → B |
| A suffit pour B | A → B |
| A si B | B → A |
| A si et seulement si B | A → B et B → A |

**« A si B » et « A seulement si B » ne vont pas dans le même sens.** Reformulez avec « il faut » ou « suffit » avant de dessiner une flèche.

<!-- interaction L09-I2 | traduction | competence: necessaire-suffisant -->
### Atelier — Dans quel sens va la règle ?

Traduisez sans ajouter de réciproque :

1. Seuls les membres reçoivent une carte.  
2. Recevoir une carte suffit pour accéder à la salle.  
3. Il faut une réservation pour participer.  
4. On participe si l'on est invité.

<details><summary>Correction</summary>

1. Carte reçue → membre. 2. Carte reçue → accès. 3. Participation → réservation. 4. Invitation → participation. Le mot « si » seul introduit la condition suffisante ; « seulement si » introduit une condition nécessaire.

</details>

## Séquence 5 — Et, ou, ni, sauf

### « Et » exige les deux éléments

Pour recevoir un badge, il faut une pièce d'identité **et** une inscription : badge → identité et inscription. Cela ne dit pas encore que les deux suffisent, sauf si la règle l'indique.

### « Ou » peut être inclusif

Dans ce cours, sauf mention « mais pas les deux » ou contexte qui l'exclut, **A ou B** admet A seul, B seul ou les deux. **A ou B, mais pas les deux** n'admet qu'une option.

### Nier une combinaison

- Pas « A et B » → au moins l'un des deux manque : non-A **ou** non-B.
- Pas « A ou B » → aucun n'est présent : non-A **et** non-B.
- « Ni A ni B » → non-A et non-B.

### « Sauf » demande une lecture locale

« Tous sont admis sauf Lina » dit normalement que Lina n'est pas admise et que les autres le sont. « La salle ferme, sauf si une réunion est prévue » introduit une exception conditionnelle ; ne construisez pas automatiquement une équivalence sans examiner ce que la formulation garantit réellement.

Pour des questions de logique formelle, une formulation explicite vaut mieux qu'une convention implicite sur « sauf si ».

<!-- interaction L09-I3 | classement vrai-faux-indetermine | competence: conditions-combinees -->
### Atelier — Deux exigences, trois conclusions

Règle : « Tous les dossiers acceptés sont signés et datés. » Le dossier R n'est pas daté. Le dossier S est signé et daté.

Classez :

1. R n'est pas accepté.  
2. S est accepté.  
3. S peut être accepté sans contredire la règle.

<details><summary>Correction</summary>

1 : **certain**. Une exigence manque. 2 : **indéterminé**, car les exigences ne sont pas déclarées suffisantes. 3 : **possible** : rien ne l'exclut. Distinguez l'affirmation d'un fait et la compatibilité d'un scénario.

</details>

## Séquence 6 — Les pièges récurrents

**Deux « certains » ne désignent pas forcément les mêmes personnes.** Certains membres lisent ; certains membres courent. Cela n'établit pas qu'un membre lit et court.

**Tous les A sont B n'est pas tous les B sont A.** Tous les chats sont des mammifères ; un mammifère n'est pas forcément un chat.

**Une règle ne crée pas ses membres.** Sans existence donnée, évitez de déduire « certains » d'un simple « tous ».

**Pas nécessaire ne signifie pas interdit.** Une pièce peut ne pas être obligatoire et rester autorisée.

## Mission finale — Précision logique

<!-- interaction L09-F1 | QCM unique | competence: negation-quantificateur -->
**F1.** Négation exacte de « Aucun candidat ne connaît la réponse » : A. Tous la connaissent ; B. Certains ne la connaissent pas ; C. Personne ne la connaît ; D. Au moins un la connaît.

<!-- interaction L09-F2 | QCM unique | competence: seulement-si -->
**F2.** Seuls les membres réservent. Nora réserve. Qu'en déduire ? A. Elle est membre ; B. Tous les membres réservent ; C. Elle est la seule membre ; D. Aucun non-réservant n'est membre.

<!-- interaction L09-F3 | QCM unique | competence: contraposee -->
**F3.** Si un dossier est prioritaire, il est marqué. Le dossier K n'est pas marqué. A. Il est prioritaire ; B. Il n'est pas prioritaire ; C. Aucun dossier marqué n'est prioritaire ; D. Tous les dossiers sont marqués.

<!-- interaction L09-F4 | QCM unique | competence: existence -->
**F4.** Seule donnée : « Tous les livres du rayon X sont reliés. » Quelle proposition est garantie ? A. Le rayon contient au moins un livre ; B. Tous les livres reliés sont dans X ; C. Aucun livre de X n'est non relié ; D. Certains livres de X ne sont pas reliés.

<!-- interaction L09-F5 | QCM unique | competence: certains-inclusif -->
**F5.** « Certains candidats sont inscrits. » Quelle situation reste compatible ? A. Aucun candidat n'est inscrit ; B. Tous les candidats sont inscrits ; C. Il n'existe aucun candidat ; D. Chaque candidat est non inscrit.

<!-- interaction L09-F6 | QCM unique | competence: negation-combinaison -->
**F6.** Négation exacte de « Lina a un badge et une clé » : A. Elle n'a ni badge ni clé ; B. Elle n'a pas de badge mais a une clé ; C. Elle a un badge ou une clé ; D. Elle n'a pas de badge ou n'a pas de clé, éventuellement les deux manquent.

<details><summary>Corrigé de la mission</summary>

**F1 : D.** Un seul candidat connaissant la réponse contredit « aucun ». A serait plus fort que nécessaire ; B peut coexister avec la phrase de départ ; C la répète.

**F2 : A.** Réserver implique être membre. B et D retournent la condition ; C ajoute une unicité.

**F3 : B.** Contraposée de prioritaire → marqué. A contredit la règle ; C inverse une relation d'exclusion ; D ajoute une universalité.

**F4 : C.** Reformulation de la règle, sans existence ajoutée. A suppose un effectif ; B inverse ; D contredit.

**F5 : B.** « Certains » n'exclut pas « tous ». A, C et D n'offrent aucun candidat inscrit et contredisent donc l'existence affirmée.

**F6 : D.** Pour nier la possession des deux, au moins un des deux doit manquer. A et B sont des cas possibles de cette négation, mais ne la décrivent pas entièrement ; C n'est pas sa négation.

</details>

## Votre fiche de révision

**Tous ≠ tous en sens inverse. Certains = au moins un. Pas tous = au moins une exception.**

Si A alors B : A suffit pour B ; B est nécessaire à A. Non-B permet non-A. B seul ne permet pas A. Distinguez une règle, l'existence d'un exemple et la possibilité d'un scénario.

**Pour poursuivre :** la leçon 10 utilise ces outils pour reformuler un paragraphe sans le déformer.
