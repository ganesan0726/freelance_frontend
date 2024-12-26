import { Grid, Typography, Container, Card, CardContent } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldUi from "../../UIComponents/components/ui/TextField"; // Assuming TextFieldUi is a custom component
import PhoneNumberField from "../../UIComponents/components/ui/PhoneNumberField";
import RadioUi from "../../UIComponents/components/ui/RadioGroup";
import { useState } from "react";
import SelectDropdownUi from "../../UIComponents/components/ui/SelectDropdownUi";
import { stateList } from "../../data/state-list";
import { districts_list } from "../../data/district-list";
import { Box } from "@mui/system";
import OtpInput from "../../component/common/OtpVerification";
import ButtonUi from "../../UIComponents/components/ui/Button";
import {
  courseOptions,
  genderOptions,
  initialValues,
  validationSchema,
} from "../../data/candidateData";

// Handle OTP input change
const CandidateRegistrationForm = () => {
  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [otp, setOtp] = useState<string>(""); // Entered OTP
  const [sentOtp, setSentOtp] = useState<string | null>(null); // Sent OTP
  const [isVerified, setIsVerified] = useState<boolean>(false); // Verification status

  const handleSendOtp = () => {
    const generatedOtp = "1234"; // Static OTP for demonstration
    setSentOtp(generatedOtp);
    setIsVerified(false);
    setOtp(""); // Clear OTP input
    console.log("Generated OTP:", generatedOtp); // Simulate OTP sent
  };

  const handleOtpChange = (enteredOtp: string) => {
    setOtp(enteredOtp);
  };

  const handleOtpComplete = (completeOtp: string) => {
    setOtp(completeOtp);
  };

  const handleSubmit = () => {
    if (otp === sentOtp) {
      setIsVerified(true); // Mark as verified
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  // Validation schema using Yup

  return (
    <Container maxWidth="md">
      <Card sx={{ backgroundColor: "f0f0f0", padding: 3, marginTop: "20px" }}>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Form submitted with values:", values);
            }}
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
              <Form noValidate>
                <Grid
                  container
                  rowSpacing={0}
                  columnSpacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h2"
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginBottom: "40px",
                      }}
                    >
                      {" "}
                      CANDIDATE REGISTRATION{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldUi
                      topLabel="First Name"
                      placeholder="Enter First Name"
                      type="text"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstname && Boolean(errors.firstname)}
                      helperText={touched.firstname ? errors.firstname : ""}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldUi
                      topLabel="Last Name"
                      type="text"
                      placeholder="Enter the last name"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastname && Boolean(errors.lastname)}
                      helperText={touched.lastname ? errors.lastname : ""}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid mt={2} item xs={6}>
                    <TextFieldUi
                      topLabel="Personal Email ID"
                      type="email"
                      placeholder="Enter Email ID"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email ? errors.email : ""}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "right" }}>
                    <Box
                      mt={5}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      {isVerified ? (
                        // Show "Verified" message
                        <Typography variant="h6" color="success.main">
                          Verified
                        </Typography>
                      ) : (
                        <>
                          {/* Send/Submit Button */}
                          <ButtonUi
                            type="button"
                            label={sentOtp ? "Submit" : "Send"} // Show "Submit" if OTP has been sent
                            variant="outlined"
                            sx={{ height: "35px" }}
                            onClick={sentOtp ? handleSubmit : handleSendOtp} // Call handleSubmit if OTP has been sent
                          />
                          {/* OTP Input */}
                          {sentOtp && (
                            <OtpInput
                              numDigits={4}
                              onChange={handleOtpChange}
                              onComplete={handleOtpComplete}
                              inputStyle={{
                                borderRadius: "4px",
                              }}
                              gap={3}
                            />
                          )}
                        </>
                      )}
                    </Box>
                  </Grid>

                  <Grid mt={2} item xs={6}>
                    <PhoneNumberField
                      name="phonenumber"
                      topLabel="Phone Number"
                      value={values.phonenumber}
                      onChange={(value) => setFieldValue("phonenumber", value)}
                      onBlur={() => setFieldTouched("phonenumber", true)}
                      error={touched.phonenumber && Boolean(errors.phonenumber)}
                      helperText={touched.phonenumber ? errors.phonenumber : ""}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "right" }}>
                    <Box
                      mt={5}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      {isVerified ? (
                        // Show "Verified" message
                        <Typography variant="h6" color="success.main">
                          Verified
                        </Typography>
                      ) : (
                        <>
                          {/* Send/Submit Button */}
                          <ButtonUi
                            type="button"
                            label={sentOtp ? "Submit" : "Send"} // Show "Submit" if OTP has been sent
                            variant="outlined"
                            sx={{ height: "35px" }}
                            onClick={sentOtp ? handleSubmit : handleSendOtp} // Call handleSubmit if OTP has been sent
                          />
                          {/* OTP Input */}
                          {sentOtp && (
                            <OtpInput
                              numDigits={4}
                              onChange={handleOtpChange}
                              onComplete={handleOtpComplete}
                              inputStyle={{
                                borderRadius: "4px",
                              }}
                              gap={3}
                            />
                          )}
                        </>
                      )}
                    </Box>
                  </Grid>

                  <Grid mt={2} item xs={6}>
                    <RadioUi
                      topLabel="Gender"
                      options={genderOptions}
                      value={values.gender}
                      onChange={(e) => setFieldValue("gender", e.target.value)}
                      errorMsg={touched.gender && errors.gender}
                    />
                  </Grid>
                  <Grid mt={2} item xs={6} spacing={2}>
                    <TextFieldUi
                      topLabel="Personal Email ID"
                      type="password"
                      placeholder="Enter Email ID"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email ? errors.email : ""}
                      fullWidth
                      size="small"
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
                    <Grid item xs={8}>
                      <RadioUi
                        topLabel="Are you Studying any course"
                        options={courseOptions}
                        value={values.studying_course}
                        onChange={(e) =>
                          setFieldValue("studying_course", e.target.value)
                        }
                        errorMsg={
                          touched.studying_course && errors.studying_course
                        }
                      />
                    </Grid>
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
                    <Grid item xs={6}>
                      <SelectDropdownUi
                        topLabel="Select State"
                        onChange={(e) => {
                          setFieldValue("state", e?.value);
                        }}
                        onBlur={() => setFieldTouched("state", true)}
                        options={stateList.map((state) => ({
                          label: state.state_name,
                          value: state.id,
                        }))}
                        error={touched.state && Boolean(errors.state)}
                        helperText={touched.state ? errors.state : ""}
                        value={
                          values.state
                            ? {
                                value: values.state,
                                label:
                                  stateList.find(
                                    (state) =>
                                      state.state_name === values.state,
                                  )?.state_name || "",
                              }
                            : null
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <SelectDropdownUi
                        onChange={(e) => {
                          setFieldValue("district", e?.value);
                        }}
                        onBlur={() => setFieldTouched("district", true)}
                        options={districts_list.map((district) => ({
                          label: district.district_name,
                          value: district.id,
                        }))}
                        error={touched.district && Boolean(errors.district)}
                        helperText={touched.district ? errors.district : ""}
                        topLabel="Select District"
                        value={
                          values.district
                            ? {
                                value: values.district,
                                label:
                                  districts_list.find(
                                    (district) =>
                                      district.district_name ===
                                      values.district,
                                  )?.district_name || "",
                              }
                            : null
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid mt={2} item xs={6}>
                      <RadioUi
                        topLabel="Choose Institute Type"
                        options={genderOptions}
                        value={values.gender}
                        onChange={(e) =>
                          setFieldValue("gender", e.target.value)
                        }
                        errorMsg={touched.gender && errors.gender}
                      />
                    </Grid>
                    <Grid mt={2} item xs={6}>
                      <SelectDropdownUi
                        onChange={(e) => {
                          setFieldValue("district", e?.value);
                        }}
                        onBlur={() => setFieldTouched("district", true)}
                        options={districts_list.map((district) => ({
                          label: district.district_name,
                          value: district.id,
                        }))}
                        error={touched.district && Boolean(errors.district)}
                        helperText={touched.district ? errors.district : ""}
                        topLabel="Institute Name"
                        value={
                          values.district
                            ? {
                                value: values.district,
                                label:
                                  districts_list.find(
                                    (district) =>
                                      district.district_name ===
                                      values.district,
                                  )?.district_name || "",
                              }
                            : null
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
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

export default CandidateRegistrationForm;
