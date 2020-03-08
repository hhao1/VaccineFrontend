const initialState = {
  currentCountry: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_COUNTRY":
      return {
        currentCountry: action.currentCountry
      };
    default:
      return state;
  }
}
