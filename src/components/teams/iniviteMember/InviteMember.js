import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import InviteDetailes from './inviteDetailes/InviteDetailes'
import styles from "./inviteMember.module.css"

const InviteMember = ({ setSelectedOption,selectedOption,search}) => {
    const userTeams = useSelector(state => state.team.myTeam)
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
         
              <InviteDetailes search={search}  setSelectedOption={ setSelectedOption} selectedOption={selectedOption} />
         
         </div>
        </section>
      </main>
    )
}

export default InviteMember
