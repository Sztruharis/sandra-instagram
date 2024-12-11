// Import the SignOutView component to display the sign-out page
import SignOutView from "../../../../sections/SignOutView";

// Define metadata for the page (e.g., title for the document)
export const metadata = { title: "Odhlásenie | SandraInstagram" };

// Main component for the sign-out page
export default function SignOutPage() {
  return (
    // Render the SignOutView component, which handles the sign-out process and UI
    <SignOutView />
  );
}
