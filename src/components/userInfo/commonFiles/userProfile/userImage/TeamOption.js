import React from "react";
import styles from "./userImage.module.css";
import arrowDownImage from "../../../../../asstes/arrowdown team.svg";
import blueArrowImage from "../../../../../asstes/blue arrow.svg";


const TeamOption = ({ team,progress }) => {
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
        <img src={team[0].src} />
        <p>{team[0].teamName}</p>
        <div className={styles.arrowDownImage}>
          <img src={arrowDownImage} alt="arrow" />
        </div>
      </div>
    );
  }
  if (typeof team === "string") {
      options=<div className={styles.notTeam}>
          <p>شما تیمی ندارید!</p>
          <button className={styles.createTeambtn}><span>ایجاد تیم</span><img src={blueArrowImage} alt="arrow"/></button>
      </div>
  }

  return <>
         {options}
  </>;
};

export default TeamOption;
