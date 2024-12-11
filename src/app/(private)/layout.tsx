// Import the AuthKeeper component, which manages user authentication
import AuthKeeper from "../../components/AuthKeeper";

// Define the layout component for private pages
export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    // Wrap the children components with AuthKeeper to ensure authentication
    <AuthKeeper>
      {/* Render the children components within a div */}
      <div>{children}</div>
    </AuthKeeper>
  );
}
