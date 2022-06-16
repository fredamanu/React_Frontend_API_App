import { combineReducers } from "redux"
import { fetchCountriesReducer } from "./fetchCountriesReducer.ts"
import { searchTermReducer } from "./searchTermReducer.ts"
import { fetchCountryReducer } from "./fetchCountryReducer.ts"
import { favoriteCountriesReducer } from "./favoriteCountriesReducer.ts"
import { getSelectedCountryReducer } from "../reducers/getSelectedCountry.ts"

const rootReducer = combineReducers({
  fetchCountriesReducer,
  searchTermReducer,
  fetchCountryReducer,
  favoriteCountriesReducer,
  getSelectedCountryReducer,
})

export default rootReducer
