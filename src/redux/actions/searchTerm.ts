import * as actions from "./types"

export const setSearchTermOne = (keyword: string) => ({
  type: actions.SET_SEARCHTERM_COUNTRIES_TABLE,
  payload: keyword,
})

export const setSearchTermTwo = (keyword: string) => ({
  type: actions.SET_SEARCHTERM_COUNTRIES_GRID,
  payload: keyword,
})
