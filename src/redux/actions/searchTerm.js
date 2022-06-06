import * as actions from "./types"

export const setSearchTermOne = (keyword) => ({
  type: actions.SET_SEARCHTERM_ONE,
  payload: keyword,
})

export const setSearchTermTwo = (keyword) => ({
  type: actions.SET_SEARCHTERM_TWO,
  payload: keyword,
})
