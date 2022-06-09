import * as actions from "../actions/types"

const initialState = {
  selectedCountry: "",
}

export const getSelectedCountryReducer = (state = initialState, action) => {
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
