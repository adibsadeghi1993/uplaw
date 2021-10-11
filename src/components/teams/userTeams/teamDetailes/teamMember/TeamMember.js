import React from "react";
import { useSelector } from "react-redux";
import teamImage from "../../../../../asstes/team.svg";
import styles from "./teamMember.module.css";
import starImage from "../../../../../asstes/starBlueIcon.svg";
import blueArrow from "../../../../../asstes/blue arrow.svg";
import adjustMember from "../../../../../asstes/memberAdjust.svg";

const TeamMember = ({teamMember,myContract,userType}) => {

  const userHandler=(item)=>{
console.log(item)
  }
  const manageTeamHandler=()=>{
    console.log("manageteam")
  }
  const adjustNewContractHandler=()=>{
    console.log("adjust new contract")
  }

  const showContractHandler=(item)=>{
    console.log(item)
  }

  return (
    <section className={styles.main_section}>
      <div className={styles.first_section}>
        <div className={styles.team_header}>
          <p>اعضای تیم</p>
          <img src={teamImage} alt="اعضای تیم" />
        </div>
        <div className={styles.team_members} id={styles.scroll}>
          {teamMember.length &&
            teamMember.map((item) => {
              return (
                <div key={item.id} className={styles.each_member}>
                  <div className={styles.userImage}>
                    <img src={item.src} alt="اعضای تیم" />
                  </div>
                  <div className={styles.user_name}>
                    <p>{item.name}</p>
                  </div>
                 {userType &&  <div className={styles.edit_user} onClick={()=>userHandler(item)} >
                    <img src={adjustMember} alt="مدیریت این عضو" />
                  </div>}
                </div>
              );
            })}
        </div>
        {userType &&   <div className={styles.adjust_new_contract} onClick={manageTeamHandler}  >
            <button><span>مدیریت تیم</span> <img src={blueArrow} alt="مشاهده"  /></button>
        </div>}
      </div>
      <div className={styles.second_section}>
        <div className={styles.team_header}>
          <p>اخرین قراردادهای تنظیم شده با من</p>
          <img src={starImage} alt="اعضای تیم" />
        </div>
        <div className={styles.my_cotracts} id={styles.scroll}>
          {myContract.length &&
            myContract.map((item) => {
              return (
                <div key={item.id} className={styles.each_contract}>
                  <div className={styles.contract_name}>
                    <p>{item.contractName}</p>
                  </div>
                  <div className={styles.observe_btn}>
                     <button onClick={()=>showContractHandler(item)}><span>مشاهده</span><img src={blueArrow} alt="مشاهده"/></button>
                  </div>

                </div>
              );
            })}
        </div>
        <div className={styles.adjust_new_contract} onClick={adjustNewContractHandler}  >
            <button><span>تنظیم سند جدید</span> <img src={blueArrow} alt="مشاهده"  /></button>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
