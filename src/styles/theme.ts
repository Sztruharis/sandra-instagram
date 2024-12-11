import { createTheme } from '@mui/material/styles';

// Define the Pink Oasis light theme palette
const pinkOasisLightPalette = {
  primary: {
    main: '#ff69b4', // hot pink
    contrastText: '#ffffff', // white text for contrast
  },
  secondary: {
    main: '#ffb6c1', // light pink
    contrastText: '#ffffff', // white text for contrast
  },
  background: {
    default: '#fff0f5', // lavender blush
    paper: '#ffe4e1', // misty rose
  },
  text: {
    primary: '#4b0082', // indigo for contrast
    secondary: '#8b008b', // dark magenta
  },
  error: {
    main: '#e57373', // light red for errors
  },
  warning: {
    main: '#ffcc80', // soft orange
  },
  info: {
    main: '#64b5f6', // light blue
  },
  success: {
    main: '#81c784', // soft green
  },
};

// Define the Pink Oasis dark theme palette
const pinkOasisDarkPalette = {
  primary: {
    main: '#ff69b4', // hot pink
    contrastText: '#ffffff', // white text for contrast
  },
  secondary: {
    main: '#ffb6c1', // light pink
    contrastText: '#ffffff', // white text for contrast
  },
  background: {
    default: '#2c2c2c', // dark gray background
    paper: '#3c3c3c', // darker paper background
  },
  text: {
    primary: '#ffffff', // white text
    secondary: '#ffb6c1', // light pink
  },
  error: {
    main: '#e57373', // light red for errors
  },
  warning: {
    main: '#ffcc80', // soft orange
  },
  info: {
    main: '#64b5f6', // light blue
  },
  success: {
    main: '#81c784', // soft green
  },
};

// Create the Pink Oasis themes
export const pinkOasisLightTheme = createTheme({
  palette: {
    mode: 'light', // Set the mode to 'light'
    ...pinkOasisLightPalette, // Add Pink Oasis light palette colors
  },
});

export const pinkOasisDarkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to 'dark'
    ...pinkOasisDarkPalette, // Add Pink Oasis dark palette colors
  },
});