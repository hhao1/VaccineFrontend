import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Breadcrumb, 
  BreadcrumbItem
} from "reactstrap";

// import { withRouter } from "react-router-dom";

import { getLeads } from "../../actions/leads";
import { setCurrentcountry } from "../../actions/set_current_country";
import { getCountryCode } from "../../actions/set_current_country_code";
import { setCurrentcountryCode } from "../../actions/set_current_country_code";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
  }

  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();

    if (this.props.curDestination !== -1)
      this.props.getCountryCode(this.props.curDestination);
  }

  // shoud update Redux store field
  handleDropdownItemClick(e) {
    var Country = this.props.leads.filter(
      lead => lead.Country_Name === e.target.textContent
    )[0];
    var CountryObject = {
      label: Country.Country_Name,
      value: Country.id,
      vaccines: Country.Vaccines
    };
    this.props.setCurrentcountry(e.target.textContent, CountryObject);
    this.props.getCountryCode(e.target.textContent);
  }

  render() {
    const { leads, currentCountryCode, curDestination } = this.props;

    const onInfoPage = true;
    var display = "Destination";
    if (curDestination !== -1) {
      display = curDestination;
    }


    return (

      <Breadcrumb>
        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/aboutus">About Us</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/contact">Contact</Link></BreadcrumbItem>
        {/* {onInfoPage && <BreadcrumbItem>Destination</BreadcrumbItem> */}
      </Breadcrumb>

      // <Navbar color="light" light expand="md">
      //   <NavbarBrand>Vaccine Finder</NavbarBrand>

      //   <Link className="ml-3" to="/">
      //     Home
      //   </Link>
      //   <Link className="ml-3" to="/aboutus">
      //     About Us
      //   </Link>
      //   <Link className="ml-3" to="/contact">
      //     Contact
      //   </Link>

      //   <Nav>
      //     {onInfoPage && (
      //       <UncontrolledDropdown nav inNavbar>
      //         <DropdownToggle nav caret>
      //           {display}
      //         </DropdownToggle>
      //         <DropdownMenu right style={{ height: "10em", overflow: "auto" }}>
      //           {leads.map(lead => (
      //             <DropdownItem
      //               tag={Link}
      //               to="/info"
      //               key={lead.id}
      //               onClick={this.handleDropdownItemClick}
      //             >
      //               {lead.Country_Name}
      //             </DropdownItem>
      //           ))}
      //         </DropdownMenu>
      //       </UncontrolledDropdown>
      //     )}
      //   </Nav>

      //   {currentCountryCode !== -1 && (
      //     <img
      //       className="float-right"
      //       src={
      //         "https://www.countryflags.io/" +
      //         currentCountryCode +
      //         "/shiny/32.png"
      //       }
      //     ></img>
      //   )}
      // </Navbar>
    );
  }
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
