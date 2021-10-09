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

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/google" component={SignUp} />
        <Route path="/dashbord" component={Dashbord} />
        <Route path="/contract/signtureContract" component={ContractDocument} />
        <Route path="/contract/customerSigntureContract"  component={SigntureContract}/>
        <Route path="/contract/:id" component={AdjustContract} />
       
        <Route path="/contract" component={Contract} />
        <Route path="/meeting/setMeetingTime" component={SetMeetingTime} />
        <Route path="/meeting/signtureMeeting" component={SigntureMeeting} />
        <Route path="/meeting/customerSigntureMeeting" component={CustomerSigntureMeeting} />
        <Route path="/meeting" component={CreateMeeting} />
        <Route path="/createTeam" component={CreateTeam} />
        <Route path="/teamInfo" component={TeamInfo} />
       
        <Route path="/team" component={Team} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
