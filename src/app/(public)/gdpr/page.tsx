// Import Material-UI components for layout and text styling
import Typography from "@mui/material/Typography"; // Component for displaying styled text
import Container from "@mui/material/Container"; // Component for a responsive layout container
import Link from "@mui/material/Link"; // Material-UI Link for styling the hyperlink
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Back arrow icon for navigation

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "GDPR | SandraInstagram" };

// Main component for the GDPR information page
export default function GDPR() {
  return (
    <Container>
      {/* Display placeholder text for GDPR content */}
      <Typography>
        GDPR - GREAT DUCK PEED on REPOSITORY {/* Placeholder humorous GDPR message */}
      </Typography>

      {/* Back link styled as a label */}
      <Link
        href="/auth/registracia" // Navigate to the SignUpView page
        sx={{
          display: "flex", // Use flexbox to align the icon and text horizontally
          alignItems: "center", // Vertically align the icon and text
          textDecoration: "none", // Remove underline from the link for a clean look
          color: "inherit", // Inherit the text color from parent styles for consistency
          mt: 2, // Add margin-top for spacing above the link
        }}
      >
        {/* Back arrow icon displayed before the text */}
        <ArrowBackIcon sx={{ mr: 1 }} /> {/* Add right margin to the icon for spacing */}
        Späť {/* Label for the back link */}
      </Link>
    </Container>
  );
}
