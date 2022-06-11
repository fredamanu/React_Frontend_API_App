import React, { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import CardBody from "../components/card/Card"
import Footer from "../components/footer/Footer"
import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import NavBar from "../components/navbar/NavBar"
import { fetchCountry } from "../redux/actions/fetchCountry"
import { ThemeContext } from "../ThemeContext"

export default function CountryPage() {
  const { dark } = useContext(ThemeContext)
  const state = useSelector((state) => state)
  const loading = state.fetchCountryReducer.loading
  const error = state.fetchCountryReducer.error
  const dispatch = useDispatch()

  const selectedCountry = state.getSelectedCountryReducer.selectedCountry

  useEffect(() => {
    dispatch(fetchCountry(selectedCountry))
  }, [selectedCountry, dispatch])

  if (error) return <h4>Oops!! An Error Occurred</h4>

  return (
    <div
      style={{
        backgroundColor: dark ? "#435b71" : "inherit",
        color: dark ? "#fff" : "inherit",
      }}
    >
      <NavBar />
      {loading ? <LoadingIcon /> : <CardBody />}
      <Footer />
    </div>
  )
}
