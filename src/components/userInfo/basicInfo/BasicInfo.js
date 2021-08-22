import React, { useState } from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import DetailInfo from "./detail/DetailInfo";
import "./basicInfo.css";

const BasicInfo = () => {
  return (
    <div className="basicInfo">
      <section className="profilesection">
        <UserProfile />
      </section>
      <section className="detailinfo">
        <DetailInfo />
      </section>
    </div>
  );
};

export default BasicInfo;
