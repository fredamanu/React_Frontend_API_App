import * as actions from "../actions/types"
import {ActionTypes} from "../../typescript"

const initialState = {
  name: "",
}

export const selectedCountry = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.GET_SELECTED_COUNTRY:
      return {
        ...state,
        name: action.payload,
      }

    default:
      return state
  }
}
