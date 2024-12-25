import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Paper,
  FormControl,
  FormHelperText,
  CircularProgress,
} from "@mui/material";

interface ValueProps {
  value: string | number;
  label: string;
}

interface SelectDropdownProps {
  options: ValueProps[];
  labelText?: string;
  value?: ValueProps | null;
  onChange: (value: ValueProps | null) => void;
  error?: boolean;
  helperText?: any;
  required?: boolean;
  disabled?: boolean;
  variant?: "outlined" | "filled" | "standard";
  onBlur?: (event?: React.FocusEvent<HTMLElement>) => void;
  width?: string;
  size?: "small" | "medium";
  loading?: boolean;
  defaultValue?: ValueProps | null;
}

export default function SelectDropdownUi({
  size = "medium",
  error,
  width = "80%", // Reduced width size
  helperText,
  options,
  value,
  labelText,
  required,
  onBlur,
  variant,
  onChange,
  disabled,
  loading = false,
}: SelectDropdownProps) {
  return (
    <FormControl fullWidth error={error} disabled={disabled}>
      <Autocomplete
        size={size}
        disablePortal
        options={options}
        loading={loading}
        value={value || null}
        onChange={(_, newValue) => {
          onChange(newValue);
        }}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onBlur={onBlur}
        sx={{
          width: width, // Apply reduced width size
          "& .MuiOutlinedInput-root": {
            height: size === "medium" ? "45px" : "38px",
            fontSize: size === "medium" ? "12px" : "10px",
            padding: size === "medium" ? "10px" : "8px",
            borderRadius: "20px", // Add border radius
          },
          "& .MuiAutocomplete-input": {
            padding: size === "medium" ? "10px" : "8px",
          },
          "& .MuiFormLabel-root": {
            lineHeight: "15px",
            fontSize: size === "medium" ? "12px" : "12px", // Larger font size for medium
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            required={required}
            variant={variant}
            label={labelText}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        PaperComponent={({ children }) => (
          <Paper sx={{ "& .MuiAutocomplete-listbox": { fontSize: "13px" } }}>
            {children}
          </Paper>
        )}
        renderOption={(props, option) => (
          <li {...props} key={option.value}>
            {option.label}
          </li>
        )}
      />
      {helperText && (
        <FormHelperText id="component-helper-text">{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
