import React from 'react'
import styles from "./signtureMeeting.module.css"
import { useSelector } from "react-redux";
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile';
import SigntureMeetingDetailes from './signtureMeetingDetailes/SigntureMeetingDetailes';

const SigntureMeeting = () => {
    const { myTeam } = useSelector((state) => state.team);
    return (
        <main className={styles.main_signture_meeting}>
      <section className={styles.profilesection}>
        <UserProfile subject="meeting" opacity="opacity" team={myTeam} />
      </section>
      <section className={styles.signture_meeting_info}>
        <div className={styles.signture_meeting_detail}>
          <h1 className={styles.main_title}>صورت جلسه/ </h1>
          <SigntureMeetingDetailes/>
          
        </div>
      </section>
    </main>
    )
}

export default SigntureMeeting
