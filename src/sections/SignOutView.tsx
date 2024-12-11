"use client"; // Enable client-side rendering for this component

// Import necessary functions and components
import { signOut } from "next-auth/react"; // NextAuth function for handling sign-out
import { Button, Container, Typography } from "@mui/material"; // Material-UI components for layout, text, and buttons

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Odhlásenie | SandraInstagram" };

// Main component for the sign-out page
export default function SignOutPage() {
  return (
    <Container
      maxWidth="xs" // Set the maximum width of the container for a compact layout
      sx={{
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Arrange children vertically
        alignItems: "center", // Center-align children
        mt: 5, // Add margin-top
        p: 3, // Add padding
        bgcolor: "background.paper", // Background color from the Material-UI theme
        boxShadow: 3, // Add a shadow effect for a raised appearance
        borderRadius: 2, // Rounded corners for the container
      }}
    >
      {/* Title prompting the user for confirmation */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Naozaj sa chcete odhlásiť?
      </Typography>
      {/* Button to trigger the sign-out function */}
      <Button
        variant="contained"
        onClick={() => signOut()} // Only triggers sign-out when clicked
        fullWidth // Makes the button span the full width of the container
        sx={{ mt: 2 }} // Add spacing above the button
      >
        Odhlásiť sa
      </Button>
    </Container>
  );
}
