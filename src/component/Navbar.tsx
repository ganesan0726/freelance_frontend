import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import MainLogo from "../assets/MainTitle.png"; // Your logo

const CustomAppBar = styled(AppBar)({
  margin: "10px 0px",
  borderRadius: "20px",
  backgroundColor: "#171717", // Set a solid background color
  top: 0,
  zIndex: 9999,
});

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "inherit",
  margin: "0 15px",
  fontSize: "14px",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
  },
});

const ButtonAppBar = () => {
  return (
    <Box sx={{ margin: 0, flexGrow: 1 }}>
      <CustomAppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo on the Left */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={MainLogo}
              alt="Main Logo"
              style={{ width: "60px", height: "40px", marginRight: "10px" }}
            />
          </Box>

          {/* Links in the Center */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <StyledNavLink to="/corporate">Corporate</StyledNavLink>
            <StyledNavLink to="/college">College</StyledNavLink>
            <StyledNavLink to="/candidate/register">Candidate</StyledNavLink>
            <StyledNavLink to="/speaker">Speaker</StyledNavLink>
          </Box>

          {/* Login Button on the Right */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button color="inherit">Login/Register</Button>
          </Box>
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
};

export default ButtonAppBar;
