import * as actions from "../actions/types"
import { ActionTypes } from "../../typescript/types"

const initialState = {
  keywordTable: "",
  keywordGrid: "",
}

export const searchTermReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.SET_SEARCHTERM_COUNTRIES_TABLE:
      return {
        ...state,
        keywordTable: action.payload,
        keywordGrid: "",
      }
    case actions.SET_SEARCHTERM_COUNTRIES_GRID:
      return {
        ...state,
        keywordGrid: action.payload,
        keywordTable: "",
      }
    default:
      return state
  }
}
