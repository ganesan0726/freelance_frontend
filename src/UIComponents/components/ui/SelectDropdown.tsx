import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Paper, Typography } from "@mui/material";

interface ValueProps {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  options: ValueProps[];
  labelText?: string;
  value?: ValueProps | null;
  onChange: (value: ValueProps | null) => void;
  error?: boolean;
  helperText?: any;
  size?: "small" | "medium";
  width?: string;
  button?: boolean;
  onMouseDown?: () => void;
  defaultValue?: any;
  applySmallSizeStyle?: boolean;
  required?: boolean;
  disabled?: boolean;
  variant?: "outlined" | "filled" | "standard";
}

export default function SelectDropdown({
  size = "medium",
  defaultValue,
  disabled,
  onMouseDown,
  button,
  width = "80%",
  error,
  helperText,
  options,
  value,
  labelText,
  required,
  onChange,
}: SelectDropdownProps) {
  return (
    <>
      {labelText && (
        <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
          {labelText}
        </Typography>
      )}
      <Autocomplete
        disabled={disabled}
        defaultValue={defaultValue}
        size="small"
        disablePortal
        id="combo-box-demo"
        options={options}
        value={value || null}
        onChange={(event, newValue) => {
          console.log(event);

          onChange(newValue);
        }}
        sx={{
          width: width, // Apply reduced width size
          "& .MuiOutlinedInput-root": {
            height: size === "medium" ? "45px" : "38px",
            fontSize: size === "medium" ? "12px" : "10px",
            padding: size === "medium" ? "10px" : "8px",
            borderRadius: "15px", // Add border radius
          },
          "& .MuiAutocomplete-input": {
            padding: size === "medium" ? "10px" : "8px",
          },
          "& .MuiFormLabel-root": {
            lineHeight: "15px",
            fontSize: size === "medium" ? "12px" : "12px", // Larger font size for medium
          },
        }}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            error={error}
            helperText={helperText}
            required={required}
            sx={{ fontSize: "12px !important" }}
            variant="outlined"
            {...params}
            label={labelText}
          />
        )}
        PaperComponent={({ children }) => {
          return (
            <Paper sx={{ "& .MuiAutocomplete-listbox": { fontSize: "13px" } }}>
              {children}
              {button && (
                <Button
                  color="primary"
                  fullWidth
                  sx={{ justifyContent: "flex-start", pl: 2 }}
                  onMouseDown={onMouseDown}
                >
                  Add New
                </Button>
              )}
            </Paper>
          );
        }}
      />
    </>
  );
}
