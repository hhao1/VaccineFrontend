import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Button} from "reactstrap";
import { Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Select from 'react-select'

import PropTypes from "prop-types"
import { getLeads } from "../../actions/leads"



class Home extends Component {

    constructor(props) {
        super(props)

        this.getLocation = this.getLocation.bind(this)
    }

    static propTypes = {
        leads: PropTypes.array.isRequired
    };
    
    componentDidMount() {
        this.props.getLeads()
        this.getLocation()
    }

    getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates)
        }
        else{
            alert("Geolocation is not supported by your browser!")
        }
    }

    getCoordinates(position){
        console.log(position)
    }


    render(){

        const list = []

        this.props.leads.forEach( lead => {
            list.push({label: lead.Country_Name, value: lead.id})
        })

        return(

            <Jumbotron className="container mt-4" style={{height: '20em'}}>
                <h3>Find Your Destination</h3>
                <Row>
                    <Col xs="5"><Select options={list} placeholder="Country" isSearchable={true}/></Col>
                    <Col xs="4">
                        {/* <button onClick={this.getLocation}>Get Position</button> */}
                        <Button color="warning" onClick={this.getLocation()}>Go Now</Button>
                    </Col>
                </Row>
                
            </Jumbotron>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leadReducer.leads
  });

export default withRouter(connect(mapStateToProps, {getLeads})(Home));