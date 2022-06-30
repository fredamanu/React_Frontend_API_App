import { combineReducers } from "redux"
import { countries } from "./countries.ts"
import { searchTerm } from "./searchTerm.ts"
import { country } from "./country.ts"
import { favoriteCountries } from "./favoriteCountries.ts"
import { selectedCountry } from "./selectedCountry.ts"

const rootReducer = combineReducers({
  countries,
  searchTerm,
  country,
  favoriteCountries,
  selectedCountry,
})

export default rootReducer
