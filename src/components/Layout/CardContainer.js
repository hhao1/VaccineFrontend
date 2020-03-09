import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { setCurrentVaccine } from "../../actions/set_current_vaccine";
import { withRouter } from "react-router-dom";
import { getVaccines } from "../../actions/vaccines";

import { connect } from "react-redux";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  componentDidMount() {}

  handleButtonClick(vaccine) {
    console.log(this.props);
    this.props.setCurrentVaccine(vaccine);
  }
  render() {
    const { isImportant } = this.props;

    const importantBodyStyle = {
      border: isImportant ? "2px solid orange" : "none"
    };

    return (
      <Card body className="pb-0 mb-2" style={importantBodyStyle}>
        <CardTitle className="mb-1">
          <strong className="mr-auto text-primary">{this.props.name}</strong>
          {isImportant && (
            <strong className="mr-auto text-danger ml-2">{"(Required)"}</strong>
          )}
        </CardTitle>
        <CardText className="mb-0" style={{ lineHeight: "1em" }}>
          <small className="text-muted">{this.props.description}</small>
        </CardText>
        <Row>
          <Col xs="4">
            <LinkContainer to="/detail">
              <Button
                color="link"
                size="sm"
                onClick={() => this.handleButtonClick(this.props.name)}
              >
                Learn more
              </Button>
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
