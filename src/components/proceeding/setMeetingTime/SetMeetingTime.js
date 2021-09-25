import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "../../userInfo/commonFiles/userProfile/UserProfile";
import styles from "./setMeetingTime.module.css";

const SetMeetingTime = () => {
  const { myTeam } = useSelector((state) => state.team);
  return (
    <main className={styles.main_proceeding}>
      <section className={styles.profilesection}>
        <UserProfile opacity="opacity" team={myTeam} />
      </section>
      <section className={styles.proceeding_info}>
        <div className={styles.proceeding_detail}>
          <h1>صورت جلسه/ </h1>
        </div>
      </section>
    </main>
  );
};

export default SetMeetingTime;
