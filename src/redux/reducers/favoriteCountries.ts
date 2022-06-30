import * as actions from "../actions/types"
import { ActionTypes, FavoriteCountries } from "../../typescript"
import { toast } from "react-toastify"

const initialState: FavoriteCountries = {
  countries: [],
  count: 0,
}

export const favoriteCountries = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.ADD_FAVORITE_COUNTRY:
      const isDuplicate = state.countries.some((favoriteCountry) => {
        return favoriteCountry.name === action.payload.name
      })
      if (isDuplicate) {
        toast.info(`${action.payload.name} already in list`, {
          position: "bottom-left",
        
        })
        return state
      }

      const favoriteCountryToAdd = action.payload
      const newFavoriteCountries = [favoriteCountryToAdd, ...state.countries]
      toast.success(`${favoriteCountryToAdd.name} added to list`, {
        position: "bottom-left",
      })
      return {
        ...state,
        countries: newFavoriteCountries,
        count: state.count + 1,
      }

    case actions.REMOVE_FAVORITE_COUNTRY:
      const newFavCountries = state.countries.filter((country) => {
        return country.fullname !== action.payload.fullname
      })
      toast.warning(`${action.payload.name} removed from list`, {
        position: "bottom-left",
      })
      return {
        ...state,
        countries: newFavCountries,
        count: state.count - 1,
      }

    default:
      return state
  }
}
