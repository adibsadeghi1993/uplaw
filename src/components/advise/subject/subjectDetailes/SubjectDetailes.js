import React, { useState } from "react";
import CommonConsultan from "../../../common/commonConsultant/CommonConsultan";
import styles from "./SubjectDetailes.module.css"

const SubjectDetailes = () => {

    const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		// setIsSelected(true);
	};
  return <main>
      <CommonConsultan/>
      <input type="text" className={styles.input}  placeholder="موضوع مشاوره شما چیست؟"/>
      <section>
        <article>
        <textarea type="text" placeholder="توضیحات مد نظر خود را وارد کنید."/>
        </article>
        <article>
       <div>
       <input type="file" name="file" onChange={changeHandler} />
       <label></label>
       </div>

        </article>
      </section>

  </main>;
};

export default SubjectDetailes;
