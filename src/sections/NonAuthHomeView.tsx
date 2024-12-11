// Import Material-UI components for layout and text styling
import { Container, Typography } from "@mui/material"; // `Container` for layout and `Typography` for styled text

// Component for displaying the non-authenticated home view
export default function NonAuthHomeView() {
  return (
    <Container>
      {/* Informational message for unauthenticated users */}
      <Typography variant="body1" sx={{ mt: 2 }}>
        Domovská stránka - NEprihlásený user
      </Typography>
      {/* Prompt encouraging users to register for additional functionality */}
      <Typography>
        Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
      </Typography>
    </Container>
  );
}
