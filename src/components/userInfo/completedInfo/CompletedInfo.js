import React from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import CompletedDetailes from "./completedDetailes/CompletedDetailes";
import styles from "./completedInfo.module.css";

const CompletedInfo = () => {
  return (
    <main className={styles.completedInfo}>
      <section className={styles.profilesection}>
        <UserProfile opacity="opacity" />
      </section>
      <section className={styles.completedInfo_detaile}>
        <CompletedDetailes />
      </section>
    </main>
  );
};

export default CompletedInfo;
