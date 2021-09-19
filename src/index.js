import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import ContextInfo from "./components/common/contextInfo/ContextInfo";

ReactDOM.render(
  <Provider store={store}>
    <ContextInfo>
      <Router>
        <App />
      </Router>
    </ContextInfo>
  </Provider>,
  document.getElementById("root")
);
