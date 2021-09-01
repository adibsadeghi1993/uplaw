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
              <button>
                <span>ورود به تیم</span>
                <img src={blueArrowImage} />
              </button>
            </div>
          );
        })}
        <div className={styles.team_container}>
          <div className={styles.team_image}>
            <p>+</p>
          </div>
          <button>
            <span>افزودن تیم جدید</span>
            <img src={blueArrowImage} />
          </button>
        </div>
      </section>
    </section>
  );
};

export default UserTeams;
