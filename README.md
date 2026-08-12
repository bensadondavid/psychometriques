# Psychométriques

Plateforme française de préparation aux tests psychométriques, construite avec
Next.js, Better Auth, Prisma et PostgreSQL/Neon.

## État actuel

La base technique et l’authentification du projet d’origine sont conservées.
Le domaine historique de listes de vocabulaire a été retiré afin de construire
la plateforme psychométrique étape par étape.

## Développement

```bash
pnpm dev
```

Le site est ensuite disponible sur `http://localhost:3000`.

## Base de données

La migration `20260812120000_remove_vocabulary_domain` supprime définitivement
les anciennes tables de vocabulaire et leurs données. Elle doit être relue et
appliquée volontairement ; elle n’est pas exécutée automatiquement par ce
changement.
