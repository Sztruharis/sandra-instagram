// Import the SignInView component to display the sign-in page
import SignInView from "../../../../sections/SignInView";

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Prihlásenie užívateľa | SandraInstagram" };

// Main component for the sign-in page
export default function SignInPage() {
  return (
    // Render the SignInView component, which handles the sign-in process and UI
    <SignInView />
  );
}
