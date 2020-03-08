import React, { useState } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";


function PlaceSearcher() {

    const [address, setAddress] = useState("");

    const [city, setCity] = useState("")

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    const handleSelect = value => {

        console.log(value)
        
        geocodeByAddress(value).then(
            address => {

                setAddress(address)

                setCity(address[0].address_components.filter(addr => (addr.types[0] === "locality"))[0].long_name)

                // console.log(address[0].address_components.filter(addr => (addr.types[0] === "locality")))
                getLatLng(address[0]).then(
                    latlng => {
                        setCoordinates(latlng)
                    }
                )
            }
        )
    };

    const inputStyle = {border: '2px solid gray'}

    return(
        <div>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>

                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => 
                    <div>
                        <h5>lat: {coordinates.lat}</h5>
                        <h5>lng: {coordinates.lng}</h5>
                        <h5>city: {city}</h5>
                        <input style={inputStyle} {...getInputProps({ placeholder: "Enter Address"} )}></input>
                        <div>
                            {loading? <div>loading </div> : ""}

                            {suggestions.map( suggestion => {

                                const style={
                                    background: suggestion.active? "red" : "white"
                                }

                                return (
                                    <div key={suggestion.id} {...getSuggestionItemProps(suggestion, {style})}>
                                        {suggestion.description}
                                    </div>
                                )
                                    
                            })}
                        </div>
                    </div>
                }
            </PlacesAutocomplete>
        </div>
    )

}

export default PlaceSearcher


