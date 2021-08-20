import React from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import "./jobDetailes.css";

const JobDetailes = ({ step, setStep, progress, setProgress }) => {
  return (
    <section className="job_detaile">
      <UserStep
        step={step}
        setStep={setStep}
        setProgress={setProgress}
        progress={progress}
      />
    </section>
  );
};

export default JobDetailes;
