"use client"; // Marks this as a client-side component, enabling the use of client-side rendering

// Import necessary modules and components
import React from "react"; // React library for creating components
import { ThemeProvider as MUITheme, CssBaseline } from "@mui/material"; // Material-UI ThemeProvider and CssBaseline for consistent styling
import { pinkOasisTheme } from "@/styles/theme"; // Custom Pink Oasis theme definition

// ThemeProvider component to apply the Pink Oasis theme globally
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // Wrap children components with Material-UI ThemeProvider
    <MUITheme theme={pinkOasisTheme}>
      {/* CssBaseline applies global CSS resets and consistent baseline styling */}
      <CssBaseline />
      {/* Render the children components with the theme applied */}
      {children}
    </MUITheme>
  );
};

export default ThemeProvider;
