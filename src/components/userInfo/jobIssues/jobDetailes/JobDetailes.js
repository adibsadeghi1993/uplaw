import React from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import SelectedJob from "../selcetJob/SelectedJob";
import "./jobDetailes.css";
import SelectComponent from "./SelectComponent";

const JobDetailes = ({job,setJob, formik, step, setStep, progress, setProgress }) => {
  const selectedOptions = [
    { label: "سطح خود را در شغل خود انتخاب کنید", value: "" },
    { label: "ضعیف", value: "1" },
    { label: "متوسط", value: "2" },
    { label: "خوب", value: "3" },
    { label: "عالی", value: "4" },
  ];
  return (
    <section className="job_detaile">
      <UserStep
        step={step}
        setStep={setStep}
        setProgress={setProgress}
        progress={progress}
      />
      <div className="jobtitle_sectionOne">
        <div className="sectionOne_jobtitle">
          <input
            type="text"
            {...formik.getFieldProps("jobTitle")}
            name="jobTitle"
            placeholder="عنوان شغلی خود را وارد کنید"
          />
          {formik.errors.jobTitle && formik.touched.jobTitle && (
            <div className="error">{formik.errors.jobTitle}</div>
          )}
        </div>
        <div className="sectionOne_joblevel">
          <SelectComponent
            formik={formik}
            name="jobLevel"
            selectedOptions={selectedOptions}
          />
        </div>
      </div>
      <SelectedJob job={job} setJob={setJob} />
      <div className="jobtitle_sectionTow">
        <div className="sectionTow_skills">
          <input
            type="text"
            {...formik.getFieldProps("skills")}
            name="skills"
            placeholder="مهارت های خود را وارد کنید"
          />
          {formik.errors.skills && formik.touched.skills && (
            <div className="error">{formik.errors.skills}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetailes;
