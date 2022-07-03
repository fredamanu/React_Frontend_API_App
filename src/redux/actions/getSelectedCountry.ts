import * as actions from "./types"


export const getSelectedCountry = (name: string | undefined)=> ({
  type: actions.GET_SELECTED_COUNTRY,
  payload: name,
})
