import * as actions from "./types"


export const getSelectedCountry = (name: string)=> ({
  type: actions.GET_SELECTED_COUNTRY,
  payload: name,
})
