import React from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import "./detailInfo.css";

const DetailInfo = ({ step, setStep, progress, setProgress }) => {
  return (
    <div className="detail">
      <UserStep
        step={step}
        setStep={setStep}
        setProgress={setProgress}
        progress={progress}
      />
    </div>
  );
};

export default DetailInfo;
