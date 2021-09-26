import React from 'react'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./customerSigntureMeeting.module.css"
import { useSelector } from 'react-redux'
import CustomerSigntureMeetingDetailes from './custmoerSigntureMeetingDetailes/CustomerSigntureMeetingDetailes'

const CustomerSigntureMeeting = () => {
    const { myTeam } = useSelector((state) => state.team);
    return (
        <main className={styles.main_signture_meeting}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" team={myTeam} />
        </section>
        <section className={styles.signture_meeting_info}>
          <div className={styles.signture_meeting_detail}>
            <h1 className={styles.main_title}>صورت جلسه/ </h1>
           
            <CustomerSigntureMeetingDetailes/>
          </div>
        </section>
      </main>
    )
}

export default CustomerSigntureMeeting
