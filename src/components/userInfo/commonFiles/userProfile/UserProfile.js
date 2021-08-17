import React from "react";
import UserImage from "./userImage/UserImage";
import UserItems from "./userItems/UserItems";
import "./userProfile.css";

const UserProfile = () => {
  return (
    <section className="userProfile">
      <UserImage />
        <UserItems/>
    </section>
  );
};

export default UserProfile;
