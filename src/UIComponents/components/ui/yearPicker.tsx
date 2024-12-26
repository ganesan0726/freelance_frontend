import { Typography } from "@mui/material";
import SelectDropdown from "./SelectDropdown";

// YearPicker component that generates an array of years
const YearPicker = ({
  startYear = new Date().getFullYear(),
  endYear = 1990,
  topLabel,
  ...props
}: any) => {
  const years = [];
  for (let i = startYear; i >= endYear; i--) {
    years.push(i);
  }

  // Map years to a format that SelectDropdownUi expects
  const yearOptions = years.map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }));

  return (
    <>
      {topLabel && (
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
      )}
      <SelectDropdown
        {...props}
        options={yearOptions}
        variant="outlined"
        size="small"
      />
    </>
  );
};

export default YearPicker;
