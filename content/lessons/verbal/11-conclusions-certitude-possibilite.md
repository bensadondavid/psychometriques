# Déduire sans inventer : certain, possible, impossible et non établi

« Tous les dossiers urgents sont marqués. Ce dossier est marqué. » Est-il urgent ? Peut-être. Est-ce certain ? Non. Une conclusion logique doit résister à **toutes les situations compatibles avec les données**, pas seulement à celle que vous avez spontanément imaginée.

**Votre mission :** reconnaître une conclusion nécessaire, distinguer une absence de preuve d'une contradiction et utiliser un contre-exemple pour vérifier une inférence.

## Avant de commencer — Ce que la règle autorise

<!-- interaction L11-D1 | QCM unique | competence: deduction-chaine -->
**D1.** Tous les dossiers catalogués sont numérisés. Aucun document numérisé n'est librement consultable. Le dossier R est catalogué. Quelle conclusion est certaine ?

A. Tous les documents non catalogués sont libres.  
B. R n'est pas librement consultable.  
C. Tout document non libre est catalogué.  
D. R n'est pas numérisé.

<details><summary>Correction</summary>

**B.** R catalogué → numérisé → pas librement consultable. A et C inversent ou complètent abusivement les règles ; D contredit la première étape.

</details>

<!-- interaction L11-D2 | QCM unique | competence: non-deduit-vs-faux -->
**D2.** Tous les membres ont un badge. Sacha a un badge. Que peut-on dire de « Sacha est membre » ?

A. C'est nécessairement vrai.  
B. C'est nécessairement faux.  
C. C'est indéterminé : vrai ou faux reste compatible avec les seules données.  
D. La règle affirme qu'aucun membre n'existe.

<details><summary>Correction</summary>

**C.** Un non-membre peut aussi avoir un badge. A affirme la réciproque ; B transforme l'absence de preuve en réfutation ; D ajoute une information d'existence absente.

</details>

## Séquence 1 — Trois statuts et une distinction de consigne

| Statut d'une proposition P | Test |
|---|---|
| Nécessairement vraie | Toutes les situations compatibles rendent P vraie |
| Impossible / nécessairement fausse | Aucune situation compatible ne rend P vraie |
| Indéterminée | Certaines situations compatibles rendent P vraie, d'autres fausse |

« P est possible » signifie qu'il existe au moins une situation compatible où P est vraie. Une proposition certaine est donc également possible. Dans les exercices qui opposent **certain / seulement possible / impossible**, « seulement possible » désigne le cas indéterminé.

La consigne « ne découle pas » vise une proposition qui n'est pas garantie. Elle peut être **fausse selon les données** ou **simplement indéterminée**. Ne cherchez pas obligatoirement une contradiction si la question demande seulement ce qui n'est pas déductible.

## Séquence 2 — Enchaîner les règles

Avec A → B et B → C, on obtient A → C. Ajoutez un cas existant et la chaîne devient une conclusion sur cet individu.

Exemple : « Toute œuvre prêtée est enregistrée ; toute œuvre enregistrée possède un identifiant ; ce tableau est prêté. » On déduit que ce tableau est enregistré et possède un identifiant.

En revanche, un identifiant seul ne permet pas de remonter à « prêté ». Les flèches ne se parcourent pas librement à l'envers.

### Ajouter une exclusion

« Tous les A sont B ; aucun B n'est C » permet « aucun A n'est C ». Si un objet était A et C, il serait aussi B et C, ce qui violerait l'exclusion.

<!-- interaction L11-I1 | chaine a completer | competence: deduction-chaine -->
### Atelier — Trois étapes, aucune invention

Règles : tous les abonnés premium ont une carte ; tous les titulaires d'une carte accèdent à la salle ; aucun accès à la salle ne se fait sans enregistrement. Inès est abonnée premium.

Écrivez trois conclusions certaines sur Inès et une conclusion que ces règles ne permettent pas de tirer sur tous les titulaires d'une carte.

<details><summary>Correction</summary>

Inès **a une carte**, **accède à la salle** et **est enregistrée** selon les règles données. On ne peut pas conclure que **tous les titulaires d'une carte sont premium** : d'autres personnes peuvent recevoir une carte par un autre moyen.

</details>

## Séquence 3 — Certains : suivre le même témoin

« Certains A sont B ; tous les B sont C » permet « certains A sont C ». L'élément à la fois A et B est transporté vers C.

Mais « certains A sont B ; certains B sont C » ne permet pas forcément « certains A sont C ». Les deux groupes peuvent utiliser des B différents.

Contre-exemple : deux personnes, l'une A et B mais pas C, l'autre B et C mais pas A. Les prémisses sont vraies ; aucune personne n'est A et C.

### Une intersection peut se lire dans les deux sens

« Certains lecteurs sont sportifs » implique « certains sportifs sont lecteurs » : on parle du même élément dans l'intersection. Cela ne permet ni « tous les lecteurs sont sportifs » ni « tous les sportifs sont lecteurs ».

<!-- interaction L11-I2 | construire un contre-exemple | competence: temoins-distincts -->
### Atelier — Deux témoins au lieu d'un

Certains membres parlent italien. Certains membres jouent du piano. Construisez une petite situation où ces deux phrases sont vraies, mais où aucun membre ne fait les deux.

<details><summary>Correction possible</summary>

Deux membres suffisent : Ana parle italien et ne joue pas du piano ; Noé joue du piano et ne parle pas italien. Ainsi, l'intersection n'est pas imposée. Elle reste aussi possible dans une autre situation : les données seules ne la décident pas.

</details>

## Séquence 4 — Le test du contre-exemple

Pour vérifier si une conclusion est nécessaire, cherchez une situation qui respecte les prémisses mais rend la conclusion fausse. **Un seul contre-exemple valide suffit** à réfuter la nécessité.

Modèle : « Tous les romans du rayon sont reliés ; ce livre est relié ; donc c'est un roman du rayon. » Imaginez un dictionnaire relié hors de ce rayon. Il respecte la règle et invalide la conclusion.

Attention : le contre-exemple doit respecter **toutes** les données. Inventer un roman du rayon non relié contredirait la prémisse ; ce ne serait pas une réfutation valide du raisonnement.

Pour prouver une possibilité, c'est l'inverse : construisez une situation complète qui réalise la proposition sans enfreindre les règles. Pour prouver une impossibilité, une simple tentative ratée ne suffit pas ; il faut une contradiction inévitable ou un examen exhaustif.

## Séquence 5 — « Ne découle pas » et consignes négatives

Ces questions changent la cible, pas la logique. Pour chaque choix, marquez : garanti, contredit ou indéterminé. Puis appliquez la consigne exacte.

Exemple : tous les participants réguliers ont répondu ; certains occasionnels ont répondu. Une option « tous les répondants sont réguliers » est contredite si réguliers et occasionnels désignent ici des catégories distinctes. Une option « tous les occasionnels ont répondu » n'est simplement pas établie. Les deux ne sont pas garanties ; un QCM qui demanderait une seule réponse devrait éviter de les proposer ensemble.

**La bonne rédaction de la question fait partie du problème.** Vous ne devez pas inventer une information manquante pour rendre un choix unique.

<!-- interaction L11-I3 | QCM unique | competence: affirmation-non-deduite -->
### Atelier — Trouvez l'unique ajout

Tous les membres présents ont signé. Lina était présente et membre. Karim, membre absent, n'a pas signé. Quelle affirmation **ne découle pas** ?

A. Lina a signé.  
B. Karim n'a pas signé.  
C. Tous les membres qui ont signé étaient présents.  
D. Au moins un membre a signé.

<details><summary>Correction</summary>

**C.** Un autre membre absent pourrait avoir signé à distance. A résulte de la règle ; B est explicitement donné ; D utilise Lina comme témoin. C peut être vraie ou fausse selon les autres membres : elle n'est pas nécessairement fausse.

</details>

## Séquence 6 — Quatre réflexes pour déduire juste

1. **Séparez faits et règles.** Un nom donné peut fournir l'existence qu'une règle universelle ne fournit pas.
2. **Gardez les quantificateurs.** « Tous » et « certains » ne produisent pas les mêmes conclusions.
3. **Vérifiez le sens des flèches.** Une conséquence observée n'identifie pas forcément sa cause.
4. **Cherchez un scénario rival.** S'il respecte les données, votre conclusion n'est pas nécessaire.

Les connaissances de la vie courante peuvent aider à comprendre les mots, mais ne doivent pas ajouter une règle absente. Si le texte crée un univers abstrait, respectez cet univers.

## Mission finale — Déduire ou suspendre

<!-- interaction L11-F1 | QCM unique | competence: deduction-chaine -->
**F1.** Tous les A sont B ; aucun B n'est C ; T est A. A. T est C ; B. Tout C est A ; C. T n'est pas C ; D. Aucun A n'existe.

<!-- interaction L11-F2 | QCM unique | competence: temoin-transporte -->
**F2.** Certains lecteurs sont musiciens ; tous les musiciens répètent. A. Tous les lecteurs répètent ; B. Aucun lecteur ne répète ; C. Tous ceux qui répètent sont lecteurs ; D. Certains lecteurs répètent.

<!-- interaction L11-F3 | QCM unique | competence: temoins-distincts -->
**F3.** Certains employés courent ; certains employés dessinent. « Certains employés courent et dessinent » est : A. Indéterminé ; B. Nécessaire ; C. Impossible ; D. Équivalent à « tous les employés dessinent ».

<!-- interaction L11-F4 | QCM unique | competence: affirmation-non-deduite -->
**F4.** Tous les dossiers acceptés sont datés. R est accepté. S n'est pas daté. Quelle affirmation ne découle pas ? A. R est daté ; B. Tout dossier daté est accepté ; C. S n'est pas accepté ; D. Au moins un dossier est daté.

<!-- interaction L11-F5 | QCM unique | competence: contre-exemple -->
**F5.** Tous les A sont B. On prétend « tous les B sont A ». Quel cas réfute cette prétendue conséquence en respectant la donnée ? A. Un A non-B ; B. Aucun objet n'existe ; C. Un B non-A ; D. Un objet A et B.

<!-- interaction L11-F6 | QCM unique | competence: possible-vs-certain -->
**F6.** Tous les inscrits ont une carte. Milo a une carte. Quelle formulation est exacte ? A. Milo est forcément inscrit ; B. Milo ne peut pas être inscrit ; C. Tous les titulaires sont inscrits ; D. Milo peut être inscrit, sans que cela soit garanti.

<details><summary>Corrigé de la mission</summary>

**F1 : C.** Inclusion puis exclusion. A contredit ; B inverse sans droit ; D nie une existence fournie par T.

**F2 : D.** Le lecteur musicien sert de témoin et répète. A généralise ; B contredit ce témoin ; C inverse la règle.

**F3 : A.** Les deux « certains » peuvent désigner des personnes distinctes ou communes. B et C tranchent sans preuve ; D ne traduit pas la même proposition.

**F4 : B.** C'est la réciproque non donnée. A vient de R ; C de la contraposée ; D de l'existence de R daté.

**F5 : C.** La présence d'un B non-A laisse tous les A dans B mais empêche tous les B d'être A. A viole la donnée ; B et D ne réfutent pas la conclusion.

**F6 : D.** L'inscription est compatible, pas nécessaire. A et C inversent l'implication ; B confond absence de preuve et impossibilité.

</details>

## Votre fiche de révision

**Certain : tous les scénarios. Possible : au moins un scénario. Impossible : aucun scénario. Indéterminé : des scénarios dans les deux sens.**

Un contre-exemple valide annule une nécessité. « Ne découle pas » ne veut pas forcément dire « faux ». Deux « certains » ne se rencontrent pas automatiquement.

**Pour poursuivre :** la leçon 12 identifie la conclusion qu'un auteur défend et le pont implicite dont il a besoin.
