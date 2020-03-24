import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Jumbotron
} from "reactstrap";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { setCurrentVaccine } from "../../actions/set_current_vaccine";

// import MapPopup from './MapPopup'

function VaccineDetail(props) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Jumbotron className="container mt-5">
      <Row>
        <Col
          sm={{ size: "4", offset: 1 }}
          id="vaccine-title"
          style={{ height: "30em", fontFamily: "'Overpass', sans-serif" }}
        >
          <h1 style={{ fontSize: "3.5em", color: "gray" }}>
            What You Need To Know About
          </h1>
          <h2 style={{ color: "red" }}>{props.currentVaccine}</h2>

          {/* //{this.props.currentVaccine} */}
          {/* <Button className="w-75 border-0 mt-8" style={{'background': 'orange', 'color': 'white'}}>Nearest Store</Button> */}
          {/* <MapPopup/> */}
        </Col>

        <Col
          sm={{ size: "6" }}
          className="border border-light rounded"
          id="vaccine-info"
          style={{ height: "30em" }}
        >
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                {" "}
                Description
              </NavLink>
            </NavItem>

            <NavItem className="ml-2">
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                {" "}
                Extra Notice
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent
            activeTab={activeTab}
            className="mt-4"
            style={{ fontFamily: "'Source Serif Pro', serif" }}
          >
            <TabPane tabId="1" className="p-3">
              <p>{props.vaccineObject.description}</p>
            </TabPane>
            <TabPane tabId="2">{props.vaccineObject.notice}</TabPane>
          </TabContent>
        </Col>
      </Row>
    </Jumbotron>
  );
}

const mapStateToProps = state => ({
  currentVaccine: state.CurVaccineReducer.currentVaccine,
  vaccineObject: state.CurVaccineReducer.vaccineObject
});

export default withRouter(
  connect(mapStateToProps, { setCurrentVaccine })(VaccineDetail)
);
