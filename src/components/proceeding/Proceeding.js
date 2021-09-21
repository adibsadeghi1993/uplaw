import React,{useState} from 'react'
import UserProfile from '../userInfo/commonFiles/userProfile/UserProfile'
import styles from "./proceeding.module.css"

const Proceeding = () => {
    const initialState = [
        { teamName: "آپلا", id: 1, memberShip: 8, src: uplawImage },
      ];
      const [team, setTeam] = useState(initialState);
    return (
        <main className={styles.main_proceeding}>
        <section className={styles.profilesection}>
         <UserProfile opacity="opacity" team={team}/>
        </section>
        <section className={styles.proceeding_info}>
         <div className={styles.proceeding_detail}>
                <h1>hi</h1> 
         </div>
        </section>
      </main>
    )
}

export default Proceeding
