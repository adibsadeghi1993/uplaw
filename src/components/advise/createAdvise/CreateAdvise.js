import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import AdviseDetailes from './adviseDetailes/AdviseDetailes'
import styles from "./createAdvise.module.css"

const CreateAdvise = () => {
    const userTeams = useSelector(state => state.team.myTeam)
    return (
          <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
         
              <AdviseDetailes/>
       
         </div>
        </section>
      </main>
    )
}

export default CreateAdvise
