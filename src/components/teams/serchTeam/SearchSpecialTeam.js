import React, { useState } from "react";
import InviteMember from "../iniviteMember/InviteMember";


const SearchSpecialTeam = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <InviteMember
        search={true}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </>
  );
};

export default SearchSpecialTeam;
