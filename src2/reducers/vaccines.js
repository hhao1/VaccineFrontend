import { GET_VACCINES } from "../actions/types.js";

const initialState = {
  vaccines: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VACCINES:
      return {
        ...state,
        vaccines: action.payload
      };
    default:
      return state;
  }
}
