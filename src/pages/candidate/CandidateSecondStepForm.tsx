import { Formik, Form } from "formik";
import {
  Grid,
  Card,
  CardContent,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import SelectDropdownUi from "../../UIComponents/components/ui/SelectDropdownUi";
import { qualificationList } from "../../data/qualification-list";
import RadioUi from "../../UIComponents/components/ui/RadioGroup";
import { courses_list } from "../../data/course-list";
import YearPicker from "../../UIComponents/components/ui/yearPicker";
import { specialisationsList } from "../../data/specializationData";
import TextFieldUi from "../../UIComponents/components/ui/TextField";
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

const CandidateSecondStepForm = () => {
  // State to store multiple qualifications
  const [qualifications, setQualifications] = useState<Qualification[]>([]);

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
    console.log(updatedValues);
    setQualifications((prevQualifications) => [
      ...prevQualifications,
      updatedValues,
    ]);
    console.log("Updated qualifications:", [...qualifications, updatedValues]);
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ backgroundColor: "f0f0f0", padding: 3, marginTop: "20px" }}>
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
                  <Grid item xs={6} marginBottom={1} marginTop={2}>
                    <SelectDropdownUi
                      topLabel="Qualification"
                      onChange={(value) => {
                        setFieldValue("qualification", value?.value);
                      }}
                      onBlur={() => setFieldTouched("qualification", true)}
                      options={qualificationList.map((qualification) => ({
                        label: qualification.category,
                        value: qualification.id,
                      }))}
                      error={
                        touched.qualification && Boolean(errors.qualification)
                      }
                      helperText={
                        touched.qualification ? errors.qualification : ""
                      }
                      value={
                        values.qualification
                          ? {
                              value: values.qualification,
                              label:
                                qualificationList.find(
                                  (qualification) =>
                                    qualification.id === values.qualification,
                                )?.category || "",
                            }
                          : null
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid mt={2} item xs={6} marginBottom={1} marginTop={2}>
                    <RadioUi
                      topLabel="Pursuing / Completed"
                      options={graduationTypeOptions}
                      value={values.graduationStatus}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue("graduationStatus", e.target.value)
                      }
                      errorMsg={
                        touched.graduationStatus && errors.graduationStatus
                      }
                    />
                  </Grid>
                  <Grid item xs={6} marginBottom={1} marginTop={2}>
                    <SelectDropdownUi
                      topLabel="Course"
                      onChange={(value) => {
                        setFieldValue("course", value?.value);
                      }}
                      onBlur={() => setFieldTouched("course", true)}
                      options={courses_list.map((course) => ({
                        label: course.course_name,
                        value: course.id,
                      }))}
                      error={touched.course && Boolean(errors.course)}
                      helperText={touched.course ? errors.course : ""}
                      value={
                        values.course
                          ? {
                              value: values.course,
                              label:
                                courses_list.find(
                                  (course) => course.id === values.course,
                                )?.course_name || "",
                            }
                          : null
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} marginBottom={1} marginTop={2}>
                    <SelectDropdownUi
                      topLabel="Major"
                      onChange={(value) => {
                        setFieldValue("major", value?.value);
                      }}
                      onBlur={() => setFieldTouched("major", true)}
                      options={courses_list.map((major) => ({
                        label: major.course_name,
                        value: major.id,
                      }))}
                      error={touched.major && Boolean(errors.major)}
                      helperText={touched.major ? errors.major : ""}
                      value={
                        values.major
                          ? {
                              value: values.major,
                              label:
                                courses_list.find(
                                  (course) => course.id === values.major,
                                )?.course_name || "",
                            }
                          : null
                      }
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={6} marginBottom={1} marginTop={2}>
                    <YearPicker
                      topLabel="Passedout Year"
                      onChange={(value: any) => {
                        setFieldValue("passedOut", value.value); // Store selected year in formik
                      }}
                      onBlur={() => setFieldTouched("passedOut", true)}
                      error={touched.passedOut && Boolean(errors.passedOut)}
                      helperText={touched.passedOut ? errors.passedOut : ""}
                      value={
                        values.passedOut
                          ? {
                              value: values.passedOut,
                              label: values.passedOut,
                            }
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={6} marginBottom={1} marginTop={2}>
                    <SelectDropdownUi
                      topLabel="Specialisation"
                      onChange={(value) => {
                        setFieldValue("specialisation", value?.value);
                      }}
                      onBlur={() => setFieldTouched("specialisation", true)}
                      options={specialisationsList.map((specialisation) => ({
                        label: specialisation.specialisation_name,
                        value: specialisation.id,
                      }))}
                      error={
                        touched.specialisation && Boolean(errors.specialisation)
                      }
                      helperText={
                        touched.specialisation ? errors.specialisation : ""
                      }
                      value={
                        values.specialisation
                          ? {
                              value: values.specialisation,
                              label:
                                specialisationsList.find(
                                  (specialisation) =>
                                    specialisation.id === values.specialisation,
                                )?.specialisation_name || "",
                            }
                          : null
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid mt={2} item xs={6} marginBottom={1} marginTop={2}>
                    <RadioUi
                      topLabel="Is this the Highest Qualification"
                      options={optionsSelect}
                      value={values.highest_quailfication ?? undefined}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue("highest_quailfication", e.target.value)
                      }
                      errorMsg={
                        touched.highest_quailfication &&
                        errors.highest_quailfication
                      }
                    />
                  </Grid>
                  <Grid item xs={6} marginBottom={1} marginTop={2}>
                    <TextFieldUi
                      topLabel="CGPA (Enter your latest CGPA)"
                      type="text"
                      name="cgpa"
                      value={values.cgpa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.cgpa && Boolean(errors.cgpa)}
                      helperText={touched.cgpa ? errors.cgpa : ""}
                      fullWidth
                      width="80%"
                      size="small"
                    />
                  </Grid>
                  <Grid mt={2} item xs={6} marginBottom={1}>
                    <RadioUi
                      topLabel="Is this the Important Qualification"
                      options={optionsSelect}
                      value={values.important_quailfication ?? undefined}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue("important_quailfication", e.target.value)
                      }
                      errorMsg={
                        touched.important_quailfication &&
                        errors.important_quailfication
                      }
                    />
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      border: "1px solid #ccc",
                      // padding: 1,
                      borderRadius: "20px",
                      marginLeft: 1,
                      marginTop: 4,
                      paddingBottom: 2,
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          marginTop: 3,
                          marginLeft: "10px",
                          marginBottom: 3,
                          textAlign: "start",
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        Details of the College / University and Course Details
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <SelectDropdownUi
                        topLabel="Select State"
                        onChange={(e: any) => {
                          setInstitutionData((prevData) => {
                            return {
                              ...prevData,
                              state: e?.value,
                            };
                          });
                        }}
                        onBlur={() => setFieldTouched("state", true)}
                        options={stateList.map((state) => ({
                          label: state.state_name,
                          value: state.id,
                        }))}
                        value={
                          institutionData.state
                            ? {
                                value: institutionData.state,
                                label:
                                  stateList.find(
                                    (state) =>
                                      state.id === institutionData.state,
                                  )?.state_name || "hi",
                              }
                            : null
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <SelectDropdownUi
                        onChange={(e: any) => {
                          setInstitutionData((prevData) => {
                            return {
                              ...prevData,
                              district: e?.value,
                            };
                          });
                        }}
                        onBlur={() => setFieldTouched("district", true)}
                        options={districts_list.map((district) => ({
                          label: district.district_name,
                          value: district.id,
                        }))}
                        topLabel="Select District"
                        value={
                          institutionData.district
                            ? {
                                value: institutionData.district,
                                label:
                                  districts_list.find(
                                    (district) =>
                                      district.id === institutionData.district,
                                  )?.district_name || "",
                              }
                            : null
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid mt={2} item xs={7}>
                      <RadioUi
                        topLabel="Choose Institute Type"
                        options={nature}
                        value={institutionData.nature}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setInstitutionData((prevData) => ({
                            ...prevData,
                            nature: e.target.value,
                          }))
                        }
                      />
                    </Grid>
                    <Grid mt={2} item xs={5}>
                      <SelectDropdownUi
                        onChange={(e: any) => {
                          setInstitutionData((prevData) => {
                            return {
                              ...prevData,
                              college: e?.value,
                            };
                          });
                        }}
                        onBlur={() => setFieldTouched("collegeName", true)}
                        options={colleges_list.map((college) => ({
                          label: college.name1,
                          value: college.id,
                        }))}
                        topLabel="Institute Name"
                        value={
                          institutionData.college
                            ? {
                                value: institutionData.college,
                                label:
                                  colleges_list.find(
                                    (college) =>
                                      college.id === institutionData.college,
                                  )?.name1 || "",
                              }
                            : null
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    mt={2}
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
                      submit
                    </Button>
                  </Grid>
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
