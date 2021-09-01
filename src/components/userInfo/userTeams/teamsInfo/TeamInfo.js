import React from 'react'
import UserProfile from '../../commonFiles/userProfile/UserProfile'
import styles from "./teamInfo.module.css"

const TeamInfo = () => {
    return (
        <main className={styles.teams}>
        <section className={styles.profilesection}>
          <UserProfile />
        </section>
        <section className={styles.teams_info}>
         teams-info
        </section>
      </main>
    )
}

export default TeamInfo
