import React from "react";
import UserImage from "./userImage/UserImage";
import UserItems from "./userItems/UserItems";
import styles from "./userProfile.module.css";

const UserProfile = ({opacity,team,subject="adjust"}) => {
 

  return (
    <section className={styles.userProfile}>
      <UserImage team={team} />
        <UserItems opacity={opacity} activeSubject={subject}/>
    </section>
  );
};

export default UserProfile;
