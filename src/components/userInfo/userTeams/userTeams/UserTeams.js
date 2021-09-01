import React,{useState} from "react";
import teamImage from "../../../../asstes/team.svg"
import styles from "./userTeams.module.css"

const UserTeams = () => {
  const initialState=[
    {teamName:"آپلا", id:1,memberShip:8,}
  ]
  const [team, setTeam] = useState(initialState)
  return (
    <section>
      <div className={ styles.team_desc}><img src={teamImage}/><p>تیم های شما</p></div>
      <section className={styles.team}>

      </section>

    </section>
  );
};

export default UserTeams;
