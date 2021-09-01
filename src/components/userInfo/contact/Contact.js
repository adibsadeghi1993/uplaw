import React from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import styles from "./contact.module.css"
import ContactDetailes from "./contactDetailes/ContactDetailes";

const Contact = () => {
  return (
    <main className={styles.contactIssues}>
      <section className={styles.profilesection}>
      <UserProfile/>
      </section>
      <section className={styles.contactIssues_info}>
        <ContactDetailes />
      </section>
    </main>
  );
};

export default Contact;
