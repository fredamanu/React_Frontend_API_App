import * as actions from "../actions/types"
import {ActionTypes} from "../../typescript/types"

const initialState = {
  selectedCountry: "",
}

export const getSelectedCountryReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.GET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      }

    default:
      return state
  }
}
