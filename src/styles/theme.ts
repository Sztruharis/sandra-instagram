import { createTheme } from "@mui/material/styles";

// Define the Pink Oasis theme palette
const pinkOasisPalette = {
  primary: {
    main: "#ff69b4", // hot pink
    contrastText: "#ffffff", // white text for contrast
  },
  secondary: {
    main: "#ffb6c1", // light pink
    contrastText: "#ffffff", // white text for contrast
  },
  background: {
    default: "#fff0f5", // lavender blush
    paper: "#ffe4e1", // misty rose
  },
  text: {
    primary: "#4b0082", // indigo for contrast
    secondary: "#8b008b", // dark magenta
  },
  error: {
    main: "#e57373", // light red for errors
  },
  warning: {
    main: "#ffcc80", // soft orange
  },
  info: {
    main: "#64b5f6", // light blue
  },
  success: {
    main: "#81c784", // soft green
  },
};

// Create the Pink Oasis theme
export const pinkOasisTheme = createTheme({
  palette: {
    mode: "light", // Fixed to 'light' mode for Pink Oasis
    ...pinkOasisPalette,
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif", // Modern font stack
    h1: { fontWeight: 700, fontSize: "2.5rem", color: pinkOasisPalette.text.primary },
    h2: { fontWeight: 600, fontSize: "2rem", color: pinkOasisPalette.text.primary },
    body1: { fontWeight: 400, fontSize: "1rem", color: pinkOasisPalette.text.secondary },
  },
});
