import React from 'react'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./createNewTeam.module.css"
import NewTeam from './newTeam/NewTeam'
import { useSelector } from 'react-redux'


const CreateNewTeam = () => {
    const userTeams = useSelector(state => state.team.myTeam)
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity"  subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
        
         <NewTeam/>
      
         
         </div>
        </section>
      </main>
    )
}

export default CreateNewTeam
