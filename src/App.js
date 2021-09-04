
import './App.css';
import Dashbord from './pages/Dashbord';
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route path="/auth/google" exact component={SignUp}/>
        <Route path="/dashbord" exact component={Dashbord}/>
      </Switch>
    </div>
  );
}

export default App;
