import { GET_MARKERS } from "../actions/types.js";

const initialState = {
  markers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MARKERS:
      return {
        ...state,
        markers: action.payload
      };
    default:
      return state;
  }
}
