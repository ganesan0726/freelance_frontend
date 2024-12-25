import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const PageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f7f8fc",
  minHeight: "100vh",
});

const ContentWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "34px 0px",
  gap: "10px",
});

const LeftSection = styled(Box)({
  flex: "1",
  minWidth: "300px",
  padding: "20px",
  borderRadius: "10px",
  marginLeft: "50px",
});

const RightSection = styled(Box)({
  flex: "1",
  minWidth: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginBox = styled(Box)({
  width: "100%",
  maxWidth: "450px",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  //   textAlign: "center",
});

const LoginPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        {/* Left Section */}
        <LeftSection>
          <Box>
            <Typography variant="h4" gutterBottom>
              Login Form
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              Log in to access your personalized dashboard and explore exclusive
              features.
            </Typography>
          </Box>
        </LeftSection>

        {/* Right Section */}
        <RightSection>
          <LoginBox>
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              Candidate Login
            </Typography>
            <Box>
              <Box sx={{ marginBottom: "20px" }}>
                <Typography variant="h6" sx={{ fontSize: "15px" }}>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  label="Enter the email"
                  margin="dense"
                  hiddenLabel
                  variant="outlined"
                  sx={{
                    width: "100%", // Ensure width is applied properly
                    borderRadius: "8px !important",
                    "& .MuiOutlinedInput-root": {
                      height: "45px",
                      borderRadius: "30px !important",
                      borderColor: "action.active",
                      transition: (theme) =>
                        theme.transitions.create([
                          "border-color",
                          "box-shadow",
                        ]),
                      "&:hover": {
                        // Add hover effect styles here if needed
                      },
                      "&.Mui-error": {
                        borderColor: "transparent", // Removing the outline color for error
                      },
                    },
                    "& .MuiFormLabel-root": {
                      lineHeight: "15px",
                      fontSize: "13px", // Larger font size for medium
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontSize: "15px" }}>
                  Password
                </Typography>
                <TextField
                  fullWidth
                  label="Enter the Password"
                  type="password"
                  variant="outlined"
                  margin="dense"
                  sx={{
                    width: "100%", // Ensure width is applied properly
                    borderRadius: "8px !important",
                    "& .MuiOutlinedInput-root": {
                      height: "45px",
                      borderRadius: "30px !important",
                      borderColor: "action.active",
                      transition: (theme) =>
                        theme.transitions.create([
                          "border-color",
                          "box-shadow",
                        ]),
                      "&:hover": {
                        // Add hover effect styles here if needed
                      },
                      "&.Mui-error": {
                        borderColor: "transparent", // Removing the outline color for error
                      },
                    },
                    "& .MuiFormLabel-root": {
                      lineHeight: "15px",
                      fontSize: "13px", // Larger font size for medium
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "8px",
                    width: "143px",
                    height: "34px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>
            <Box sx={{ marginTop: "auto", textAlign: "center" }}>
              <Typography variant="body2" sx={{ marginTop: "10px" }}>
                Don’t have an account? <a href="/signup">Sign Up</a>
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "10px" }}>
                Not Registered Yet? <br />
                Corporate / College / Candidate / Speaker
              </Typography>
            </Box>
          </LoginBox>
        </RightSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default LoginPage;
