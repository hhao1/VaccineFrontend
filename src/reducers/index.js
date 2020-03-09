import { combineReducers } from "redux";
import leads from "./leads";
import vaccines from "./vaccines";
import markers from "./markers";
import CountryReducer from "./setCurrentcountry";
import CurVaccineReducer from "./setCurrentVaccine";

export default combineReducers({
  leadReducer: leads,
  vaccineReducer: vaccines,
  markerReducer: markers,
  CountryReducer: CountryReducer,
  CurVaccineReducer: CurVaccineReducer
});
