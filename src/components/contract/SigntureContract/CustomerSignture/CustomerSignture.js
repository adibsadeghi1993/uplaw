import React, { useState } from "react";
import PdfDoc from "../../commonContractFiles/PdfDoc/PdfDoc";
import styles from "./CustomerSignture.module.css";
import blueArrowImage from "../../../../asstes/blue arrow.svg";
import addImage from "../../../../asstes/add.svg";
import minesImage from "../../../../asstes/mines.svg";
import DigitalSignture from "./digitalSignture/DigitalSignture";

const CustomerSignture = ({downloadTitle="دریافت قرارداد",checkboxTitle="قرارداد امضا شود ؟"}) => {
  const [showQes, setShowQes] = useState([
    { item: 1, show: true },
    { item: 2, show: false },
    { item: 3, show: false },
  ]);
  const [showSignture, setShowSignture] = useState(false)
  const [imageURL, setImageURL] = useState(null);
  const [signtureURL, setSigntureURL] = useState(null);
  console.log(imageURL)
  console.log(signtureURL)

  const showHandler = (num) => {
    const oldShowQes = [...showQes];
    const findedItem = oldShowQes[num - 1];
    const updateItem = { ...findedItem };
    updateItem.show = !updateItem.show;
    oldShowQes[num - 1] = updateItem;
    setShowQes(oldShowQes);
  };
  const signtureHandler=()=>{
    setShowSignture(true)
  }
  return (
    <main className={styles.customerSignture}>
      <section className={styles.customerSignture_right}>
        <PdfDoc downloadTitle={downloadTitle} checkboxTitle={checkboxTitle}/>
        <div className={styles.customer_input_label}>
          <label htmlFor="customer">طرف مقابل قرارداد را امضا کند ؟</label>
          <input id="customer" type="checkbox" />
        </div>
      </section>
      <section className={styles.customerSignture_left}>
     
        <div>
          <article className={`${styles.confirm_mobile_code} ${showQes[0].show?null:styles.hide_confirm_mobile_code}`}>
            <div onClick={() => showHandler(1)} className={styles.first_image}>
              {showQes[0].show ? (
                <img src={minesImage} alt="بستن سوال" />
              ) : (
                <img src={addImage} alt="بستن سوال" />
              )}
            </div>
            <div className={styles.main_confirm}>
              <div className={styles.confirm_person_paragraf}>
                <p>احراز هویت</p>
              </div>
              <div className={showQes[0].show?styles.show:styles.hide}>
                <div className={styles.confirm_mobile}>
                  <input className={styles.signture_input} type="text" placeholder="شماره تلفن خود را وارد کنید"/>
                  <button>
                    <span>ارسال کد تایید</span>
                    <img src={blueArrowImage} alt="تایید" />
                  </button>
                </div>
                <div className={styles.confirm_code}>
                  <input className={styles.signture_input} type="text" placeholder="کد ارسال شده را وارد کنید"/>
                  <button>
                    <span>ثبت کد تایید</span>
                    <img src={blueArrowImage} alt="تایید" />
                  </button>

                </div>
              </div>
            </div>
          </article>
          <article className={styles.draw_signture}>
            <div onClick={() => showHandler(2)} className={styles.second_image}>
            {showQes[1].show ? (
                <img src={minesImage} alt="بستن سوال" />
              ) : (
                <img src={addImage} alt="بستن سوال" />
              )}
            </div>
            <div className={styles.main_draw}>
              <div className={styles.signture_paragraf}>
                <p>ترسیم امضا</p>
              </div>
              <div className={showQes[1].show?styles.show:styles.hide}>
                 <DigitalSignture setImageURL={setImageURL}/>
               
              </div>
            </div>
          </article>
          <article className={styles.request_signture}>
            <div onClick={() => showHandler(3)} className={styles.third_image}>
            {showQes[2].show ? (
                <img src={minesImage} alt="بستن سوال" />
              ) : (
                <img src={addImage} alt="بستن سوال" />
              )}
            </div>
            <div className={styles.main_request}>
              <div>
                <p>درخواست امضا از طرفین</p>
              </div>
              <div className={showQes[2].show ? styles.showThree:styles.hideThree}>
               <div className={styles.add_signture}>
               <p>محسن خانی</p>
                <button onClick={signtureHandler}>
                  <span>+ افزودن</span>
                </button>
               </div>
               {showSignture ?<DigitalSignture setSigntureURL={setSigntureURL}/>:null}
              </div>
            </div>
          </article>
        </div>
       <div className={downloadTitle==="دانلود صورت جلسه" ? `${styles.downloadbtn}`:styles.disapperbtn}>
       <button className={styles.download_button} >
          <span>{downloadTitle}</span>
          <img src={blueArrowImage} alt="دریافت قرارداد" />
        </button>
       </div>
      </section>
    </main>
  );
};

export default CustomerSignture;
