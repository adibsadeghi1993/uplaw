import React from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import styles from "./contactDetailes.module.css";
import linkedinIcon from "../../../../asstes/linkedin.svg"
import driblIcon from "../../../../asstes/dribl.svg"
import portfoIcon from "../../../../asstes/portfo.svg"
import githubIcon from "../../../../asstes/github.svg"
import gitlabIcon from "../../../../asstes/gitlab.svg"
import instaIcon from "../../../../asstes/insta.svg"

const ContactDetailes = () => {
  return (
    <section className={styles.contact_detaile}>
      <UserStep />
      <section className={styles.contact_detaile_inputs}>
        <div className={styles.linkedin}>

            <img src={linkedinIcon} alt={linkedinIcon}/>
        </div>
        <div className={styles.dribl}>
        <img src={driblIcon} alt={driblIcon}/>
        </div>
        <div className={styles.portfo}>
        <img src={portfoIcon} alt={portfoIcon}/>
        </div>
        <div className={styles.github}>
        <img src={githubIcon} alt={githubIcon}/>
        </div>
        <div className={styles.gitlab}>
        <img src={gitlabIcon} alt={gitlabIcon}/>
        </div>
        <div className={styles.instagram}>
        <img src={instaIcon} alt={instaIcon}/>
        </div>
      </section>
    </section>
  );
};

export default ContactDetailes;
