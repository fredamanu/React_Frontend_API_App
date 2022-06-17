import * as actions from "./types"

export const setSearchTerm = (keyword: string) => ({
  type: actions.SET_SEARCHTERM,
  payload: keyword,
})


