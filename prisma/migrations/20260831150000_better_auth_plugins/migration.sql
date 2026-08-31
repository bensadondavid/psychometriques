-- Align the existing application roles with Better Auth's Admin plugin.
ALTER TYPE "Role" RENAME TO "Role_old";

CREATE TYPE "Role" AS ENUM ('user', 'admin');

ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "user"
  ALTER COLUMN "role" TYPE "Role"
  USING (
    CASE "role"::text
      WHEN 'ADMIN' THEN 'admin'
      ELSE 'user'
    END
  )::"Role";
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'user';

DROP TYPE "Role_old";

-- Admin plugin.
ALTER TABLE "user"
  ADD COLUMN "banned" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN "banReason" TEXT,
  ADD COLUMN "banExpires" TIMESTAMP(3);

ALTER TABLE "session"
  ADD COLUMN "impersonatedBy" TEXT;

-- Two-factor authentication plugin.
ALTER TABLE "user"
  ADD COLUMN "twoFactorEnabled" BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE "twoFactor" (
  "id" TEXT NOT NULL,
  "secret" TEXT NOT NULL,
  "backupCodes" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "verified" BOOLEAN NOT NULL DEFAULT true,
  "failedVerificationCount" INTEGER NOT NULL DEFAULT 0,
  "lockedUntil" TIMESTAMP(3),
  CONSTRAINT "twoFactor_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "twoFactor_secret_idx" ON "twoFactor"("secret");
CREATE INDEX "twoFactor_userId_idx" ON "twoFactor"("userId");

ALTER TABLE "twoFactor"
  ADD CONSTRAINT "twoFactor_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "user"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

-- Stripe plugin. These columns remain unused until Stripe secrets are configured.
ALTER TABLE "user"
  ADD COLUMN "stripeCustomerId" TEXT;

CREATE TABLE "subscription" (
  "id" TEXT NOT NULL,
  "plan" TEXT NOT NULL,
  "referenceId" TEXT NOT NULL,
  "stripeCustomerId" TEXT,
  "stripeSubscriptionId" TEXT,
  "status" TEXT NOT NULL DEFAULT 'incomplete',
  "periodStart" TIMESTAMP(3),
  "periodEnd" TIMESTAMP(3),
  "trialStart" TIMESTAMP(3),
  "trialEnd" TIMESTAMP(3),
  "cancelAtPeriodEnd" BOOLEAN NOT NULL DEFAULT false,
  "cancelAt" TIMESTAMP(3),
  "canceledAt" TIMESTAMP(3),
  "endedAt" TIMESTAMP(3),
  "seats" INTEGER,
  "billingInterval" TEXT,
  "stripeScheduleId" TEXT,
  CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "subscription_referenceId_idx" ON "subscription"("referenceId");
