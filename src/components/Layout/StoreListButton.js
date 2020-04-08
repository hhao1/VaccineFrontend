import React, {useState} from "react";
import { connect } from "react-redux";

import StoreInfoCard from "./StoreInfoCard";

import { getLeads } from "../../actions/leads";
import { setCurrentcountry } from "../../actions/set_current_country";
import { getCountryCode } from "../../actions/set_current_country_code";
import { setCurrentcountryCode } from "../../actions/set_current_country_code";


function StoreListButton (props){

    const [listDisplay, setListDisplay] = useState(false)
    const [countryddDisplay, setCountryddDisplay] = useState(false)

    const onOpen = () => {
        setListDisplay(true)
    }

    const onClose = () => {
        setListDisplay(false)
    }

    const onddOpen = () => {
        setCountryddDisplay(true)
    }

    const onddClose = () => {
        setCountryddDisplay(false)
    }


    props.getLeads();

    if (props.curDestination !== -1) props.getCountryCode(props.curDestination);

    const handleDropdownItemClick = (e) => {
        var Country = this.props.leads.filter(
          lead => lead.Country_Name === e.target.textContent
        )[0];

        var CountryObject = {
          label: Country.Country_Name,
          value: Country.id,
          vaccines: Country.Vaccines
        };

        props.setCurrentcountry(e.target.textContent, CountryObject);
        props.getCountryCode(e.target.textContent);
      }

    const {
        markers,
        leads
    } = props

    return (
        <div className="mobile-only sl-container">
            <div className="sl-btn-container">
                {listDisplay? <button className="sl-btn" onClick={onClose}>Close</button> : <button className="sl-btn" onClick={onOpen}>Show Stores</button>}
                <button className="sl-btn">New Destination</button>
            </div>

            <div className="mobile-store-info-list" style={{display: listDisplay? "block" : "none"}}>
                {listDisplay && <button className="sl-btn" onClick={onClose}>Close</button>}
                {markers.map(maker => (
                    <StoreInfoCard
                        key={maker.id}
                        name={maker.name}
                        number={maker.phone}
                        address={maker.address}
                        hour={maker.hours}
                        injection_certified={maker.injection_certified}
                        certified_travel_consultant={
                            maker.certified_travel_consultant
                        }
                        additional_prescribing_authority={
                            maker.additional_prescribing_authority
                        }
                    />
                ))}
            </div>

            <div className="country-dd-container" style={{display: countryddDisplay? "block" : "none"}}> 

            </div>
            
        </div>
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
  })(StoreListButton);
  