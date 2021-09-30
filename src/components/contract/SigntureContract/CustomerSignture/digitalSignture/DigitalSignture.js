import React, { useState, useRef,useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import blueArrowImage from "../../../../../asstes/blue arrow.svg";
import styles from "./digitalSignture.module.css"



const DigitalSignture = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const [imageURL, setImageURL] = useState(null); 
    const save = () =>
    setImageURL(sigCanvas.current.toDataURL("image/png"));
    const sigCanvas = useRef();
    const clear = () => sigCanvas.current.clear();
    return (
        <div>
            <div className={styles.signture_container}  >
            <SignatureCanvas
              ref={sigCanvas}
              penColor="green"
              
              canvasProps={{
               height:150, width:200,      className: styles.canvas
              }}
        
            />
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
    )
}

export default DigitalSignture
