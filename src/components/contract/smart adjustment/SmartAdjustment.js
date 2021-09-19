import React,{useState} from 'react'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import ChooseDoc from './chooseDoc/ChooseDoc'
import styles from "./smartAdjustment.module.css"
import uplawImage from "../../../asstes/uplaw.png"

const SmartAdjustment = () => {
  const initialState = [
    { teamName: "آپلا", id: 1, memberShip: 8, src: uplawImage },
  ];
  const [team, setTeam] = useState(initialState);
    return (
       
        <main className={styles.main_adjust}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" team={team}/>
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
