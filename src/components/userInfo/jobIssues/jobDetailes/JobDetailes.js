import React, { useState,useContext } from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import SelectedJob from "../selcetJob/SelectedJob";
import styles from "./jobDetailes.module.css";
import SelectComponent from "./SelectComponent";
import blueArrowImage from "../../../../asstes/blue arrow.svg";
import DeleteImage from "../../../../asstes/Delete.svg";
import whiteArrowImage from "../../../../asstes/whitearrow.svg";
import FreeServices from "../../basicInfo/detail/freeServices/FreeServices";
import Input from "../../basicInfo/detail/Input";
import { UserInfoContext } from "../../../common/contextInfo/ContextInfo";


const JobDetailes = () => {
  const {skills,setSkills,setStep,setProgress,formik} = useContext(UserInfoContext)
  const [changeSkill, setChangeSkill] = useState("");
  const selectedOptions = [
    { label: "سطح خود را در شغل خود انتخاب کنید", value: "" },
    { label: "ضعیف", value: "1" },
    { label: "متوسط", value: "2" },
    { label: "خوب", value: "3" },
    { label: "عالی", value: "4" },
  ];

  const registrSkillHandler = () => {
    const oldSkills = [...skills];
    const newSkills = [...oldSkills, changeSkill];
    setSkills(newSkills);
    setChangeSkill("");
  };

  const deleteSkillHandler = (item) => {
    console.log(item);
    const oldSkills = [...skills];
    const filteredSkills = oldSkills.filter((skill) => skill !== item);
    setSkills(filteredSkills);
  };

  const nextStepHandler=()=>{
     setStep(step=>step+1)
     setProgress(50)
  }

  let statusBtn=true

  const {jobTitle,jobLevel,companyName}=formik.errors
  if(!jobLevel && !jobTitle && !companyName && skills.length){
    statusBtn=false

  }

  return (
    <section className={styles.job_detaile}>
      <UserStep stepName="اطلاعات شغلی" />
      <div className={styles.sectionOne}>
        <div className={styles.sectionOne_jobtitle}>
          <Input
            name="jobTitle"
            type="text"
            placeholder="عنوان شغلی خود را وارد کنید"
          />
        </div>
        <div className={styles.sectionOne_joblevel}>
          <SelectComponent name="jobLevel" selectedOptions={selectedOptions} />
        </div>
      </div>
      <SelectedJob />
      <div className={styles.sectionTow}>
        <div className={styles.sectionTow_companyName}>
          <Input
            placeholder="نام شرکت محل کار خود را وارد کنید"
            type="text"
            name="companyName"
          />
        </div>
        <div className={styles.sectionTow_skills}>
          <input
            type="text"
            value={changeSkill}
            onChange={(e) => setChangeSkill(e.target.value)}
            placeholder="مهارت های خود را وارد کنید"
          />
          <p>حداکثر 5 مورد</p>
          <button className={styles.skillbutton} onClick={registrSkillHandler}>
            ثبت
            <img src={blueArrowImage} alt="next-arrow" />
          </button>
        </div>
      </div>
      <div className={styles.skills_nextStep}>
        {skills.length > 0 ? (
          <div className={styles.skilllists}>
            {skills.map((item, index) => {
              return (
                <div key={index} className={`${styles.eachSkill} ${styles[`skill${index}`]}`}>
                  <p>{item}</p>
                  <button
                    className={styles.skillbtn}
                    onClick={() => deleteSkillHandler(item)}
                  >
                    <img src={DeleteImage} alt="deleteskill" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptySkills}></div>
        )}
        <div className={styles.skills_next}>
          <button disabled={statusBtn} onClick={nextStepHandler} className={styles.nextbtn}>
            ثبت و مرحله بعد
            <img src={whiteArrowImage} />
          </button>
        </div>
      </div>
      <FreeServices />
    </section>
  );
};

export default JobDetailes;
