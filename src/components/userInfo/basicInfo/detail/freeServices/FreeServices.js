import React,{useState,useEffect} from "react";
import "./freeservices.css";
import signatureImage from "../../../../../asstes/signature.svg";
import adjustImage from "../../../../../asstes/adjust.svg.svg";
import registermeeting from "../../../../../asstes/registermeeting.svg";

const FreeServices = () => {
    const [width, setWidth]   = useState(window.innerWidth);
const updateDimensions = () => {
    setWidth(window.innerWidth);
    
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);
  return (
    <section className="freeservices">
      <div className="freeservices_info">
        {width <890 ?<p className="freeFacility">
           با تکمیل فرم ثبت نام از امکانات زیر<br />
          به صورت <span>رایگان</span> استفاده کنید.
        </p>:<p className="freeFacility">
          با تکمیل ثبت نام از امکانات روبرو <br />
          به صورت <span>رایگان</span> استفاده کنید.
        </p>}
        <p className="completedRegistration" >
          جلوتر از <span>544</span> نفر در تکمیل ثبت نام
        </p>
      </div>
      <div className="freeservices_icons">
        <div className="adjustagreement">
          <div className="service">  <img src={adjustImage}/></div>
            <p>تنظیم هوشمند <br/>یک قرارداد</p>
        </div>
        <div className="signature ">
        <div className="service"><img src={signatureImage}/></div>
        <p>ثبت امضای <br/>دیجیتال</p>
        </div>
        <div className="register ">
        <div className="service"><img src={registermeeting}/></div>
        <p>ثبت یک <br/>صورت جلسه</p>
        </div>
      </div>
    </section>
  );
};

export default FreeServices;
