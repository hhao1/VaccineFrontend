import React, { Component } from "react";
import { Card, CardTitle, CardText, FormGroup, Label, Input } from "reactstrap";
import Info from "./Info";

class StoreInfoCard extends Component {
  render() {
    const {
      name,
      number,
      hour,
      address,
      injection_certified,
      certified_travel_consultant,
      additional_prescribing_authority
    } = this.props;

    const openhour = hour == null ? "/" : hour;

    const hourStyle = {
      color: hour == null ? "rgb(234,236, 239)" : "gray",
      display: "inline"
    };

    const generalStyle = {
      color: "gray",
      display: "inline"
    };

    return (
      <Card body>
        <h3>{name}</h3>
        <h4>
          Phone: <p style={generalStyle}>{number}</p>
        </h4>
        <h4>
          Address: <p style={generalStyle}>{address}</p>
        </h4>
        <FormGroup check disabled>
          <Label check>
            <Input type="checkbox" defaultChecked={injection_certified} />{" "}
            Injection Certified
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input
              type="checkbox"
              defaultChecked={certified_travel_consultant}
            />{" "}
            Certified Travel Consultant
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input
              type="checkbox"
              defaultChecked={additional_prescribing_authority}
            />{" "}
            Additional Prescribing Authority
          </Label>
        </FormGroup>
      </Card>
    );
  }
}

export default StoreInfoCard;
