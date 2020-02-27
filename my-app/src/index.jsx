import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AppStore from "./Components/AppStore";
import { Theme } from "./Components/Theme";
import { BrowserRouter, Route } from "react-router-dom";
import MountainList from "./Components/mountainsList";

ReactDOM.render(
  <AppStore>
    <Theme>
     <App /> 
    </Theme>
  </AppStore>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
