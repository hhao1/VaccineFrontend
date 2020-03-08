import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

import {connect} from 'react-redux'

class CardContainer extends Component {


    render(){
        
        const {
            isImportant
        } = this.props

        const importantBodyStyle = {border: isImportant? '2px solid orange' : 'none'}

        return(
             <Card body className="pb-0 mb-2" style={importantBodyStyle}>
                <CardTitle className="mb-1">
                    <strong className="mr-auto text-primary">{this.props.name}</strong>
                    {isImportant && <strong className="mr-auto text-danger ml-2">{"(Required)"}</strong>}
                </CardTitle>
                <CardText className="mb-0" style={{'lineHeight': '1em'}}><small className="text-muted">{this.props.description}</small></CardText>
                <Row>
                    <Col xs="4"><Button color="link" size="sm">Learn more</Button></Col>
                    <Col xs="2"><Button color="link" size="sm">Locate</Button></Col>
                </Row>
            </Card>
        )
    }

}

export default CardContainer;