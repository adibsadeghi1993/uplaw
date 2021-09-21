import React,{useState,useContext} from 'react'
import UserProfile from '../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./proceeding.module.css"
import uplawImage from "../../asstes/uplaw.png"
import ProceedingDetailes from './proceedingDetailes/ProceedingDetailes'
import { UserInfoContext } from '../common/contextInfo/ContextInfo'

const Proceeding = () => {
  const context = useContext(UserInfoContext)
  const {team}=context
   
    return (
        <main className={styles.main_proceeding}>
        <section className={styles.profilesection}>
         <UserProfile opacity="opacity" team={team}/>
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
