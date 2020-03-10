import React, { Component } from "react";
import { Row, Col, Jumbotron, Input } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Select from "react-select";
import "../../css/Home.css";

import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";
import { setCurrentcountry } from "../../actions/set_current_country";
import Background from "../images/background.jpg";

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
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
    console.log(position);
  }

  handleSelect(e) {
    this.props.setCurrentcountry(e.label);
    // this.props.setCurrentcountry(e.label)
  }

  render() {
    const list = [];

    this.props.leads.forEach(lead => {
      list.push({ label: lead.Country_Name, value: lead.id });
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
          <h3 style={{color: 'white'}}>Find Your Destination</h3>
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
              <Input placeholder="Your Post Code or Address" />
            </Col>
            <Col xs="2">
              {/* <button onClick={this.getLocation}>Get Position</button> */}
              <LinkContainer to="/info">
                {/* <Button color="warning" onClick={this.handleButtonClick()}>
                  Go Now
                </Button> */}
                <Link to="/info">Go Now</Link>
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
  connect(mapStateToProps, { getLeads, setCurrentcountry })(Home)
);
