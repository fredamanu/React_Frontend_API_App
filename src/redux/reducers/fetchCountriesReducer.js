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
      const countries = state.countries
      const sortedCountries = countries.sort((a, b) =>
        a.name.common > b.name.common
          ? 1
          : b.name.common > a.name.common
          ? -1
          : 0
      )

      return {
        ...state,
        countries: sortedCountries,
      }

    case actions.SORT_COUNTRIES_BY_POPULATION:
      const countriesTwo = state.countries
      const sortedCountriesTwo = countriesTwo.sort((a, b) =>
        a.population > b.population ? 1 : b.population > a.population ? -1 : 0
      )

      return {
        ...state,
        countries: sortedCountriesTwo,
      }

    case actions.SORT_COUNTRIES_BY_REGION:
      const countriesThree = state.countries
      const sortedCountriesThree = countriesThree.sort((a, b) =>
        a.region > b.region ? 1 : b.region > a.region ? -1 : 0
      )

      return {
        ...state,
        countries: sortedCountriesThree,
      }

    default:
      return state
  }
}
