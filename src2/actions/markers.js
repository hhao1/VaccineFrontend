import axios from "axios";

import { GET_MARKERS } from "./types";

//GET MARKERS
export const getMarkers = () => dispatch => {
  axios
    .get("http:///3.22.44.25:8000/api/makers/", {
      headers: { "Access-Control-Allow-Origin": true }
    }) // Should change to /api/markers
    .then(res => {
      dispatch({
        type: GET_MARKERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
