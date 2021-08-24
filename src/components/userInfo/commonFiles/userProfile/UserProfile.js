import React from "react";
import UserImage from "./userImage/UserImage";
import UserItems from "./userItems/UserItems";
import  styles from "./userProfile.module.css";

const UserProfile = () => {
  return (
    <section className={styles.userProfile}>
      <UserImage />
        <UserItems/>
    </section>
  );
};

export default UserProfile;
