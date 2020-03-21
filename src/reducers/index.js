import { combineReducers } from "redux";
import leadReducer from "./leads";
import vaccineReducer from "./vaccines";
import markerReducer from "./markers";
import curCountryReducer from "./setCurrentcountry";
import CurVaccineReducer from "./setCurrentVaccine";
import curCountryCodeReducer from "./setCurrentCountryCode"

export default combineReducers({
  leadReducer: leadReducer,
  vaccineReducer: vaccineReducer,
  markerReducer: markerReducer,
  curCountryReducer: curCountryReducer,
  CurVaccineReducer: CurVaccineReducer,
  curCountryCodeReducer: curCountryCodeReducer
});
