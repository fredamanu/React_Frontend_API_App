import * as actions from "../actions/types"

const initialState = {
  keyword: "",
}

export const searchTermReducer = (state = initialState, action) => {
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
