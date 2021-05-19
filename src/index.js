import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./Components/ProjectDetails";
import MigrationVSSyllabicCount from "./Components/MigrationVSSyllabicCount";
import GDP from "./Components/GDP";
import SyllabicCount from "./Components/SyllabicCount";
import MainPage from "./Components/MainPage";

ReactDOM.render(
  <Router>
    <App />
    {/* <Switch>
      <Route path="/project_details" component={Project} />
      <Route path="/syllabic_count" component={MainPage} />
      <Route path="/migration" component={MigrationVSSyllabicCount} />
      <Route path="/gdp" component={GDP} />
    </Switch> */}
  </Router>,
  document.getElementById("root")
);
