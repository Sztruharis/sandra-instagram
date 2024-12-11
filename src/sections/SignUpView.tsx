"use client"; // Marks this component for client-side rendering

// Import necessary Material-UI components and icons
import {
  Button, // Button component for user actions
  Checkbox, // Checkbox component for form inputs (currently unused)
  Container, // Container component for layout and structure
  FormControlLabel, // Component for form inputs with labels (currently unused)
  TextField, // TextField for text inputs (currently unused)
  Typography, // Component for styled text
  Divider, // Divider for separating sections (currently unused)
} from "@mui/material";
import { signIn } from "next-auth/react"; // NextAuth function to handle sign-in
import GoogleIcon from "@mui/icons-material/Google"; // Icon for Google sign-up button
import GitHubIcon from "@mui/icons-material/GitHub"; // Icon for GitHub sign-up button

// Component for the sign-up view
export default function SignUpView() {
  return (
    <Container
      maxWidth="xs" // Restrict the maximum width of the container for a compact layout
      sx={{
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Arrange children vertically
        alignItems: "center", // Center-align children
        mt: 5, // Add margin-top for spacing
        p: 3, // Add padding for inner spacing
        bgcolor: "background.paper", // Use background color from Material-UI theme
        boxShadow: 3, // Add a shadow effect for depth
        borderRadius: 2, // Add rounded corners
      }}
    >
      {/* Title for the registration page */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Link to the sign-in page for users who already have an account */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
      </Typography>

            {/* Checkbox with GDPR and terms of use text */}
            <FormControlLabel
        control={<Checkbox />} // Render a checkbox for user interaction
        label={
          // Use Typography for styled text within the checkbox label
          <Typography variant="body1">
            Prečítajte si <a href="/gdpr">GDPR</a> a{" "}
            <a href="/podmienky">podmienky používania</a>.
          </Typography>
        }
      />

      {/* Button for signing up using Google */}
      <Button
        variant="outlined" // Outlined button style
        fullWidth // Make the button span the full width of the container
        startIcon={<GoogleIcon />} // Display the Google icon at the start of the button
        onClick={() => signIn("google")} // Trigger NextAuth Google sign-in
        sx={{ mb: 1 }} // Add margin-bottom for spacing
      >
        Registrovať sa účtom Google
      </Button>

      {/* Button for signing up using GitHub */}
      <Button
        variant="outlined" // Solid button style
        fullWidth // Make the button span the full width of the container
        startIcon={<GitHubIcon />} // Display the GitHub icon at the start of the button
        onClick={() => {
          // Placeholder for GitHub sign-in functionality
          console.log("GitHub sign-in (dummy) clicked");
        }}
        sx={{
          mb: 1, // Add margin-bottom for spacing
        }}
      >
        Prihlásiť sa pomocou GitHub
      </Button>
    </Container>
  );
}
