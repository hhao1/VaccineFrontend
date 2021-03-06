const initialState = {
  currentCountry: -1,
  countryObject: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_COUNTRY":
      return {
        currentCountry: action.currentCountry,
        countryObject: action.countryObject
      };
    default:
      return state;
  }
}
