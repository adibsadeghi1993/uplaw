import React from "react";
import styles from "./teamDetailes.module.css";
import TeamHeader from "./teamHeader/TeamHeader";
import TeamMember from "./teamMember/TeamMember";
import meetingImage from "../../../../asstes/meeting.svg";
import blueArrow from "../../../../asstes/blue arrow.svg";



const TeamDetailes = ({ adjustMeetings,myContract ,teamMember,userType}) => {
  return (
    <div>
      <TeamHeader />
      <TeamMember myContract={myContract} teamMember={teamMember} />
      {userType && <section>
        
        </section>}

      <section>
        <div className={styles.adjust_header}>
          <p>صورت جلسه های تنظیم شده با من</p>
          <img src={meetingImage} alt="مشاهده صورت جلسه" />
        </div>
       <div className={styles.all_adjust_meeting}>
       {adjustMeetings.map((item) => {
          return <article key={item.id} className={styles.each_meeting}>
               <p>{item.adjustMeetingName}</p>
               <p className={styles.meeting_date}>{item.date}</p>
               <p className={styles.meeting_with}>{item.adjustWith}</p>
                <div><button><span>مشاهده</span><img src={blueArrow} alt="مشاهده"/></button></div>
          </article>;
        })}
       </div>
      </section>
    </div>
  );
};

export default TeamDetailes;
