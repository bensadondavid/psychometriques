# Plateforme de préparation aux examens

Ce document décrit le produit à construire, les décisions prises avec le responsable du projet et l'état du dépôt. Il remplace l'ancienne feuille de route. Les éléments marqués « à décider » ne sont pas des fonctionnalités validées.

## Décisions produit

- Le lancement couvre trois préparations distinctes : Psychométriques, AMIRNET et YAELNET. Les Psychométriques constituent le cœur du site, mais les trois parcours doivent être utilisables au lancement.
- L'Oulpan appartient à un autre projet. Il ne fait pas partie de ce site.
- Le visiteur peut essayer une courte série de questions sans compte. Chaque examen possède sa propre série découverte, fixe et choisie éditorialement. La même série est présentée à tous les nouveaux visiteurs de cet examen.
- Le visiteur voit son résultat et ses explications avant toute demande d'inscription. Le compte gratuit lui permet ensuite de conserver ses résultats et de poursuivre.
- L'organisation principale de l'entraînement est examen → matière → thème. Les séries préparées guident l'élève. La composition libre d'une série est différée ; elle n'est pas requise pour la première version.
- Deux modes sont prévus : apprentissage, sans chronomètre et avec correction après chaque réponse ; conditions d'examen, chronométré et avec correction à la fin.
- Une série interrompue doit pouvoir être reprise. L'élève peut retrouver les explications, revoir ses erreurs et recevoir un bilan qui indique les compétences à travailler et une suite concrète.
- Le tableau de bord doit guider l'élève avec un objectif et un planning définis par la plateforme. L'élève ne construit pas lui-même son programme de séances. Les données utilisées, les règles de calcul et la manière d'ajuster ce planning restent à définir lorsque les tentatives et leurs bilans seront disponibles.
- Les leçons Psychométriques nécessitent un abonnement Psychométriques actif ; un administrateur non suspendu peut accéder à toutes les leçons, y compris aux brouillons. Elles restent progressives, fondées sur la pratique et peuvent être proposées après une difficulté, sans être un préalable aux exercices. Les droits des leçons AMIRNET et YAELNET restent à décider. Le responsable du projet crée leur contenu en parallèle de la reconstruction du site.
- La condition d'accès aux leçons Psychométriques est décidée. Le fournisseur de paiement, les limites du compte gratuit, les prix et le regroupement éventuel des offres restent à décider. Aucun texte ne doit présenter un paiement comme actif.

## Parcours utilisateur cible

### Découverte sans compte

1. Comprendre en quelques instants ce que la plateforme apporte.
2. Choisir directement Psychométriques, AMIRNET ou YAELNET.
3. Lire une présentation courte du parcours choisi.
4. Faire la série découverte fixe de cet examen.
5. Voir le bilan et les explications.
6. Créer un compte pour sauvegarder ce résultat et continuer.

Le passage au compte doit conserver le contexte de l'examen et, si la solution technique le permet, le résultat de la découverte. Le mécanisme exact de conservation reste à définir avant l'implémentation.

### Entraînement avec compte

1. Retrouver son examen et sa progression.
2. Choisir matière, thème et série préparée.
3. Choisir le mode apprentissage ou conditions d'examen.
4. Répondre, interrompre puis reprendre si nécessaire.
5. Consulter le bilan, les explications et les erreurs.
6. Poursuivre avec une autre série ou une leçon pertinente.

Le niveau de détail du bilan et les règles de sélection des prochaines séries seront définis à partir des banques réelles. Les recommandations automatiques personnalisées sont une évolution ultérieure.

## Structure du site à valider

La structure fonctionnelle proposée comporte cinq espaces :

1. **Accueil public** : valeur de la plateforme, choix immédiat de l'examen, accès à la découverte.
2. **Présentation par examen** : objectif, matières, méthode et entrée vers la série découverte correspondante.
3. **Découverte** : série sans compte, résultat complet, puis proposition de sauvegarde.
4. **Espace élève** : tableau de bord par examen, entraînement, séries en cours, bilans, erreurs et leçons.
5. **Administration** : audit des banques, import, publication, composition des séries découvertes et préparées, gestion des leçons.

Les URLs et la navigation précise seront arrêtées après validation de cette structure. Il ne faut pas créer de pages de remplissage ou promettre des contenus encore absents.

Une première structure de navigation est maintenant en place : `/examens` et `/examens/{psychometriques,amirnet,yaelnet}`. Ces pages présentent les trois parcours sans annoncer de série déjà disponible. Cette convention d'URL reste à valider avec le responsable du projet avant d'étendre les routes d'entraînement.
Les pages marketing `/psychometriques`, `/langues`, `/tarifs` et `/faq` sont de nouveau accessibles depuis le menu. L'accueil affiche à nouveau l'exemple illustratif, la méthode, l'accès aux parcours et le lien vers la FAQ. Les textes de ces pages distinguent les éléments disponibles des séries encore en préparation. La page Tarifs conserve son URL mais ne présente plus les anciens prix et packs, car le modèle commercial n'est pas décidé.

### Structure interne proposée

Indépendamment du framework retenu, le code devrait séparer les responsabilités suivantes : catalogue des examens, banque et import des questions, composition des séries, tentatives et bilans, leçons, identité et accès, administration. Les pages publiques et privées utilisent ces modules sans contenir elles-mêmes les règles de sélection des questions ou de calcul des résultats.

Cette séparation est une proposition d'architecture, pas un déplacement de fichiers déjà effectué. Les noms de dossiers et les conventions du framework seront décidés avec la stack.

## Contenu et couverture

### Inventaire déclaré, non audité

Le résumé fourni par le responsable du projet le 18 novembre 2026 décrit un dossier source nommé questions_psycho, dans le projet ChatGPT « psychometriques.fr ». Il mentionne 166 fichiers CSV et des figures SVG. Ces fichiers ne sont pas présents dans ce dépôt ; les nombres ci-dessous sont ceux du résumé, pas un comptage effectué ici.

| Banque                                                |               Entrées déclarées |
| ----------------------------------------------------- | ------------------------------: |
| Psychométriques — réflexion quantitative              |                           9 400 |
| Psychométriques — analogies verbales                  |                           1 800 |
| Psychométriques — compréhension et déduction verbales |                           2 200 |
| Psychométriques — compréhension de textes             | 240 questions liées à 40 textes |
| AMIRNET                                               |                           1 495 |
| YAELNET                                               |                           1 430 |
| **Total déclaré**                                     |                      **16 565** |

La structure source décrite est :

    questions_psycho/
    ├── reflexion_quantitative/serie-1/ à serie-4/
    ├── reflexion_verbale/
    │   ├── analogies-1800.csv
    │   ├── questions-reflexion-verbale-comprehension-deduction-2200.csv
    │   └── textes/
    ├── amirnet/
    └── yaelnet/

Cette description ne prouve ni la présence des fichiers dans le dépôt, ni leur qualité, ni leur import en base.

Le résumé déclare des questions dans chacun des 21 chapitres quantitatifs :

|  Nº | Chapitre                            | Entrées déclarées |
| --: | ----------------------------------- | ----------------: |
|   1 | Nombres                             |               900 |
|   2 | Divisibilité                        |               600 |
|   3 | Fractions                           |               600 |
|   4 | Pourcentages                        |               500 |
|   5 | Ratios et proportions               |               400 |
|   6 | Moyennes                            |               400 |
|   7 | Puissances et racines               |               400 |
|   8 | Expressions algébriques             |               400 |
|   9 | Équations et inégalités             |               400 |
|  10 | Problèmes algébriques               |               400 |
|  11 | Vitesse, distance et temps          |               400 |
|  12 | Travail et débits                   |               400 |
|  13 | Suites et régularités               |               400 |
|  14 | Combinatoire                        |               400 |
|  15 | Probabilités                        |               400 |
|  16 | Lecture de tableaux et données      |               400 |
|  17 | Angles et droites                   |               400 |
|  18 | Triangles                           |               400 |
|  19 | Quadrilatères et polygones          |               400 |
|  20 | Cercles                             |               400 |
|  21 | Géométrie dans l'espace et repérage |               400 |

Ces volumes sont internes à la planification. Ils ne doivent pas devenir des affirmations commerciales avant vérification des fichiers, des doublons et des statuts.

### Audit nécessaire avant publication

Pour chaque banque, vérifier les schémas CSV, les identifiants stables, les doublons, les réponses correctes, les explications, les niveaux de difficulté, les langues, les thèmes, les passages, les figures et les autres médias. Distinguer les questions rédigées, validées, importées et publiées. Vérifier aussi ce qui existe réellement dans la base.

La rédaction des Psychométriques et celle de YAELNET doivent être traitées comme des composantes complètes des parcours. Le résumé ne recense pas leurs sujets et exercices : leur couverture reste à établir. Pour le quantitatif, contrôler particulièrement les graphiques, les identités remarquables et les différents solides. Pour AMIRNET, distinguer les formats principaux des formats expérimentaux et relever ceux qui manquent à la banque.

Conserver les identifiants de la banque existante lors de toute réorganisation et préserver les liens entre questions, textes, explications et figures. Une validation structurelle des CSV ne remplace pas la relecture linguistique et pédagogique.

### Ordre de construction du parcours — décision du responsable

1. Construire d'abord la structure du site et les parcours distincts pour les trois examens, sans inventer de questions ni de leçons.
2. Définir ensuite le modèle des matières, thèmes, séries préparées, tentatives, réponses et bilans. Une série peut être découverte ou entraînement et ne dépend pas d'une leçon.
3. Construire le lecteur et les deux modes, avec correction, reprise et bilan, en gardant les contenus non publiés hors des parcours publics.
4. Créer enfin la page et le pipeline d'import CSV pour verser les banques existantes dans le modèle construit. L'import doit préserver les identifiants et la provenance, valider avant écriture, être transactionnel et répétable, et ne pas publier automatiquement des questions.
5. Une fois les fichiers importés, composer les séries découvertes fixes et les séries préparées à partir des questions relues, puis vérifier les trois parcours de bout en bout.

Le responsable a déjà contrôlé ses banques et ne demande pas un nouvel audit préalable de leurs fichiers. Leur intégration réelle nécessitera néanmoins des contrôles techniques à l'import et une vérification de ce qui est publiable. Les banques psychométriques sont disponibles localement chez lui, mais ne sont pas encore lisibles dans cet environnement ; celles d'AMIRNET et de YAELNET viendront ensuite.

Le dépôt conserve l'ancien import administrateur des formats psychométriques et des figures SVG ; la nouvelle page unifiée et son API acceptent les formats CSV définis pour Psychométriques, AMIRNET et YAELNET. Les banques réelles des deux examens de langues n'ont pas été vérifiées dans ce dépôt : les formats devront être confrontés à ces fichiers avant un import de production. Les deux pipelines gardent le statut source séparé de la publication éditoriale ; les nouveaux contenus restent en brouillon. Les types des questions de langues sont provisoirement représentés par les enums existants et distingués par chapitre.

### Leçons et supports en préparation

La première leçon, « Les nombres », utilise `content/lessons/01-nombres.md` comme source éditoriale. `pnpm lesson:sync:nombres` valide cette source sans écrire ; l'import explicite dans Prisma associe la leçon au programme et au cours de réflexion quantitative avec son identifiant stable `quant-nombres`. La page `/account/lecons/nombres` lit uniquement la leçon publiée en base après vérification côté serveur d'un droit Psychométriques actif. L'annexe éditoriale du document d'origine n'est pas importée. Les réponses et la progression ne sont pas encore enregistrées.

La liste `/account/lecons` affiche seulement les leçons Psychométriques disponibles lorsque le compte possède un accès actif à ce programme, ou lorsque le compte est administrateur non suspendu. Elle ne montre pas de carte de leçon bloquée ; sans leçon accessible, elle affiche un état vide. Les pages de détail répondent 404 sans droit actif ; les PDF conservent leur vérification d'accès côté serveur.

`/account/programmes` liste seulement les programmes dont le compte possède un `ProgramAccess` actif, non révoqué et sur un programme publié ; un administrateur non suspendu voit les programmes créés en base parmi les trois examens du site. Chaque carte ouvre `/account/programmes/[slug]`, protégé par la même vérification côté serveur, avec les leçons en ligne et le nombre de tentatives enregistrées. La barre latérale contient « Exercices » et « Tests » sous « Leçons » ; leurs pages sont volontairement vides tant que le lecteur et les séries utilisables ne sont pas prêts. Un lien depuis un programme transmet son slug et la page refuse tout slug inaccessible. Au 22 novembre 2026, seul le programme Psychométriques existe en base et `ProgramAccess` ne contient encore aucun droit.

État actuel à reprendre : `/account/home` permet à l'élève de renseigner un objectif et de planifier manuellement ses séances, enregistrés dans `StudyGoal` et `StudySession`. Cette approche a été écartée par le responsable du projet : elle ne correspond pas au tableau de bord attendu. Lors d'une étape ultérieure, la plateforme devra définir pour l'élève son objectif de travail, ses priorités et son planning à partir de données réelles. La reprise des séries, les résultats et les erreurs nécessitent d'abord le lecteur et l'enregistrement des tentatives. Une page de statistiques détaillées et une page de planning personnalisé restent également à construire ; leurs indicateurs et leurs règles de calcul ne sont pas encore arrêtés.
La migration additive `20261122190000_add_study_goal_and_sessions` a été appliquée à la base configurée le 22 novembre 2026 après vérification de la cible et de l'état des migrations.
La fiche de révision détaillée est conservée hors de `public/`, dans `content/lessons/assets/fiche-revision-nombres.pdf`, et n'est téléchargée que par une route qui refait les contrôles de session, d'accès et de publication. Elle comporte trois pages de rappels et une page de synthèse. Le générateur est `scripts/generate-nombres-revision-pdf.py` (ReportLab) ; régénérer le PDF après toute modification de ses rappels ou de la fiche source.

La deuxième leçon, « La divisibilité », provient de `content/lessons/02-divisibilite.md` ; le front matter et l'annexe éditoriale du fichier remis par le responsable sont exclus du contenu élève. L'identifiant source stable est `quant-divisibilite`, version 1, dans le même programme et la même matière que « Les nombres ». `pnpm lesson:sync:divisibilite` vérifie la source en lecture seule ; `--apply --publish --expect-host=... --use-configured-database` est requis pour l'import explicite. Elle a été importée et publiée dans la base Neon configurée le 22 novembre 2026, après vérification des migrations. La route `/account/lecons/divisibilite` lit la leçon depuis Prisma après contrôle du droit Psychométriques. Sa fiche de révision détaillée de quatre pages est générée par `scripts/generate-divisibilite-revision-pdf.py`, conservée hors de `public/` et distribuée par une route qui revérifie l'accès.

Les leçons 03 « Les fractions », 04 « Les pourcentages » et 05 « Ratios et proportions » proviennent des fichiers remis par le responsable. Le contenu élève est conservé dans `content/lessons/{03-fractions,04-pourcentages,05-ratios-proportions}.md` ; le front matter et l'annexe éditoriale ne sont pas importés. Leurs identifiants stables sont `quant-fractions`, `quant-pourcentages` et `quant-ratios-proportions`, version 1, associés aux chapitres quantitatifs 3, 4 et 5. `pnpm lesson:sync:quantitative` valide les sources 03 à 10 sans écriture ; l'import nécessite `--apply`, `--expect-host=...` et une URL de base explicite ou `--use-configured-database`. Les trois leçons ont été importées et publiées sur la branche Neon `production` le 22 novembre 2026, puis leurs statuts, longueurs et liens aux chapitres ont été vérifiés en base. Les routes `/account/lecons/{fractions,pourcentages,ratios-proportions}` relisent le contenu en base après contrôle du droit. Chaque fiche de révision comporte trois pages de règles, exemples et pièges, suivies d'une page de synthèse reprise du tableau de la leçon ; les PDF sont conservés hors de `public/`, générés par `scripts/generate-quantitative-revision-pdfs.py` et distribués par une route qui revérifie l'accès. Les ateliers restent en lecture avec corrigés repliables, sans enregistrement des réponses ni de la progression.

Les leçons 06 « Les moyennes », 07 « Puissances et racines », 08 « Expressions algébriques », 09 « Équations et inégalités » et 10 « Problèmes algébriques » proviennent des cinq fichiers remis par le responsable. Les sources élèves `content/lessons/{06-moyennes,07-puissances-racines,08-expressions-algebriques,09-equations-inegalites,10-problemes-algebriques}.md` excluent le front matter et les annexes éditoriales. Leurs identifiants `quant-*`, version 1, sont associés aux chapitres quantitatifs 6 à 10. Le 22 novembre 2026, ces cinq contenus ont été synchronisés et publiés sur Neon `production` après contrôle de la branche, des migrations et des chapitres ; leur présence, leur version et leurs liens ont été revérifiés en base. Les pages de leçon réutilisent `/account/lecons/[slug]` et la vérification d'accès Psychométriques. Chacune propose une fiche PDF détaillée de quatre pages : trois pages de règles, exemples et pièges, puis le tableau de synthèse. Le générateur commun est `scripts/generate-quantitative-revision-pdfs.py`, avec les cartes éditoriales de ces cinq leçons dans `scripts/quantitative_revision_cards.py`. Les PDF restent hors de `public/` et leur route de téléchargement revérifie l'accès. Les réponses aux ateliers ne sont pas encore enregistrées.

La migration `20261122130000_add_program_access_and_lesson_source` a été appliquée à la branche Neon `production` le 22 novembre 2026. Elle ajoute `ProgramAccess` (un droit par utilisateur et programme, avec période de validité et référence d'abonnement vérifiée) et l'identifiant/version de source sur `Lesson`. La leçon `quant-nombres` (version 1) y a été importée et publiée. `User.role = admin` donne désormais accès aux leçons, après vérification du rôle actuel et de la suspension en base ; les autres comptes nécessitent `ProgramAccess`. Aucun flux de paiement ni attribution automatique de droit n'existe encore : la table `ProgramAccess` est vide, donc seuls les administrateurs non suspendus peuvent ouvrir la page et le PDF. Pour les prochaines synchronisations, l'import requiert `--apply`, `--publish`, `--expect-host` et soit `LESSON_IMPORT_DATABASE_URL`, soit l'option explicite `--use-configured-database` pour la cible du projet ; la commande sans `--apply` reste une vérification en lecture seule.

### Fondation Prisma pour les séries — état de la migration du 22 novembre 2026

La migration `20261122170000_add_training_foundation` a été appliquée sur Neon `production` le 22 novembre 2026, après un essai sur PostgreSQL isolé. Elle réutilise `QuestionChapter` comme thème, sous `Course` (matière), au lieu de créer une seconde taxonomie. Le rattachement du chapitre à la matière reste facultatif pendant la transition ; 21 chapitres quantitatifs existants sont reliés à « Réflexion quantitative ». `Exercise` représente une série découverte, préparée ou liée à une leçon ; son lien à une leçon devient facultatif. Les clés étrangères composites empêchent de mélanger une série, ses questions, son chapitre et sa leçon entre programmes. `LessonChapter` relie les leçons aux chapitres de leur matière. Les 10 540 questions ont été conservées après migration.

`Attempt`, `AttemptQuestion` et `AttemptAnswer` préparent la découverte anonyme, la reprise, les deux modes, les réponses et un instantané de chaque question au début de la tentative. L'application et ses routes restent à construire : ces tables seules ne créent pas le lecteur ni le bilan. Le jeton de réclamation anonyme devra être aléatoire, stocké uniquement sous forme d'empreinte, expiré puis supprimé lors du rattachement au compte. Une seule série découverte publiée est permise par programme.

L'import CSV conserve désormais le statut du fichier dans `sourceStatus`, séparé du statut de publication éditoriale. Les nouvelles questions et passages arrivent en brouillon ; une réimportation inchangée conserve le statut éditorial et la version, tandis qu'un contenu modifié revient en brouillon. Une publication exige `editorialReviewedAt`, mais il reste à créer une action de relecture et de publication authentifiée. Les 375 chemins d'image sans figure correspondante relevés en production empêchent pour l'instant d'ajouter une clé étrangère sur `Question.imagePath` ; les figures manquantes doivent être rapprochées avant cette contrainte.

Le responsable du projet crée les leçons en parallèle. La structure ci-dessous vient de son résumé : elle sert de base de discussion et ne décrit pas des leçons déjà disponibles ou approuvées.

- **Quantitatif :** une progression à établir à partir des 21 chapitres. Des leçons transversales sont proposées sur le calcul mental, l'estimation, la substitution de valeurs, le test des réponses, l'élimination et la gestion du temps.
- **Verbal :** méthode des analogies ; familles d'analogies, dont 18 relations signalées dans le résumé ; phrases à compléter et connecteurs ; logique et déduction ; analyse des arguments ; compréhension de textes ; rédaction argumentative.
- **AMIRNET :** structure de la phrase anglaise ; vocabulaire en contexte ; connecteurs ; phrases à compléter ; reformulations ; compréhension écrite ; préparation distincte aux formats expérimentaux.
- **YAELNET :** structure de la phrase hébraïque ; verbes et constructions ; vocabulaire ; connecteurs ; phrases à compléter ; reformulations ; compréhension écrite ; rédaction en hébreu avec entraînement au clavier.

Ces rubriques pédagogiques ne correspondent pas nécessairement aux dossiers ou catégories des CSV. Une correspondance explicite devra relier compétence officielle → chapitre ou thème → leçon → support de révision → questions validées.

Le format proposé pour une leçon précise son objectif et ses prérequis, explique les notions progressivement, résout des exemples étape par étape, montre les erreurs fréquentes, puis propose des exercices guidés avec indices et des exercices autonomes issus de la banque. Une courte vérification de maîtrise clôt la leçon. Le format sera éprouvé sur quelques leçons pilotes avant généralisation.

Quatre supports complémentaires sont proposés : fiche de formules, fiche de méthode, fiche de révision et quiz de rappel actif. Les fiches doivent être lisibles sur mobile et imprimables ; une fiche peut couvrir plusieurs leçons. Les interactions envisagées — figures manipulables, choix d'une étape de résolution, comparaison de raisonnements, correction d'erreurs et indices progressifs — ne seront ajoutées que lorsqu'elles améliorent réellement la compréhension.

### Alignement avec les examens officiels

Au 18 novembre 2026, le [NITE annonce](https://www.nite.org.il/news/notice-081026/?lang=en) qu'à partir de la session de décembre 2026 les Psychométriques comprennent la réflexion verbale et quantitative, avec une épreuve de rédaction, tandis que l'anglais est évalué séparément par AMIRNET. Le [format détaillé des Psychométriques](https://www.nite.org.il/two-domain-psychometric-entrance-test/format-2/?lang=en), les [consignes AMIRNET](https://www.nite.org.il/other-tests/amirnet/tips/?lang=en) et les [consignes YAELNET](https://www.nite.org.il/other-tests/yaelnet/tips/?lang=en) servent de références pour la matrice de couverture. Cette vérification des sources ne constitue pas encore un audit de chaque question ou leçon. Recontrôler les pages officielles avant de publier des règles, durées ou formats susceptibles de changer.

## Principes du modèle pédagogique

- Une question conserve une identité stable et peut servir à plusieurs séries.
- Les séries préparées et les séries découvertes ordonnent des questions validées ; elles ne dupliquent pas le contenu de la banque.
- L'entraînement et les leçons sont liés à une matière et à un thème, sans rendre une leçon obligatoire pour commencer une série.
- Une tentative conserve son mode, son état, ses réponses et les données nécessaires à la reprise et au bilan.
- La publication d'une question, d'une série ou d'une leçon est explicite. Les contenus non relus restent hors de l'expérience publique.
- Les contenus français, anglais et hébreux doivent être affichés correctement ; la direction droite à gauche s'applique aux blocs hébreux concernés.
- La série découverte ne révèle jamais de contenu non validé et ne dépend pas d'une sélection aléatoire.

Le schéma précis sera conçu à partir du parcours cible, puis adapté aux contrats réels des banques au moment de l'import. Les migrations déjà appliquées ne seront pas réécrites.

### Modèle cible à préciser avant migration

- **Examen, matière, thème** : une hiérarchie commune aux trois parcours, avec des catégories propres à chaque examen. Les thèmes peuvent servir au classement des questions et aux bilans sans imposer de leçon.
- **Question** : contenu, options éventuelles, correction, identifiant source et état de publication. Les passages et figures restent des ressources liées. Les formes de réponse ouverte et de rédaction demandent une décision spécifique sur leur correction.
- **Série préparée** : examen, objectif, mode autorisé et liste ordonnée de références à des questions publiées. Une seule série découverte publiée par examen, identique pour tous les nouveaux visiteurs.
- **Tentative et réponse** : série, mode, état, dates, temps, réponses et instantané minimal des éléments nécessaires à une correction stable après une mise à jour de la banque. La reprise et le bilan utilisent ces données, avec association au compte après inscription lorsque le visiteur le souhaite.
- **Leçon** : contenu libre relié à des thèmes ; elle peut être suggérée après une erreur sans conditionner l'accès aux séries. Son contenu reste sous la responsabilité du responsable du projet.

Cette proposition n'est pas encore une migration. La branche de base configurée est la production Neon : il faut confirmer son état et préparer un environnement isolé avant de modifier le schéma ou de tester des tentatives.

## État vérifié du dépôt au 18 novembre 2026

Le dépôt est sur la branche main et ne comportait aucune modification locale au début de cette refonte. Le dernier commit examiné date du 2 octobre 2026.

### Éléments potentiellement réutilisables

- Application Next.js 16, React 19 et TypeScript avec pages publiques, authentification et espace compte.
- Better Auth, Prisma et PostgreSQL/Neon comme fondation technique existante.
- Authentification par email, Google et passkeys dans le code.
- Schéma de banque de questions avec identifiants externes et relations explicites.
- Écran et routes d'import des questions psychométriques et des figures, avec validation avant écriture.
- Palette, typographie et composants de base à réévaluer au regard du nouveau parcours.

Le fonctionnement réel des fournisseurs externes n'est pas confirmé par cet inventaire.

### Écarts avec le produit décidé

- Le modèle actuel impose qu'un exercice appartienne à une leçon. Il ne représente pas correctement les séries autonomes de découverte et d'entraînement.
- Les types de questions et l'import actuel sont centrés sur les Psychométriques ; les banques AMIRNET et YAELNET ne sont pas intégrées à ce dépôt.
- Le compte ne propose encore ni lecteur de questions, ni deux modes d'entraînement, ni reprise, ni bilan, ni suivi des erreurs.
- Le catalogue et plusieurs textes publics reflètent l'ancien périmètre, notamment l'Oulpan et des programmes annoncés « bientôt disponibles ».
- Les cinq packs affichés et leurs prix proviennent d'une hypothèse commerciale antérieure, qui doit être revalidée. Les routes de paiement et de webhook répondent actuellement 501.
- Le README et les anciennes règles de projet décrivaient plusieurs décisions abandonnées ou contradictoires.

### Dernière vérification locale et de la base — 19 novembre 2026

- 18 tests réussis ; TypeScript et schéma Prisma valides.
- ESLint sans erreur, avec un avertissement.
- Build de production réussi avec Next.js 16.4.6.
- La base configurée est la branche Neon `production`. `prisma migrate status` confirme les 12 migrations appliquées et un schéma à jour. Les quatre comptes ne présentent aucun doublon de `(providerId, accountId)`.
- Les dépendances ont été actualisées sans suppression de paquet direct. Le dernier `pnpm audit` signale une alerte modérée sur `minimatch`, sans alerte élevée ou critique.
- Better Auth 1.7.26 n'exige plus `account.issuer`. La migration appliquée en production rend cette colonne facultative et ajoute l'unicité de `(providerId, accountId)` tout en conservant les anciennes valeurs.
- Un contrôle local sans compte confirme que la session est absente, que l'espace compte redirige vers `/sign-in` même avec un faux cookie et que la route d'import admin répond `401`. Les parcours de création de compte, Google, passkey et emails n'ont pas été testés de bout en bout.

Ces résultats décrivent le code local, pas un parcours complet testé dans un navigateur ni une application déployée.

## Choix techniques

La stack n'est pas encore reconfirmée. La recommandation provisoire est de conserver Next.js, TypeScript et PostgreSQL tant qu'un besoin concret ne justifie pas une migration : cela permet de réutiliser l'authentification, les imports et le schéma existants. Prisma, Better Auth, l'hébergement, l'email, l'analytique et les fournisseurs de paiement seront évalués chacun sur le parcours cible, leur coût de migration et leur état réel.

Ne pas déplacer massivement les routes, modifier la base ou remplacer la stack pour rendre le dépôt conforme à une architecture encore provisoire. La prochaine décision technique porte d'abord sur les limites entre banque de questions, séries, leçons et tentatives.

### Exécuter le dépôt actuel

Le code existant utilise pnpm. Les commandes disponibles sont :

    pnpm install
    pnpm dev
    pnpm test
    pnpm lint
    pnpm build

Le fichier .env.example ne documente pas encore toutes les variables requises pour l'authentification, la base et les fournisseurs. Il devra être complété pendant la reprise technique. Aucun état de fonctionnement local ou déployé n'est déduit de ces commandes seules.

## Feuille de route

### 1. Cadrer le contenu et l'expérience

- [x] Fixer les trois examens du site et exclure l'Oulpan.
- [x] Définir le chemin accueil → examen → découverte → bilan → compte.
- [x] Choisir une série découverte fixe par examen et afficher le bilan avant inscription.
- [x] Définir les deux modes et le principe des leçons facultatives ; l'accès aux leçons Psychométriques est ensuite réservé aux abonnés.
- [x] Consigner l'inventaire déclaré des banques sans le présenter comme audité.
- [ ] Rendre les banques de questions accessibles à l'import, après construction du parcours.
- [ ] Établir la matrice compétence officielle → thème → leçon → support → questions validées.
- [ ] Vérifier les fichiers et leurs liens pendant l'import, puis confirmer les volumes et les statuts en base.
- [ ] Examiner quelques leçons pilotes produites en parallèle avant de fixer leur format.
- [ ] Vérifier la couverture des productions écrites et des formats expérimentaux AMIRNET.
- [ ] Vérifier la variété et la difficulté des exercices liés à chaque leçon.
- [ ] Valider l'arborescence, les URLs et le contenu des pages publiques.

### 2. Choisir la base technique et réorganiser le dépôt

- [ ] Décider ce qui est conservé du dépôt actuel après examen de la stack.
- [ ] Définir le modèle des séries, leçons, tentatives, réponses et bilans.
- [ ] Planifier les migrations sans altérer celles déjà appliquées.
- [ ] Retirer du produit l'Oulpan et les anciennes promesses commerciales.
- [ ] Organiser les modules et les routes autour des trois parcours réels.
- [x] Créer les premières pages d'entrée des trois examens et les relier depuis l'accueil.

### 3. Construire la découverte et l'entraînement sans contenu réel

- [x] Créer une première présentation distincte pour chacun des trois examens.
- [ ] Construire le lecteur public sur des séries publiées, sans inventer de questions.
- [ ] Afficher le bilan et les explications avant inscription.
- [ ] Transmettre le contexte de la découverte au compte.
- [ ] Construire les séries préparées par examen, matière et thème.
- [ ] Implémenter les modes apprentissage et conditions d'examen.
- [ ] Enregistrer les tentatives, la reprise, les réponses et les bilans.
- [ ] Ajouter le suivi des erreurs et des suites concrètes.
- [ ] Intégrer les leçons avec contrôle d'accès et leurs liens vers les thèmes difficiles.

### 4. Importer le contenu puis vérifier les parcours

- [x] Construire une page administrateur d'import CSV pour les trois examens et son pipeline de validation structurelle.
- [ ] Vérifier les formats du nouvel importeur sur les banques réelles et son écriture de bout en bout sur une base isolée contenant des données représentatives.
- [ ] Importer les banques et publier les questions relues.
- [ ] Composer et relire une série découverte fixe pour chacun des trois examens.
- [ ] Vérifier les parcours complets des trois examens sur navigateur et base isolée.

### 5. Décider le modèle commercial

- [ ] Définir ce qui est gratuit sans compte et avec compte.
- [ ] Valider ou abandonner l'abonnement, les offres et les prix antérieurs.
- [ ] Appliquer et vérifier les droits d'accès Psychométriques préparés dans Prisma ; définir puis implémenter séparément le paiement.

## Critère de lancement

Un visiteur doit pouvoir découvrir chacun des trois examens sans compte, recevoir un bilan honnête, créer un compte et poursuivre un entraînement complet dans les deux modes. Les contenus publiés doivent avoir été relus, les séries doivent être reprenables, les erreurs consultables et les leçons disponibles selon le périmètre validé. Le paiement n'est un critère de lancement que si le modèle commercial est explicitement retenu.

### Import CSV unifié — ajout préparé le 22 novembre 2026

La page administrateur existante utilise désormais un panneau commun aux Psychométriques, AMIRNET et YAELNET. La nouvelle API `/api/admin/question-import/unified` détecte le format par colonnes et revalide les CSV bruts à chaque import. Le statut CSV reconnu est conservé dans `sourceStatus`, séparément du statut éditorial ; les nouveaux contenus restent en brouillon. Les passages, questions, options et sections source sont écrits transactionnellement, sans nouvelle migration. Les doublons identiques sont fusionnés ; les conflits bloquent le lot. Les types de langues restent distingués par chapitre dans les enums existants. Les sections de langues sont conservées comme exercices PREPARED en brouillon, identifiés par fichier et section.

Cette note décrit le code ajouté et remplace les indications précédentes sur l’absence de support AMIRNET/YAELNET dans l’importeur. Elle ne prouve aucun import ni état de publication en base. Vérifier l’écriture sur une base de test avant la production. La nouvelle API limite les lots à 200 fichiers et 4 Mo de CSV UTF-8, avec une limite supplémentaire de 8 Mo pour le corps JSON. Relancer les tests `tests/unified-*.test.mjs` avec `node --import tsx --test` ; définir QUESTION_BANK_ROOT pour inclure les banques locales. Les fichiers historiques et leurs figures ne sont pas modifiés.

### Catalogue pédagogique administrateur

`/account/admin/catalogue` lit la base par pages de 25 entrées et affiche les programmes Psychométriques, AMIRNET et YAELNET, les questions et textes avec filtres, les matières, chapitres, leçons et séries. Les chapitres sans matière restent visibles pour préparer leur rattachement. Les fiches de question et de texte montrent le contenu et sa provenance avant toute action de relecture.

Un administrateur non suspendu peut marquer une version comme relue, puis la publier ou la retirer. Une question exige quatre choix distincts, une seule bonne réponse, une explication, sa figure si elle est référencée et la publication de son texte lié. Retirer un texte retire aussi ses questions déjà publiées. Les actions revérifient le rôle administrateur et l'état du contenu côté serveur ; le statut source ne vaut jamais approbation éditoriale. Le catalogue n'édite pas encore le contenu, ne compose pas les séries et ne publie rien automatiquement. La lecture réelle dans une session administrateur et les actions d'écriture sur une base isolée restent à vérifier avant déploiement.
