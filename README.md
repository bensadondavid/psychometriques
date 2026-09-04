# Plateforme de préparation aux examens et à l’hébreu

Plateforme pédagogique francophone pour préparer les examens psychométriques,
AMIR et YAEL, ainsi que pour apprendre l’hébreu en Oulpan, du niveau Aleph au
niveau Vav. Elle s’adresse autant aux personnes encore en France qu’à celles
déjà installées en Israël.

Le développement commence par les psychométriques. AMIR, YAEL et Oulpan seront
présents dans le catalogue et l’interface, mais resteront indiqués comme
prochainement disponibles jusqu’à la création de leur contenu.

Ce README est la référence produit et technique du projet : état réel, décisions
validées, architecture cible, feuille de route et premier résultat attendu.

## Vision produit

La plateforme n’est pas un service d’orientation : l’utilisateur arrive en
sachant quelle préparation il recherche. Elle lui permet de :

- accéder directement à la formation correspondant à son objectif ;
- suivre des leçons organisées dans un ordre pédagogique ;
- réaliser des exercices composés de questions ;
- consulter les corrections puis, plus tard, sa progression ;
- acheter un programme seul ou un pack ;
- recevoir un accès offert ou financé par une organisation ;
- proposer des partenariats aux prépas qui souhaitent équiper leurs élèves.

La promesse de marque relie ces usages autour d’un même objectif : avancer dans
ses études, sa langue et son intégration en Israël. Le nom définitif de la
marque reste à choisir ; `Examens & Hébreu` est un libellé provisoire.

## Vocabulaire

- **Programme** : Psychométriques, AMIR, YAEL ou Oulpan.
- **Parcours** : déclinaison d’un programme ; un niveau d’Oulpan est un parcours.
- **Leçon** : unité pédagogique avec un contenu éditorial optionnel.
- **Exercice** : activité rattachée à une leçon.
- **Question** : élément réutilisable de la banque de questions.
- **Offre** : produit commercial vendu seul ou en pack.
- **Droit d’accès** : autorisation réelle de consulter un programme/parcours.
- **Abonnement** : relation de facturation récurrente avec un prestataire.

Le mot `plan` est évité dans le modèle : `parcours` décrit la pédagogie et
`offre` décrit le commerce.

## Catalogue initial

| Programme       | Parcours initial                              | Lancement          |
| --------------- | --------------------------------------------- | ------------------ |
| Psychométriques | Parcours général puis catégories spécialisées | Actif              |
| AMIR            | À préciser                                    | Bientôt disponible |
| YAEL            | À préciser                                    | Bientôt disponible |
| Oulpan          | Aleph, Bet, Gimel, Dalet, He et Vav           | Bientôt disponible |

Les niveaux d’Oulpan seront des données en base, pas un enum Prisma, afin de
pouvoir les réordonner ou les compléter sans modifier le schéma.

## Structure pédagogique cible

```text
Programme
└── Parcours
    └── Leçon
        └── Exercice
            └── Questions ordonnées
```

Modèles prévus pour la première fondation :

- `Program`
- `Course`
- `Lesson`
- `Exercise`
- `Question`
- `QuestionOption`
- `ExerciseQuestion`

La banque de questions reste indépendante : une question peut être utilisée
dans plusieurs exercices et la table de liaison conserve son ordre. Les
contenus auront un statut explicite (`DRAFT`, `PUBLISHED`, `ARCHIVED` ou
`COMING_SOON`). Seul Psychométriques sera publié au départ.

Les pages sans contenu doivent afficher un état vide soigné, jamais du faux
contenu codé en dur. La structure devra accepter le français, l’anglais et
l’hébreu, avec une direction RTL limitée au contenu qui en a besoin.

## Import CSV des questions

L’import CSV devra prévoir :

- un identifiant externe stable ;
- le programme, le parcours et le thème ;
- le type et la difficulté ;
- l’énoncé, les réponses, la bonne réponse et l’explication optionnelle ;
- le statut de publication ;
- une prévisualisation avant écriture ;
- des erreurs précises avec numéros de lignes ;
- une transaction empêchant un import partiel ;
- un traitement idempotent évitant les doublons.

L’import alimentera la banque. L’affectation aux exercices restera séparée sauf
si un besoin d’import combiné est confirmé.

## État actuel de l’authentification

Better Auth et Prisma constituent actuellement la fondation fonctionnelle de la
base de données.

Déjà présent :

- email et mot de passe, Google et passkeys ;
- vérification d’email, réinitialisation du mot de passe et suppression du compte ;
- sessions et révocation après réinitialisation ;
- rôles techniques `user` et `admin` ;
- suspension et usurpation via le plugin administrateur ;
- réponses Better Auth en français ;
- Cloudflare Turnstile lorsque ses deux clés sont configurées ;
- route `/sign-in` à la place de `/login` ;
- suppression de l’ancienne logique de double authentification.

Le schéma contient seulement `User`, `Session`, `Account`, `Verification` et
`Passkey`. La vérification d’email est envoyée mais n’est pas encore obligatoire
pour utiliser le compte ; ce choix sera revu avant l’ouverture commerciale.

Workflow Prisma retenu :

```bash
pnpm prisma format
pnpm prisma migrate dev
pnpm prisma generate
```

## Rôles et droits d’accès

Les rôles restent uniquement `user` et `admin`. Un client, un utilisateur
gratuit et un élève financé par une prépa restent des utilisateurs ordinaires.

Leur accès sera géré par un droit indépendant, avec notamment ces origines :

```text
PURCHASE
COMPLIMENTARY
ORGANIZATION
ADMIN
```

Un droit pourra viser un programme ou un parcours et comporter une expiration.
Cela remplace proprement le besoin d’un rôle `specialuser`.

## Offres commerciales

Le catalogue commercial pourra proposer :

- un programme seul ;
- un niveau d’Oulpan précis ;
- un pack de plusieurs programmes/parcours ;
- une offre tout compris ;
- une durée prépayée ;
- un abonnement mensuel ou annuel ;
- une offre entreprise par nombre de places ;
- un accès offert par l’administration.

Une offre accorde un ou plusieurs contenus via `OfferGrant`. Ses prix sont
séparés afin de gérer plusieurs devises et fournisseurs.

```text
Offer
├── OfferGrant
└── Price

ProviderCustomer
Order
Payment
Subscription
Entitlement
```

## Paiements

Deux fournisseurs sont envisagés :

- **Stripe**, rattaché à l’activité d’auto-entrepreneur, pour les paiements
  internationaux et notamment les prix en euros ;
- **Grow**, après validation du compte commercial, pour les cartes israéliennes,
  les prix en shekels et des moyens locaux comme Bit.

```text
Choix de l’offre
└── Choix du paiement
    ├── Stripe : carte internationale / EUR
    └── Grow : carte israélienne / ILS / Bit
```

Stripe et Grow encaissent ; la plateforme décide des droits d’accès. Les règles
obligatoires sont :

- ne jamais accorder un accès grâce à la seule redirection de succès ;
- vérifier les webhooks et les traiter sans doublons ;
- activer/prolonger les droits après confirmation serveur ;
- gérer renouvellements, échecs, annulations et remboursements ;
- conserver les identifiants externes sans données de carte ;
- définir explicitement les prix par devise et fournisseur ;
- prévoir éventuellement une période de grâce.

Grow documente les paiements récurrents par carte, tandis que Bit reste un
paiement ponctuel. Une offre Bit devra donc probablement être prépayée pour une
durée définie.

Références : [Stripe Checkout](https://docs.stripe.com/payments/checkout),
[Grow API](https://developers.grow.business/) et
[moyens de paiement Grow](https://developers.grow.business/reference/payments).

Les tarifs, devises, durées et obligations de facturation seront validés avant
l’intégration en production.

## Quotas de questions

La limitation mensuelle n’est pas décidée et ne bloque pas le MVP. Le modèle
pourra accueillir plus tard une politique d’utilisation et des compteurs par
période.

Recommandation initiale : essai gratuit éventuellement limité et abonnements
payants illimités. Une formule payante avec quota ne sera créée que si les
données produit la justifient.

## Entreprises et partenariats

Une prépa sera une organisation, jamais un compte partagé.

```text
Organization
├── OrganizationMember
├── OrganizationContract
├── SeatAllocation
└── Cohort
```

À terme, elle pourra acheter des places, inviter ses élèves, former des groupes,
attribuer des programmes et consulter des données de progression dans un cadre
à définir. Les premiers contrats pourront être administrés et facturés
manuellement.

## Interface cible

La direction artistique associe la sobriété institutionnelle du bordeaux et de
l’ivoire à une mise en scène contemporaine et immersive. Les principes sont :

- une typographie éditoriale forte et une hiérarchie très lisible ;
- des compositions amples sans pages artificiellement vides ;
- une progression visuelle inspirée des présentations produit d’Apple ;
- des aperçus réels de la plateforme plutôt que des illustrations génériques ;
- des animations sobres et accessibles ;
- une 3D uniquement lorsqu’elle représente le produit ou la méthode ;
- aucun langage visuel de SaaS préfabriqué ou de site généré automatiquement.

Le marketing doit lui-même se vivre comme un parcours. L’accueil utilise une
séquence au scroll où le même objet se transforme successivement en choix de
formation, leçon, exercice, correction et progression. Cette première version
utilise une 3D CSS légère, sans dépendance WebGL, et respecte la préférence de
mouvement réduit.

L’espace `/account` restera volontairement plus simple et fonctionnel. Les pages
marketing sans contenu spécifique ne doivent pas être remplies de texte
générique : elles restent hors de la navigation ou redirigent vers une page
utile jusqu’à ce qu’un vrai contenu puisse être publié.

L’application est séparée selon l’intention et le layout :

```text
(marketing)  catalogue, méthode, ressources et conversion publiques
(auth)       inscription, connexion et récupération de compte
(app)        apprentissage authentifié sous /account
```

Ces groupes sont invisibles dans les URLs. Ils partagent le même root layout
Next.js afin de conserver une navigation fluide.

Une **ressource d’examen** explique une réalité externe ; une **page formation**
présente la préparation proposée par la plateforme. Par exemple,
`/examens/amir` informe sur AMIR et `/formations/amir` présente notre future
formation. Les ressources soutiennent la préparation et le référencement, mais
ne transforment pas le site en outil d’orientation.

Dans l’état actuel, les ressources officielles ne sont pas encore rédigées :
les anciennes routes `/examens`, `/ressources`, `/methode` et `/tarifs`
redirigent vers une partie utile du site. Elles retrouveront une page autonome
seulement lorsque leur contenu aura une fonction claire.

Oulpan appartient au même catalogue et au même compte utilisateur, tout en
conservant un univers identifiable consacré à la langue.

### Domaines et référencement

Un domaine de marque principal héberge l’intégralité de la plateforme. Des
domaines descriptifs pourront être achetés pour les principales catégories et
rediriger en `301` vers leur page canonique :

```text
psychometriques.fr -> domaine-principal.fr/formations/psychometriques
oulpan.fr           -> domaine-principal.fr/oulpan
domaine-amir.fr     -> domaine-principal.fr/formations/amir
domaine-yael.fr     -> domaine-principal.fr/formations/yael
```

Ils servent la mémorisation, les campagnes et la protection des noms. Ils ne
doivent pas héberger des copies du site ni diviser les contenus et les liens
entrants entre quatre propriétés indépendantes.

Évolutions prévues :

- accueil présentant les quatre programmes ;
- Psychométriques actif et les autres marqués `Bientôt disponible` ;
- niveaux Aleph à Vav visibles sur Oulpan ;
- tableau de bord centré sur le parcours actuel ;
- pages de leçons/exercices avec des états vides travaillés ;
- navigation cohérente entre catalogue, apprentissage, compte et administration ;
- suppression des promesses non vérifiables comme `10 000+ questions`.

Routes envisagées :

```text
/
/examens                     redirection provisoire
/examens/[examSlug]          redirection provisoire
/oulpan
/oulpan/[levelSlug]
/formations
/formations/[programSlug]
/methode                     redirection provisoire vers le parcours
/ressources                  redirection provisoire
/tarifs                      redirection provisoire
/entreprises
/sign-in
/sign-up

/account/home
/account/programmes
/account/programmes/[programSlug]/parcours/[courseSlug]
/account/lecons/[lessonSlug]
/account/exercices/[exerciseId]
/account/parametres
/account/abonnement

/account/admin/catalogue
/account/admin/lecons
/account/admin/exercices
/account/admin/questions/import
/account/admin/organisations
```

L’administration utilise uniquement `/account/admin` et hérite de la protection
du compte, avec un contrôle serveur supplémentaire du rôle `admin`.

## État réel du dépôt

### Réalisé

- [x] Next.js App Router, TypeScript et Tailwind CSS.
- [x] Direction artistique et composants UI de base.
- [x] PostgreSQL piloté par Prisma.
- [x] Socle Better Auth coordonné avec Prisma.
- [x] Connexions email, Google et passkeys.
- [x] Emails de compte et protection Turnstile conditionnelle.
- [x] Rôles `user` et `admin`.
- [x] Renommage en cours de `/login` vers `/sign-in`.
- [x] Retrait des anciens modèles métier pour repartir de zéro.
- [x] Premiers layouts du compte et de l’administration.
- [x] Groupes de routes `(marketing)`, `(auth)` et `(app)` mis en place.
- [x] Administration déplacée sous `/account/admin`.
- [x] Premières pages publiques de formations, de ressources et d’Oulpan créées.
- [x] Ancien import incompatible retiré en attendant le nouveau modèle.
- [x] Identité générale appliquée au site, à l’authentification et aux emails.
- [x] Prisma, TypeScript, ESLint, les tests et le build sont validés.

### À nettoyer ou construire

- [ ] Le nouveau domaine pédagogique n’existe pas encore dans Prisma.
- [ ] Aucun paiement ni droit commercial n’est encore implémenté.

## Technologies

- Next.js 16, React 19 et TypeScript
- Tailwind CSS 4
- Better Auth
- Prisma 7 avec PostgreSQL/Neon
- Resend et Cloudflare Turnstile
- Stripe installé mais pas encore intégré
- pnpm

Avant de modifier une API Next.js, lire la documentation de la version installée
dans `node_modules/next/dist/docs`.

```bash
pnpm dev
pnpm lint
pnpm test
pnpm build
pnpm prisma format
pnpm prisma migrate dev
pnpm prisma generate
```

Une migration appliquée ne doit jamais être réécrite.

## Feuille de route

### Phase 0 — Assainissement

- [x] Retirer les références aux anciens modèles métier.
- [x] Unifier les routes administratives sous `/account/admin`.
- [x] Vérifier toutes les redirections vers `/sign-in`.
- [x] Valider Prisma, TypeScript, ESLint, tests et build.
- [x] Mettre `AGENTS.md` en accord avec ce README.

### Phase 1 — Fondation pédagogique

- [ ] Ajouter les modèles du catalogue, des leçons, exercices et questions.
- [ ] Créer et relire la migration Prisma.
- [ ] Initialiser les quatre programmes et Aleph à Vav.
- [ ] Publier uniquement Psychométriques.

### Phase 2 — Refonte de l’interface

- [x] Généraliser le nom, les métadonnées et les textes.
- [x] Créer un accueil dense centré sur l’apprentissage et l’intégration.
- [x] Créer le catalogue `/formations` avec un accès direct par objectif.
- [x] Dissocier subtilement l’univers Oulpan dans la même plateforme.
- [x] Créer l’univers public Oulpan sans le séparer de la plateforme.
- [x] Remplacer l’accueil statique par un parcours marketing au scroll.
- [x] Faire évoluer l’objet pédagogique avec les étapes de l’apprentissage.
- [x] Retirer de la navigation les pages secondaires sans contenu propre.
- [ ] Choisir le nom définitif et remplacer le libellé provisoire.
- [ ] Valider puis configurer le domaine principal et les domaines descriptifs.
- [ ] Compléter et sourcer les informations officielles des examens.
- [ ] Refaire le tableau de bord et les navigations.
- [ ] Créer les états vides et préparer le contenu RTL.

### Phase 3 — Psychométriques

- [ ] Définir ses catégories et thèmes.
- [ ] Construire le parcours leçons → exercices.
- [ ] Créer le lecteur, la correction et les explications.

### Phase 4 — Import CSV

- [ ] Documenter le format.
- [ ] Créer prévisualisation, validation et erreurs par ligne.
- [ ] Rendre l’import transactionnel et idempotent.
- [ ] Permettre l’affectation aux exercices et tester les cas critiques.

### Phase 5 — Progression

- [ ] Enregistrer sessions et réponses.
- [ ] Ajouter avancement, historique, erreurs et statistiques.

### Phase 6 — Accès et offres

- [ ] Ajouter les droits indépendants des rôles.
- [ ] Ajouter offres, contenus accordés et prix.
- [ ] Décider si un quota de questions est réellement nécessaire.

### Phase 7 — Paiements

- [ ] Valider les comptes Stripe et Grow et définir les tarifs.
- [ ] Intégrer les deux checkouts et leurs webhooks.
- [ ] Gérer le cycle complet des abonnements et paiements.
- [ ] Vérifier facturation et comptabilité.

### Phase 8 — Entreprises

- [ ] Ajouter organisations, responsables, contrats et places.
- [ ] Ajouter invitations CSV, groupes et attributions de programmes.
- [ ] Définir le partage des données de progression.

### Phase 9 — Autres programmes

- [ ] Développer AMIR, YAEL puis Oulpan Aleph à Vav.
- [ ] N’activer chaque programme que lorsque son contenu est prêt.

## Premier résultat attendu

Le premier jalon ne comprend ni paiement réel, ni statistiques avancées, ni
contenu complet. Il doit produire une fondation propre et démontrable.

Il est terminé lorsque :

1. Prisma, TypeScript, ESLint, les tests et le build passent ;
2. l’authentification fonctionne toujours avec `/sign-in` ;
3. Prisma contient la structure pédagogique minimale ;
4. les quatre programmes et les six niveaux Oulpan existent ;
5. seul Psychométriques peut être commencé ;
6. l’accueil et le tableau de bord présentent la nouvelle vision ;
7. les autres programmes affichent un état `Bientôt disponible` ;
8. une leçon et un exercice psychométriques vides sont navigables ;
9. aucune fausse quantité de contenu ou promesse commerciale n’est affichée ;
10. le README et `AGENTS.md` décrivent la même architecture.

Cette base permettra ensuite de construire le contenu Psychométriques et son
import CSV sans refaire l’interface lors de l’ajout d’AMIR, YAEL, Oulpan,
Stripe, Grow ou des partenaires.

## Hors périmètre du premier jalon

- contenu pédagogique complet ;
- paiements et tarifs définitifs ;
- quota mensuel ;
- statistiques avancées ;
- espace entreprise complet ;
- activation d’AMIR, YAEL ou Oulpan.
