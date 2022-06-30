import * as actions from "../actions/types"
import { ActionTypes } from "../../typescript"

const initialState = {
  keyword: "",
  
}

export const searchTerm = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.SET_SEARCHTERM:
      return {
        ...state,
        keyword: action.payload,
        
      }
   
    default:
      return state
  }
}
