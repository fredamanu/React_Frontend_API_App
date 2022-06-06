import * as actions from "./types"

export const addFavoriteCountry = (obj) => ({
  type: actions.ADD_FAVORITE_COUNTRY,
  payload: obj,
})

export const removeFavoriteCountry = (obj) => ({
  type: actions.REMOVE_FAVORITE_COUNTRY,
  payload: obj,
})
