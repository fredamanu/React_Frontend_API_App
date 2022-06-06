import { combineReducers } from "redux"
import { fetchCountriesReducer } from "./fetchCountriesReducer"
import { searchTermReducer } from "./searchTermReducer"
import { fetchCountryReducer } from "./fetchCountryReducer"
import { favoriteCountriesReducer } from "./favoriteCountriesReducer"

const rootReducer = combineReducers({
  fetchCountriesReducer,
  searchTermReducer,
  fetchCountryReducer,
  favoriteCountriesReducer,
})

export default rootReducer
