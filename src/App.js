
import './App.css';
import Dashbord from './pages/Dashbord';
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/google" component={SignUp}/>
        <Route path="/dashbord" component={Dashbord}/>
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
