import React from 'react'
import teamImage from "../../../../asstes/team.svg"
import styles from "./teamMember.module.css"

const TeamMember = () => {
    return (
        <section>
        <div>
            <div className={styles.team_header}><p>اعضای تیم</p><img src={teamImage} alt="اعضای تیم"/></div>
            <div className={styles.team_member}>

            </div>
        </div>
    </section>
    )
}

export default TeamMember
