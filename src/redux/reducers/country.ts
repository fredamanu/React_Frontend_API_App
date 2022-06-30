import * as actions from "../actions/types"
import { ActionTypes, CountryState } from "../../typescript"

const initialState : CountryState  = {
  data: [],
  loading: false,
  error: null,
}

export const country = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actions.FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case actions.FETCH_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
