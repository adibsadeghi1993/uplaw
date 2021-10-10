import React from 'react'
import styles from "./userTeams.module.css"
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import TeamDetailes from './teamDetailes/TeamDetailes'

const UserTeams = () => {
  const userTeams = useSelector(state => state.team.myTeam)
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" team={userTeams}/>
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
       
       <TeamDetailes/>
         
         </div>
        </section>
      </main>
       
    )
}

export default UserTeams
