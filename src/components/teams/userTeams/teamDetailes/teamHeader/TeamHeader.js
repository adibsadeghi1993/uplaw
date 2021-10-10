import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./teamHeader.module.css";

const TeamHeader = () => {
  const selectedTeam = useSelector((state) => state.team.selectedTeam);
  const [active, setActive] = useState("selected");
  return (
    <section>
      <div className={styles.all_teams}>
        <div className={styles.team}>
          <p
            onClick={() => setActive("selected")}
            className={` ${active === "selected" ? styles.active : null}`}
          >
            {selectedTeam}
          </p>
          <p
            onClick={() => setActive("myteam")}
            className={`${styles.myTeam} ${
              active === "myteam" ? styles.active : null
            }`}
          >
            تیم های من
          </p>
          <p
            onClick={() => setActive("searchteam")}
            className={`${styles.serchTeam} ${
              active === "searchteam" ? styles.active : null
            }`}
          >
            ایجاد/جستجوی تیم جدید
          </p>
        </div>
        <div className={styles.specialTeam}>
          <p> به دنبال تیم خاصی هستم</p>
        </div>
      </div>
    </section>
  );
};

export default TeamHeader;
