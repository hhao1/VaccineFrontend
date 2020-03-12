import React, { Component } from "react";
import { Container, Row, Col, Jumbotron} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CardContainer from "./CardContainer";
import Map from './Map'

import { getVaccines } from "../../actions/vaccines";
import { getMarkers } from "../../actions/markers";
import { getCountryCode } from "../../actions/set_current_country_code";

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
  printMarkers(){
    console.log("markers: ")
    console.log(this.props.markers)
  }

  render() {
    const { vaccines, markers, curDestination } = this.props;

    return (
      <Jumbotron className="container mt-4" style={{ height: "40em" }}>
        <Container>
          <Row>
            <h3 className="text-secondary">
              Vaccines you should get before travelling to {curDestination}
            </h3>

            <button onClick={this.printMarkers}>Show Markers</button>
          </Row>
          <Row>
            <Col xs="6">
              <Col className="overflow-auto" style={{ height: "30em" }}>
                {/* present yellow fever on top of the list */}
                {vaccines
                  .filter(vaccine => vaccine.id === 7)
                  .map(vaccine => (
                    <CardContainer
                      name={"Yellow Fever"}
                      description={vaccine.detail}
                      key={vaccine.id}
                      isImportant={true}
                    />
                  ))}
                {vaccines
                  .filter(vaccine => vaccine.id !== 7 && vaccine.name !== "")
                  .map(vaccine => (
                    <CardContainer
                      name={vaccine.name}
                      description={vaccine.detail}
                      key={vaccine.id}
                    />
                  ))}
              </Col>
            </Col>

            <Col xs="6">
              {/* <MapContainer markers={markers} userLocation={{}} /> */}
              { markers.length > 0 &&
              <Map 
                  id="myMap"
                  options={{
                    center: { lat: 49, lng: -123 },
                    zoom: 8
                  }}
                  onMapLoad={map => {

                      new window.google.maps.Marker({
                        position: { lat: 49, lng: -123 },
                        map: map
                      });
                      markers.map(l => {
                            new window.google.maps.Marker({
                                position: { lat: Number(l.lat), lng: Number(l.lon) },
                                map: map
                            });
                      })
                  }}/>}
            </Col>

            {/* <PlaceSearcher /> */}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  vaccines: state.vaccineReducer.vaccines,
  markers: state.markerReducer.markers,
  curDestination: state.curCountryReducer.currentCountry,
  currentCountryCode: state.curCountryCodeReducer.currentCountryCode0
});

export default withRouter(
  connect(mapStateToProps, { getVaccines, getMarkers, getCountryCode })(Info)
);
