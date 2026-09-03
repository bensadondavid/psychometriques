import { createAuthClient } from "better-auth/react";
import {
  adminClient,
  lastLoginMethodClient,
} from "better-auth/client/plugins";
import { passkeyClient } from "@better-auth/passkey/client";

export const authClient = createAuthClient({
  plugins: [
    adminClient(),
    passkeyClient(),
    lastLoginMethodClient(),
  ],
})
