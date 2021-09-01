import React from "react";
import styles from "./completedDetailes.module.css";
import completedImage from "../../../../asstes/completedpic.svg";

import contractImage from "../../../../asstes/blueadjustcontract.svg";
import signatureImage from "../../../../asstes/blue signature.svg";
import adjustMeetingImage from "../../../../asstes/blueadjustmeeting.svg";
import blueArrowImage from "../../../../asstes/blue arrow.svg";
import rocketImage from "../../../../asstes/rocket3.svg";
import teamImage from "../../../../asstes/team10.svg";
import starImage from "../../../../asstes/starIcon.svg";
import smileImage from "../../../../asstes/smiling face with sunglasses emoji 1 (1).svg";
import { Docs } from "./Docs/Docs";
import ProgressBar from "../../commonFiles/circleProgress/ProgressBar";

const CompletedDetailes = () => {
  
  return (
    <main className={styles.completed_detailes}>
      <section className={styles.completede_desc}>
        <p>پروفایل شما کامل و تایید شد! از بسته رایگانتون امکانات زیر باقیه!</p>
        <img src={completedImage} />
      </section>
      <section className={styles.completed_detailes_sectionTow}>
        <div className={styles.circle}>
         <ProgressBar persentage={30} />
        </div>

        <div className={styles.contract}>
          <img src={contractImage} className={styles.image} />
          <div className={styles.descdiv}>
            <span>یک</span>تنظیم هوشمند قرارداد
          </div>
        </div>
        <div className={styles.meeting}>
          <img src={adjustMeetingImage} className={styles.image} />
          <div className={styles.descdiv}>
            <span>یک</span>تنظیم صورت جلسه
          </div>
        </div>
        <div className={styles.signature}>
          <img src={signatureImage} className={styles.image} />
          <div className={styles.descdiv}>ثبت امضای دیجیتال</div>
        </div>
        <button className={styles.begainButton}>
          <img src={blueArrowImage} />
          شروع میکنم
        </button>
      </section>
      <div className={styles.pridication}>
        <p>اسناد پرطرفدار در آپلا</p>
      </div>
      <section className={styles.completed_detailes_sectionThree}>
        {Docs.map((item) => {
          return (
            <div key={item.id} className={styles[item.className]}>
              <div className={styles.eachDocs}>
                <p>{item.title}</p>
              </div>
              <button className={styles.adjustbtn}>
                تنظیم هوشمند <img src={blueArrowImage} />
              </button>
            </div>
          );
        })}
      </section>
      <section className={styles.completed_detailes_sectionFour}>
        <p className={styles.raise_acount}>
          همین امروز اکانتتون رو ارتقا بدید!
        </p>

        <div className={styles.purchaseAcount_services}>
          <div className={styles.purchaseAcount}>
            <div>
              <img className={styles.rocket} src={rocketImage} alt="rocket" />
            </div>
            <div className={styles.startup}>
              <button className={styles.startup_purchase}>
                خریداکانت استارتاپی
              </button>
              <p className={styles.startup_price}>ماهانه 99 هزار تومان</p>
            </div>
          </div>
          <div className={styles.services}>
            <div className={styles.createTeam}>
              <img src={teamImage} alt="team" />
              <p>امکان ایجاد یک تیم 10 نفره</p>
            </div>
            <div className={styles.adjustDocs}>
              <img src={starImage} alt="تنظیم سند" />
              <p>تنظیم هوشمند 10 سند حقوقی و مدیریتی</p>
            </div>
          </div>
        </div>
       <div className={styles.smileImage}> <img  src={smileImage}/></div>
      </section>
   
    </main>
  );
};

export default CompletedDetailes;
