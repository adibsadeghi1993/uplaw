import React from "react";
import "./userImage.css";
import { RiEditBoxLine } from "react-icons/all";
import { IconContext } from "react-icons";
import userImage from "../../../../../asstes/anonymous-user-circle-icon-vector-18958255.jpg";
import serchImage from "../../../../../asstes/search.svg";
import billImage from "../../../../../asstes/bill.svg";
const UserImage = () => {
  const ProfileHandler = () => {
    console.log("profile edit");
  };
  return (
    <section>
      <div className="profile">
        <div className="image-cotainer">
          <img src={userImage} alt="userImage" className="image" />
          <button className="editProfile" onClick={ProfileHandler}>
            <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
              <div>
                <RiEditBoxLine />
              </div>
            </IconContext.Provider>
          </button>
        </div>
        <div className="userName">
          <p>ادیب صادقی</p>
          <div className="icons">
            <div className="bill">
              <img src={billImage} alt="billimage" />
              <div className="empty"></div>
            </div>
            <div className="search">
              <img src={serchImage} alt="searchimage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserImage;
