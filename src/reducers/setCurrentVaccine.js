const initialState = {
  currentVaccine: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_VACCINE":
      return {
        currentVaccine: action.currentVaccine
      };
    default:
      return state;
  }
}
