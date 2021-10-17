import React from "react";
import CommonConsultan from "../../../common/commonConsultant/CommonConsultan";
import "./confirmDetailes.module.css";
import heartFaceImage from "../../../../asstes/heart-eyes face emoji 1.png";
import arrowImage from "../../../../asstes/blue arrow.svg";
import styles from "./confirmDetailes.module.css";

const ConfirmDetailes = () => {
  return (
    <div>
      <CommonConsultan width="100%" subject="اطلاعات را تایید کنید." />
      <section className={styles.confirm_section}>
        <article className={styles.first_article}>
          <div className={styles.subject}>
            <p>تنظیم قرارداد سهامداران</p>
            <p>فایل دارد</p>
          </div>
          <div className={styles.description}>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </article>
        <article className={styles.second_article}>
          <div>
            <img src={heartFaceImage} alt="تماس با شما" />
          </div>
          <div>
            <p>سشنبه 28/05/1400 تو بازه زمانی 13 تا 15 باتون تماس میگیریم</p>
          </div>
        </article>
      </section>
      <div className={styles.next_step}>
          <button><span>تایید نهایی و کسر از اعتبار</span><img src={arrowImage} alt="مرحله بعدی"/></button>

      </div>
    </div>
  );
};

export default ConfirmDetailes;
