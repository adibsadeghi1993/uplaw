import React from 'react'
import { useSelector } from 'react-redux'

const InviteMember = () => {
    const userTeams = useSelector(state => state.team.myTeam)
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
         
              
         
         </div>
        </section>
      </main>
}

export default InviteMember
