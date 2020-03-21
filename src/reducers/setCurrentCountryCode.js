import { GET_COUNTRY_CODE } from "../actions/types.js";


const initialState = {
  currentCountryCode: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY_CODE:
        return {
            ...state,
            currentCountryCode: action.payload
        };
    
    case "SET_CURRENT_COUNTRY_CODE":
        return {
            currentCountryCode: action.currentCountryCode
        }
    default:
      return state;
  }
}
