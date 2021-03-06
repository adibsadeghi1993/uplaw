import React from "react";
import TeamHeader from "../../userTeams/teamDetailes/teamHeader/TeamHeader";
import styles from "./myTeamDetailes.module.css";
import blueArrow from "../../../../asstes/blue arrow.svg";
import { useHistory } from "react-router";
import { toArabicDigits } from "../../../utilities/ToFarsiDigit";

const MyTeamDetailes = ({ teams }) => {
  const history=useHistory()

  const createNewTeamHandler=()=>{
     history.push("/createNewTeam")
  }
  return (
    <div>
      <TeamHeader active="myTeam" />
      <section className={styles.all_teams}>
        {teams.map((item) => {
          return (
            <article className={styles.eachTeam}>
              <div className={styles.team}>
                <img src={item.src} alt={item.teamName} />
                <p>{item.teamName}</p>
                <div className={styles.team_member}>{toArabicDigits(item.memberShip)}نفر</div>
              </div>
              <div className={styles.team_btn}>
              <button >
                <span>ورود به تیم</span>
                <img src={blueArrow} alt="ورد به تیم" />
              </button>
              </div>
            </article>
          );
        })}

        <article className={styles.eachTeam}>
          <div className={styles.team}>
              <h1 className={styles.add_team}>+</h1>
          </div>
          <div className={styles.team_btn} onClick={createNewTeamHandler}>
          <button>
            <span>ایجاد تیم جدید</span>
            <img src={blueArrow} alt="ورد به تیم" />
          </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default MyTeamDetailes;
