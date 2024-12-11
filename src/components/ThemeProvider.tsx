"use client"; // Marks this as a client-side component, enabling the use of client-side rendering

// Import necessary modules and components
import React, { useState } from "react"; // React library for creating components and managing state
import { ThemeProvider as MUIThemeProvider, CssBaseline, Button, Box, GlobalStyles } from "@mui/material"; // Material-UI ThemeProvider and CssBaseline for consistent styling
import { pinkOasisLightTheme, pinkOasisDarkTheme } from "@/styles/theme"; // Custom Pink Oasis theme definitions

// ThemeProvider component to apply the selected theme globally
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track the theme mode

  // Toggle the theme mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <MUIThemeProvider theme={isDarkMode ? pinkOasisDarkTheme : pinkOasisLightTheme}>
      {/* CssBaseline applies global CSS resets and consistent baseline styling */}
      <CssBaseline />
      {/* Global styles for links */}
      <GlobalStyles
        styles={{
          a: {
            color: "#ff69b4", // Pink color for links
            textDecoration: "none", // No underline by default
            '&:hover': {
              textDecoration: "underline", // Underline on hover
            },
          },
        }}
      />
      {/* Toggle button to switch themes */}
      <Box sx={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}>
        <Button variant="contained" onClick={toggleTheme}>
          Zmeniť na {isDarkMode ? "svetlú" : "tmavú"} tému
        </Button>
      </Box>
      {/* Render the children components with the theme applied */}
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
