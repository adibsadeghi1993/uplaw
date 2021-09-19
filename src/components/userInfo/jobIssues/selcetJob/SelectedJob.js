import React, { useState,useEffect,useContext } from "react";

import { usersJob } from "./SetUsersJob";
import styles from "../jobDetailes/jobDetailes.module.css"
import { UserInfoContext } from "../../../common/contextInfo/ContextInfo";

const SelectedJob = () => {
  const {job,setJob} = useContext(UserInfoContext)
  const [jobOptions, setJobOptions] = useState([
    { jobTitle: "استارتاپ/شرکت دارم", id: 1, background: "nonSelectedJob_white" },
    { jobTitle: "فریلنسر هستم", id: 2, background: "nonSelectedJob_white" },
    { jobTitle: "کارمند هستم", id: 3, background: "nonSelectedJob_white" },
  ]);

  const jobHandler = (item) => {
    usersJob(item, job, setJob);
  };

  useEffect(() => {
    const newJobOptions = jobOptions.map((item) => {
      if (job.find((job) => job.jobTitle === item.jobTitle)) {
        return { ...item, background: "selectedJob_blue" };
      } else {
        return item;
      }
    });
    setJobOptions(newJobOptions);
  }, [job]);
  return (
    <section className={styles.selectJob_info}>
      <p>شما؟</p>
      <div className={styles.selectJob_info_main}>
        {jobOptions.map((item) => {
          return (
            <button
              className={styles[item.background]}
              onClick={() => jobHandler(item)}
            >
              {item.jobTitle}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SelectedJob;
