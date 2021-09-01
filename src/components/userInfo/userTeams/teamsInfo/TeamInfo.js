import React from 'react'
import UserProfile from '../../commonFiles/userProfile/UserProfile'
import UserTeams from '../userTeams/UserTeams'
import TeamDocs from '../userTeamsDocs/TeamDocs'
import styles from "./teamInfo.module.css"

const TeamInfo = () => {
    return (
        <main className={styles.teams}>
        <section className={styles.profilesection}>
          <UserProfile />
        </section>
        <section className={styles.teams_info}>
         <div className={styles.teams_docs}>
         <TeamDocs/>
         <UserTeams/>
         </div>
        </section>
      </main>
    )
}

export default TeamInfo
