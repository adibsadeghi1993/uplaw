import React, { useState } from "react";
import teamImage from "../../../../asstes/team.svg";
import styles from "./userTeams.module.css";

import blueArrowImage from "../../../../asstes/blue arrow.svg";
import plusImage from "../../../../asstes/plussvg.svg";

const UserTeams = ({team}) => {
 
  
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
                <p className={styles.team_name}>{item.teamName}</p>
                <div className={styles.memberShip}>{item.memberShip} نفر</div>
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
          <div className={styles.team_image_add}>
            <div ><img className={styles.plus} src={plusImage}/></div>
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
