// Enable the "client" side rendering mode, necessary for hooks like useSession
"use client";

// Import required hooks and components
import { useSession } from "next-auth/react"; // Hook to access session and authentication status
import { useRouter } from "next/navigation"; // Hook for navigation and route control
import { ReactNode, useEffect } from "react"; // React types and effects
import Typography from "@mui/material/Typography"; // Material-UI component for styled text
import Button from "@mui/material/Button"; // Material-UI button component
import AuthKeeper from "@/components/AuthKeeper"; // Optional: Component to manage authentication logic (commented as unused)

// Define the layout component for the home page
export default function HomeLayout({ children }: { children: ReactNode }) {
  // Destructure session data and status from useSession hook
  const { data: session, status } = useSession();
  const router = useRouter(); // Initialize router for potential navigation

  useEffect(() => {
    // Optional effect: Triggered when `status` or `router` changes
    // Currently empty but can be used for redirection or other logic
  }, [status, router]);

  // Check session status and return appropriate content
  if (status === "loading") {
    // Show a loading message while session status is being determined
    return <Typography>Loading...</Typography>;
  }

  if (status === "unauthenticated") {
    // If user is not authenticated, display a message and prevent access
    return (
      <div>
        <Typography>You need to sign in to access this content.</Typography>
      </div>
    );
  }

  // Render child components (page content) for authenticated users
  return <>{children}</>;
}
