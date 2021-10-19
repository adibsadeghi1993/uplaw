import React, { useState } from "react";
import InviteMember from "../iniviteMember/InviteMember";


const SpecialTeam = () => {
 
  const [request, setRequest] = useState(null);

  return (
    <div>
      <InviteMember search={true} request={request} setRequest={setRequest} />
    </div>
  );
};

export default SpecialTeam;
