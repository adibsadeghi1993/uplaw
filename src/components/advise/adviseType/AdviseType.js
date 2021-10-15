import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./AdviseType.module.css"

const AdviseType = () => {
    const userTeams = useSelector(state => state.team.myTeam)
    return (
          <main className={styles.main}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.main_info}>
         <div className={styles.main_detailes}>
         
            
       
         </div>
        </section>
      </main>
    )
}

export default AdviseType
