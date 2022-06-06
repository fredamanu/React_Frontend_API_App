import * as actions from "../actions/types"

const initialState = {
  keywordOne: "",
  keywordTwo: "",
}

export const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SEARCHTERM_ONE:
      return {
        ...state,
        keywordOne: action.payload,
        keywordTwo: "",
      }
    case actions.SET_SEARCHTERM_TWO:
      return {
        ...state,
        keywordTwo: action.payload,
        keywordOne: "",
      }
    default:
      return state
  }
}
