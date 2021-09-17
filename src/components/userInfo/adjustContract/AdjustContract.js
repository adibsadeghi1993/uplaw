import React,{useState} from 'react'
import styles from "./adjustContract.module.css"

const AdjustContract = () => {
    const initialState = [
        { teamName: "آپلا", id: 1, memberShip: 8, src: uplawImage },
      ];
      const [team, setTeam] = useState(initialState);
        return (
           
            <main className={styles.main_adjust}>
            <section className={styles.profilesection}>
        
            </section>
            <section className={styles.adjust_info}>
             <div className={styles.adjust_detail}>
            
           
            
             </div>
            </section>
          </main>
        )
}

export default AdjustContract
