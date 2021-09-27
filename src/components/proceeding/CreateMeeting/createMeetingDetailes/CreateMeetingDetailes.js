import React, { useState } from "react";
import blueArrowImage from "../../../../asstes/blue arrow.svg";
import { useDispatch, useSelector } from 'react-redux'
import styles from "./createMeetingDetailes.module.css";
import ProceedingHeader from "../../commonfiles/proceedingHeader/ProceedingHeader";
import ContractHeader from "../../../userInfo/commonFiles/contractHeader/ContractHeader";
import { choosedTeamForMeeting } from "../../../../redux/Actions/MeetingActions";
import { useHistory } from "react-router";



const CreateMeetingDetailes = () => {
  const [teamStatus, setTeamStatus] = useState("myTeam");
  const [choosedTeam, setChoosedTeam] = useState(null);
  const [proceedingStatus, setProceedingStatus] = useState("createProceeding");
 const dispatch=useDispatch()

 const history=useHistory()
  const {myTeam,teamIncudedMe}=  useSelector(state=>state.team)

  const myTeamHandler = () => {
    setTeamStatus("myTeam");
  };
  const teamIncludedMeHandler = () => {
    setTeamStatus("teamIncludedMe");
  };
  const createProceedingHandler =()=>{
    setProceedingStatus("createProceeding")
  }
  const previousProceedingHandler =()=>{
    setProceedingStatus("previousProceeding")
  }
  const chooseTeamHandler =(e,item)=>{
   console.log(e.target.checked)
   console.log(item)
   setChoosedTeam(item.teamName)
   dispatch(choosedTeamForMeeting(item))
  
  }

  const nextStepHandler=()=>{

  }


  return (
    <main className={styles.proceeding_main}>
      <section className={styles.proceeding_main_section_one}>
      <ProceedingHeader/>
      <div className={styles.chooseProceeding}>
        <p onClick={createProceedingHandler} className={proceedingStatus==="createProceeding"?styles.activeProceeding:null}>ایجاد صورت جلسه</p>
        <p onClick={previousProceedingHandler} className={proceedingStatus==="previousProceeding"?styles.activeProceeding:null}>صورت جلسه های قبلی</p>
      </div>
      <ContractHeader adjust="nonadjustent" mainContent="noneContent" opacityTow="0.5" opacityThree="0.5" stepOne="انتخاب تیم" stepTow="تاریخ و موضوع" noneBox="noneBox" />
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
                <label className={`${styles.eachTeam} ${index===myTeam.length-1 ?styles.last:null}`}>
                 <div className={styles.team_and_image}>
                 <img className={styles.team_image} src={item.src} alt="تیم" />
                  <p className={index===myTeam.length-1 ?styles.lastTeamName:null}>{item.teamName}</p>
                 </div>
                <input checked={choosedTeam===item.teamName} onChange={(e)=>chooseTeamHandler(e,item)} value={item.teamName}  type="radio" className={styles.checkbox_round} />
                </label>
              );
            })
          : null}
        {teamStatus === "teamIncludedMe"
          ? teamIncudedMe.map((item,index) => {
              return (
                <label className={`${styles.eachTeam} ${index===teamIncudedMe.length-1 ?styles.last:null}`} >
                 <div  className={styles.team_and_image}>
                 <img className={styles.team_image}  src={item.src} alt="تیم" />
                  <p className={index===teamIncudedMe.length-1 ?styles.lastTeamName:null}>{item.teamName}</p>
                 </div>
                 <input  value={item.teamName} checked={choosedTeam===item.teamName} onChange={(e)=>chooseTeamHandler(e,item)} type="radio" className={styles.checkbox_round} />
                </label>
              );
            })
          : null}
      </section>
      <div onClick={nextStepHandler} className={styles.nextStep}><button><span>مرحله بعد</span><img src={blueArrowImage} alt="مرحله بعد"/></button></div>
    </main>
  );
};

export default CreateMeetingDetailes;
