import axios from "axios";

import { GET_VACCINES } from "./types";

//GET LEADS
export const getVaccines = () => dispatch => {
  axios
    .get("http:///3.22.44.25:8000/api/vaccines/")
    .then(res => {
      dispatch({
        type: GET_VACCINES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
