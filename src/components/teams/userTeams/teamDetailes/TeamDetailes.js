import React from 'react'
import styles from "./teamDetailes.module.css"
import TeamHeader from './teamHeader/TeamHeader'
import TeamMember from './teamMember/TeamMember'
import meetingImage from "../../../../asstes/meeting.svg"
import blueArrow from "../../../../asstes/blue arrow.svg"


const TeamDetailes = () => {
    return (
        <div>
            <TeamHeader/>
             <TeamMember/>
             <div className={styles.adjust_header}>
             <p>صورت جلسه های تنظیم شده با من</p>
                 <img src={meetingImage} alt="مشاهده صورت جلسه"/>
             
             </div>
             <div>
                   <p></p>
             </div>
           
        </div>
    )
}

export default TeamDetailes
