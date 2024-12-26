import { Formik, Form } from "formik";
import {
  Grid,
  Card,
  CardContent,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { qualificationList } from "../../data/qualification-list";
import { courses_list } from "../../data/course-list";
import { specialisationsList } from "../../data/specializationData";
import { stateList } from "../../data/state-list";
import { districts_list } from "../../data/district-list";
import { colleges_list } from "../../data/college-list";

import {
  Qualification,
  initialValues,
  qualificationSchema,
  graduationTypeOptions,
  optionsSelect,
  nature,
} from "../../data/qualificationData";
import QualificationForm from "./QualificationForm";

const CandidateSecondStepForm = () => {
  const [qualifications, setQualifications] = useState<Qualification[]>([]);
  const [showForm, setShowForm] = useState(true);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [institutionData, setInstitutionData] = useState({
    state: 0,
    district: 0,
    nature: "",
    college: 0,
  });

  const handleSubmit = (values: Qualification) => {
    const updatedValues: Qualification = {
      ...values,
      college: institutionData.college,
    };

    if (editIndex !== null) {
      // Edit existing qualification
      setQualifications((prevQualifications) =>
        prevQualifications.map((item, index) =>
          index === editIndex ? updatedValues : item,
        ),
      );
      setEditIndex(null);
    } else {
      // Add new qualification
      setQualifications((prevQualifications) => [
        ...prevQualifications,
        updatedValues,
      ]);
    }

    // Hide the form after submission
    setShowForm(false);
  };

  const handleAddNew = () => {
    setShowForm(true);
    setEditIndex(null);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ backgroundColor: "f0f0f0", padding: 3, marginTop: "20px" }}>
        <CardContent>
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

          {showForm ? (
            <Formik
              initialValues={
                editIndex !== null ? qualifications[editIndex] : initialValues
              }
              validationSchema={qualificationSchema}
              onSubmit={handleSubmit}
            >
              {({
                errors,
                touched,
                setFieldTouched,
                setFieldValue,
                values,
                handleChange,
                handleBlur,
              }) => (
                <Form>
                  <Grid
                    container
                    rowSpacing={0}
                    columnSpacing={2}
                    padding={3}
                    border="1px solid black"
                    borderRadius="30px"
                  >
                    <QualificationForm
                      values={values}
                      touched={touched}
                      errors={errors}
                      setFieldTouched={setFieldTouched}
                      setFieldValue={setFieldValue}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      qualificationList={qualificationList}
                      graduationTypeOptions={graduationTypeOptions}
                      courses_list={courses_list}
                      specialisationsList={specialisationsList}
                      optionsSelect={optionsSelect}
                      stateList={stateList}
                      districts_list={districts_list}
                      nature={nature}
                      colleges_list={colleges_list}
                      institutionData={institutionData}
                      setInstitutionData={setInstitutionData}
                    />
                    <Grid
                      mt={2}
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{ marginTop: 2 }}
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        save
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          ) : (
            <>
              <Grid container spacing={2}>
                {qualifications.map((qualification, index) => (
                  <Grid
                    item
                    xs={12}
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #ccc",
                      padding: "8px 0",
                    }}
                  >
                    <Typography>
                      {`Qualification: ${
                        qualification.qualification || "N/A"
                      }, Course: ${qualification.course || "N/A"}, Year: ${
                        qualification.passedout_year || "N/A"
                      }`}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </Button>
                  </Grid>
                ))}
              </Grid>
              <Box mt={3} textAlign="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddNew}
                >
                  Add New Qualification
                </Button>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CandidateSecondStepForm;
