import React, {useState} from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getLeads } from "../../actions/leads";
import { setCurrentcountry } from "../../actions/set_current_country";
import { getCountryCode } from "../../actions/set_current_country_code";
import { setCurrentcountryCode } from "../../actions/set_current_country_code";

function Header (props){
    
    const { leads, currentCountryCode, curDestination } = props;

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <Breadcrumb>
            {/* <p>Find Vaccine</p> */}
            Find Vaccine
            <BreadcrumbItem style={{marginLeft: "1rem"}}><Link to="/">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/aboutus">About</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/contact">Contact</Link></BreadcrumbItem>
        </Breadcrumb>
    )
}

const mapStateToProps = state => ({
    leads: state.leadReducer.leads,
    curDestination: state.curCountryReducer.currentCountry,
    currentCountryCode: state.curCountryCodeReducer.currentCountryCode,
    headerOpen: state.headerOpen
  });
  
export default connect(mapStateToProps, {
    getLeads,
    setCurrentcountry,
    getCountryCode,
    setCurrentcountryCode
  })(Header);