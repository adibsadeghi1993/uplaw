import React, { useState } from "react";
import InviteMember from "../iniviteMember/InviteMember";
import SearchSpecialTeam from "../../common/searchSpecialTeam/SearchSpecialTeam.js";

const SpecialTeam = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [request, setRequest] = useState(null);

  return (
    <div>
      <InviteMember search={true} request={request} setRequest={setRequest} />
    </div>
  );
};

export default SpecialTeam;
