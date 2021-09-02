import React,{useState} from 'react'
import UserProfile from '../../commonFiles/userProfile/UserProfile'
import UserTeams from '../userTeams/UserTeams'
import TeamDocs from '../userTeamsDocs/TeamDocs'
import styles from "./teamInfo.module.css"
import uplawImage from "../../../../asstes/uplaw.png";

const TeamInfo = () => {
  const initialState = [
    { teamName: "آپلا", id: 1, memberShip: 8, src: uplawImage },
  ];
  const [team, setTeam] = useState(initialState);

    return (
        <main className={styles.teams}>
        <section className={styles.profilesection}>
          <UserProfile opacity="opacity" team={team}/>
        </section>
        <section className={styles.teams_info}>
         <div className={styles.teams_docs}>
         <TeamDocs/>
         <UserTeams team={team}/>
         </div>
        </section>
      </main>
    )
}

export default TeamInfo
