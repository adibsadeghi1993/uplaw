import React, { useContext } from "react";
import styles from "./userImage.module.css";
import { RiEditBoxLine } from "react-icons/all";
import { IconContext } from "react-icons";
import userImage from "../../../../../asstes/anonymous-user-circle-icon-vector-18958255.jpg";
import serchImage from "../../../../../asstes/search.svg";
import billImage from "../../../../../asstes/bill.svg";
import menubarImage from "../../../../../asstes/menubar.svg";
import { UserInfoContext } from "../../../contextInfo/ContextInfo";
const UserImage = ({ team }) => {
  const { progress } = useContext(UserInfoContext);
  const firstTeam=team[0]
  const ProfileHandler = () => {
    console.log("profile edit");
  };
  return (
    <main className={styles.prfileImage_main}>
      <section className={styles.profile}>
        <div className={styles.image_container}>
          <img src={userImage} alt="userImage" className={styles.image} />
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
      {team ? <div className={styles.teams}>
        <img src={firstTeam.src}/>
        <p>{firstTeam.teamName}</p>
      </div>:<><div className={styles.progress_bar}>
        <div
          className={styles.progressPersentage}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className={styles.compoletedprogress}>
        {progress < 100
          ? `${100 - progress} درصد مونده به تکمیل پروفایل!`
          : "100 درصد پروفایل شما تکمیل شد !"}
      </p></>}
    </main>
  );
};

export default UserImage;
