import * as actions from "./types"
import { FavoriteCountry } from "../../typescript/types"

export const addFavoriteCountry = (favoriteCountry:FavoriteCountry) => ({
  type: actions.ADD_FAVORITE_COUNTRY,
  payload: favoriteCountry,
})

export const removeFavoriteCountry = (favoriteCountry: FavoriteCountry) => ({
  type: actions.REMOVE_FAVORITE_COUNTRY,
  payload: favoriteCountry,
})
