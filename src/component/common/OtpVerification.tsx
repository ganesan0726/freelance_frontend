import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(10); // 10 seconds timer
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // Handle OTP change in the text fields
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus the next field
      if (value && index < otp.length - 1) {
        const nextField = document.getElementById(`otp-input-${index + 1}`);
        if (nextField) nextField.focus();
      }
    }
  };

  // Start timer when OTP is sent
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (otpSent && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // Handle Resend OTP
  const handleResendOtp = () => {
    setOtp(["", "", "", ""]);
    setTimer(10);
    setOtpSent(true);
  };

  // Send OTP button click handler
  const handleSendOtp = () => {
    setOtpSent(true);
    setTimer(10);
    setOtpVerified(false); // Reset OTP verification state
  };

  // Submit OTP
  const handleSubmitOtp = () => {
    // console.log("Submitting OTP:", otp.join(""));
    if (otp.join("") === "1234") {
      // Assuming '1234' is the correct OTP
      setOtpVerified(true); // OTP verified successfully
      setOtpSent(true); // Disable further "Resend OTP"
    } else {
      alert("Invalid OTP");
    }
  };

  // Format the timer in minutes:seconds
  const formatTimer = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Grid container sx={{ padding: 0 }}>
        <Grid item xs={12}>
          {!otpSent ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendOtp}
              fullWidth
              sx={{
                width: "40%",
                height: "36px",
                marginTop: 3,
                fontSize: "12px",
                borderRadius: "20px",
                border: "1px solid black", // Black border
                backgroundColor: "white", // White background
                color: "black", // Black text
                "&:hover": {
                  backgroundColor: "white", // Prevent hover background changes
                },
              }}
            >
              Send OTP
            </Button>
          ) : !otpVerified ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "space-between",
                gap: 1,
                justifyContent: "space-between",
                flexDirection: "column", // Stack the fields vertically
              }}
            >
              <Box sx={{ display: "flex", gap: 1, marginTop: 3 }}>
                {otp.map((digit, index) => (
                  <TextField
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: "center", fontSize: "15px" }, // Bigger font size
                    }}
                    size="small"
                    sx={{
                      width: "40px", // Larger field width
                      height: "30px", // Larger field height
                      padding: 0,
                    }}
                  />
                ))}
                {timer > 0 ? (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginTop: 1 }}
                  >
                    {formatTimer(timer)}
                  </Typography>
                ) : (
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={handleResendOtp}
                    sx={{ fontSize: "9px" }}
                  >
                    Resend OTP
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmitOtp}
                  disabled={otp.some((digit) => digit === "")}
                  sx={{
                    width: "30%",
                    height: "36px",
                    fontSize: "12px",
                    borderRadius: "20px",
                    border: "1px solid black", // Black border
                    backgroundColor: "white", // White background
                    color: "black", // Black text
                    "&:hover": {
                      backgroundColor: "white", // Prevent hover background changes
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          ) : (
            <Button
              variant="outlined"
              disabled
              sx={{
                width: "40%",
                marginTop: 3,
                fontSize: "12px",
                borderRadius: "20px",
                borderColor: "green", // Green border
                backgroundColor: "white", // White background
                color: "green", // Green text
                "&.Mui-disabled": {
                  borderColor: "green", // Green border for disabled state
                  color: "green", // Green text for disabled state
                },
                "&:hover": {
                  backgroundColor: "white", // Prevent hover background changes
                },
              }}
            >
              Verified
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OTPVerification;
