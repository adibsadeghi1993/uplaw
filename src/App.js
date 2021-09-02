
import './App.css';
import Dashbord from './pages/Dashbord';
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
     <Dashbord/>
      <Switch>
        <Route path="/auth/google" exact component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
