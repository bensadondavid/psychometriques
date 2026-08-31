import { createAuthClient } from "better-auth/react";
import {
  adminClient,
  lastLoginMethodClient,
  twoFactorClient,
} from "better-auth/client/plugins";
import { passkeyClient } from "@better-auth/passkey/client";
import { stripeClient } from "@better-auth/stripe/client";

export const authClient = createAuthClient({
  plugins: [
    adminClient(),
    twoFactorClient({ twoFactorPage: "/two-factor" }),
    passkeyClient(),
    lastLoginMethodClient(),
    stripeClient({ subscription: true }),
  ],
})
