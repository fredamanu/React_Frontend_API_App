import * as actions from "./types"

export const setSearchTerm = (keyword) => ({
  type: actions.SET_SEARCHTERM,
  payload: keyword,
})

// export const setSearchTermCountriesGrid = (keyword) => ({
//   type: actions.SET_SEARCHTERM_COUNTRIES_GRID,
//   payload: keyword,
// })
