import React, { Component, userState } from "react";
import { Container, Row, Col, Jumbotron, Badge, Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MapContainer from "./MapContainer";
import CardContainer from "./CardContainer";
import PlaceSearcher from "./PlaceSearcher";

import { getVaccines } from "../../actions/vaccines";
import { getMarkers } from "../../actions/markers";

class Info extends Component {
  static propTypes = {
    vaccines: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired
  };

  componentDidMount() {
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
    console.log(
      "lat:" + position.coords.latitude + " lng:" + position.coords.longitude
    );
  }

  render() {
    const { vaccines, markers } = this.props;
    console.log(markers);
    // this should be in Redux
    const curDestination = "China";

    return (
      <Jumbotron className="container mt-4" style={{ height: "40em" }}>
        <Container>
          <Row>
            <h3 className="text-secondary">
              Vaccines you should get befroe travelling to {curDestination}
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
              <MapContainer markers={markers} userLocation={{}} />
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
  markers: state.markerReducer.markers
});

export default withRouter(
  connect(mapStateToProps, { getVaccines, getMarkers })(Info)
);
