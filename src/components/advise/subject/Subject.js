import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./Subject.module.css"
import SubjectDetailes from './subjectDetailes/SubjectDetailes'

const Subject = () => {
    const userTeams = useSelector(state => state.team.myTeam)
    return (
        <main className={styles.main}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.main_info}>
         <div className={styles.main_detailes}>
       
        <SubjectDetailes/>
       
         </div>
        </section>
      </main>
    )
}

export default Subject
