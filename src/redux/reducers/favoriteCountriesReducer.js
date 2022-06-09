import * as actions from "../actions/types"

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
        return state
      }

      const favoriteCountry = action.payload
      const newFavoriteCountry = [favoriteCountry, ...state.favoriteCountries]
      return {
        ...state,
        favoriteCountries: newFavoriteCountry,
        count: state.count + 1,
      }

    case actions.REMOVE_FAVORITE_COUNTRY:
      const newFavCountry = state.favoriteCountries.filter((country) => {
        return country.fullname !== action.payload.fullname
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
