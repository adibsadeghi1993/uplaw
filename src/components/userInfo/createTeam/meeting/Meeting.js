import React from "react";
import styles from "./meeting.module.css";
import meetingImage from "../../../../asstes/meeting.svg";
import blueArrowImage from "../../../../asstes/blue arrow.svg";

const Meeting = () => {
  const meetings = [
    { meetingName: "صورت جلسه تغییرات", date: "28/5/1400", name: "آپلا" },
    { meetingName: "جلسه طراحی UI", date: "28/5/1400", name: "آقای خانی" },
    {
      meetingName: "جلسه انعقاد قرارداد",
      date: "28/5/1400",
      name: "آقای خانی",
    },
  ];
  return (
    <section className={styles.main_section_metting}>
      <div className={styles.meeting}>
        <img src={meetingImage} />
        <p>آخرین صورت جلسات</p>
      </div>
      <section className={styles.meeting_section}>
        {meetings.map((item) => {
          return (
            <article className={styles.eachmeeting}>
              <p className={styles.meetingName}>{item.meetingName}</p>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.username}>{item.name}</p>
              <div className={styles.observe_meeting}><span>مشاهده</span><img src={blueArrowImage}/></div>
            </article>
          );
        })}
      </section>
      <section className={styles.dropdown_section}>
          {meetings.map((item)=>{
              return <div className={styles.eachselect}>
                  <select className={styles.select}>
                  <option selected>{item.meetingName}</option>
                   <option vlaue={item.date}>{item.date}</option>
                   <option vlaue={item.name}>{item.name}</option>
              </select>
              </div>
          })}

      </section>
      <div className={styles.adjust_newmeeting}><span>تنظیم صورت جلسه جدید</span><img src={blueArrowImage}/></div>
    </section>
  );
};

export default Meeting;
