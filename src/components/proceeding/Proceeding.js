import React,{useState,useContext} from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./proceeding.module.css"
import ProceedingDetailes from './proceedingDetailes/ProceedingDetailes'


const Proceeding = () => {
     const {myTeam}=  useSelector(state=>state.team)
   
    return (
        <main className={styles.main_proceeding}>
        <section className={styles.profilesection}>
         <UserProfile opacity="opacity" team={ myTeam}/>
        </section>
        <section className={styles.proceeding_info}>
         <div className={styles.proceeding_detail}>
           <h1>صورت جلسه/ </h1>
                <ProceedingDetailes/>
         </div>
        </section>
      </main>
    )
}

export default Proceeding
