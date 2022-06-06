import * as actions from "../actions/types"

const initialState = {
  countries: [],
  loading: false,
  error: null,
}

export const fetchCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actions.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      }
    case actions.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
