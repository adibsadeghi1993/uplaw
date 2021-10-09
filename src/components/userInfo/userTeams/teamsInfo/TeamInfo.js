import React,{useState} from 'react'
import UserProfile from '../../commonFiles/userProfile/UserProfile'
import UserTeams from '../userTeams/UserTeams'
import TeamDocs from '../userTeamsDocs/TeamDocs'
import styles from "./teamInfo.module.css"
import { useSelector } from 'react-redux'

const TeamInfo = () => {
 

  const team = useSelector(state => state.team.myTeam)


    return (
        <main className={styles.teams}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" team={team}/>
        </section>
        <section className={styles.teams_info}>
         <div className={styles.teams_docs}>
         <TeamDocs/>
         <UserTeams team={team}/>
         </div>
        </section>
      </main>
    )
}

export default TeamInfo
