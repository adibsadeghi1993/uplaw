import React from "react";
import "./userImage.css"
import userImage from "../../../../../asstes/anonymous-user-circle-icon-vector-18958255.jpg";

const UserImage = () => {
  return (
    <section>
      <div className="profile">
        <div className="userImage">
          <img src={userImage} alt="userImage" />
        </div>
        <div>
            <p>ادیب صادقی</p>
        </div>
      </div>
    </section>
  );
};

export default UserImage;
