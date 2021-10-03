import React from 'react'
import styles from "./fingerImgae.module.css"
import fingerImage from "../../../asstes/finger.png"

const FingerImgae = (props) => {
    return (
        <div className={styles.docs_info}>
           <p>
               {props.children}
           </p>
        <div className={styles.fingerImage}>
          <img src={fingerImage} alt="انتخاب یک سند" />
        </div>
      </div>
    )
}

export default FingerImgae
