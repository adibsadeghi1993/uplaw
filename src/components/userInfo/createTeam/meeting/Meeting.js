import React from "react";
import styles from "./meeting.module.css";
import meetingImage from "../../../../asstes/meeting.svg";
import blueArrowImage from "../../../../asstes/blue arrow.svg";

const Meeting = () => {
  const meetings = [
    { meetingName: "صورت جلسه تغغیرات", date: "28/5/1400", name: "آپلا" },
    { meetingName: "جلسه طراحی UI", date: "28/5/1400", name: "آقای خانی" },
    {
      meetingName: "جلسه انعقاد قرارداد",
      date: "28/5/1400",
      name: "آقای خانی",
    },
  ];
  return (
    <section>
      <div className={styles.meeting}>
        <img src={meetingImage} />
        <p>آخرین صورت جلسات</p>
      </div>
      <section className={styles.meeting_section}>
        {meetings.map((item) => {
          return (
            <article className={styles.meeting_changes}>
              <p>{item.meetingName}</p>
              <p>{item.date}</p>
              <p>{item.name}</p>
              <div><span>مشاهده</span><img src={blueArrowImage}/></div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Meeting;
