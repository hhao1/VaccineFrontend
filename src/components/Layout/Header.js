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
  DropdownItem
} from "reactstrap";

// import { withRouter } from "react-router-dom";

import { getLeads } from "../../actions/leads";
import { setCurrentcountry } from "../../actions/set_current_country";

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
  }

  // shoud update Redux store field
  handleDropdownItemClick(e) {
    this.props.setCurrentcountry(e.target.textContent);
  }

  render() {
    // const onInfoPage this.props.curDestination !== "" ? true : false

    const { leads } = this.props;

    const onInfoPage = true;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand>Vaccine Finder</NavbarBrand>

        <Link className="ml-3" to="/">Home</Link>
        <Link className="ml-3" to="/aboutus">About Us</Link>
        <Link className="ml-3" to="/contact">Contact</Link>

        <Nav>

          {onInfoPage && (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Change Destination
              </DropdownToggle>
              <DropdownMenu right style={{ height: "10em", overflow: "auto" }}>
                {leads.map(lead => (
                  <DropdownItem
                    key={lead.id}
                    onClick={this.handleDropdownItemClick}
                  >
                    {lead.Country_Name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
        </Nav>

        <img
          className="float-right"
          src="https://www.countryflags.io/be/shiny/32.png"
        ></img>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leadReducer.leads
});

export default connect(mapStateToProps, { getLeads, setCurrentcountry })(
  Header
);
