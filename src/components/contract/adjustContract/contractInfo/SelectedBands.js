import addImage from "../../../../asstes/add.svg";
import minesImage from "../../../../asstes/mines.svg";
import confirmImage from "../../../../asstes/confirm.svg";
import styles from "./contractInfo.module.css";
export const selectedBands = (item, bands, modalHandler) => {
  const index = bands.indexOf(item);

  console.log(item, index);

  switch (item.type) {
    case "select":
      return (
        <div className={styles.select}>
          {index === 0 ? (
            <div onClick={modalHandler} className={index===0?styles.firstElemnt:styles.btn}>
              <img src={minesImage} alt="بستن سال" />
            </div>
          ) : (
            <div onClick={modalHandler}  className={index===0?styles.firstElemnt:styles.btn}>
              <img src={addImage} alt="باز کردن سوال" />
            </div>
          )}
          <div className={styles.select_container}>
            <p>{item.title}</p>
            <div className={styles.selectedAnswers}>
              {item.value.map((answer) => {
                return <p>{answer}</p>;
              })}
            </div>
          </div>
        </div>
      );
    case "text":
      return (
        <div className={styles.text}>
          {index === 0 ? (
            <div className={index===0?styles.firstElemnt:styles.btn}>
              <img src={minesImage} alt="بستن سال" />
            </div>
          ) : (
            <div className={index===0?styles.firstElemnt:styles.btn}>
              <img src={addImage} alt="باز کردن سوال" />
            </div>
          )}
          <div className={styles.text_title}>
            <p>{item.title}</p>
          </div>
        </div>
      );
    case "QA":
      return (
        <div className={styles.QA}>
          {index === 0 ? (
            <div  className={index===0?styles.firstElemnt:styles.btn}>
              <img src={minesImage} alt="بستن سال" />
            </div>
          ) : (
            <div  className={index===0?styles.firstElemnt:styles.btn}>
              <img src={addImage} alt="باز کردن سوال" />
            </div>
          )}
          <div className={styles.QA_container}>
            <div>
              <p>{item.title}</p>
            </div>
            <div className={styles.QA_textarea}>
              <textarea></textarea>
            </div>
          </div>
        </div>
      );
    case "jaye khali":
      return (
        <div className={styles.emptySpace}>
          {index === 0 ? (
            <div className={index===0?styles.firstElemnt:styles.btn}>
              <img src={minesImage} alt="بستن سال" />
            </div>
          ) : (
            <div className={index===0?styles.firstElemnt:styles.btn}>
              <img src={addImage} alt="باز کردن سوال" />
            </div>
          )}
          <div className={styles.emptySpace_input}>
            {item.value.map((a) => {
              if (typeof a === "string") {
                return <p>{a}</p>;
              }
              if (typeof a === "object") {
                return <input placeholder={a.name} className={styles.contract_input} />;
              }
            })}
          </div>
        </div>
      );

    case "SQA":
      return (
        <div className={styles.SQA}>
          {index === 0 ? (
            <div className={index===0?styles.firstElemnt:styles.btn}>
              <img src={minesImage} alt="بستن سال" />
            </div>
          ) : (
            <div className={index===0?styles.firstElemnt:styles.btn}>
              <img src={addImage} alt="باز کردن سوال" />
            </div>
          )}
          <div className={styles.SQA_container}>
            <div>
              <p>{item.title}</p>
            </div>
            <div className={styles.SQA_input}>
              <input className={styles.contract_input} />
            </div>
          </div>
        </div>
      );

    default:
      return <div> question</div>;
  }
};
