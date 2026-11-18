-- Better Auth 1.7.3+ no longer writes issuer for new account records.
-- Keep existing issuer values and uniqueness for legacy records.
ALTER TABLE "account" ALTER COLUMN "issuer" DROP NOT NULL;

CREATE UNIQUE INDEX "account_providerId_accountId_key" ON "account"("providerId", "accountId");
