import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./search.module.css"
import SerachDetailes from './searchDetailes/SerachDetailes'


const Search = () => {
    const userTeams = useSelector(state => state.team.myTeam)
    return (
          <main className={styles.main}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="advise" team={userTeams}/>
        </section>
        <section className={styles.main_info}>
         <div className={styles.main_detailes}>
         
        <SerachDetailes/>
       
         </div>
        </section>
      </main>
    )
}

export default Search