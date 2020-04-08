import React, {useState} from "react";

import StoreInfoCard from "./StoreInfoCard";


function StoreListButton (props){

    const [listDisplay, setListDisplay] = useState(false)

    const onOpen = () => {
        setListDisplay(true)
    }

    const onClose = () => {
        setListDisplay(false)
    }

    const {
        markers
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
            
        </div>
    )
}

export default StoreListButton;