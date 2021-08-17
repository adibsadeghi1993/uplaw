import React, { useState, useEffect } from "react";
import { steps } from "./Stages";
import "./userStep.css";

const UserStep = ({ step, setStep, progress, setProgress }) => {
  const [stage, setStage] = useState(steps);

  
  useEffect(() => {
    const updatedStages = [...stage];
    const findedStep = updatedStages[step - 1];
    const newStep = { ...findedStep, background: "activeBackground" };
    updatedStages[step - 1] = newStep;
    setStage(updatedStages);
  }, [step]);

  const stepHandler=(item)=>{
    console.log(item)
    setStep(item.step)
 
}
  return (
    <div>
      <p className="stepParagraf">تکمیل پروفایل</p>
      <section className="steps">
        {stage.map((item) => {
          return (
            <button
              key={item.step}
              onClick={() => stepHandler(item)}
              className={`${item.defaultClass} ${item.background}`}
            >
              {item.stepTitle}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default UserStep;
