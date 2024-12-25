import * as Yup from "yup";

export const validationSchema = Yup.object({
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
  });

  // Initial values for the form
  export  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    gender: "",
    password: "",
    studying_course: "",
    state: "",
    district: "",
  };

  // Gender options
  export  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];
  // Course Boolean
  export   const courseOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];