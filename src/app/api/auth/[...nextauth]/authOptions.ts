// Import the required types and providers for NextAuth
import { NextAuthOptions } from "next-auth"; // Type definition for configuring NextAuth
import GoogleProvider from "next-auth/providers/google"; // Google provider for authentication
import { PrismaAdapter } from "@auth/prisma-adapter"; // Adapter to integrate Prisma with NextAuth
import { prisma } from "./prisma"; // Prisma client instance

// Export the NextAuth configuration options
export const authOptions: NextAuthOptions = {
  // Configure the Prisma adapter for NextAuth
  adapter: PrismaAdapter(prisma), // Connects NextAuth to the Prisma database

  // Define authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "", // Google Client ID from environment variables
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", // Google Client Secret from environment variables
    }),
  ],

  // Specify the secret used for NextAuth (e.g., signing tokens)
  secret: process.env.NEXTAUTH_SECRET,

  // Enable detailed logging for debugging purposes (set to `false` in production)
  debug: true,

  // Configure custom pages for sign-in and sign-out flows
  pages: {
    signIn: '/auth/prihlasenie', // Custom sign-in page
    signOut: '/auth/odhlasenie', // Custom sign-out page
  },

  // Define custom callback functions for NextAuth events
  callbacks: {
    // Redirect callback to handle where the user should go after sign-in
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return baseUrl || url; // Default to the base URL (NEXTAUTH_URL) or the provided URL
    },
  },
};
