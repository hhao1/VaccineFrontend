import React, { Component } from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  NavbarText
} from 'reactstrap'
import { withRouter } from 'react-router-dom'

import { getLeads } from "../../actions/leads"

export class Header extends Component {

  constructor(props){
    super(props)

    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this)
  }

  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
      this.props.getLeads()
  }

  // shoud update Redux store field
  handleDropdownItemClick(e) {
    console.log(e.target.textContent)

  }

  render() {

    // const onInfoPage this.props.curDestination !== "" ? true : false

    const {
      leads
    } = this.props

    const onInfoPage = true

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Vaccine Finder</NavbarBrand>
        <Nav>
          <NavItem><NavLink href="/">Home</NavLink></NavItem>
          <NavItem><NavLink href="/info">About us</NavLink></NavItem>
          <NavItem><NavLink href="/">Contact Us</NavLink></NavItem>

          {onInfoPage && 
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Change Destination
            </DropdownToggle>
            <DropdownMenu right style={{height:'10em', overflow: 'auto'}}>
              {/* <DropdownItem divider /> */}
              {leads.map( lead => <DropdownItem key={lead.id} onClick={this.handleDropdownItemClick}>{lead.Country_Name}</DropdownItem>)}
            </DropdownMenu>
          </UncontrolledDropdown>}
        </Nav>

        <img className="float-right" src="https://www.countryflags.io/be/shiny/32.png"></img>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leadReducer.leads
});

export default connect(mapStateToProps, {getLeads})(Header);
