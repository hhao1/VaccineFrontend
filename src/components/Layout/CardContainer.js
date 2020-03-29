import React, { Component } from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { setCurrentVaccine } from "../../actions/set_current_vaccine";
import { withRouter, Link } from "react-router-dom";
import { getVaccines } from "../../actions/vaccines";

import { connect } from "react-redux";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  componentDidMount() {}

  handleButtonClick() {
    this.props.setCurrentVaccine(this.props.name, this.props);
  }

  render() {
    const { name, description, isImportant } = this.props;

    const importantBodyStyle = {
      border: isImportant ? "2px solid orange" : "none"
    };

    return (
      <Card body className="pb-0 mb-2" style={importantBodyStyle}>
        <CardTitle className="mb-1">
          <strong className="mr-auto text-primary">{name}</strong>
          {isImportant && (
            <strong className="mr-auto text-danger ml-2">{"(Required)"}</strong>
          )}
        </CardTitle>
        <CardText className="mb-0" style={{ lineHeight: "1em" }}>
          <small className="text-muted">{description}</small>
        </CardText>
        <Row>
          <Col xs="6">
            <LinkContainer to="/detail">
              <Link to="/detail" onClick={this.handleButtonClick}>
                Learn More
              </Link>
            </LinkContainer>
          </Col>
          {/* <Col xs="2"><Button color="link" size="sm">Locate</Button></Col> */}
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  vaccines: state.vaccineReducer.vaccines
});
export default withRouter(
  connect(mapStateToProps, { getVaccines, setCurrentVaccine })(CardContainer)
);
