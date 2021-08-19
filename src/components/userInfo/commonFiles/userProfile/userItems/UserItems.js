import React from "react";
import "./userItems.css";
import meetingImage from "../../../../../asstes/meeting.svg";
import adjustImage from "../../../../../asstes/adjust.svg";
import adviseImage from "../../../../../asstes/advise.svg";
import teamImage from "../../../../../asstes/team.svg";

const UserItems = () => {
  return (
    <div>
      <section className="userItems">
        <div className="userItems_item meeting">
          <div className="userItems_item_container ">
            <img src={meetingImage} alt="slider" />
          </div>
          <p>صورت جلسه</p>
        </div>
        <div className="userItems_item adjust">
          <div className="userItems_item_container adjust-container ">
            <img src={adjustImage} alt="adjust" />
          </div>
          <p>تنظیم هوشمند</p>
        </div>

        <div className="userItems_item consultant">
          <div className="userItems_item_container">
            <img src={adviseImage} alt="consultant" />
          </div>
          <p>مشاوره</p>
        </div>
        <div className="userItems_item myteam">
          <div className="userItems_item_container ">
            <img src={teamImage} alt="teamwork" />
          </div>
          <p>تیم من</p>
        </div>
      </section>
      <div className="userguidance">
        <div className="creditbtn">اعتبار من</div>
        <div className="supportbtn">تیم ها</div>
        <div className="financialbtn">سوابق مالی</div>
      </div>
    </div>
  );
};

export default UserItems;
