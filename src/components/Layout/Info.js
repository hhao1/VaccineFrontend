import React, { Component } from "react";
import { Container, Row, Col, Jumbotron} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CardContainer from "./CardContainer";
import Map from './Map'

import { getVaccines } from "../../actions/vaccines";
import { getMarkers } from "../../actions/markers";

class Info extends Component {
  static propTypes = {
    vaccines: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired
  };

  componentWillMount() {
    this.props.getVaccines();
    this.props.getMarkers();
    this.getLocation();
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

  render() {
    const { vaccines, markers, curDestination } = this.props;

    markers.map(m=> console.log(m.lat))
    return (
      <Jumbotron className="container mt-4" style={{ height: "40em" }}>
        <Container>
          <Row>
            <h3 className="text-secondary">
              Vaccines you should get before travelling to {curDestination}
            </h3>
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
                      // markers.map(l => {
                      //       new window.google.maps.Marker({
                      //           position: { lat: l.lat, lng: l.lon },
                      //           map: map
                      //       });
                      // })

                      // new window.google.maps.Marker({
                      //     position: { lat: markers[0].lat, lng: markers[0].lon },
                      //     map: map
                      // });
                  }}/>
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
  curDestination: state.curCountryReducer.currentCountry
});

export default withRouter(
  connect(mapStateToProps, { getVaccines, getMarkers })(Info)
);
