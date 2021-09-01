import React from "react";
import UserImage from "./userImage/UserImage";
import UserItems from "./userItems/UserItems";
import  styles from "./userProfile.module.css";

const UserProfile = ({opacity}) => {
  return (
    <section className={styles.userProfile}>
      <UserImage />
        <UserItems opacity={opacity}/>
    </section>
  );
};

export default UserProfile;
