import prisma from "@/lib/Prisma";
import { comparePassword } from "@/services/password.service";
import jwt from "jsonwebtoken";
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
    Credentials({
      id: "verify-email",
      name: "verify-email",
      async authorize(credentials) {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tYXIubW9raGZpQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiQXplcnR5MTIzNDU2IiwiZmlyc3RfbmFtZSI6Ik9tYXIiLCJsYXN0X25hbWUiOiJNb2toZmkiLCJpYXQiOjE2NzQ3ODQ2NzB9.R4T0sbkxNT_BqY55P2-G_Vt4nWmWWVIoKVgojx34tro";
        let decoded;
        try {
          decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
        } catch (error) {
          throw new Error(
            "User does not exists. Please make sure you insert the correct email & password."
          );
        }
        if (decoded) {
          return decoded;
        } else {
          throw new Error(
            "User does not exists. Please make sure you insert the correct email & password."
          );
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      async profile(profile) {
        const user = await prisma.user.findFirst({
          where: {
            email: profile.email,
          },
        });
        return user ? { id: profile.sub, ...profile } : null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
    async session({ session, user, token }) {
      return session;
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
