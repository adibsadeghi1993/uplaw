import "./App.css";
import Dashbord from "./pages/Dashbord";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Contract from "./pages/Contract";
import Team from "./pages/Team";
import Proceeding from "./components/proceeding/Proceeding";
import AdjustContract from "./components/contract/adjustContract/AdjustContract";


function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/auth/google" component={SignUp} />
          <Route path="/dashbord" component={Dashbord} />
          <Route path="/contract/:id" component={AdjustContract} />
          <Route path="/contract" component={Contract} />
          
          <Route path="/proceeding" component={Proceeding} />
          <Route path="/team" component={Team} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
   
  );
}

export default App;
