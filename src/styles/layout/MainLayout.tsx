import React from "react";
import { Box, Card } from "@mui/material";

interface MainLayoutProps {
  Navbar: React.ComponentType; // Navbar will be passed as a component
  children: React.ReactNode; // The main content that will be rendered below the navbar
}

const MainLayout = ({ Navbar, children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar with fixed positioning */}
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
        <Card sx={{ backgroundColor: "FFFFFF", padding: 0 }}>
          <Navbar />
        </Card>
      </Box>

      {/* Main content area, adjusted to start below the navbar */}
      <Box
        sx={{
          marginTop: "64px", // Adjust this value based on the height of your navbar
          overflowY: "auto",
          flexGrow: 1, // Ensures content scrolls below the navbar
          paddingTop: "20px",
        }}
      >
        {children} {/* Render the main content here */}
      </Box>
    </Box>
  );
};

export default MainLayout;
