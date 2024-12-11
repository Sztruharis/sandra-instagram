// Import Material-UI components for styling and layout
import Typography from "@mui/material/Typography"; // For styled text
import Container from "@mui/material/Container"; // For a responsive layout container

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Zoznam profilov | SandraInstagram" };

// Main component for the Profile List page
export default function ProfileList() {
  return (
    <Container>
      {/* Display a message or placeholder text */}
      <Typography> Tu je zoznam profilov | nič </Typography>
    </Container>
  );
}
