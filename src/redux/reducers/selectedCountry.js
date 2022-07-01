import * as actions from "../actions/types"

const initialState = {
  name: "",
}

export const selectedCountry = (state = initialState, action) => {
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
