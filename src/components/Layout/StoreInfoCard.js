import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import Info from "./Info";

class StoreInfoCard extends Component {

    render(){

        const {
            name,
            number,
            hour,
            address
        } = this.props;

        const openhour = hour==null? "/" : hour;

        const hourStyle = {
            color: hour==null? "rgb(234,236, 239)" : "gray",
            display: "inline"
        }

        const generalStyle = {
            color: "gray",
            display: "inline"
        }

        return(

            <Card body>
                <h3>{name}</h3>
                <h4>Phone: <p style={generalStyle}>{number}</p></h4>
                <h4>Open Hours: <p style={hourStyle}>{openhour}</p></h4>
                <h4>Address: <p style={generalStyle}>{address}</p></h4>
            </Card>
        )
    }
}

export default StoreInfoCard;
  