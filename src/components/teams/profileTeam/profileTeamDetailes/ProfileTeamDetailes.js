import React from "react";
import { useSelector } from "react-redux";
import styles from "./profileTeamDetailes.module.css";
import teamImage from "../../../../asstes/team.svg";
import risk from "../../../../asstes/law services.svg";
import location from "../../../../asstes/location.svg";
import wallet from "../../../../asstes/wallet.svg";
import arrow from "../../../../asstes/blue arrow.svg";

const ProfileTeamDetailes = () => {
  const myTeam = useSelector((state) => state.team.myTeam);
  return (
    <main>
      <h3 className={styles.header}>/تیم های من/پروفایل تیم {myTeam[0].teamName}</h3>
      <section className={styles.profile_team}>
        <div className={styles.teamImage}>
          <div className={styles.teamName_header}>
            <img src={teamImage} alt="نام تیم" />
            <span>{myTeam[0].teamName}</span>
          </div>
          <div className={styles.image_container}>
            <img src={myTeam[0].src} alt="عکس تیم" />
            <p>{myTeam[0].teamName}</p>
            <div>{myTeam[0].memberShip}نفر</div>
          </div>
        </div>

        <div className={styles.team_info_cotainer} >
         <section className={styles.team_info}>
         <div className={styles.team_name}>
            <div>
              <img src={risk} alt="تیم" />
            </div>
            <p>خدمات حقوقی و مدیریتی</p>
          </div>
          <div className={styles.team_location}>
            <div>
              <img src={location} alt="موقیت مکانی" />
            </div>
            <p>تهران</p>
          </div>
          <div className={styles.team_invest}>
            <div>
              <img src={wallet} alt="سرمایه" />
            </div>
            <p>نیاز به جذب سرمایه دارد</p>
          </div>
         </section>
          <div className={styles.send_btn}>
            <button><span>ارسال درخواست عضویت</span><img src={arrow} alt="ارسال درخواست"/></button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfileTeamDetailes;
