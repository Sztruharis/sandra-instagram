import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FF00',  // Neon Green for primary elements
    },
    secondary: {
      main: '#fff',  // White for secondary elements (you can keep this as is)
    },
  },
  components: {
    // Custom styling for BottomNavigation (Navbar)
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          width: '100%',
          position: 'fixed',
          bottom: 0,
          backgroundColor: '#FF69B4', // Pink background color (updated from white to pink)
          zIndex: 10,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: '#000', // Black text/icons
          '&.Mui-selected': {
            color: '#00FF00', // Neon green for selected item
            textShadow: '0 0 10px rgba(0, 255, 0, 0.8)', // Neon green glow effect on text
          },
          '&:hover': {
            color: '#00FF00', // Neon green on hover
            textShadow: '0 0 10px rgba(0, 255, 0, 0.8)', // Neon green glow effect on hover
          },
        },
      },
    },
  },
});

export default theme;
