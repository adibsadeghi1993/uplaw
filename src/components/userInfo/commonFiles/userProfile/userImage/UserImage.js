import React from "react";
import "./userImage.css";
import { RiEditBoxLine } from "react-icons/all";
import { IconContext } from "react-icons";
import userImage from "../../../../../asstes/anonymous-user-circle-icon-vector-18958255.jpg";
import serchImage from "../../../../../asstes/search.svg";
import billImage from "../../../../../asstes/bill.svg";
import menubarImage from "../../../../../asstes/menubar.svg"
const UserImage = () => {
  const ProfileHandler = () => {
    console.log("profile edit");
  };
  return (
    <main className="prfileImage_main">
      <section className="profile">
        <div className="image-cotainer">
          <img src={userImage} alt="userImage" className="image" />
          <div className="editProfile" onClick={ProfileHandler}>
            <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
              <div>
                <RiEditBoxLine />
              </div>
            </IconContext.Provider>
          </div>
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
        <div className="menubar">
          <img src={menubarImage} alt="menubar"/>
        </div>
      </section>
      <div className="progress-bar">
       <div className="progressPersentage" style={{width:`50%`}}></div>

     </div>
     <p className="compoletedprogress">
         50 درصد مونده به تکمیل پروفایل!
      </p>
    </main>
  );
};

export default UserImage;
