import React from "react";
import styles from "./completedInfo.module.css";

const CompletedInfo = () => {
  return (
    <main className={styles.completedInfo}>
      <section className={styles.profilesection}>
        <UserProfile />
      </section>
      <section className={styles.completedInfo_detaile}>
        <JobDetailes />
      </section>
    </main>
  );
};

export default CompletedInfo;
