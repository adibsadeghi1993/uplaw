import React,{useState} from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import JobDetailes from "./jobDetailes/JobDetailes";
import "./jobIssues.css";
import { useFormik } from "formik";
import { validationSchema } from "./JobValidation";

const JobIssues = ({ step, setStep, progress, setProgress }) => {
    const [job, setJob] = useState([]);
  const initialValues = {
    jobTitle: "",
    jobLevel: "",
    // companyName: "",
    // skills: "",
  };

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
  });
  return (
    <main className="jobIssues">
      <section className="profilesection">
        <UserProfile progress={progress} />
      </section>
      <section className="jobIssues_info">
        <JobDetailes
          formik={formik}
          step={step}
          setProgress={setProgress}
          setStep={setStep}
          progress={progress}
          job={job}
          setJob={setJob}
        />
      </section>
    </main>
  );
};

export default JobIssues;
