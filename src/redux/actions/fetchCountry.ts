import * as actions from "./types"
import axios from "axios"
import {CountryTwo} from "../../typescript/types"

export const fetchCountryRequest = () => ({
  type: actions.FETCH_COUNTRY_REQUEST,
})

export const fetchCountrySuccess = (data: CountryTwo[]) => ({
  type: actions.FETCH_COUNTRY_SUCCESS,
  payload: data,
})

export const fetchCountryFailure = (err: string) => ({
  type: actions.FETCH_COUNTRY_FAILURE,
  payload: err,
})

export const fetchCountry = (selectedCountry: string) => {
  return function (dispatch: any) {
    const url = `https://restcountries.com/v3.1/name/${selectedCountry}?fullText=true`
    dispatch(fetchCountryRequest())
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchCountrySuccess(response.data))
       
      })
      .catch((err) => {
        dispatch(fetchCountryFailure(err.message))
      })
  }
}