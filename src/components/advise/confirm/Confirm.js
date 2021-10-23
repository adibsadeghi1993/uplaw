import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import ConfirmDetailes from './confirmDetailes/ConfirmDetailes'
import styles from "./confirm.module.css"


const Confirm = () => {
    const userTeams = useSelector(state => state.team.myTeam)
    return (
          <main className={styles.main}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="advise" team={userTeams}/>
        </section>
        <section className={styles.main_info}>
         <div className={styles.main_detailes}>
         
         <ConfirmDetailes/>
       
         </div>
        </section>
      </main>
    )
}

export default Confirm