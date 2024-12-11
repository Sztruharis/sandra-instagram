"use client"; // Enable client-side rendering for this component

// Import necessary Material-UI components and icons
import {
  Button, // Button component for clickable actions
  Checkbox, // Checkbox component for form inputs (currently unused)
  Container, // Container for layout and structure
  FormControlLabel, // Component for form input with label (currently unused)
  TextField, // Text input field component (currently unused)
  Typography, // Component for styled text
  Divider, // Divider for separating sections (currently unused)
} from "@mui/material";
import { signIn } from "next-auth/react"; // NextAuth function for handling sign-in
import GoogleIcon from "@mui/icons-material/Google"; // Google icon for Google sign-in button
import GitHubIcon from "@mui/icons-material/GitHub"; // GitHub icon for GitHub sign-in button

// Component for the sign-in view
export default function SignInView() {
  return (
    <Container
      maxWidth="xs" // Set the maximum width of the container
      sx={{
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Arrange children vertically
        alignItems: "center", // Center-align children horizontally
        justifyContent: "center", // Center-align children vertically
        p: 3, // Add padding
        bgcolor: "background.paper", // Background color from theme
        boxShadow: 3, // Add a shadow effect
        borderRadius: 2, // Rounded corners
      }}
    >
      {/* Title for the sign-in page */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Prihlásenie
      </Typography>

      {/* Link for users to register if they don't have an account */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Nemáte účet? <a href="/auth/registracia">Registrujte sa</a>
      </Typography>

      {/* Button for signing in with Google */}
      <Button
        variant="outlined"
        fullWidth // Button spans the full width of the container
        startIcon={<GoogleIcon />} // Icon displayed at the start of the button
        onClick={() => signIn("google")} // Trigger NextAuth Google sign-in
        sx={{ mb: 1 }} // Add margin-bottom
      >
        Prihlásiť sa účtom Google
      </Button>

      {/* Button for signing in with GitHub */}
      <Button
        variant="outlined" // Solid button style
        fullWidth // Button spans the full width of the container
        startIcon={<GitHubIcon />} // Icon displayed at the start of the button
        onClick={() => {
          // Placeholder for GitHub sign-in functionality
          console.log("GitHub sign-in (dummy) clicked");
        }}
        sx={{
          mb: 1, // Add margin-bottom
        }}
      >
        Prihlásiť sa pomocou GitHub
      </Button>
    </Container>
  );
}
