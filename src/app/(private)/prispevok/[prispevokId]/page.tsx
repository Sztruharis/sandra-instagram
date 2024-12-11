// Import Material-UI components for layout and text styling
import Typography from "@mui/material/Typography"; // Component for displaying styled text
import Container from "@mui/material/Container"; // Component for a responsive layout container

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Detail Prispevku | SandraInstagram" };

// Main component for displaying the details of a specific post
export default function PostDetail({
  params,
}: {
  params: { prispevokid: string }; // Destructure dynamic route parameter `prispevokid`
}) {
  return (
    <Container>
      {/* Display the post's detail using the dynamic `prispevokid` */}
      <Typography>
        Tu je nejaky prispevok cislo {params.prispevokid} | Stalkujte si tu kolko chcete, aj tak tu nic nie je
      </Typography>
    </Container>
  );
}
