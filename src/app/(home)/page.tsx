// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Import required modules and components
import { getServerSession } from "next-auth"; // Function to fetch the server-side session
import { authOptions } from "../api/auth/[...nextauth]/authOptions"; // Authentication options for NextAuth
import AuthHomeView from "@/sections/AuthHomeView"; // Component to display the authenticated home view
import NonAuthHomeView from "../../sections/NonAuthHomeView"; // Component to display the non-authenticated home view

// Define metadata for the page (e.g., title)
export const metadata = { title: "Domov | SandraInstagram" };

// Main home page component
export default async function HomePage() {
  try {
    // Attempt to get the session using server-side authentication options
    const session = await getServerSession(authOptions);

    // If no session exists (user is unauthenticated), render the non-authenticated home view
    if (!session) {
      return <NonAuthHomeView />;
    }

    // If session exists (user is authenticated), render the authenticated home view
    return <AuthHomeView session={session} />;
  } catch (error) {
    // Handle any errors that occur during session fetching
    console.error("Error fetching session:", error);

    // Render the non-authenticated home view as a fallback in case of error
    return <NonAuthHomeView />;
  }
}