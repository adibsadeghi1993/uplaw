import React from 'react'
import { useSelector } from 'react-redux';
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile';
import styles from "./myTeam.module.css"
import MyTeamDetailes from './teamDetailes/MyTeamDetailes';

const MyTeam = () => {
    
    const userTeams = useSelector(state => state.team.myTeam)
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
         
            <MyTeamDetailes teams={userTeams} />
              
         
         </div>
        </section>
      </main>
    )
}

export default MyTeam
