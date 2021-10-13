import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./profileTeamDetailes.module.css"
import teamImage from "../../../../asstes/team.svg"

const ProfileTeamDetailes = () => {
    const myTeam = useSelector(state => state.team.myTeam)
    return (
        <main>
            
            <h1>/تیم های من/پروفایل تیم {myTeam[0].teamName}</h1>
           <section className={styles.profile_team}>
               <div className={styles.teamImage}>
                   <div><span>{myTeam[0].teamName}</span><img src={teamImage} alt="نام تیم"/></div>
                   <div className={styles.image_container}>
                      <img src={myTeam[0].src} alt="عکس تیم"/>
                        <p>{myTeam[0].teamName}</p>
                        <div>{myTeam[0].memberShip}</div>

                   </div>

               </div>
               <div>

               </div>


               </section> 

        </main>
    )
}

export default ProfileTeamDetailes
