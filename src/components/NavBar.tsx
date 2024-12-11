// Enable client-side rendering
"use client";

// Import necessary modules and components
import * as React from "react"; // React library for creating components
import { BottomNavigation, BottomNavigationAction, Box, Avatar } from "@mui/material"; // Material-UI components for navigation and layout
import HomeIcon from "@mui/icons-material/Home"; // Icon for "Home"
import SearchIcon from "@mui/icons-material/Search"; // Icon for "Search"
import AddCircleIcon from "@mui/icons-material/AddCircle"; // Icon for "Add Post"
import LoginIcon from "@mui/icons-material/Login"; // Icon for "Login"
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"; // Icon for "Register"
import LogoutIcon from "@mui/icons-material/Logout"; // Icon for "Logout"
import { useRouter } from "next/navigation"; // Hook for client-side navigation
import { useSession, signOut } from "next-auth/react"; // Hooks and functions for authentication management
import InfoIcon from "@mui/icons-material/Info";


// Navbar component for bottom navigation
export default function Navbar() {
  const [value, setValue] = React.useState("/"); // State to track the currently selected navigation value
  const router = useRouter(); // Router for navigation
  const { data: session, status } = useSession(); // Access session data and status

  // Handle navigation based on selected path
  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue); // Update the current navigation value
      router.push(newValue);
  };

  // Paths for users who are not authenticated
  const nonAuthPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O nás", value: "/o-nas", icon: <InfoIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  // Paths for authenticated users
  const authPaths = [
    { label: "Domov", value: "/prispevok", icon: <HomeIcon /> },
    { label: "Hľadať", value: "/hladanie", icon: <SearchIcon /> },
    { label: "Pridať", value: "/pridat", icon: <AddCircleIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: session?.user?.image ? (
        // Display user's profile picture if available
        <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
      ) : (
        // Fallback to the first character of the user's name or "U" if no name exists
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
    {  label: "Odhlásenie", value: "/odhlasenie", icon: <LogoutIcon /> }, // Correct path
  ];

  // Determine the navigation paths based on the user's authentication status
  const navigationPaths = status === "authenticated" ? authPaths : nonAuthPaths;

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}> {/* Fixed bottom navigation bar */}
      <BottomNavigation
        showLabels // Show labels for navigation items
        value={value} // Currently selected navigation value
        onChange={handleNavigation} // Handle navigation on selection change
      >
        {navigationPaths.map((path) => (
          // Render navigation actions dynamically based on available paths
          <BottomNavigationAction
            key={path.value} // Unique key for each navigation action
            label={path.label} // Display label
            value={path.value} // Value for navigation
            icon={path.icon} // Icon for the navigation item
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
