import React, { useState } from "react";
import NewTeamHeader from "../../createNewTeam/newTeam/newTeamHeader/NewTeamHeader";
import TeamHeader from "../../userTeams/teamDetailes/teamHeader/TeamHeader";
import blueArrow from "../../../../asstes/blue arrow.svg";
import styles from "./inviteDetailes.module.css";
import SearchSpecialTeam from "../../../common/searchSpecialTeam/SearchSpecialTeam";

const InviteDetailes = ({ search = false, request, setRequest }) => {
  const [members, setMembers] = useState([{ value: "" }]);

  const phoneHandler = (e, index) => {
    const updatedMember = [...members];
    const newNumber = { ...updatedMember[index] };
    newNumber.value = e.target.value;
    updatedMember[index] = newNumber;
    setMembers(updatedMember);
  };
  const inviteHandler = (index) => {
    const phoneNumber = members[index].value;
    console.log(phoneNumber);
  };
  const addMemberHandler = () => {
    const oldMemers = [...members];
    const updatedMembers = [...oldMemers, { value: "" }];
    setMembers(updatedMembers);
  };
  return (
    <div>
      <TeamHeader title="/تیم های من/ساخت تیم جدید" />
      <NewTeamHeader subject="invite" />
      {members.map((item, index) => {
        return (
          <div className={styles.invite}>
            <input
              className={styles.invite_input}
              key={index}
              onChange={(e) => phoneHandler(e, index)}
              placeholder="شماره فرد مورد نظر برای دعوت به تیم را وارد کنید."
            />
           <div className={styles.add_invite}>
           <div className={styles.addMember_btn}>
              <button onClick={addMemberHandler}>
             
                <span>+</span>افزودن فرد جدید
              </button>
            </div>
            <div
              className={styles.send_phone}
              onClick={() => inviteHandler(index)}
            >
              <p>ارسال دعوت نامه</p>
            </div>
           </div>
          </div>
        );
      })}
       <div className={styles.addMember_btn_display}>
              <button onClick={addMemberHandler}>
             
                <span>+</span>افزودن فرد جدید
              </button>
            </div>

      <div className={styles.nextStep_btn}>
        <button>
          <span>مرحله بعد</span>
          <img src={blueArrow} alt="مرحله بعد" />
        </button>
      </div>

      {search && (
        <div className={styles.search_team}>
          <SearchSpecialTeam request={request} setRequest={setRequest} />
        </div>
      )}
    </div>
  );
};

export default InviteDetailes;
