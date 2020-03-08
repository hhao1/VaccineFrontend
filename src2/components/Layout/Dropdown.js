import React, { Component, Fragment } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

export class Dropdown extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <Fragment>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Country</Form.Label>
          <Form.Control as="select">
            {this.props.leads.map(lead => (
              <option key={lead.id}>{lead.Country_Name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leadReducer.leads
});

export default connect(mapStateToProps, { getLeads })(Dropdown);
