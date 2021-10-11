import React from 'react'
import { useSelector } from 'react-redux';
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile';
import styles from "./myTeam.module.css"

const MyTeam = () => {
    const selectedTeam = useSelector((state) => state.team.selectedTeam);
    const userTeams = useSelector(state => state.team.myTeam)
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
           <h1>/{selectedTeam}</h1>
       
      
         
         </div>
        </section>
      </main>
    )
}

export default MyTeam
