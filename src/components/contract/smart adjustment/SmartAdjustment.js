import React from 'react'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import ChooseDoc from './chooseDoc/ChooseDoc'
import styles from "./smartAdjustment.module.css"
import { useSelector } from 'react-redux'

const SmartAdjustment = () => {
  const{myTeam:team}=useSelector(state=>state.team)
 
    return (
       
        <main className={styles.main_adjust}>
        <section className={styles.profilesection}>
          <UserProfile subject="adjust" opacity="opacity" team={team} />
        </section>
        <section className={styles.adjust_info}>
         <div className={styles.adjust_detail}>
        
         <ChooseDoc/>
        
         </div>
        </section>
      </main>
    )
}

export default SmartAdjustment
