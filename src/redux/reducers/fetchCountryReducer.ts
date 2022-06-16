import * as actions from "../actions/types"
import { ActionTypes, FetchCountryReducerInitialState } from "../../typescript/types"

const initialState : FetchCountryReducerInitialState  = {
  country: [],
  loading: false,
  error: null,
}

export const fetchCountryReducer = (state = initialState, action: ActionTypes) => {
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
        country: action.payload,
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
