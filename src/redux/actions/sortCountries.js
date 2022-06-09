import * as actions from "./types"

export const sortCountriesByName = (orderBy) => ({
  type: actions.SORT_COUNTRIES_BY_NAME,
})

export const sortCountriesByRegion = (orderBy) => ({
  type: actions.SORT_COUNTRIES_BY_REGION,
})

export const sortCountriesByPopulation = (orderBy) => ({
  type: actions.SORT_COUNTRIES_BY_POPULATION,
})
