import React from 'react'
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import styles from "../../completedInfo/completedDetailes/completedDetailes.module.css"

const ProgressBar = ({persentage,title,subTitle}) => {
    return (
        <div className={styles.progress_container}>
        <CircularProgressbarWithChildren
          strokeWidth={26}
          styles={buildStyles({
            pathColor: `rgba(55, 112, 226, 1)`,
          })}
          value={persentage}
          maxValue={45}
        >
          <div style={{ marginTop: -5 }} className={styles.cricular_desc}>
            <p className={styles.number} >
              {title}
            </p>
            <p className={styles.day}>
              {subTitle}
            </p>
          </div>
        </CircularProgressbarWithChildren>
        <div className={styles.epmty}></div>
        </div>
    )
}

export default ProgressBar
