import React, { useContext } from "react";
import styles from "./userImage.module.css";
import { RiEditBoxLine } from "react-icons/all";
import { IconContext } from "react-icons";
import userImage from "../../../../../asstes/anonymous-user-circle-icon-vector-18958255.jpg";
import serchImage from "../../../../../asstes/search.svg";
import billImage from "../../../../../asstes/bill.svg";
import menubarImage from "../../../../../asstes/menubar.svg";

import { UserInfoContext } from "../../../contextInfo/ContextInfo";
import TeamOption from "./TeamOption";
import { useSelector } from "react-redux";
const UserImage = ({ team }) => {
  const { progress } = useContext(UserInfoContext);

  const state = useSelector(state => state.userInfo.userInfo)
  console.log(state)
  const {thumbnail}=state
  const ProfileHandler = () => {
    console.log("profile edit");
  };
  return (
    <main className={styles.prfileImage_main}>
      <section className={styles.profile}>
        <div className={styles.image_container}>
          <img src={thumbnail || userImage}  alt="پروفایل شما" className={styles.image} />
          <div className={styles.editProfile} onClick={ProfileHandler}>
            <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
              <div>
                <RiEditBoxLine />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles.userName}>
          <p>ادیب صادقی</p>
          <div className={styles.icons}>
            <div className={styles.bill}>
              <img src={billImage} alt="billimage" />
              <div className={styles.empty}></div>
            </div>
            <div className={styles.search}>
              <img src={serchImage} alt="searchimage" />
            </div>
          </div>
        </div>
        <div className={styles.menubar}>
          <img src={menubarImage} alt="menubar" />
        </div>
      </section>
      <TeamOption progress={progress} team={team}/>
    </main>
  );
};

export default UserImage;
