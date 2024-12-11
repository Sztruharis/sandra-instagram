// Import necessary modules and components
import { Metadata } from "next"; // Type for page metadata
import "./globals.css"; // Global CSS styles
import Navbar from "../components/NavBar"; // Navbar component for navigation
import AuthProvider from "../components/AuthProvider"; // Provider for managing user authentication
import ThemeProvider from "@/components/ThemeProvider"; // Provider for managing the application's theme

// Define metadata for the application
export const metadata: Metadata = {
  title: "SnapZoška", // Application title
  description: "Created by students of SPŠE Zochova 9, Bratislava", // Application description
};

// Root layout component for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // React children components passed into the layout
}>) {
  return (
    // HTML structure for the layout
    <html lang="sk"> {/* Set the language of the document to Slovak */}
      <body>
        {/* Provide theming support */}
        <ThemeProvider>
          {/* Provide authentication context */}
          <AuthProvider>
            {/* Main container for the application layout */}
            <div
              style={{
                minHeight: "100vh", // Ensure the container covers the full viewport height
                display: "flex", // Use flexbox for layout
                flexDirection: "column", // Arrange items in a column
              }}
            >
              {/* Main content area for children components */}
              <main style={{ flexGrow: 1 }}> {/* Allow the main content to expand */}
                {children} {/* Render the child components */}
              </main>
            </div>
            {/* Navbar component placed outside the main content */}
            <Navbar />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}