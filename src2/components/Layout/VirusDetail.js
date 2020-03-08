import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Row, Col, Jumbotron} from 'reactstrap';


class VirusDetail extends Component {

    render(){

        return(

            <Jumbotron className="container mt-4">
                <Row>
                    <Col sm={{ size: '6', offset: 1 }} className="border border-light rounded" id="vaccine-info" style={{height: '30em'}}>
                        Tabs
                    </Col>

                    <Col sm={{ size: '2', offset: 1 }} className="border border-secondary" id="fact-table" style={{height: '10em'}}>
                        Facts
                    </Col>
                </Row>
            </Jumbotron>
            
        )
    }
}

export default withRouter(connect(null, null)(VirusDetail));