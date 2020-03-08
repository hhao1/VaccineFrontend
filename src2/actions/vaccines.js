import axios from "axios";

import { GET_VACCINES } from "./types";

//GET LEADS
export const getVaccines = () => dispatch => {
  axios
    .get("http://localhost:8000/api/vaccines/", {
      headers: { "Access-Control-Allow-Origin": "http://localhost:3000" }
    })
    .then(res => {
      dispatch({
        type: GET_VACCINES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
