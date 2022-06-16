import * as actions from "./types"
import axios from "axios"
import {Country} from "../../typescript/types"

export const fetchCountriesRequest = () => ({
  type: actions.FETCH_COUNTRIES_REQUEST,
})

export const fetchCountriesSuccess = (data: Country[]) => ({
  type: actions.FETCH_COUNTRIES_SUCCESS,
  payload: data,
})

export const fetchCountriesFailure = (err: string) => ({
  type: actions.FETCH_COUNTRIES_FAILURE,
  payload: err,
})

export const fetchCountries = () => {
  return function (dispatch: any) {
    dispatch(fetchCountriesRequest())
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        dispatch(fetchCountriesSuccess(response.data)) 
        
      })
      .catch(function (error) {
        dispatch(fetchCountriesFailure(error))
      })
  }
}
