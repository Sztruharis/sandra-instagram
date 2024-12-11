// Import the SignUpView component to display the sign-up page
import SignUpView from "../../../../sections/SignUpView";

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Registrácia užívateľa | SandraInstagram" };

// Main component for the user registration page
export default function SignUpPage() {
  return (
    // Render the SignUpView component, which handles the registration process and UI
    <SignUpView />
  );
}
