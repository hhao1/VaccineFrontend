// import 'babel-polyfill'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Home from "./Layout/Home";
import Info from "./Layout/Info";
import ContactUs from "./Layout/ContactUs";
import Aboutus from "./Layout/Aboutus";
import VaccineDetail from "./Layout/VaccineDetail";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/aboutus" render={() => <Aboutus />} />
            <Route exact path="/info" render={() => <Info />} />
            <Route exact path="/detail" render={() => <VaccineDetail />} />
            <Route exact path="/contact" render={() => <ContactUs />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
