import * as actions from "../actions/types"
import { toast } from "react-toastify"

const initialState = {
  favoriteCountries: [],
  count: 0,
}

export const favoriteCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FAVORITE_COUNTRY:
      const isDuplicate = state.favoriteCountries.some((favoriteCountry) => {
        return favoriteCountry.name === action.payload.name
      })
      if (isDuplicate) {
        toast.info(`${action.payload.name} already in list`, {
          position: "bottom-left",
        })
        return state
      }

      const favoriteCountryToAdd = action.payload
      const newFavoriteCountries = [
        favoriteCountryToAdd,
        ...state.favoriteCountries,
      ]
      toast.success(`${favoriteCountryToAdd.name} added to list`, {
        position: "bottom-left",
      })
      return {
        ...state,
        favoriteCountries: newFavoriteCountries,
        count: state.count + 1,
      }

    case actions.REMOVE_FAVORITE_COUNTRY:
      const newFavCountries = state.favoriteCountries.filter((country) => {
        return country.fullname !== action.payload.fullname
      })
      toast.warning(`${action.payload.name} removed from list`, {
        position: "bottom-left",
      })
      return {
        ...state,
        favoriteCountries: newFavCountries,
        count: state.count - 1,
      }

    default:
      return state
  }
}
