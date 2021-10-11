import React from 'react'
import styles from "./userTeams.module.css"
import { useSelector } from 'react-redux'
import UserProfile from '../../userInfo/commonFiles/userProfile/UserProfile'
import TeamDetailes from './teamDetailes/TeamDetailes'

const UserTeams = ({userType}) => {
  const userTeams = useSelector(state => state.team.myTeam)
  const adjustMeetings = useSelector(state => state.meeting.myAdjustMeeting)
  const teamMember = useSelector((state) => state.team.teamMember);
  const selectedTeam = useSelector((state) => state.team.selectedTeam);
  const myContract = useSelector((state) => state.contract.myContract);
    return (
        <main className={styles.createteam}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity"  subject="uplaw" team={userTeams}/>
        </section>
        <section className={styles.createteam_info}>
         <div className={styles.teams_docs}>
           <h1>/{selectedTeam}</h1>
       
       <TeamDetailes userType={userType} teamMember={teamMember} myContract={myContract}  adjustMeetings={adjustMeetings}/>
         
         </div>
        </section>
      </main>
       
    )
}

export default UserTeams
