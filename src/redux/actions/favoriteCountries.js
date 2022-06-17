import * as actions from "./types"

export const addFavoriteCountry = (favoriteCountry) => ({
  type: actions.ADD_FAVORITE_COUNTRY,
  payload: favoriteCountry,
})

export const removeFavoriteCountry = (favoriteCountry) => ({
  type: actions.REMOVE_FAVORITE_COUNTRY,
  payload: favoriteCountry,
})
