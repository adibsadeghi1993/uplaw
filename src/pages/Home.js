import React from 'react'
import { Link,Switch,Route } from "react-router-dom";

const Home = () => {
    return (
        <div>
          <Link to="/dashbord">  <h3>go to the dashbord</h3></Link>
          <Link to="/auth/google">  <h3>go to the sginup/login</h3></Link>
         
        </div>
    )
}

export default Home



