import React, { useState, useRef, useEffect } from "react";
import { signtureFunction } from "./signtureFunction";
import blueArrowImage from "../../../../../asstes/blue arrow.svg";
import styles from "./digitalSignture.module.css";


const DigitalSignture = ({setImageURL,setSigntureURL}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [signture, setSignture] = useState(null);
 

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
 
  const save = () => {
    if(setImageURL){
      setImageURL(sigCanvas.current.toDataURL("image/png"))
    }
    if(setSigntureURL){
      setSigntureURL(sigCanvas.current.toDataURL("image/png"))
    }

  };
  const sigCanvas = useRef();
  const clear = () => sigCanvas.current.clear();

  useEffect(() => {
    const returendSignture = signtureFunction(width, sigCanvas, styles);
    console.log(returendSignture);
    setSignture(returendSignture);
  }, [width]);

  return (
    <div>
      <div className={styles.signture_container} >
     {signture}
      </div>
      <div className={styles.flex_btns}>
        <button className={styles.clearButton} onClick={clear}>
          <span>پاک کردن امضا</span>
          <img src={blueArrowImage} alt="تایید" />
        </button>
        <button className={styles.saveButton} onClick={save}>
          <span>ثبت امضا</span>
          <img src={blueArrowImage} alt="تایید" />
        </button>
      </div>
    </div>
  );
};

export default DigitalSignture;
