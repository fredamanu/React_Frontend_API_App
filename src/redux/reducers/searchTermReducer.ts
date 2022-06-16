import * as actions from "../actions/types"
import { ActionTypes } from "../../typescript/types"

const initialState = {
  keywordOne: "",
  keywordTwo: "",
}

export const searchTermReducer = (state = initialState, action: ActionTypes) => {
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
