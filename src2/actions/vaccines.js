import axios from "axios";

import { GET_VACCINES } from "./types";

//GET LEADS
export const getVaccines = () => dispatch => {
  axios
    .get("https://database.vaccinefinders.ca/api/vaccines/", {
      headers: {
        "Access-Control-Allow-Origin": "https://database.vaccinefinders.ca/"
      }
    })
    .then(res => {
      dispatch({
        type: GET_VACCINES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
