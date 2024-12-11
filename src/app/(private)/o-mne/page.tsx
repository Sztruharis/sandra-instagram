// Import Material-UI components for layout and text styling
import Typography from "@mui/material/Typography"; // Component for displaying styled text
import Container from "@mui/material/Container"; // Component for a responsive layout container

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "O mne | SandraInstagram" };

// Main component for the "About" page
export default function About() {
  return (
    <Container>
      {/* Display placeholder text for the "About" section */}
      <Typography> Táto stránka obsahuje informácie o mne! </Typography>
    </Container>
  );
}
