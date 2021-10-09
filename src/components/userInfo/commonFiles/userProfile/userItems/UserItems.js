import React from "react";
import styles from "./userItems.module.css"
import meetingImage from "../../../../../asstes/meeting.svg";
import adjustImage from "../../../../../asstes/adjust.svg";
import adviseImage from "../../../../../asstes/advise.svg";
import teamImage from "../../../../../asstes/team.svg";
import blueAdjustImage from "../../../../../asstes/blueAdjustImage.svg";
import whiteMeetingImage from "../../../../../asstes/whitemeeting.svg";
import whiteConsultant from "../../../../../asstes/whiteconsultant.svg";


const UserItems = ({opacity,activeSubject}) => {
  return (
    
    <div>
      <section className={styles.userItems}>
        <div className={  opacity ? `${styles.opacity} ${styles.meeting} ` : `${styles.userItems_item} ${styles.meeting}`}>
          <div className={`${styles.userItems_item_container} ${activeSubject==="meeting" ?styles.active:null}`}>
        {activeSubject==="meeting" ?  <img src={whiteMeetingImage} alt="slider" />: <img src={meetingImage} alt="slider" />}   
          </div>
          <p>صورت جلسه</p>
          
        </div>
        <div className={  opacity ? `${styles.opacity} ${styles.adjust} ` : `${styles.userItems_item} ${styles.adjust}`}>
          <div className={`${styles.userItems_item_container} ${activeSubject==="adjust" ?styles.active:styles.inactive} ${styles.adjust_container}`}>
           {activeSubject==="adjust"? <img src={adjustImage} alt="adjust" />: <img src={blueAdjustImage} alt="adjust" />}
          </div>
          <p>تنظیم هوشمند</p>
        </div>
        
        <div className={  opacity ? `${styles.opacity} ${styles.consultant} ` : `${styles.userItems_item} ${styles.consultant}`}>
          <div className={`${styles.userItems_item_container} ${activeSubject==="advise" ?styles.active:null}`}>
           {activeSubject==="advise"?<img src={whiteConsultant} alt="adjust" />:<img src={adviseImage} alt="adjust" />}
          </div>
          <p>مشاوره</p>
         
        </div>
        <div className={  opacity ? `${styles.opacity} ${styles.myteam} ` : `${styles.userItems_item} ${styles.myteam}`}>
          <div className={`${styles.userItems_item_container} ${activeSubject==="uplaw" ?styles.active:null} `}>
            <img src={teamImage} alt="teamwork" />
          </div>
          <p>تیم آپلا</p>
        </div>
      </section>
      <div className={styles.userguidance}>
        <div className={styles.creditbtn}>اعتبار من</div>
        <div className={styles.supportbtn}>تیم ها</div>
        <div className={styles.financialbtn}>سوابق مالی</div>
      </div>
    </div>
  );
};

export default UserItems;
