import * as actions from "./types"

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
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => dispatch(fetchCountriesSuccess(data)))
      .catch((err) => dispatch(fetchCountriesFailure(err)))
  }
}
