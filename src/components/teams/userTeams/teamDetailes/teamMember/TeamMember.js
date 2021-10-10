import React from "react";
import { useSelector } from "react-redux";
import teamImage from "../../../../../asstes/team.svg";
import styles from "./teamMember.module.css";

const TeamMember = () => {
  const teamMember = useSelector((state) => state.team.teamMember);
  return (
    <section>
      <div>
        <div className={styles.team_header}>
          <p>اعضای تیم</p>
          <img src={teamImage} alt="اعضای تیم" />
        </div>
        <div className={styles.team_members} id={styles.scroll}>
          {teamMember.length &&
            teamMember.map((item) => {
              return (
                <div key={item.id} className={styles.each_member}>
                  <div className={styles.userImage}>
                    <img src={item.src} alt="اعضای تیم" />
                  </div>
                  <div className={styles.user_name}>
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
