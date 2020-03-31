import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CardContainer from "./CardContainer";
import Map from "./Map";
import StoreInfoCard from "./StoreInfoCard";

import { getVaccines } from "../../actions/vaccines";
import { getMarkers } from "../../actions/markers";
import { getCountryCode } from "../../actions/set_current_country_code";

import "../../css/info.css";

class Info extends Component {
  static propTypes = {
    vaccines: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired
  };

  componentWillMount() {
    this.props.getVaccines();
    this.props.getMarkers();
    // this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by your browser!");
    }
  }

  getCoordinates(position) {
    // console.log(
    //   "lat:" + position.coords.latitude + " lng:" + position.coords.longitude
    // );
  }

  // Weird Problem here as this function is triggered by a click event, Error will show up
  // props undefined.
  printMarkers() {
    console.log("markers: ");
    console.log(this.props.markers);
  }

  render() {
    const { vaccines, markers, curDestination, curCountryObject } = this.props;
    var curLocation = null;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        curLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
    var { customerLocation } = this.props;
    if (customerLocation == null && curLocation == null) {
      customerLocation = {
        lat: 51.0047330999999,
        lng: -114.0718831
      };
    } else if (customerLocation == null && curLocation != null) {
      customerLocation = curLocation;
    }

    var curCountryVaccines = new Set(curCountryObject.vaccines);
    return (
      <Jumbotron className="container mt-4 info-page-container">
        {/* <Container> */}
        {/* Changing the layout to grid to make it responsive to screen size */}
        <div className="info-container">
          <Row className="info-header">
            <h3 className="text-secondary">
              Vaccines you should get before travelling to {curDestination}
            </h3>
          </Row>

          <div className="vaccine-list">
            <Col className="overflow-auto" style={{ height: "30em" }}>
              {vaccines
                .filter(
                  vaccine =>
                    vaccine.notice !== "" && curCountryVaccines.has(vaccine.id)
                )
                .map(vaccine => (
                  <CardContainer
                    name={vaccine.name}
                    description={vaccine.detail}
                    key={vaccine.id}
                    isImportant={true}
                    notice={vaccine.notice}
                  />
                ))}
              {vaccines
                .filter(
                  vaccine =>
                    vaccine.notice === "" &&
                    vaccine.name !== "" &&
                    curCountryVaccines.has(vaccine.id)
                )
                .map(vaccine => (
                  <CardContainer
                    name={vaccine.name}
                    description={vaccine.detail}
                    key={vaccine.id}
                    notice={vaccine.notice}
                  />
                ))}
            </Col>
          </div>
          {markers.length > 0 && (
            <div className="store-list">
              <Map
                id="myMap"
                options={{
                  center: customerLocation,
                  zoom: 8
                }}
                onMapLoad={map => {
                  new window.google.maps.Marker({
                    position: customerLocation,
                    map: map
                  });

                  markers.map((l, index) => {
                    var letter = String.fromCharCode("A".charCodeAt(0) + index);
                    new window.google.maps.Marker({
                      position: { lat: Number(l.lat), lng: Number(l.lon) },
                      icon:
                        "https://maps.google.com/mapfiles/marker" +
                        letter +
                        ".png",
                      map: map
                    });
                  });
                }}
              />

              <div className="store-info-list">
                {markers.map(maker => (
                  <StoreInfoCard
                    key={maker.id}
                    name={maker.name}
                    number={maker.phone}
                    address={maker.address}
                    hour={maker.hours}
                    injection_certified={maker.injection_certified}
                    certified_travel_consultant={
                      maker.certified_travel_consultant
                    }
                    additional_prescribing_authority={
                      maker.additional_prescribing_authority
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {/* </Container> */}
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  vaccines: state.vaccineReducer.vaccines,
  markers: state.markerReducer.markers,
  curDestination: state.curCountryReducer.currentCountry,
  currentCountryCode: state.curCountryCodeReducer.currentCountryCode0,
  curCountryObject: state.curCountryReducer.countryObject,
  customerLocation: state.CustomerLocationReducer.CustomerLatLng
});

export default withRouter(
  connect(mapStateToProps, { getVaccines, getMarkers, getCountryCode })(Info)
);
