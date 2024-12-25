import { Formik, Form } from "formik";
import * as Yup from "yup";
import QualificationForm from "./QualificationForm";
import {
  Grid,
  Card,
  CardContent,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

const graduationTypeOptions = [
  { label: "Pursuing", value: "pursuing" },
  { label: "Completed", value: "completed" },
];

const CandidateSecondStepForm = () => {
  const [qualificationForms, setQualificationForms] = useState([
    {
      qualification: "",
      graduationStatus: "",
      course: "",
    },
  ]);

  const initialValues = {
    qualifications: qualificationForms,
  };

  const validationSchema = Yup.object({
    qualifications: Yup.array()
      .of(
        Yup.object({
          qualification: Yup.string().required("Qualification is Required"),
          course: Yup.string().required("Course is Required"),
        }),
      )
      .min(1, "At least one qualification is required"),
  });

  const handleSubmit = (values: {
    qualifications: Array<{ qualification: string }>;
  }) => {
    console.log("Submitted qualifications:", values);
    // Add a new empty form when the form is submitted
    setQualificationForms([
      ...qualificationForms,
      { qualification: "", graduationStatus: "", course: "" },
    ]);
  };

  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          backgroundColor: "f0f0f0",
          padding: 3,
          margin: 2,
          borderRadius: "30px",
        }}
      >
        <CardContent>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: 3,
              }}
            >
              QUALIFICATION
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={2.5}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    border: "1px solid #ccc",
                    padding: 4,
                    borderRadius: "30px",
                  }}
                >
                  {formikProps.values.qualifications.map((_, index) => (
                    <QualificationForm
                      key={index}
                      qualifications={formikProps.values.qualifications}
                      errors={formikProps.errors}
                      touched={formikProps.touched}
                      setFieldTouched={formikProps.setFieldTouched}
                      setFieldValue={formikProps.setFieldValue}
                      index={index}
                      graduationTypeOptions={graduationTypeOptions}
                    />
                  ))}

                  <button type="submit" disabled={formikProps.isSubmitting}>
                    Submit
                  </button>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CandidateSecondStepForm;
