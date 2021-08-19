import React,{useState} from "react";
import "./userItems.css";
import meetingImage from "../../../../../asstes/meeting.svg"
import adjustImage from "../../../../../asstes/adjust.svg"
import adviseImage from "../../../../../asstes/advise.svg"
import teamImage from "../../../../../asstes/team.svg"


const UserItems = () => {
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
      setWidth(window.innerWidth);   
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  return (
    <div>
        <section className="userItems">
      <div className="section_one">
        <div className="userItems_item">
          <div className="userItems_item_flex">
            <img src={meetingImage} alt="slider" />
          </div>
          <p>صورت جلسه</p>
        </div>
        <div className="userItems_item">
          <div className="userItems_item_flex adjust">
            <img src={adjustImage} alt="adjust" />
          </div>
          <p>تنظیم هوشمند</p>
        </div>
      </div>
      <div className="section_tow">
        <div className="userItems_item">
          <div className="userItems_item_flex">
            <img src={adviseImage} alt="consultant" />
          </div>
          <p>مشاوره</p>
        </div>
        <div className="userItems_item">
          <div className="userItems_item_flex teamwork">
            <img src={teamImage} alt="teamwork" />
          </div>
          <p>تیم من</p>
        </div>
      </div>
    </section>
    
    <div className="creditbtn">اعتبار من</div>
      <div className="supportbtn">تیم ها</div>
      <div className="financialbtn">سوابق مالی</div>
    </div>
  );
};

export default UserItems;
