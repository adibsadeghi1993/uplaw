import "./App.css";
import Dashbord from "./pages/Dashbord";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Contract from "./pages/Contract";
import Team from "./pages/Team";
import AdjustContract from "./components/contract/adjustContract/AdjustContract";
import CreateMeeting from "./components/proceeding/CreateMeeting/CreateMeeting";
import SetMeetingTime from "./components/proceeding/setMeetingTime/SetMeetingTime";
import SigntureMeeting from "./components/proceeding/signtureMeeting/SigntureMeeting";
import CustomerSigntureMeeting from "./components/proceeding/customerSigntureMeeting/CustomerSigntureMeeting";
import CustomerSigntureMeetingDetailes from "./components/proceeding/customerSigntureMeeting/custmoerSigntureDetailes/CustomerSigntureDetailes";
import SigntureContract from "./components/contract/SigntureContract/SigntureContract";
import ContractDocument from "./components/contract/contractDoucument/ContractDocument";
import CreateTeam from "./components/userInfo/createTeam/CreateTeam";
import TeamInfo from "./components/userInfo/userTeams/teamsInfo/TeamInfo";
import CreateAdvise from "./components/advise/createAdvise/CreateAdvise";
import Advise from "./pages/Advise";
import MyTeam from "./components/teams/myTeam/MyTeam";
import CreateNewTeam from "./components/teams/createNewTeam/CreateNewTeam";
import SpecialTeam from "./components/teams/serchTeam/SpecialTeam";
import InviteMember from "./components/teams/iniviteMember/InviteMember";
import TeamProfile from "./components/teams/teamProfile/TeamProfile";
import TeamAdmin from "./components/teams/teamAdmin/TeamAdmin";
import AdviseType from "./components/advise/adviseType/AdviseType";
import ConsultantTime from "./components/advise/consultantTime/ConsultantTime";
import Confirm from "./components/advise/confirm/Confirm";
import Search from "./components/advise/search/Search";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/google" component={SignUp} />
        <Route path="/dashbord" component={Dashbord} />
        <Route path="/contract/signtureContract" component={ContractDocument} />
        <Route
          path="/contract/customerSigntureContract"
          component={SigntureContract}
        />
        <Route path="/contract/:id" component={AdjustContract} />

        <Route path="/contract" component={Contract} />
        <Route path="/meeting/setMeetingTime" component={SetMeetingTime} />
        <Route path="/meeting/signtureMeeting" component={SigntureMeeting} />
        <Route
          path="/meeting/customerSigntureMeeting"
          component={CustomerSigntureMeeting}
        />
        <Route path="/meeting" component={CreateMeeting} />
        <Route path="/createTeam" component={CreateTeam} />
        <Route path="/teamInfo" component={TeamInfo} />

        <Route path="/team" component={Team} />
        <Route path="/myTeam" component={MyTeam} />
        <Route path="/createNewTeam" component={CreateNewTeam} />
        <Route path="/specialTeam" component={SpecialTeam} />
        <Route path="/inviteMember" component={InviteMember} />
        <Route path="/teamProfile" component={TeamProfile} />
        <Route path="/teamAdmin" component={TeamAdmin} />
        <Route path="/advise" component={Advise} />
        <Route path="/setConsultantTime" component={ConsultantTime} />
        <Route path="/confirmConsultant" component={Confirm} />
        <Route path="/searchConsultant" component={Search} />
        <Route path="/adviseType" component={AdviseType} />

        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
