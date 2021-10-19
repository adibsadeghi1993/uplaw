import React, { useState } from "react";
import { useSelector } from "react-redux";
import FingerImgae from "../../../../common/fingerImgae/FingerImgae";
import styles from "./teamHeader.module.css";
import { useHistory } from "react-router";

const TeamHeader = ({title,active="selectedTeam"}) => {
  const selectedTeam = useSelector((state) => state.team.selectedTeam);
 
  const history=useHistory()

  const myTeamHandler=()=>{
    
    history.push("./myTeam")
  }
  const selectedTeamHandler=()=>{
   
  }
  const searchTeamHandler=()=>{
  
  }
  const specialTeamHandler=()=>{

  }
  return (
    <section>
      <h1 className={styles.selectedTeam}>
       {title? title : `/${selectedTeam}`}
        
        </h1>
      <div className={styles.finger}>
        <FingerImgae>
          تواین صفحه میتونی تیم هایی که توش عضو هستی یا داری رو ببینی،میتونی
          اونهارو مدیریت کنی یا تیم جدید ایجاد کنی.
        </FingerImgae>
      </div>

      <div className={styles.all_teams}>
        <div className={styles.team}>
          <p
            onClick={selectedTeamHandler}
            className={` ${active === "selectedTeam" ? styles.active : null}`}
          >
            {selectedTeam}
          </p>
          <p
            onClick={myTeamHandler}
            className={`${styles.myTeam} ${
              active === "myTeam" ? styles.active : null
            }`}
          >
            تیم های من
          </p>
          <p
            onClick={searchTeamHandler}
            className={`${styles.serchTeam} ${
              active === "searchTeam" ? styles.active : null
            }`}
          >
            ایجاد/جستجوی تیم جدید
          </p>
        </div>
        <div className={styles.specialTeam} onClick={specialTeamHandler}>
          <p> به دنبال تیم خاصی هستم</p>
        </div>
      </div>
    </section>
  );
};

export default TeamHeader;
