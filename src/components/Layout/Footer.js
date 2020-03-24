import React, { Component } from "react";

import "../../css/footer.css"

class Footer extends Component {

    render(){

        return(
            <div className="footer bg-dark text-white w-100">
                <div>Logo and description</div>
                <div>Some options</div>
                <div>Contact Info</div>
            </div>
        )
    }
}

export default Footer;