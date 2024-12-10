"use client"; // This needs to be a client component
import React from "react";
import { ThemeProvider as MUITheme, CssBaseline } from "@mui/material";
import { pinkOasisTheme } from "@/styles/theme";

// ThemeProvider component with a fixed Pink Oasis theme
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MUITheme theme={pinkOasisTheme}>
      <CssBaseline />
      {children}
    </MUITheme>
  );
};

export default ThemeProvider;
