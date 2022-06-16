import * as actions from "./types"


export const setSearchTermOne = (keyword: string) => ({
  type: actions.SET_SEARCHTERM_ONE,
  payload: keyword,
})

export const setSearchTermTwo = (keyword: string) => ({
  type: actions.SET_SEARCHTERM_TWO,
  payload: keyword,
})
