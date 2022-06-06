import * as actions from "../actions/types"

const initialState = {
  country: [],
  loading: false,
  error: null,
}

export const fetchCountryReducer = (state = initialState, action) => {
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
