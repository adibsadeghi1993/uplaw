import React from 'react'
import UserProfile from '../commonFiles/userProfile/UserProfile'
import TeamDocs from '../userTeams/userTeamsDocs/TeamDocs'
import styles from "./createTeam.module.css"

const CreateTeam = () => {
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" />
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
         <TeamDocs/>
         
         </div>
        </section>
      </main>
    )
}

export default CreateTeam
