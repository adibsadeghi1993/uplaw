import React from "react";
import styles from "./userImage.module.css";
import arrowDownImage from "../../../../../asstes/arrowdown team.svg";
import blueArrowImage from "../../../../../asstes/blue arrow.svg";
import SelectTeam from "./selectTeam/SelectTeam";


const TeamOption = ({ progress, team }) => {
  let options = (
    <>
      <div className={styles.progress_bar}>
        <div
          className={styles.progressPersentage}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className={styles.compoletedprogress}>
        {progress < 100
          ? `${100 - progress} درصد مونده به تکمیل پروفایل!`
          : "100 درصد پروفایل شما تکمیل شد !"}
      </p>
    </>
  );

  if (typeof team === "object") {
    options = (
      <div className={styles.teams}>
         <SelectTeam/>
      
      </div>
    );
  }
  if (typeof team === "string") {
    options = (
      <div className={styles.notTeam}>
        <p>شما تیمی ندارید!</p>
        <button className={styles.createTeambtn}>
          <span>ایجاد تیم</span>
          <img src={blueArrowImage} alt="arrow" />
        </button>
      </div>
    );
  }

  return <>{options}</>;
};

export default TeamOption;
