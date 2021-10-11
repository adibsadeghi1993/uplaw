import React from "react";
import styles from "./teamDetailes.module.css";
import TeamHeader from "./teamHeader/TeamHeader";
import TeamMember from "./teamMember/TeamMember";
import meetingImage from "../../../../asstes/meeting.svg";
import blueArrow from "../../../../asstes/blue arrow.svg";
import faceImage from "../../../../asstes/grimicing face emoji 1.svg";

const TeamDetailes = ({ adjustMeetings, myContract, teamMember, userType }) => {

  const createSubTeamHandler=()=>{

  }

  const showMeetingHandler=()=>{
    
  }
  return (
    <div>
      <TeamHeader />
      <TeamMember myContract={myContract} teamMember={teamMember} userType={userType} />
      {userType && (
        <section>
          <div className={styles.adjust_header}>
          <p>تیم های زیرمجموعه</p>
            <img src={meetingImage} alt="مشاهده تیم های زیر مجموعه" />
            
          </div>
          <div className={styles.sub_teams}>
            <div className={styles.sub_teams_image}>
              <img src={faceImage} alt="تیم های زیرمجموعه" />
            </div>
            <div className={styles.create_sub_team}>
              <p>تیم زیرمجموعه ایی ندارید !</p>
              <button onClick={createSubTeamHandler}>
                <span>ایجاد تیم زیر مجموعه</span>
                <img src={blueArrow} alt="ایجاد تیم زیر مجموعه" />
              </button>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className={styles.adjust_header}>
          <p>صورت جلسه های تنظیم شده با من</p>
          <img src={meetingImage} alt="مشاهده صورت جلسه" />
        </div>
        <div className={styles.all_adjust_meeting}>
          {adjustMeetings.map((item) => {
            return (
              <article key={item.id} className={styles.each_meeting}>
                <p>{item.adjustMeetingName}</p>
                <p className={styles.meeting_date}>{item.date}</p>
                <p className={styles.meeting_with}>{item.adjustWith}</p>
                <div>
                  <button className={()=>showMeetingHandler(item)}>
                    <span>مشاهده</span>
                    <img src={blueArrow} alt="مشاهده" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TeamDetailes;
