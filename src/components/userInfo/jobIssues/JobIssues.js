import React, { useState } from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import JobDetailes from "./jobDetailes/JobDetailes";
import "./jobIssues.css";
import { useFormik } from "formik";
import { validationSchema } from "./JobValidation";

const JobIssues = () => {
  return (
    <main className="jobIssues">
      <section className="profilesection">
        <UserProfile />
      </section>
      <section className="jobIssues_info">
        <JobDetailes />
      </section>
    </main>
  );
};

export default JobIssues;
