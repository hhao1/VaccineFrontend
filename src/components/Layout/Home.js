import React, { Component } from "react";
import { Row, Col, Jumbotron, Input, Button } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Select from "react-select";
import "../../css/Home.css";

import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";
import { setCurrentcountry } from "../../actions/set_current_country";
import { setCustomerLocation } from "../../actions/set_customer_location";
import Background from "../images/background.jpg";
var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
    this.handleSelect = this.handleSelect.bind(this);
    // this.getLocation = this.getLocation.bind(this);
  }

  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
    // this.getLocation();
    const script = document.createElement("script");

    script.src = `https://maps.google.com/maps/api/js?key=AIzaSyAKNRGAXmKMtn96uGjEuiy-zVmHrSPcEgg&libraries=places`;
    script.async = true;

    document.body.appendChild(script);
  }

  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.getCoordinates);
  //   } else {
  //     alert("Geolocation is not supported by your browser!");
  //   }
  // }

  getCoordinates(position) {
    console.log(position);
  }
  handleChange = address => {
    this.setState({ address });
  };
  handleSelectAddress = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.setCustomerLocation(latLng))
      .catch(error => console.error("Error", error));
  };
  handleSelect(e) {
    this.props.setCurrentcountry(e.label, e);
    // this.props.setCurrentcountry(e.label)
  }

  render() {
    const list = [];

    this.props.leads.forEach(lead => {
      list.push({
        label: lead.Country_Name,
        value: lead.id,
        vaccines: lead.Vaccines
      });
    });

    return (
      <section className="background" style={sectionStyle}>
        <Jumbotron
          className="container mt-4"
          style={{
            height: "60em",
            backgroundColor: "rgba(233, 236, 239, 0.2)"
          }}
        >
          <h3 style={{ color: "white" }}>Find Your Destination</h3>
          <Row>
            <Col xs="5">
              <Select
                options={list}
                placeholder="Country"
                isSearchable={true}
                onChange={this.handleSelect}
              />
            </Col>
            <Col xs="4">
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelectAddress}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Your Address",
                        className: "location-search-input"
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </Col>
            <Col xs="2">
              {/* <button onClick={this.getLocation}>Get Position</button> */}
              <LinkContainer to="/info">
                {/* <Button color="warning" onClick={this.handleButtonClick()}>
                  Go Now
                </Button> */}
                <Button color="warning">
                  <Link to="/info">Go Now</Link>
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Jumbotron>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leadReducer.leads
});

export default withRouter(
  connect(mapStateToProps, {
    getLeads,
    setCurrentcountry,
    setCustomerLocation
  })(Home)
);
