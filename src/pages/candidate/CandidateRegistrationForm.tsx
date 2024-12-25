import {
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  Button,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextFieldUi from "../../UIComponents/components/ui/TextField"; // Assuming TextFieldUi is a custom component
import OTPVerification from "../../component/common/OtpVerification";
import PhoneNumberField from "../../UIComponents/components/ui/PhoneNumberField";
import RadioUi from "../../UIComponents/components/ui/RadioGroup";
import { useState } from "react";
import { VisibilityOff, VisibilityOutlined } from "@mui/icons-material";
import SelectDropdownUi from "../../UIComponents/components/ui/SelectDropdownUi";
import { stateList } from "../../data/state-list";
import { districts_list } from "../../data/district-list";
import { colleges_list } from "../../data/college-list";
import FileUpload from "../../UIComponents/components/ui/FileUpload";
import NextArrow from "../../assets/NextArrow.png";
import { SentEmailOtpApi, VerifyEmailOtpApi } from "../../service/otpApi";

// Handle OTP input change
const CandidateRegistrationForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [email, setEmail] = useState("");

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phonenumber: Yup.string().required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().max(255).required("Password is required"),
    studying_course: Yup.string(),
    state: Yup.string().required("state is required"),
    district: Yup.string().required("district is required"),
    institutionType: Yup.string().required("institutionType is required"),
    institutionName: Yup.string().required("institutionName is required"),
  });

  // Initial values for the form
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    gender: "",
    password: "",
    studying_course: "",
    state: "",
    district: "",
    institutionType: "",
    institutionName: "",
    resume: null,
  };

  // Gender options
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];
  // Course Boolean
  const courseOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const institutionTypeOptions = [
    { label: "University", value: "university" },
    { label: "College", value: "college" },
    { label: "Institution", value: "institution" },
  ];

  interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    gender: string;
    password: string;
    studying_course: string;
    state: string;
    district: string;
    institutionType: string;
    institutionName: string;
    resume: File | null;
  }

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    console.log("Form submitted with values:", values);
    resetForm();
  };

  const handleEmailOtpSent = async () => {
    let res = await SentEmailOtpApi(email);
    console.log("handleSendOtp to email >>>", email);
  };

  const handleSubmitEmailOtp = async (email:string, otp: any) => {
    let res = await VerifyEmailOtpApi(email, otp);
    console.log("handle Submi EmailOtp to  >>>", otp + " " + email + " " + res);
  };

  return (
    <Container maxWidth="lg">
      <Card sx={{ backgroundColor: "f0f0f0", padding: 3, margin: 2 }}>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
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
              isSubmitting,
            }) => (
              <Form noValidate>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={2.5}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      sx={{
                        marginBottom: 1,
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      CANDIDATE REGISTRATION
                    </Typography>
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
                      First Name
                    </Typography>
                    <TextFieldUi
                      type="text"
                      label="Enter first name"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstname && Boolean(errors.firstname)}
                      helperText={touched.firstname ? errors.firstname : ""}
                      fullWidth
                      size="small"
                      sx={{ marginBottom: 2 }}
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
                      Last Name
                    </Typography>
                    <TextFieldUi
                      type="text"
                      label="Enter the last name"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastname && Boolean(errors.lastname)}
                      helperText={touched.lastname ? errors.lastname : ""}
                      fullWidth
                      size="small"
                      sx={{ marginBottom: 2 }}
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
                      Personal Email ID
                    </Typography>
                    <TextFieldUi
                      type="email"
                      label="Enter Email ID"
                      name="email"
                      value={values.email}
                      onChange={(e) => {
                        handleChange(e);
                        setEmail(e.target.value);
                      }}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email ? errors.email : ""}
                      fullWidth
                      size="small"
                      sx={{ marginBottom: 2 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <OTPVerification sentOtp={handleEmailOtpSent} verifyOtp={handleSubmitEmailOtp} />
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
                      Mobile Number
                    </Typography>
                    <PhoneNumberField
                      name="phonenumber"
                      label="Phone Number"
                      value={values.phonenumber}
                      onChange={(value) => setFieldValue("phonenumber", value)}
                      onBlur={() => setFieldTouched("phonenumber", true)}
                      error={touched.phonenumber && Boolean(errors.phonenumber)}
                      helperText={touched.phonenumber ? errors.phonenumber : ""}
                      size="small"
                      width="80%"
                      sx={{ marginBottom: 2 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <OTPVerification />
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
                      Gender
                    </Typography>
                    <RadioUi
                      options={genderOptions}
                      value={values.gender}
                      onChange={(e) => setFieldValue("gender", e.target.value)}
                      errorMsg={touched.gender && errors.gender}
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
                      Password
                    </Typography>
                    <TextFieldUi
                      endAdornment={
                        passwordVisible ? (
                          <IconButton
                            onClick={() => setPasswordVisible(!passwordVisible)}
                          >
                            {" "}
                            {/* Toggle state */}
                            <VisibilityOutlined />
                          </IconButton>
                        ) : (
                          <IconButton
                            onClick={() => setPasswordVisible(!passwordVisible)}
                          >
                            {" "}
                            {/* Toggle state */}
                            <VisibilityOff />
                          </IconButton>
                        )
                      }
                      label="Enter password"
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password ? errors.password : ""}
                      fullWidth
                      size="small"
                      sx={{ marginBottom: 2 }}
                    />
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      border: "1px solid #ccc",
                      padding: "2px",
                      borderRadius: "20px",
                      marginLeft: 1,
                      marginTop: 2,
                      paddingBottom: 2,
                    }}
                  >
                    <Grid item xs={8}>
                      <Typography
                        variant="h6"
                        sx={{
                          marginBottom: 1,
                          fontSize: "13px",
                          marginLeft: "12px",
                          fontWeight: "bold",
                          marginTop: 2,
                        }}
                      >
                        Are you studing any course?
                      </Typography>
                      <RadioUi
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
                      <Typography
                        variant="h6"
                        sx={{
                          marginBottom: 1,
                          fontSize: "13px",
                          marginLeft: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        Select State
                      </Typography>
                      <SelectDropdownUi
                        onChange={(e) => {
                          setFieldValue("state", e?.value);
                        }}
                        onBlur={() => setFieldTouched("state", true)}
                        options={stateList.map((state) => ({
                          label: state.state_name,
                          value: state.state_name,
                        }))}
                        error={touched.state && Boolean(errors.state)}
                        helperText={touched.state ? errors.state : ""}
                        labelText="Select State"
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
                      <Typography
                        variant="h6"
                        sx={{
                          marginBottom: 1,
                          fontSize: "13px",
                          marginLeft: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        Select District
                      </Typography>
                      <SelectDropdownUi
                        onChange={(e) => {
                          setFieldValue("district", e?.value);
                        }}
                        onBlur={() => setFieldTouched("district", true)}
                        options={districts_list.map((district) => ({
                          label: district.district_name,
                          value: district.district_name,
                        }))}
                        error={touched.district && Boolean(errors.district)}
                        helperText={touched.district ? errors.district : ""}
                        labelText="Select District"
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
                        Choose Institution Type
                      </Typography>
                      <RadioUi
                        options={institutionTypeOptions}
                        value={values.institutionType}
                        onChange={(e) =>
                          setFieldValue("institutionType", e.target.value)
                        }
                        errorMsg={
                          touched.institutionType && errors.institutionType
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
                        Institution Name
                      </Typography>
                      <SelectDropdownUi
                        onChange={(e) => {
                          setFieldValue("institutionName", e?.value);
                        }}
                        onBlur={() => setFieldTouched("institutionName", true)}
                        options={colleges_list.map((college) => ({
                          label: college.name1,
                          value: college.name1,
                        }))}
                        error={
                          touched.institutionName &&
                          Boolean(errors.institutionName)
                        }
                        helperText={
                          touched.institutionName ? errors.institutionName : ""
                        }
                        labelText="Select Institute Name"
                        value={
                          values.institutionName
                            ? {
                                value: values.institutionName,
                                label:
                                  colleges_list.find(
                                    (college) =>
                                      college.name1 === values.institutionName,
                                  )?.name1 || "",
                              }
                            : null
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ p: 2 }}>
                      <FileUpload
                        label="Resume"
                        onFileChange={(files) => {
                          setFieldValue("resume", files);
                          setUploadedFiles(files);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                      sx={{
                        marginTop: 2,
                        borderRadius: "30px",
                        display: "flex",
                        alignItems: "space-between",
                        justifyContent: "center",
                        width: "110px",
                        height: "50px",
                        padding: "16px 16px",
                        gap: "5px",
                        backgroundColor: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "black",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#f0f0f0",
                        },
                      }}
                    >
                      Next
                      <img
                        src={NextArrow}
                        alt="Next Arrow"
                        style={{
                          width: "18px",
                          height: "18px",
                          color: "black",
                        }}
                      />
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

export default CandidateRegistrationForm;
