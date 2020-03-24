import { vaccineObject } from "../actions/set_current_vaccine";

const initialState = {
  currentVaccine: -1,
  vaccineObject: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_VACCINE":
      return {
        currentVaccine: action.currentVaccine,
        vaccineObject: action.vaccineObject
      };
    default:
      return state;
  }
}
