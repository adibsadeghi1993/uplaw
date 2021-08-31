import React, { useState, useEffect,useContext} from "react";
import { UserInfoContext } from "../../contextInfo/ContextInfo";
import { steps } from "./Stages";
import styles from "./userStep.module.css";

const UserStep = ({stepName}) => {
  const {step,setStep,progress,setProgress} = useContext(UserInfoContext)
  const [stage, setStage] = useState(steps);


  useEffect(() => {
    // const updatedStages = [...stage];
    // const findedStep = updatedStages[step - 1];
    // const newStep = { ...findedStep, background: "activeBackground" };
    // updatedStages[step - 1] = newStep;
    // setStage(updatedStages);
    const completedSteps=stage.map((item)=>{
      if(step>=item.step){
        return {...item, background:"activeBackground"}
      }
      return item
    })
    setStage(completedSteps)
  }, [step]);

  const stepHandler=(item)=>{
    console.log(item)
    setStep(item.step)
    setProgress(item.progress)
 
}
  return (
    <div>
      <p className={styles.stepParagraf}>تکمیل پروفایل/{stepName}</p>
      <section className={styles.steps}>
        {stage.map((item) => {
          return (
            <button
                disabled={step<item.step ?true:false}
              key={item.step}
              onClick={() => stepHandler(item)}
              className={[styles[item.defaultClass],styles[item.stepNumber],styles[item.background]].join(" ")}
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
