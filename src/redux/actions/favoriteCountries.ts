import * as actions from "./types"
import { FavoriteCountry } from "../../typescript/types"

export const addFavoriteCountry = (obj:FavoriteCountry) => ({
  type: actions.ADD_FAVORITE_COUNTRY,
  payload: obj,
})

export const removeFavoriteCountry = (obj: FavoriteCountry) => ({
  type: actions.REMOVE_FAVORITE_COUNTRY,
  payload: obj,
})
