import React, { useState } from "react";
import teamImage from "../../../../asstes/team.svg";
import styles from "./userTeams.module.css";
import uplawImage from "../../../../asstes/uplaw.png";
import blueArrowImage from "../../../../asstes/blue arrow.svg";

const UserTeams = () => {
  const initialState = [
    { teamName: "آپلا", id: 1, memberShip: 8, src: uplawImage },
  ];
  const [team, setTeam] = useState(initialState);
  return (
    <section>
      <div className={styles.team_desc}>
        <img src={teamImage} />
        <p>تیم های شما</p>
      </div>
      <section className={styles.team}>
        {team.map((item) => {
          return (
            <div className={styles.team_container}>
              <div className={styles.team_image}>
                <img src={item.src} />
                <p>{item.teamName}</p>
              </div>
              <div className={styles.team_btn_container}>
              <button className={styles.team_btn}>
                <span>ورود به تیم</span>
                <img src={blueArrowImage} />
              </button>
              </div>
            </div>
          );
        })}
        <div className={styles.team_container}>
          <div className={styles.team_image}>
            <p className={styles.plus}>+</p>
          </div>
         <div className={styles.team_btn_container}>
         <button className={styles.team_btn}>
            <span>افزودن تیم جدید</span>
            <img src={blueArrowImage} />
          </button>
         </div>
        </div>
      </section>
    </section>
  );
};

export default UserTeams;
