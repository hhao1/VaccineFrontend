import axios from "axios";

import { GET_MARKERS } from "./types";

//GET MARKERS
export const getMarkers = () => dispatch => {
  axios
    .get("http://localhost:8000/api/makers/") // Should change to /api/markers
    .then(res => {
      dispatch({
        type: GET_MARKERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};