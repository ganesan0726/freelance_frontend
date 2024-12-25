import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface TextFieldProps {
  label?: string;
  value?: string | number | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Added onBlur prop
  disabled?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  error?: boolean | undefined;
  helperText?: any;
  name?: string;
  type:
    | "file"
    | "text"
    | "password"
    | "number"
    | "email"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color";
  fullWidth?: boolean;
  required?: boolean;
  width?: string;
  sx?: any;
  size?: "small" | "medium";
}

const TextFieldUi = ({
  sx,
  width,
  required,
  label,
  value,
  onChange,
  onBlur,
  disabled,
  endAdornment,
  startAdornment,
  error,
  helperText,
  name,
  type,
  fullWidth,
  size = "medium", // Default to medium
}: TextFieldProps) => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl
      fullWidth={fullWidth || true}
      error={error}
      disabled={disabled}
      sx={{
        marginBottom: 0, // Reduced margin when error is present
      }}
    >
      <TextField
        required={required}
        variant="outlined"
        size={size}
        label={label}
        value={value || ""}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        type={type === "password" ? (showPassword ? "text" : "password") : type} // Properly toggle visibility
        fullWidth={fullWidth || true}
        InputProps={{
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : undefined,
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <span
                  onClick={handleClickShowPassword}
                  style={{
                    cursor: "pointer",
                    fontSize: "30px",
                  }}
                >
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </span>
              </InputAdornment>
            ) : (
              endAdornment
            ),
        }}
        sx={{
          width: width ? width : "80%", // Ensure width is applied properly
          borderRadius: "20px !important",
          "& .MuiOutlinedInput-root": {
            height: size === "medium" ? "45px" : "38px", // Default height for medium size
            ...sx,
            borderRadius: "20px !important",
            borderColor: "action.active",
            transition: `muiTheme.transitions.create(["border-color", "box-shadow"])`,
            "&:hover": {
              // backgroundColor: `action.hover`,
            },
            "&.Mui-error": {
              borderColor: "transparent", // Removing the outline color for error
            },
          },
          "& .MuiFormLabel-root": {
            lineHeight: "15px",
            fontSize: size === "medium" ? "12px" : "12px", // Larger font size for medium
          },
        }}
      />
      {helperText && (
        <FormHelperText
          sx={{
            color: "error.main",
            fontSize: "10px", // Reduced font size for helper text
            marginTop: 0, // Reduced margin between input field and helper text
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TextFieldUi;
