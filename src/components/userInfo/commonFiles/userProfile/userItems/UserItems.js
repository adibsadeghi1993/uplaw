import React from "react";
import styles from "./userItems.module.css"
import meetingImage from "../../../../../asstes/meeting.svg";
import adjustImage from "../../../../../asstes/adjust.svg";
import adviseImage from "../../../../../asstes/advise.svg";
import teamImage from "../../../../../asstes/team.svg";

const UserItems = ({opacity,activeSubject}) => {
  return (
    
    <div>
      <section className={styles.userItems}>
        <div className={  opacity ? `${styles.opacity} ${styles.meeting} ` : `${styles.userItems_item} ${styles.meeting}`}>
          <div className={`${styles.userItems_item_container} ${activeSubject==="صورت جلسه" ?styles.active:null}`}>
            <img src={meetingImage} alt="slider" />
          </div>
          <p>صورت جلسه</p>
          
        </div>
        <div className={  opacity ? `${styles.opacity} ${styles.adjust} ` : `${styles.userItems_item} ${styles.adjust}`}>
          <div className={`${styles.userItems_item_container} ${activeSubject==="تنظیم هوشمند" ?styles.active:styles.inactive} ${styles.adjust_container}`}>
            <img src={adjustImage} alt="adjust" />
          </div>
          <p>تنظیم هوشمند</p>
        </div>
        
        <div className={  opacity ? `${styles.opacity} ${styles.consultant} ` : `${styles.userItems_item} ${styles.consultant}`}>
          <div className={`${styles.userItems_item_container} ${activeSubject==="مشاوره" ?styles.active:null}`}>
            <img src={adviseImage} alt="consultant" />
          </div>
          <p>مشاوره</p>
         
        </div>
        <div className={  opacity ? `${styles.opacity} ${styles.myteam} ` : `${styles.userItems_item} ${styles.myteam}`}>
          <div className={`${styles.userItems_item_container} ${activeSubject==="تیم من" ?styles.active:null} `}>
            <img src={teamImage} alt="teamwork" />
          </div>
          <p>تیم من</p>
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
