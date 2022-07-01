import { combineReducers } from "redux"
import { countries } from "./countries"
import { searchTerm } from "./searchTerm"
import { country } from "./country"
import { favoriteCountries } from "./favoriteCountries"
import { selectedCountry } from "./selectedCountry"

const rootReducer = combineReducers({
  countries,
  searchTerm,
  country,
  favoriteCountries,
  selectedCountry,
})

export default rootReducer
