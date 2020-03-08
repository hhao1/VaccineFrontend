// import 'babel-polyfill'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Home from "./Layout/Home";
import Info from "./Layout/Info";
import ContactUs from "./Layout/ContactUs";
import VaccineDetail from "./Layout/VaccineDetail";

import PlaceSearcher from "./Layout/PlaceSearcher";

import Map from './Layout/Map'


import { Provider } from "react-redux";
import store from "../store";

const list = [
  {lat: 41.0082, lng: 28.9784},
  { lat: 41.0082, lng: 29 }
]


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Router>

          {/* <Map 
            id="myMap"
            options={{
              center: { lat: 41.0082, lng: 28.9784 },
              zoom: 8
            }}
            onMapLoad={map => {

              list.map(l => {
                  new window.google.maps.Marker({
                      position: { lat: l.lat, lng: l.lng },
                      map: map
                    });
              })
            }}/> */}
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/info" render={() => <Info />} />
            <Route exact path="/detail" render={() => <VaccineDetail />} />
            <Route exact path="/contact" render={()=> <ContactUs/>}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
