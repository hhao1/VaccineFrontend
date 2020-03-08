import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Layout/Home";
import Info from "./Layout/Info";
import VirusDetail from "./Layout/VirusDetail";
import ContactUs from "./Layout/ContactUs";
import VaccineDetail from "./Layout/VaccineDetail";

import Header from "./Layout/Header";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/info" render={() => <Info />} />
            <Route exact path="/detail" render={() => <VirusDetail />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
