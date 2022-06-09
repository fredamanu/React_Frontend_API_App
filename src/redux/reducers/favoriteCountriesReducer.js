import * as actions from "../actions/types"
import { toast } from "react-toastify"

const initialState = {
  favoriteCountries: [],
  count: 0,
}

export const favoriteCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FAVORITE_COUNTRY:
      const isDuplicate = state.favoriteCountries.some((obj) => {
        return obj.name === action.payload.name
      })
      if (isDuplicate) {
        toast.info(`${action.payload.name} already in list`, {
          position: "bottom-left",
        })
        return state
      }

      const favoriteCountry = action.payload
      const newFavoriteCountry = [favoriteCountry, ...state.favoriteCountries]
      toast.success(`${favoriteCountry.name} added to list`, {
        position: "bottom-left",
      })
      return {
        ...state,
        favoriteCountries: newFavoriteCountry,
        count: state.count + 1,
      }

    case actions.REMOVE_FAVORITE_COUNTRY:
      const newFavCountry = state.favoriteCountries.filter((country) => {
        return country.fullname !== action.payload.fullname
      })
      toast.warning(`${action.payload.name} removed from list`, {
        position: "bottom-left",
      })
      return {
        ...state,
        favoriteCountries: newFavCountry,
        count: state.count - 1,
      }

    default:
      return state
  }
}
