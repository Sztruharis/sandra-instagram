// Import Material-UI components for layout and text styling
import Typography from "@mui/material/Typography"; // Component for displaying styled text
import Container from "@mui/material/Container"; // Component for a responsive layout container

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Komentar | SandraInstagram" };

// Main component for displaying details of a specific comment on a post
export default function PostCommentDetail({
  params,
}: {
  params: { prispevokid: string; komentareid: string }; // Destructure dynamic route parameters
}) {
  return (
    <Container>
      {/* Display details of the specific comment and its associated post */}
      <Typography>
        {" "}
        Tu je nejaky komentar cislo {params.komentareid} ku prispevku{" "}
        {params.prispevokid}
        {" "}
      </Typography>
    </Container>
  );
}
