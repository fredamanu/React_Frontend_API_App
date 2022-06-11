import * as actions from "../actions/types"

const initialState = {
  countries: [],
  loading: false,
  error: null,
}

export const fetchCountriesReducer = (state = initialState, action) => {
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
        countries: action.payload,
        loading: false,
      }
    case actions.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case actions.SORT_COUNTRIES_BY_NAME:
      const orderBy = action.payload
      console.log(orderBy)
      const countries = state.countries
      const sortedCountries = countries.sort((a, b) => {
        if (a.name.common > b.name.common) {
          if (orderBy === "asc") {
            return 1
          }
          return -1
        }

        if (b.name.common > a.name.common) {
          if (orderBy === "asc") {
            return -1
          }
          return 1
        }
        return 0
      })

      return {
        ...state,
        countries: sortedCountries,
      }

    case actions.SORT_COUNTRIES_BY_POPULATION:
      const orderByOne = action.payload
      const countriesTwo = state.countries
      const sortedCountriesTwo = countriesTwo.sort((a, b) => {
        if (a.population > b.population) {
          if (orderByOne === "asc") {
            return 1
          }
          return -1
        }
        if (b.population > a.population) {
          if (orderByOne === "asc") {
            return -1
          }
          return 1
        }
        return 0
      })

      return {
        ...state,
        countries: sortedCountriesTwo,
      }

    case actions.SORT_COUNTRIES_BY_REGION:
      const orderByTwo = action.payload
      const countriesThree = state.countries
      const sortedCountriesThree = countriesThree.sort((a, b) => {
        if (a.region > b.region) {
          if (orderByTwo === "asc") {
            return 1
          }
          return -1
        }
        if (b.region > a.region) {
          if (orderByTwo === "asc") {
            return -1
          }
          return 1
        }
        return 0
      })

      return {
        ...state,
        countries: sortedCountriesThree,
      }

    default:
      return state
  }
}
