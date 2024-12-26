import { Grid, Typography } from "@mui/material";
import SelectDropdownUi from "../../UIComponents/components/ui/SelectDropdownUi";
import { qualificationList } from "../../data/qualification-list";
import { FormikErrors, FormikTouched } from "formik";
import RadioUi from "../../UIComponents/components/ui/RadioGroup";
import { courses_list } from "../../data/course-list";

interface QualificationFormProps {
  qualifications: Array<{
    qualification: string;
    graduationStatus?: string;
    course: string;
  }>;
  errors: FormikErrors<{
    qualifications: {
      qualification: string;
      graduationStatus?: string;
      course: string;
    }[];
  }>;
  touched: FormikTouched<{
    qualifications: {
      qualification: string;
      graduationStatus?: string;
      course: string;
    }[];
  }>;
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean,
  ) => void;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  index: number;
  graduationTypeOptions: { label: string; value: string }[];
}

const QualificationForm: React.FC<QualificationFormProps> = ({
  qualifications,
  setFieldValue,
  setFieldTouched,
  errors,
  touched,
  index,
  graduationTypeOptions,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "space-between", // This will distribute the space evenly between the two grids
        alignItems: "center",
        width: "100%", // Ensure the container takes up the full width
      }}
    >
      <Grid item xs={6}>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 1,
            fontSize: "13px",
            marginLeft: "12px",
            fontWeight: "bold",
          }}
        >
          Qualification
        </Typography>
        <SelectDropdownUi
          onChange={(e) => {
            setFieldValue(`qualifications[${index}].qualification`, e?.value);
          }}
          onBlur={() =>
            setFieldTouched(`qualifications[${index}].qualification`, true)
          }
          options={qualificationList.map((qualification) => ({
            label: qualification.category,
            value: qualification.category,
          }))}
          error={
            touched.qualifications &&
            touched.qualifications[index]?.qualification &&
            Boolean(
              (
                errors.qualifications as FormikErrors<{
                  qualification: string;
                }>[]
              )?.[index]?.qualification,
            )
          }
          helperText={
            touched.qualifications &&
            touched.qualifications[index]?.qualification &&
            (
              errors.qualifications as FormikErrors<{ qualification: string }>[]
            )?.[index]?.qualification
          }
          labelText="Select Qualification"
          value={
            qualifications[index].qualification
              ? {
                  value: qualifications[index].qualification,
                  label: qualifications[index].qualification,
                }
              : null
          }
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 1,
            fontSize: "13px",
            marginLeft: "12px",
            fontWeight: "bold",
          }}
        >
          Pursuing / Completed
        </Typography>
        <RadioUi
          options={graduationTypeOptions}
          value={qualifications[index].graduationStatus}
          onChange={(e) =>
            setFieldValue(
              `qualifications[${index}].graduationStatus`,
              e.target.value,
            )
          }
          errorMsg={
            touched.qualifications &&
            touched.qualifications[index]?.graduationStatus &&
            (
              errors.qualifications as FormikErrors<{
                qualification: string;
                graduationStatus?: string;
              }>[]
            )?.[index]?.graduationStatus
          }
        />
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 1,
            fontSize: "13px",
            marginLeft: "12px",
            fontWeight: "bold",
          }}
        >
          Course
        </Typography>
        <SelectDropdownUi
          onChange={(e) => {
            setFieldValue(`qualifications[${index}].course`, e?.value);
          }}
          onBlur={() =>
            setFieldTouched(`qualifications[${index}].course`, true)
          }
          options={courses_list.map((course) => ({
            label: course.course_name,
            value: course.course_name,
          }))}
          error={
            touched.qualifications &&
            touched.qualifications[index]?.course &&
            Boolean(
              (
                errors.qualifications as FormikErrors<{
                  course: string;
                }>[]
              )?.[index]?.course,
            )
          }
          helperText={
            touched.qualifications &&
            touched.qualifications[index]?.course &&
            (errors.qualifications as FormikErrors<{ course: string }>[])?.[
              index
            ]?.course
          }
          labelText="Select Course"
          value={
            qualifications[index].course
              ? {
                  value: qualifications[index].course,
                  label: qualifications[index].course,
                }
              : null
          }
          variant="outlined"
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default QualificationForm;
