import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3498db"
    },
    secondary: {
      main: "#e74c3c"
    },
    text: {
      primary: "#212121",
      secondary: "#757575"
    }
    // ... other palette options (error, warning, success, info, etc.)
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500
    }
    // ... other typography styles (h3, h4, body1, body2, etc.)
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  shape: {
    borderRadius: 4
  },
  spacing: factor => `${0.25 * factor}rem`, // Custom spacing function
  zIndex: {
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  // ... other theme options (shadows, transitions, mixins, etc.)
  customProperties: {
    // Define your custom theme variables here
    palette: {
      text: {
        secondary: "var(--palette-text-secondary)" // Use CSS custom property for secondary text color
      }
    },
    breakpoints: {
      values: {
        sm: "var(--breakpoints-sm)" // Use CSS custom property for breakpoint value
      }
    }
    // Add more custom properties if needed
  }
});

export default theme;
