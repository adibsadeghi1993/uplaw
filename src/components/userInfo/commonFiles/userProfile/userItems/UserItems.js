import React from "react";
import "./UserItems";
import meetingImage from "../../../../../asstes/meeting.svg"
import adjustImage from "../../../../../asstes/adjust.svg"
import adviseImage from "../../../../../asstes/advise.svg"
import teamImage from "../../../../../asstes/team.svg"


const UserItems = () => {
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
          <div className="userItems_item_flex">
            <img src={teamImage} alt="teamwork" />
          </div>
          <p>تیم من</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default UserItems;
