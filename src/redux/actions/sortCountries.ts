import * as actions from "./types"


export const sortCountriesByName = (orderBy:string) => ({
  type: actions.SORT_COUNTRIES_BY_NAME,
  payload: orderBy,
})

export const sortCountriesByRegion = (orderBy:string) => ({
  type: actions.SORT_COUNTRIES_BY_REGION,
  payload: orderBy,
})

export const sortCountriesByPopulation = (orderBy:string) => ({
  type: actions.SORT_COUNTRIES_BY_POPULATION,
  payload: orderBy,
})
