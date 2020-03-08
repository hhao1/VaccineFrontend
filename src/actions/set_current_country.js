export const setCurrentcountry = currentCountry => {
  return dispatch => {
    dispatch({ type: "SET_CURRENT_COUNTRY", currentCountry });
  };
};
