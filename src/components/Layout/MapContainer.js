import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

import { Key } from "../../config";
import markers from "../../reducers/markers";

class MapContainer extends Component {
  //
  render() {
    const { markers, mapheight } = this.props;

    const mapStyles = {
      width: "90%",
      height: mapheight ? mapheight : "70%",
      border: "1px solid gray"
    };

    const userLocation = {};

    var bounds = new this.props.google.maps.LatLngBounds();

    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom={10}
        initialCenter={userLocation}
        // bounds={bounds}
      >
        {markers.map(marker => (
          <Marker
            name={marker.name}
            position={{ lat: marker.lat, lng: marker.lon }}
            key={marker.id}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: Key,
  libraries: ["places"]
})(MapContainer);
