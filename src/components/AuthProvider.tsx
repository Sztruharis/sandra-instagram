// Enable client-side rendering
"use client";

// Import necessary modules
import React, { ReactNode } from "react"; // React for component creation and ReactNode type for children
import { SessionProvider } from "next-auth/react"; // NextAuth provider for managing session state

// AuthProvider component to wrap the application with NextAuth session management
const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    // Wrap children components with SessionProvider to manage authentication sessions
    <SessionProvider>{children}</SessionProvider>
  );
};

export default AuthProvider;
