// Import Material-UI components for layout and text styling
import Container from "@mui/material/Container"; // Provides a responsive layout container
import Typography from "@mui/material/Typography"; // For styled text elements
import { Session } from "next-auth"; // Type definition for the NextAuth session object

// Component for displaying the authenticated home view
export default function AuthHomeView({ session }: { session: Session | null }) {
  // If session is not available, show a loading indicator
  if (!session) {
    return <Typography>Loading...</Typography>;
  }

  // Render the authenticated user's home view
  return (
    <Container>
      {/* Informational text indicating the authenticated home page */}
      <Typography>Domovská stránka - prihlásený user</Typography>
      {/* Welcome message with user's name or a fallback */}
      <Typography variant="h4" sx={{ mb: 3 }}>
        Vitajte, {session?.user?.name || "užívateľ"}!
      </Typography>
    </Container>
  );
}
