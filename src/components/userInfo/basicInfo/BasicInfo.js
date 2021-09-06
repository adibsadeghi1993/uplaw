import React from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import DetailInfo from "./detail/DetailInfo";
import styles from "./basicInfo.module.css"

const BasicInfo = () => {
  return (
    <div className={styles.basicInfo}>
      <section className={styles.profilesection}>
        <UserProfile />
      </section>
      <section className={styles.detailinfo}>
        <DetailInfo />
      </section>
    </div>
  );
};

export default BasicInfo;
