import React from "react";
import { MuiTelInput } from "mui-tel-input";
import { FormHelperText, FormControl, TextFieldProps, Typography } from "@mui/material";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  helperText?: any;
  error?: boolean;
  required?: boolean;
  sx?: any;
  variant?: TextFieldProps["variant"]; // Accepts 'outlined', 'filled', 'standard'
  name?: string;
  label?: string;
  width?: string;
  size?: "small" | "medium";
  topLabel?: string;
}

const PhoneInputUi: React.FC<PhoneInputProps> = ({
  size,
  width,
  name,
  label,
  value,
  onChange,
  onBlur,
  helperText = "",
  error = false,
  required = false,
  sx,
  variant = "outlined", // Default to 'outlined'
  topLabel,

}) => {
  return (
    <FormControl error={error} required={required} fullWidth sx={sx}>
       <Typography
        variant="h6"
        sx={{
          marginBottom: 1,
          fontSize: "13px",
          marginLeft: "12px",
          fontWeight: "bold",
        }}
      >
        {topLabel}
      </Typography>
      <MuiTelInput
        sx={{
          width: width || "100%",
          borderRadius: "15px !important",
          "& .MuiOutlinedInput-root": {
            height: size === "medium" ? "" : "38px",
            ...sx,
            borderRadius: "15px !important",
            overflow: "hidden",
            borderColor: `action.active`,
            transition: `muiTheme.transitions.create(["border-color", "box-shadow"])`,
            "&:hover": {
              // backgroundColor: `action.hover`,
            },
          },
          " & .MuiFormLabel-root": {
            lineHeight: "20px",
            fontSize: size === "medium" ? "15px" : "14px", // Larger font size for medium
          },
          " & .MuiOutlinedInput-root": {
            fontSize: size === "medium" ? "15px" : "14px", // Larger font size for medium
          },
          "& .css-1o5h54k-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            fontSize: "15px",
          },
          "&.css-m9eh9o-MuiFormControl-root-MuiTextField-root .MuiFormLabel-root":
            {
              fontSize: "15px !important",
            },
        }}
        defaultCountry="IN"
        fullWidth
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        variant={variant} // Pass variant to MuiTelInput
        // onlyCountries={['IN', 'US', 'CA']}
      />
      {helperText && (
        <FormHelperText sx={{ marginTop: 0, fontSize: "10px" }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default PhoneInputUi;
