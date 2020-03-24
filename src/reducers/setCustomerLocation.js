const initialState = {
  CustomerLatLng: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CUSTOMER_LOCATION":
      return {
        CustomerLatLng: action.latLng
      };
    default:
      return state;
  }
}
