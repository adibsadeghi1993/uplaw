import React from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import styles from "./verification.module.css";
import VerificationDetailes from "./verificationDetailes/VerificationDetailes";

const Verification = () => {
  return (
    <main className={styles.verificationIssues}>
      <section className={styles.profilesection}>
        <UserProfile />
      </section>
      <section className={styles.verificationIssues_info}>
        <VerificationDetailes />
      </section>
    </main>
  );
};

export default Verification;
