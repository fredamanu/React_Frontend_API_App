import * as actions from "./types"
import axios from "axios"

export const fetchCountriesRequest = () => ({
  type: actions.FETCH_COUNTRIES_REQUEST,
})

export const fetchCountriesSuccess = (data) => ({
  type: actions.FETCH_COUNTRIES_SUCCESS,
  payload: data,
})

export const fetchCountriesFailure = (err) => ({
  type: actions.FETCH_COUNTRIES_FAILURE,
  payload: err,
})

export const fetchCountries = () => {
  return function (dispatch) {
    dispatch(fetchCountriesRequest())
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        dispatch(fetchCountriesSuccess(response.data))
        // console.log(response.status)
        // console.log(response.statusText)
        // console.log(response.headers)
        // console.log(response.config)
      })
      .catch(function (error) {
        dispatch(fetchCountriesFailure(error))
      })
  }
}
