import React from "react";
import UserProfile from "../commonFiles/userProfile/UserProfile";
import "./jobIssues.css";


const JobIssues = ({progress}) => {
  return (
    <main className="jobIssues">
      <section className="profilesection">
        <UserProfile progress={progress} />
      </section>
      <section className='jobIssues_info'>

      </section>
    </main>
  );
};

export default JobIssues;
