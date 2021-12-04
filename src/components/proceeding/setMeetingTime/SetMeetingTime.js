import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "../../userInfo/commonFiles/userProfile/UserProfile";
import styles from "./setMeetingTime.module.css";
import MeetingDatePicker from "./setMeetingTimeDeatailes/meetingDatePicker/MeetingDatePicker";
import SetMeetingTimeDetailes from "./setMeetingTimeDeatailes/SetMeetingTimeDetailes";

const SetMeetingTime = () => {
  const { myTeam } = useSelector((state) => state.team);
  return (
    <main className={styles.main_proceeding}>
      <section className={styles.profilesection}>
        <UserProfile subject="meeting" opacity="opacity" team={myTeam} />
      </section>
      <section className={styles.proceeding_info}>
        <div className={styles.proceeding_detail}>
          <h1 className={styles.main_title}>صورت جلسه/ </h1>
          <SetMeetingTimeDetailes/>
        </div>
      </section>
      
    </main>
  );
};

export default SetMeetingTime;
