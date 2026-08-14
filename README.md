# Psychométriques

Plateforme française d’entraînement aux tests psychométriques, construite avec
Next.js, Better Auth, Prisma, PostgreSQL/Neon et déployée sur Vercel.

L’objectif est de proposer des exercices de raisonnement verbal, quantitatif et
géométrique, avec correction immédiate, historique, statistiques et accès par
abonnement.

## Méthode de travail

Le projet est construit strictement étape par étape.

- Une seule étape fonctionnelle est développée à la fois.
- Chaque étape est testée et validée avant de commencer la suivante.
- Après chaque tâche terminée, sa case est cochée dans cette feuille de route ;
  les décisions d’architecture prises en cours de route y sont aussi reportées.
- Une migration Prisma est relue avant son application.
- Les systèmes existants sont réutilisés avant d’en créer de nouveaux.
- Le MVP reste simple : aucune abstraction n’est ajoutée sans besoin concret.

## État actuel

- [x] Ancien domaine de vocabulaire supprimé.
- [x] Nouvelle base Neon créée.
- [x] Migration Prisma initiale appliquée.
- [x] Connexions Prisma directe et poolée vérifiées.
- [x] Better Auth vérifié avec email, Google et passkeys.
- [x] Tables `user`, `session`, `account`, `verification` et `passkey` créées.
- [x] TypeScript et ESLint valides.
- [ ] Première fonctionnalité psychométrique à construire.

La base ne contient actuellement aucun modèle métier psychométrique.

## Choix techniques actés

- Next.js App Router pour le site et le backend.
- Server Components pour les lectures initiales.
- Server Actions pour les mutations internes de l’interface.
- Route Handlers pour les webhooks et intégrations externes.
- Prisma avec Neon PostgreSQL.
- `DATABASE_URL` directe pour les migrations.
- `DATABASE_POOLER_URL` poolée pour l’application.
- Better Auth pour les utilisateurs et les sessions.
- `React.cache` uniquement pour dédupliquer les lectures privées pendant une
  même requête, notamment la session courante.
- Variables d’environnement lues par un module serveur unique et validées avec
  Zod avant l’utilisation de Prisma, Better Auth, Resend ou une intégration
  externe.
- Autorisations centralisées dans des helpers serveur comme `requireUser()` et
  `requireAdmin()` ; le proxy reste uniquement un filtre rapide et ne constitue
  jamais la vérification de sécurité définitive.
- Rôles utilisateurs représentés par un enum Prisma typé, pas par une chaîne
  libre.
- Difficulté sous forme d’enum fixe, pas de table dédiée.
- Correction des réponses côté client pendant une session d’entraînement.
- Sauvegarde des réponses par lots et à la fin d’une session.
- Cloudflare R2 pour les illustrations ; seule la clé de l’objet est conservée
  en base.
- SVG privilégié pour la géométrie et WebP pour les autres illustrations.
- Grow envisagé comme prestataire de paiement en shekels. Son intégration est
  isolée dans `lib/payments/grow`, tandis que `lib/subscriptions` conserve les
  statuts et règles d’accès propres à la plateforme.
- Pas de Docker pour le MVP : Vercel, Neon et R2 fournissent déjà les
  environnements nécessaires. Une branche Neon dédiée sera utilisée pour les
  tests d’intégration.
- Vitest pour la logique métier et les composants synchrones.
- Playwright pour les parcours complets et les Server Components asynchrones.
- Une seule interface authentifiée sous `/account`. Les outils administratifs
  vivent sous `/account/admin` et ajoutent un contrôle serveur `requireAdmin()`
  à la protection utilisateur déjà assurée par le layout `/account`.

## Feuille de route

### 0. Nettoyage et fondations — terminé

- [x] Retirer les pages, routes, composants et modèles `Word` et `List`.
- [x] Retirer les anciens dossiers vides liés aux mots, listes et exercices.
- [x] Écarter la route `/admin` séparée au profit de `/account/admin`.
- [x] Préparer l’arborescence cible des fonctionnalités, sans publier de routes
  incomplètes.
- [x] Conserver l’authentification, les comptes et les composants UI utiles.
- [x] Repartir avec une migration initiale adaptée à la nouvelle base.
- [x] Vérifier Prisma, Neon et Better Auth en conditions réelles.
- [x] Renommer le projet et fournir une page d’accueil temporaire.

### 1. Définir le catalogue de questions

Avant de modifier la base, fixer définitivement les valeurs et relations du
catalogue.

- [ ] Définir les matières initiales : verbal et quantitatif.
- [ ] Définir les premières catégories de chaque matière.
- [ ] Fixer les difficultés, par exemple `EASY`, `MEDIUM`, `HARD`.
- [ ] Fixer les statuts éditoriaux : `DRAFT`, `VALIDATED`, `PUBLISHED`.
- [ ] Fixer les accès : `FREE`, `PREMIUM`.
- [ ] Définir le format exact d’une question et de ses quatre réponses.
- [ ] Définir le contrat CSV avant de construire l’import.

Livrable : une spécification courte, validée, sans changement de base.

### 2. Mettre en place les tests unitaires de base

La stratégie de tests est introduite progressivement : aucun outil ou test
n’est ajouté avant d’avoir un comportement réel à vérifier.

- [ ] Installer et configurer Vitest.
- [ ] Ajouter React Testing Library uniquement lorsque les premiers composants
  interactifs doivent être testés.
- [ ] Ajouter les scripts `test`, `test:run` et éventuellement `test:coverage`.
- [ ] Créer une convention simple pour les fichiers `*.test.ts` et
  `*.test.tsx`.
- [ ] Tester en priorité les fonctions métier pures, sans base de données.
- [ ] Éviter les snapshots volumineux et privilégier les comportements.
- [ ] Exécuter les tests unitaires avec TypeScript et ESLint avant chaque étape
  validée.

Livrable : Vitest fonctionnel avec un premier test utile, pas un test factice.

### 3. Centraliser et valider les variables d’environnement

- [ ] Créer un module serveur unique, par exemple `lib/env/server.ts`.
- [ ] Valider les variables avec Zod au démarrage ou lors du premier import.
- [ ] Séparer les variables obligatoires des variables facultatives selon
  l’environnement.
- [ ] Vérifier notamment `DATABASE_URL`, `DATABASE_POOLER_URL`,
  `BETTER_AUTH_URL` et `BETTER_AUTH_SECRET`.
- [ ] Uniformiser le nom de la variable d’expéditeur Resend et supprimer les
  variantes `RESEND_MAIL`, `RESEND_EMAIL` ou `RESEND_FROM_EMAIL` inutilisées.
- [ ] Faire importer ce module par Prisma, Better Auth et Resend au lieu de lire
  directement `process.env` dans plusieurs fichiers.
- [ ] Empêcher toute importation de secrets dans un Client Component avec
  `server-only`.
- [ ] Conserver `.env.example` sans aucun secret réel.

Livrable : une erreur explicite au démarrage lorsqu’une configuration requise
est absente ou invalide.

Tests à écrire pendant cette étape :

- [ ] accepter un environnement complet et valide ;
- [ ] rejeter un secret Better Auth trop court ;
- [ ] rejeter une URL de base de données invalide ;
- [ ] distinguer les variables obligatoires et facultatives selon
  l’environnement.

### 4. Typer les rôles et centraliser les autorisations

- [x] Remplacer `role String` par un enum Prisma `Role`.
- [x] Définir les rôles initiaux, par exemple `CLIENT` et `ADMIN`.
- [x] Générer, relire et appliquer la migration du rôle.
- [ ] Créer `requireUser()` pour les opérations nécessitant une session valide.
- [ ] Créer `requireAdmin()` pour les opérations administratives.
- [ ] Faire relire l’utilisateur et son rôle depuis une source serveur fiable.
- [ ] Utiliser ces helpers dans les layouts, Server Actions et Route Handlers.
- [ ] Garder `proxy.ts` comme redirection optimiste fondée sur le cookie, sans
  lui confier l’autorisation définitive.
- [ ] Prévoir une procédure explicite pour nommer le premier administrateur.
- [ ] Vérifier les accès déconnecté, utilisateur et administrateur.

Livrable : rôles typés et contrôles d’accès réutilisables avant la création de
l’administration.

Tests à écrire pendant cette étape :

- [ ] refuser l’accès sans session ;
- [ ] accepter un utilisateur connecté pour `requireUser()` ;
- [ ] refuser un utilisateur normal pour `requireAdmin()` ;
- [ ] accepter un administrateur pour `requireAdmin()`.

### 5. Créer le modèle de données des questions

- [ ] Ajouter les enums `Difficulty`, `QuestionStatus` et `ContentAccess`.
- [ ] Ajouter `Subject` et `Category`.
- [ ] Ajouter `Question`.
- [ ] Ajouter quatre `QuestionOption` ordonnées par question.
- [ ] Ajouter l’énoncé, l’explication et la durée recommandée.
- [ ] Ajouter `imageKey` et `imageAlt` facultatifs.
- [ ] Ajouter l’auteur, le validateur et les dates éditoriales utiles.
- [ ] Ajouter une empreinte normalisée pour détecter les doublons.
- [ ] Ajouter les index nécessaires aux filtres de publication et
  d’entraînement.
- [ ] Générer, relire et appliquer la migration Prisma.
- [ ] Vérifier le schéma sur Neon.

Livrable : modèle vide mais fonctionnel, sans interface administrateur.

Tests à écrire pendant cette étape :

- [ ] valider exactement quatre options ;
- [ ] imposer une seule bonne réponse ;
- [ ] produire une empreinte stable après normalisation ;
- [ ] détecter deux questions équivalentes comme doublons ;
- [ ] vérifier les valeurs des enums et les contraintes principales.

### 6. Mettre en place l’espace administrateur

- [ ] Créer le layout `/account/admin` dans l’interface authentifiée existante.
- [ ] Protéger ce layout côté serveur avec `requireAdmin()`.
- [ ] Afficher le lien d’administration uniquement aux administrateurs.
- [ ] Ajouter une page d’accueil administrative minimale.
- [ ] Préparer la navigation des futurs écrans de catalogue, questions et
  import.

Livrable : espace administrateur vide mais correctement protégé.

### 7. Préparer les tests d’intégration Neon

- [ ] Créer une branche Neon réservée aux tests automatisés.
- [ ] Ajouter des variables d’environnement de test distinctes.
- [ ] Interdire l’utilisation des URL de production pendant les tests.
- [ ] Appliquer les migrations à la branche de test.
- [ ] Prévoir un jeu minimal de données artificielles.
- [ ] Créer une procédure reproductible de nettoyage ou recréation de la
  branche.
- [ ] Ne jamais utiliser `prisma migrate reset` sur la production.

Livrable : base de test isolée et réinitialisable, sans Docker.

### 8. Gérer les matières et catégories

- [ ] Lister les matières et catégories dans `/account/admin/catalogue`.
- [ ] Créer et modifier une matière.
- [ ] Créer et modifier une catégorie rattachée à une matière.
- [ ] Ordonner et activer/désactiver les éléments du catalogue.
- [ ] Empêcher la suppression d’un élément encore utilisé.
- [ ] Valider toutes les entrées avec Zod.

Livrable : catalogue configurable depuis l’administration.

Tests d’intégration à écrire pendant cette étape :

- [ ] créer et modifier une matière ;
- [ ] rattacher une catégorie à la bonne matière ;
- [ ] empêcher une suppression interdite ;
- [ ] refuser une mutation à un non-administrateur.

### 9. Construire le CRUD des questions

- [ ] Créer le formulaire complet d’une question.
- [ ] Imposer exactement quatre réponses et une seule bonne réponse.
- [ ] Modifier une question existante.
- [ ] Afficher une liste paginée et filtrable.
- [ ] Filtrer par matière, catégorie, difficulté, statut et accès.
- [ ] Passer une question de brouillon à validée puis publiée.
- [ ] Archiver ou supprimer une question selon les contraintes historiques.
- [ ] Afficher une prévisualisation proche du futur écran d’entraînement.
- [ ] Détecter les doublons à la création et à la modification.

Livrable : gestion manuelle complète des questions, sans images ni CSV.

Tests à écrire pendant cette étape :

- [ ] créer une question avec quatre options dans une transaction ;
- [ ] modifier une question sans perdre ses relations ;
- [ ] rejeter un doublon ;
- [ ] filtrer et paginer les questions ;
- [ ] vérifier les transitions de statut autorisées.

### 10. Ajouter les premiers tests E2E Playwright

Playwright est ajouté lorsque l’administration possède enfin un parcours réel à
tester. Il doit exécuter l’application compilée ou utiliser son `webServer`.

- [ ] Installer et configurer Playwright.
- [ ] Tester prioritairement Chromium dans l’intégration continue.
- [ ] Réserver Firefox et WebKit aux versions importantes ou aux contrôles
  périodiques.
- [ ] Tester la redirection d’un visiteur déconnecté.
- [ ] Tester le refus d’un utilisateur normal dans `/account/admin`.
- [ ] Tester l’accès d’un administrateur.
- [ ] Tester la création, la validation et la publication d’une question.
- [ ] Conserver des sélecteurs accessibles et stables.

Livrable : premiers parcours critiques vérifiés dans un vrai navigateur.

### 11. Intégrer les illustrations Cloudflare R2

- [ ] Créer et configurer le bucket R2.
- [ ] Ajouter les variables d’environnement R2.
- [ ] Créer une route ou Server Action d’upload réservée aux administrateurs.
- [ ] Accepter uniquement SVG et WebP avec limites de taille.
- [ ] Assainir les SVG avant stockage.
- [ ] Générer des clés imprévisibles, par exemple
  `geometry/triangle-a83f2.svg`.
- [ ] Enregistrer uniquement `imageKey` et `imageAlt` en base.
- [ ] Configurer le domaine public et `next/image` pour les WebP.
- [ ] Prévoir la suppression des fichiers devenus orphelins.

Livrable : ajout et affichage sécurisé d’une illustration sur une question.

Tests à écrire pendant cette étape :

- [ ] accepter uniquement SVG et WebP ;
- [ ] refuser les fichiers trop volumineux ;
- [ ] vérifier l’assainissement d’un SVG malveillant ;
- [ ] vérifier la génération d’une clé imprévisible ;
- [ ] gérer un fichier absent ou supprimé.

### 12. Construire l’import CSV de questions

- [ ] Fournir un modèle CSV téléchargeable.
- [ ] Lire les séparateurs virgule, point-virgule et tabulation.
- [ ] Valider les colonnes et chaque ligne côté client pour l’aperçu.
- [ ] Revalider toutes les données côté serveur.
- [ ] Afficher les erreurs avec leur numéro de ligne.
- [ ] Détecter les doublons dans le fichier et dans la base.
- [ ] Vérifier la cohérence matière/catégorie.
- [ ] Accepter les valeurs françaises usuelles pour la difficulté puis les
  convertir vers l’enum.
- [ ] Importer les questions valides par lots transactionnels.
- [ ] Créer les questions importées en brouillon par défaut.
- [ ] Afficher un bilan : importées, ignorées, doublons et erreurs.
- [ ] Tester des fichiers volumineux avant l’import des 2 000 questions.

Livrable : import fiable de masse, sans IA nécessaire à l’exécution.

Tests à écrire pendant cette étape :

- [ ] tester les séparateurs virgule, point-virgule et tabulation ;
- [ ] tester les colonnes absentes et valeurs invalides ;
- [ ] convertir les difficultés françaises vers l’enum ;
- [ ] détecter les doublons internes et ceux déjà présents en base ;
- [ ] vérifier l’import transactionnel d’un fichier valide ;
- [ ] tester un fichier représentatif du volume cible.

### 13. Construire le moteur d’entraînement MVP

- [ ] Créer l’écran de choix de matière, catégorie et difficulté.
- [ ] Permettre de choisir le nombre de questions.
- [ ] Ajouter un chronomètre facultatif.
- [ ] Créer une session depuis les questions publiées accessibles.
- [ ] Mélanger l’ordre des questions et des réponses côté serveur ou client.
- [ ] Charger uniquement les questions de la session courante.
- [ ] Valider les réponses immédiatement côté client.
- [ ] Afficher la bonne réponse et l’explication.
- [ ] Permettre de continuer jusqu’au résultat final.
- [ ] Optimiser l’interface pour téléphone et ordinateur.
- [ ] Gérer une perte temporaire de connexion sans perdre la session en cours.

Livrable : une session complète jouable, sans statistiques persistantes.

Tests Playwright à ajouter pendant cette étape :

- [ ] choisir une matière, une catégorie et une difficulté ;
- [ ] lancer une session ;
- [ ] sélectionner et valider une réponse ;
- [ ] afficher immédiatement la correction et l’explication ;
- [ ] terminer une session sur ordinateur et téléphone.

### 14. Enregistrer les sessions et réponses

- [ ] Ajouter `PracticeSession`.
- [ ] Ajouter les questions sélectionnées et leur ordre dans la session.
- [ ] Ajouter `QuestionAttempt` pour chaque réponse.
- [ ] Enregistrer la réponse choisie, sa justesse et le temps passé.
- [ ] Sauvegarder périodiquement par lot, par exemple toutes les cinq réponses.
- [ ] Finaliser la session dans une transaction.
- [ ] Éviter les doublons en cas de nouvel envoi du même lot.
- [ ] Permettre la reprise d’une session interrompue.
- [ ] Conserver un historique cohérent si une question est modifiée plus tard.

Livrable : historique fiable des entraînements.

Tests d’intégration à écrire pendant cette étape :

- [ ] sauvegarder un lot de réponses ;
- [ ] renvoyer le même lot sans créer de doublon ;
- [ ] reprendre une session interrompue ;
- [ ] finaliser une session dans une transaction.

### 15. Ajouter progression, statistiques et révision

- [ ] Créer le tableau de bord utilisateur.
- [ ] Calculer le taux de réussite global.
- [ ] Calculer les résultats par matière, catégorie et difficulté.
- [ ] Afficher le temps moyen par question.
- [ ] Afficher l’évolution dans le temps.
- [ ] Lister les sessions récentes.
- [ ] Créer un mode « questions ratées ».
- [ ] Éviter qu’une même mauvaise tentative soit comptée plusieurs fois dans
  les indicateurs de maîtrise.
- [ ] Prévoir des index et agrégations adaptés au volume réel.

Livrable : progression consultable et révision ciblée.

Tests unitaires à écrire pendant cette étape :

- [ ] calculer le score global ;
- [ ] agréger par matière, catégorie et difficulté ;
- [ ] calculer le temps moyen ;
- [ ] identifier les questions à réviser ;
- [ ] éviter le double comptage des tentatives répétées.

### 16. Ajouter l’abonnement et les droits d’accès

- [ ] Valider l’API et le fonctionnement exact de Grow.
- [ ] Implémenter le client, les types et la validation des notifications Grow
  dans `lib/payments/grow`.
- [ ] Conserver dans `lib/subscriptions` la logique indépendante du prestataire :
  statuts, expiration et droits `FREE` ou `PREMIUM`.
- [ ] Ajouter `Subscription` avec fournisseur, statut, expiration et référence.
- [ ] Définir les statuts internes indépendamment des libellés Grow.
- [ ] Créer le parcours de paiement en shekels.
- [ ] Créer une route webhook publique dédiée à Grow.
- [ ] Vérifier la signature ou le mécanisme d’authenticité du webhook.
- [ ] Conserver les événements reçus pour assurer l’idempotence.
- [ ] Activer, renouveler, annuler ou expirer automatiquement l’accès.
- [ ] Contrôler l’accès premium côté serveur au démarrage d’une session.
- [ ] Afficher l’état de l’abonnement dans le compte utilisateur.
- [ ] Prévoir la réconciliation des paiements en cas de webhook manqué.

Livrable : abonnement web fonctionnel et accès premium automatisé.

Tests d’intégration à écrire pendant cette étape :

- [ ] accepter un webhook Grow valide et refuser un webhook invalide ;
- [ ] traiter deux fois le même événement sans double effet ;
- [ ] activer, renouveler, annuler et expirer un abonnement ;
- [ ] gérer des événements reçus dans le désordre ;
- [ ] vérifier les accès gratuit et premium côté serveur.

### 17. Finaliser le produit

- [ ] Remplacer la page temporaire par une vraie page d’accueil publique.
- [ ] Finaliser l’identité visuelle et le responsive.
- [ ] Ajouter états de chargement, erreurs, pages 404 et limites vides.
- [ ] Vérifier l’accessibilité clavier, les labels, contrastes et lecteurs
  d’écran.
- [ ] Ajouter les pages légales, confidentialité et conditions d’utilisation.
- [ ] Configurer les métadonnées, favicon et partage social.
- [ ] Ajouter une stratégie minimale de logs et de suivi des erreurs.
- [ ] Vérifier les sauvegardes et restaurations Neon/R2.
- [ ] Tester les performances avec le volume cible.
- [ ] Tester les parcours principaux sur mobile et ordinateur.
- [ ] Exécuter TypeScript, ESLint, build et tests avant chaque déploiement.
- [ ] Configurer les variables Vercel par environnement.
- [ ] Déployer une préproduction, la valider, puis lancer la production.

Livrable : première version publique exploitable.

Tests finaux :

- [ ] exécuter tous les tests unitaires et d’intégration ;
- [ ] exécuter les parcours Playwright critiques ;
- [ ] vérifier Chromium, Firefox et WebKit avant le lancement ;
- [ ] tester les tailles téléphone, tablette et ordinateur ;
- [ ] vérifier clavier, lecteurs d’écran, contrastes et labels ;
- [ ] vérifier le build de production et les performances avec le volume cible.

## Stratégie de tests

### Vérifications statiques

À exécuter continuellement :

```bash
pnpm exec prisma validate
pnpm exec next typegen
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

### Tests unitaires et de composants

Vitest couvre les fonctions pures, validations Zod, conversions, calculs,
empreintes, droits d’accès et composants interactifs synchrones. Les tests
vérifient des comportements observables plutôt que de grands snapshots.

### Tests d’intégration

Ils utilisent une branche Neon indépendante et uniquement des données
artificielles. Ils couvrent Prisma, les transactions, Server Actions, imports,
sessions, statistiques et webhooks.

### Tests de bout en bout

Playwright couvre les parcours complets, notamment l’authentification, les
protections administratives, le CRUD, l’import et l’entraînement. Les Server
Components asynchrones sont vérifiés par ces tests plutôt que rendus isolément
avec Vitest.

### Ce que nous ne testons pas directement

Nous ne réimplémentons pas les tests internes de Better Auth, Prisma, Neon,
Next.js ou R2. Nous testons uniquement notre configuration et nos parcours qui
reposent sur ces services.

## Docker

Docker n’est pas nécessaire pour le MVP. Le développement et les tests
utilisent Vercel, une branche Neon isolée et R2. Ajouter Docker maintenant
créerait une configuration supplémentaire sans reproduire exactement
l’environnement Vercel.

Docker pourra être réévalué si le projet doit plus tard :

- utiliser PostgreSQL localement et hors ligne ;
- garantir un environnement identique à une équipe plus large ;
- lancer plusieurs services locaux ;
- être auto-hébergé en dehors de Vercel.

## Ordre de travail immédiat

Les prochaines étapes à traiter, une par une, sont :

1. valider la structure exacte du catalogue et du CSV ;
2. installer Vitest avec un premier test métier utile ;
3. centraliser et valider les variables d’environnement ;
4. typer les rôles et centraliser les autorisations ;
5. concevoir le modèle Prisma des questions ;
6. appliquer sa migration ;
7. créer l’espace administrateur protégé sous `/account/admin` ;
8. préparer la branche Neon de test ;
9. construire la gestion des matières et catégories ;
10. construire le CRUD des questions ;
11. ajouter Playwright sur les premiers parcours réels.

Nous ne commencerons pas l’import CSV, R2 ou le moteur d’entraînement avant que
le CRUD manuel d’une question soit validé.

## Environnement local

Créer `.env` à partir de `.env.example`, puis renseigner les valeurs réelles.

```bash
cp .env.example .env
pnpm dev
```

Variables utilisées actuellement :

```text
DATABASE_URL
DATABASE_POOLER_URL
BETTER_AUTH_URL
BETTER_AUTH_SECRET
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
RESEND_API_KEY
RESEND_MAIL
```

`DATABASE_URL` est réservée à Prisma Migrate. L’application utilise
`DATABASE_POOLER_URL` via l’adaptateur Neon.

## Vérifications courantes

```bash
pnpm exec prisma validate
pnpm exec prisma migrate status
pnpm exec prisma generate
pnpm exec next typegen
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

Les migrations doivent être commitées et appliquées avec une commande adaptée à
l’environnement. `prisma migrate reset` ne doit jamais être utilisé sur la base
de production.
