import React, { useState,useContext } from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import SelectedJob from "../selcetJob/SelectedJob";
import "./jobDetailes.css";
import SelectComponent from "./SelectComponent";
import blueArrowImage from "../../../../asstes/blue arrow.svg";
import DeleteImage from "../../../../asstes/Delete.svg";
import whiteArrowImage from "../../../../asstes/whitearrow.svg";
import FreeServices from "../../basicInfo/detail/freeServices/FreeServices";
import Input from "../../basicInfo/detail/Input";
import { UserInfoContext } from "../../contextInfo/ContextInfo";

const JobDetailes = () => {
  const {skills,setSkills} = useContext(UserInfoContext)
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

  return (
    <section className="job_detaile">
      <UserStep />
      <div className="sectionOne">
        <div className="sectionOne_jobtitle">
          <Input
            name="jobTitle"
            type="text"
            placeholder="عنوان شغلی خود را وارد کنید"
          />
        </div>
        <div className="sectionOne_joblevel">
          <SelectComponent name="jobLevel" selectedOptions={selectedOptions} />
        </div>
      </div>
      <SelectedJob />
      <div className="sectionTow">
        <div className="sectionTow_companyName">
          <Input
            placeholder="نام شرکت محل کار خود را وارد کنید"
            type="text"
            name="companyName"
          />
        </div>
        <div className="sectionTow_skills">
          <input
            type="text"
            value={changeSkill}
            onChange={(e) => setChangeSkill(e.target.value)}
            placeholder="مهارت های خود را وارد کنید"
          />
          <p>حداکثر 5 مورد</p>
          <button className="skillbutton" onClick={registrSkillHandler}>
            ثبت
            <img src={blueArrowImage} alt="next-arrow" />
          </button>
        </div>
      </div>
      <div className="skills_nextStep">
        {skills.length > 0 ? (
          <div className="skilllists">
            {skills.map((item, index) => {
              return (
                <div key={index} className={`eachSkill skill${index}`}>
                  <p>{item}</p>
                  <button
                    className="skillbtn"
                    onClick={() => deleteSkillHandler(item)}
                  >
                    <img src={DeleteImage} alt="deleteskill" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="emptySkills"></div>
        )}
        <div className="skills_next">
          <button className="nextbtn">
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
