// ThemeProvider.tsx
import React from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    // Customizing MUI components
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          backgroundColor: "#17171780",
          position: "sticky", // Sticky navbar
          top: 0,
          zIndex: 9999,
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <MUIThemeProvider theme={theme}>
    <CssBaseline />
    {children} {/* Wrap your main component here */}
  </MUIThemeProvider>
);
