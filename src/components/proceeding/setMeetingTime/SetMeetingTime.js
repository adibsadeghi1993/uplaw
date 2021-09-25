import React from 'react'
import styles from "./setMeetingTime.module.css"

const SetMeetingTime = () => {
    return (


           <main className={styles.main_proceeding}>
        <section className={styles.profilesection}>
         <UserProfile opacity="opacity" team={ myTeam}/>
        </section>
        <section className={styles.proceeding_info}>
         <div className={styles.proceeding_detail}>
           <h1>صورت جلسه/ </h1>
                <CreateMeetingDetailes/>
         </div>
        </section>
      </main>
      
    )
}

export default SetMeetingTime
