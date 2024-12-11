// Import Material-UI components for layout and text styling
import Typography from "@mui/material/Typography"; // Component for displaying styled text
import Container from "@mui/material/Container"; // Component for a responsive layout container

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Pridat Prispevok | SandraInstagram" };

// Main component for the "Add Post" page
export default function AddPost() {
  return (
    <Container>
      {/* Display placeholder text for the "Add Post" section */}
      <Typography>
        Na tejto stránke si môžeš pridať príspevky.
      </Typography>
    </Container>
  );
}
