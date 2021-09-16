import React from 'react'
import UserProfile from '../commonFiles/userProfile/UserProfile'
import AboutContract from './chooseDoc/chooseContract/aboutContract/AboutContract'
import ChooseDoc from './chooseDoc/ChooseDoc'
import styles from "./smartAdjustment.module.css"

const SmartAdjustment = () => {
    return (
       
        <main className={styles.main_adjust}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" team="آپلا"/>
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
