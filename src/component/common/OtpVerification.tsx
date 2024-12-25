import React, { useState, useRef } from "react";
import { Box, TextField } from "@mui/material";

interface OtpInputProps {
  numDigits?: number; // Number of OTP digits
  onChange?: (otp: string) => void; // Callback when OTP changes
  onComplete?: (otp: string) => void; // Callback when OTP is fully entered
  inputStyle?: React.CSSProperties; // Custom style for input fields
  gap?: number; // Gap between input fields
  disabled?: boolean; // Disable all input fields
}

const OtpInput: React.FC<OtpInputProps> = ({
  numDigits = 4,
  onChange,
  onComplete,
  inputStyle,
  gap = 2,
  disabled = false,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(numDigits).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      onChange?.(updatedOtp.join(""));

      // Call onComplete if OTP is fully entered
      if (value !== "" && updatedOtp.every((digit) => digit !== "")) {
        onComplete?.(updatedOtp.join(""));
      }

      // Move focus to the next input if a digit is entered
      if (value !== "" && index < numDigits - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      // Move focus to the previous input on Backspace if the current one is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = event.clipboardData.getData("text");
    if (new RegExp(`^\\d{${numDigits}}$`).test(pasteData)) {
      const updatedOtp = pasteData.split("").slice(0, numDigits);
      setOtp(updatedOtp);
      onChange?.(updatedOtp.join(""));
      onComplete?.(updatedOtp.join(""));
      updatedOtp.forEach((_, i) => {
        if (inputRefs.current[i]) inputRefs.current[i]?.focus();
      });
    }
    event.preventDefault();
  };

  return (
    <Box display="flex" justifyContent="center" gap={gap}>
      {otp.map((digit, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e : any) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          disabled={disabled}
          variant="outlined"
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: "center",
              fontSize: "11px",
              width: "8px",
              height: "2px",
              ...inputStyle,
            },
          }}
        />
      ))}
    </Box>
  );
};

export default OtpInput;
