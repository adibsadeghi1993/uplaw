import React, { useState } from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import JobDetailes from "./jobDetailes/JobDetailes";
import styles from "./jobIssues.module.css";
import { useFormik } from "formik";
import { validationSchema } from "./JobValidation";

const JobIssues = () => {
  return (
    <main className={styles.jobIssues}>
      <section className={styles.profilesection}>
        <UserProfile />
      </section>
      <section className={styles.jobIssues_info}>
        <JobDetailes />
      </section>
    </main>
  );
};

export default JobIssues;
