import React from "react";
import UserImage from "./userImage/UserImage";
import UserItems from "./userItems/UserItems";
import  styles from "./userProfile.module.css";

const UserProfile = ({opacity,team}) => {
  return (
    <section className={styles.userProfile}>
      <UserImage team={team} />
        <UserItems opacity={opacity}/>
    </section>
  );
};

export default UserProfile;
