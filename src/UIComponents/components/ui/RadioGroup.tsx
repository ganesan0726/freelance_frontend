import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";

interface RadioOptions {
  value: string;
  label: string;
}

interface RadioFormProps {
  options?: RadioOptions[];
  groupName?: string;
  errorMsg?: any;
  label?: string;
  size?: string;
  value?: string | number;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function RadioUi({
  errorMsg,
  onChange,
  value,
  options,
  groupName,
  label,
  required,
  disabled,
}: RadioFormProps) {
  return (
    <>
      <FormControl
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {label ? (
          <FormLabel
            sx={{
              padding: "0",
              margin: "0 8px",
              borderRadius: "20px", // Add border radius to FormControlLabel
              border: "1px solid #000", // Add border to FormControlLabel
              "& .MuiRadio-root": {
                borderRadius: "50%", // Ensure the radio itself has a circular border
              },
              "& .MuiTypography-root": {
                fontSize: "12px",
              },
            }}
            id="demo-row-radio-buttons-group-label"
          >
            {label}
          </FormLabel>
        ) : (
          ""
        )}
        <RadioGroup
          row
          value={value}
          onChange={onChange}
          sx={{ gap: "10px" }}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name={groupName}
        >
          {options?.map((option, index) => (
            <FormControlLabel
              sx={{
                padding: "2px",
                width: "100px",
                height: "40px",
                margin: "0 5px",
                borderRadius: "20px", // Add border radius to FormControlLabel
                border: "1px solid #000", // Add border to FormControlLabel
                "& .MuiRadio-root": {
                  borderRadius: "50%", // Ensure the radio itself has a circular border
                },
                "& .MuiTypography-root": {
                  fontSize: "13px",
                },
              }}
              key={index}
              value={option.value}
              control={<Radio />}
              required={required}
              disabled={disabled}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Typography
        sx={{ fontSize: "12px", color: "#F04438" }}
        variant="subtitle2"
        color="initial"
      >
        {errorMsg}
      </Typography>
    </>
  );
}
