import React, { useState, useContext } from "react";
import blueArrowImage from "../../../asstes/blue arrow.svg";
import { useSelector } from 'react-redux'
import styles from "./procedingDetailes.module.css";
import ProceedingHeader from "../commonfiles/proceedingHeader/ProceedingHeader";


const ProceedingDetailes = () => {
  const [teamStatus, setTeamStatus] = useState("myTeam");
  const {myTeam,teamIncudedMe}=  useSelector(state=>state.team)

  const myTeamHandler = () => {
    setTeamStatus("myTeam");
  };
  const teamIncludedMeHandler = () => {
    setTeamStatus("teamIncludedMe");
  };

  return (
    <main className={styles.proceeding_main}>
      <section>
      
         <ProceedingHeader/>
        <p className={styles.guide_paragraf}>
          تیم مورد نظر خود را برای ساخت صورت جلسه انتخاب کنید.
        </p>
      </section>
      <section className={styles.user_teams}>
        <div className={styles.choose_team}>
          <p
            onClick={myTeamHandler}
            className={
             `${ teamStatus === "myTeam" ? styles.activeTeam :null} ${styles.myTeam}`
            }
          >
            تیم های من
          </p>
          <p
            onClick={teamIncludedMeHandler}
            className={
             `${ teamStatus === "teamIncludedMe" ? styles.activeTeam :null} ${styles.teamIncludedMe}`
            }
          >
            تیم هایی که در ان عضو هستم
          </p>
        </div>

        {teamStatus === "myTeam"
          ? myTeam.map((item,index) => {
              return (
                <div className={`${styles.eachTeam} ${index===myTeam.length-1 ?styles.last:null}`}>
                 <div className={styles.team_and_image}>
                 <img className={styles.team_image} src={item.src} alt="تیم" />
                  <p className={index===myTeam.length-1 ?styles.lastTeamName:null}>{item.teamName}</p>
                 </div>
                  <button>
                    <span>انتخاب</span>
                    <img src={blueArrowImage} alt="انتخاب" />
                  </button>
                </div>
              );
            })
          : null}
        {teamStatus === "teamIncludedMe"
          ? teamIncudedMe.map((item,index) => {
              return (
                <div className={`${styles.eachTeam} ${index===teamIncudedMe.length-1 ?styles.last:null}`} >
                 <div  className={styles.team_and_image}>
                 <img className={styles.team_image}  src={item.src} alt="تیم" />
                  <p className={index===teamIncudedMe.length-1 ?styles.lastTeamName:null}>{item.teamName}</p>
                 </div>
                  <button>
                    <span>انتخاب</span>
                    <img src={blueArrowImage} alt="انتخاب" />
                  </button>
                </div>
              );
            })
          : null}
      </section>
      <div className={styles.nextStep}><button><span>مرحله بعد</span><img src={blueArrowImage} alt="مرحله بعد"/></button></div>
    </main>
  );
};

export default ProceedingDetailes;
