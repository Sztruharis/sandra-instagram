// Import Material-UI components for layout and text styling
import Typography from "@mui/material/Typography"; // Component for displaying styled text
import Container from "@mui/material/Container"; // Component for a responsive layout container

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Zoznam komentarov | SandraInstagram" };

// Main component for displaying the list of comments for a specific post
export default function CommentList() {
  return (
    <Container>
      {/* Placeholder text for the comments list */}
      <Typography>
        Tu je zoznam komentarov | Stalkujte si ich kolko chcete, aj tak tu nic nie je
      </Typography>
    </Container>
  );
}
