import axios from "axios";

import { GET_COUNTRY_CODE } from "./types";



//GET LEADS
export const getCountryCode = (name) => dispatch => {
  axios
    .get("https://restcountries.eu/rest/v2/name/"+name+"?fullText=true")
    .then(res => {
      dispatch({
        type: GET_COUNTRY_CODE,
        payload: res.data[0].alpha2Code
      });
    })
    .catch(err => console.log(err));
};


export const setCurrentcountryCode = currentCountryCode => ({
  type: "SET_CURRENT_COUNTRY_CODE",
  currentCountryCode
})