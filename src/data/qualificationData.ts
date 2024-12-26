import * as Yup from "yup";

export interface Qualification {
    qualification: number | null;
    graduationStatus: string;
    course: number | null;
    major: number | null;
    passedOut: number | null;
    specialisation: number | null;
    highest_quailfication: number | null;
    cgpa: number | null;
    important_quailfication: number | null;
    college: number | null;
}

export const initialValues: Qualification = {
    qualification: null,
    graduationStatus: "",
    course: null,
    major: null,
    passedOut: null,
    specialisation: null,
    highest_quailfication: null,
    cgpa: null,
    important_quailfication: null,
    college: null,
};

export const qualificationSchema = Yup.object({
    qualification: Yup.string().required("Qualification is required"),
    graduationStatus: Yup.string().required("Graduation status is required"),
    course: Yup.string().required("Course is required"),
    passedOut: Yup.string().required("PassedOut is required"),
    specialisation: Yup.string(),
    highest_quailfication: Yup.string().required(
        "Highest Qualification is required",
    ),
    cgpa: Yup.string(),
    important_quailfication: Yup.string(),
});

export const graduationTypeOptions = [
    { label: "Pursuing", value: "pursuing" },
    { label: "Completed", value: "completed" },
  ];

  export const optionsSelect = [
    { value: 1, label: "Yes" },
    { value: 0, label: "No" },
  ];

  export const nature = [
    { value: "University", label: "University" },
    { value: "College", label: "College" },
    { value: "Institutions", label: "Institutions" },
  ];