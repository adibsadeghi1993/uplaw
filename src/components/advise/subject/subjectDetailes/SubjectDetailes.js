import React, { useState } from "react";
import CommonConsultan from "../../../common/commonConsultant/CommonConsultan";
import styles from "./SubjectDetailes.module.css";
import uploaddocImage from "../../../../asstes/uploaddoc.svg";
import arrowImage from "../../../../asstes/blue arrow.svg";

const SubjectDetailes = () => {
  const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append('File', selectedFile);

    fetch(
        'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
        {
            method: 'POST',
            body: formData,
        }
    )
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

  return (
    <main>
      <CommonConsultan />
      <input
        type="text"
        className={styles.input}
        placeholder="موضوع مشاوره شما چیست؟"
      />
      <section className={styles.subject_upload}>
        <article className={styles.subject}>
          <textarea
            type="text"
            placeholder="توضیحات مد نظر خود را وارد کنید."
          />
        </article>
        <article className={styles.upload}>
          <div>
            <input type="file" id="upload" className={styles.input_upload} name="file" onChange={changeHandler} />
            <label htmlFor="upload">
              <img src={uploaddocImage} alt="اپلود فایل" />
               {selectedFile?.name?<span>{selectedFile.name}</span>: <span>فایل موردنظر خود را پیوست کنید</span>}
            </label>
          </div>
          <div className={styles.next_btn}>
              <button onClick={handleSubmission}><span>مرحله بعد</span><img src={arrowImage} alt="مرحله بعد"/></button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default SubjectDetailes;
