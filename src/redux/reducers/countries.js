import * as actions from "../actions/types"

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export const countries = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actions.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case actions.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case actions.SORT_COUNTRIES_BY_NAME:
      const orderByName = action.payload
      const countriesByName = state.data
      const sortedCountriesByName = countriesByName.sort((a, b) => {
        if (a.name.common > b.name.common) {
          if (orderByName === "asc") {
            return 1
          }
          return -1
        }

        if (b.name.common > a.name.common) {
          if (orderByName === "asc") {
            return -1
          }
          return 1
        }
        return 0
      })

      return {
        ...state,
        countries: sortedCountriesByName,
      }

    case actions.SORT_COUNTRIES_BY_POPULATION:
      const orderByPop = action.payload
      const countriesByPop = state.data
      const sortedCountriesByPop = countriesByPop.sort((a, b) => {
        if (a.population > b.population) {
          if (orderByPop === "asc") {
            return 1
          }
          return -1
        }
        if (b.population > a.population) {
          if (orderByPop === "asc") {
            return -1
          }
          return 1
        }
        return 0
      })

      return {
        ...state,
        countries: sortedCountriesByPop,
      }

    case actions.SORT_COUNTRIES_BY_REGION:
      const orderByRegion = action.payload
      const countriesByRegion = state.data
      const sortedCountriesByRegion = countriesByRegion.sort((a, b) => {
        if (a.region > b.region) {
          if (orderByRegion === "asc") {
            return 1
          }
          return -1
        }
        if (b.region > a.region) {
          if (orderByRegion === "asc") {
            return -1
          }
          return 1
        }
        return 0
      })

      return {
        ...state,
        countries: sortedCountriesByRegion,
      }

    default:
      return state
  }
}
