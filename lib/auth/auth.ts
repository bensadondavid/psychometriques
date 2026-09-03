import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, captcha, lastLoginMethod } from "better-auth/plugins";
import { i18n, locales } from "@better-auth/i18n";
import { prisma } from "../database/prisma";
import { passkey } from "@better-auth/passkey";
import { sendAccountDeletionEmail } from "../mail/emails/account-deletion-email";
import { sendPasswordResetEmail } from "../mail/emails/password-reset-email";
import { sendVerificationEmail } from "../mail/emails/verification-email";

const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const captchaPlugin =
  turnstileSecretKey && turnstileSiteKey
    ? captcha({
        provider: "cloudflare-turnstile",
        secretKey: turnstileSecretKey,
        endpoints: [
          "/sign-up/email",
          "/sign-in/email",
          "/request-password-reset",
          "/reset-password",
        ],
      })
    : null;


export const auth = betterAuth({
  appName: "Psychométriques",
  baseURL: process.env.BETTER_AUTH_URL!,
  secret: process.env.BETTER_AUTH_SECRET!,

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  trustedOrigins: [
    "http://localhost:3000",
    process.env.BETTER_AUTH_URL!,
  ],

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 120,
    revokeSessionsOnPasswordReset: true,
    customSyntheticUser: ({ coreFields, additionalFields, id }) => ({
      ...coreFields,
      role: "user",
      banned: false,
      banReason: null,
      banExpires: null,
      ...additionalFields,
      id,
    }),
    sendResetPassword: async({user, url})=>{
      await sendPasswordResetEmail({
        name: user.name,
        email: user.email,
        url,
      })
    },
  },

  emailVerification:{
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true, 
    sendVerificationEmail: async({user, url})=>{
      await sendVerificationEmail({
        name: user.name,
        email: user.email,
        url,
      })
    }
  },

  user: {
    deleteUser: {
      enabled: true,
      deleteTokenExpiresIn: 60 * 60,
      sendDeleteAccountVerification: async ({ user, url }) => {
        await sendAccountDeletionEmail({
          name: user.name,
          email: user.email,
          url,
        })
      },
    },
  },

  advanced:{
    cookiePrefix: 'psychometriques'
  },

  socialProviders:{
    google:{
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    },
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
      allowDifferentEmails: false,
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 jours
    updateAge: 60 * 60 * 24,     // 1 jour
  },
  plugins: [
    admin({
      bannedUserMessage:
        "Ce compte a été suspendu. Contactez l’assistance si vous pensez qu’il s’agit d’une erreur.",
    }),
    passkey(),
    i18n({
      translations: { fr: locales.fr },
      detection: ["header"],
    }),
    lastLoginMethod(),
    ...(captchaPlugin ? [captchaPlugin] : []),
  ],
});
