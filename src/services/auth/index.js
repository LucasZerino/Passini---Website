import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from "../database";
import { createTransport } from "nodemailer";
import magicLink from "@/email/magic-link";

// Defina valores padrão para suas variáveis de ambiente
const {
  EMAIL_SERVER,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  EMAIL_FROM,
  SITE_NAME,
} = process.env;

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/blog', // Redirecionar para `/blog` após o cadastro de novos usuários
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: EMAIL_SERVER,
        port: parseInt(SMTP_PORT || '587'),
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASSWORD,
        },
      },
      from: EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url, provider }) => {
        const transport = createTransport({
          host: EMAIL_SERVER,
          port: parseInt(SMTP_PORT || '587'),
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD,
          },
        });

        const { subject, html } = magicLink({ url, site: SITE_NAME });

        try {
          const info = await transport.sendMail({
            to: email,
            from: EMAIL_FROM,
            subject: subject,
            html: html,
          });
          console.log(`Email sent: ${info.response}`);
        } catch (error) {
          console.error(`Error sending email: ${error}`);
        }
      },
    }),
  ],
});
