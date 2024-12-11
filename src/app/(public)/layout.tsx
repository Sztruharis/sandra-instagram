"use client"; // Marks this component as a client component, allowing the use of client-side hooks

// Import necessary hooks from NextAuth and Next.js for session management and navigation
import { useSession } from "next-auth/react"; // Hook to access session data
import { useRouter } from "next/navigation"; // Hook for navigating to different routes
import { useEffect } from "react"; // React hook to perform side effects

// Define the layout component for public pages
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession(); // Access the session data to check if the user is logged in
  const router = useRouter(); // Initialize router for navigation

  // Redirect logged-in users to the home page
  useEffect(() => {
    if (session) {
      router.push("/"); // Navigate to the home page if the user has an active session
    }
  }, [session, router]); // Dependencies: re-run this effect when `session` or `router` changes

  // Render the children components (public content)
  return <div>{children}</div>;
}
