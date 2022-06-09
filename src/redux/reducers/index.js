import { combineReducers } from "redux"
import { fetchCountriesReducer } from "./fetchCountriesReducer"
import { searchTermReducer } from "./searchTermReducer"
import { fetchCountryReducer } from "./fetchCountryReducer"
import { favoriteCountriesReducer } from "./favoriteCountriesReducer"
import { getSelectedCountryReducer } from "../reducers/getSelectedCountry"

const rootReducer = combineReducers({
  fetchCountriesReducer,
  searchTermReducer,
  fetchCountryReducer,
  favoriteCountriesReducer,
  getSelectedCountryReducer,
})

export default rootReducer
