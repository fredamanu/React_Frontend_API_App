import * as actions from "./types"

export const setSearchTermOne = (keyword) => ({
  type: actions.SET_SEARCHTERM_COUNTRIES_TABLE,
  payload: keyword,
})

export const setSearchTermTwo = (keyword) => ({
  type: actions.SET_SEARCHTERM_COUNTRIES_GRID,
  payload: keyword,
})
