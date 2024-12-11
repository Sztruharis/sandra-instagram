// Enable client-side rendering
"use client";

// Import necessary hooks from React and Next.js
import { useEffect, useState } from "react"; // React hooks for side effects and state management
import { useSession } from "next-auth/react"; // Hook for accessing authentication session data
import { useRouter } from "next/navigation"; // Hook for client-side navigation

// AuthKeeper component to ensure user authentication before rendering children
const AuthKeeper = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession(); // Access the session data and status
  const [loading, setLoading] = useState(true); // State to track if the authentication check is still loading
  const router = useRouter(); // Router for navigating to different routes

  // Effect to handle authentication state changes
  useEffect(() => {
    // If the session status is still loading, do nothing
    if (status === "loading") {
      return;
    }

    // If no session exists (user is unauthenticated), redirect to the login page
    if (!session) {
      router.push("/auth/prihlasenie");
    } else {
      // If authenticated, stop the loading state
      setLoading(false);
    }
  }, [session, status, router]); // Dependencies to re-run the effect when any of these values change

  // Render a loading indicator while the authentication check is in progress
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the children components (protected content) if the user is authenticated
  return <>{children}</>;
};

export default AuthKeeper;