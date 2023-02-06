import { sendWelcomeEmail } from "@/api/contact";
import { AUTH_PROVIDERS } from "@/constants/AuthProviders";
import prisma from "@/lib/Prisma";
import { comparePassword, hashPassword } from "@/services/password.service";
import PasswordGenerator from "generate-password";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const user = credentials.email
          ? await prisma.user.findFirst({
              where: {
                email: credentials.email,
              },
            })
          : null;
        if (user !== null) {
          let isPasswordCorrect = await comparePassword(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) return user;
          else throw new Error("password_incorrect");
        } else {
          throw new Error("user_not_exists");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      async profile(profile) {
        const foundUser = await prisma.user.findFirst({
          where: {
            email: profile.email,
          },
        });
        let createdUser;
        if (!foundUser) {
          let generatedPassword = PasswordGenerator.generate({
            length: 12,
            numbers: true,
          });
          let password = await hashPassword(generatedPassword);
          try {
            createdUser = await prisma.user.create({
              data: {
                email: profile.email,
                password,
                first_name: profile.given_name,
                last_name: profile.family_name,
                provider: AUTH_PROVIDERS.google,
                verified: true,
              },
            });
            sendWelcomeEmail(
              profile.given_name,
              profile.email,
              generatedPassword
            );
          } catch (error) {
            return null;
          }
        }
        return foundUser
          ? {
              id: profile.sub,
              first_name: foundUser.first_name,
              last_name: foundUser.last_name,
              email: foundUser.email,
              email_verified: profile.email_verified,
            }
          : {
              id: profile.sub,
              first_name: createdUser.first_name,
              last_name: createdUser.last_name,
              email: profile.email,
              email_verified: profile.email_verified,
            };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...account, ...user };
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          email: token.email,
          first_name: token.first_name,
          last_name: token.last_name,
        },
      };
    },
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified;
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
