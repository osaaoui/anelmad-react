import React, { Component } from "react";
import ResAppbar from "./components/layout/ResAppbar";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grammar from "./components/Grammar";
import Main from "./components/Main";
import Search from "./components/Search";

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <ResAppbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/grammar" component={Grammar} />
            <Route path="/search" component={Search} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
