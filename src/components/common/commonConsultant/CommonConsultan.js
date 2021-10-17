import React,{useState} from 'react'
import Progress from '../contractHeader/ContractHeader';
import FingerImgae from '../fingerImgae/FingerImgae'
import styles from "./commonConsultant.module.css"

const CommonConsultan = ({subject="نوع مشاوره را انتخاب کنید.",width="33.33%"}) => {
    const [active, setActive] = useState("newAdvise");

    const prevAdviseHandler = () => {
      setActive("prevAdvise");
    };
    const newAdviseHandler = () => {
      setActive("newAdvise");
    };
    return (
        <>
         <h3 className={styles.header}>/مشاوره</h3>
      <div className={styles.finger}>
       <FingerImgae>
       تو این صفحه میتونی تایم مشاوره رو با مشارین آپلا ست بکنی و با خیال
          راحت دغدغه هات رو حل کنی.
       </FingerImgae>
      </div>
      <div className={styles.advise_header}>
        <p
          onClick={newAdviseHandler}
          className={active === "newAdvise" ? styles.active : null}
        >
          ست کردن تایم مشاوره
        </p>
        <p
          onClick={prevAdviseHandler}
          className={active === "prevAdvise" ? styles.active : null}
        >
          مشاوره های قبلی
        </p>
      </div>
      <div className={styles.progress}>
        <Progress
          noneBox="noneBox"
          stepOne="انتخاب موضوع مشاوره"
          stepTow="انتخاب زمان شماوره"
          opacityThree="0.5"
          adjust={false}
          width={width}
        />
      </div>
      <div className={styles.advise_type}>
        <p>{subject}</p>
        <p>مشاوره تخصصی میخواهم</p>
      </div>
            
        </>
    )
}

export default CommonConsultan
