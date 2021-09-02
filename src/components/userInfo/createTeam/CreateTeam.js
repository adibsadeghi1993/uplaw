import React from 'react'
import UserProfile from '../commonFiles/userProfile/UserProfile'
import TeamDocs from '../userTeams/userTeamsDocs/TeamDocs'
import styles from "./createTeam.module.css"
import Meeting from './meeting/Meeting'

const CreateTeam = () => {
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" />
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
         <TeamDocs/>
         <Meeting/>
         
         </div>
        </section>
      </main>
    )
}

export default CreateTeam
