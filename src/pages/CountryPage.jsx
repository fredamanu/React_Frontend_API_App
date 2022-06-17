import React, { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import MainCountryCard from "../components/countryCard/mainCountryCard/MainCountryCard"
import Footer from "../components/footer/Footer"
import LoadingIcon from "../components/content/loadingIcon/LoadingIcon"
import MainNavBar from "../components/navbar/mainNavbar/MainNavBar"
import { fetchCountry } from "../redux/actions/fetchCountry"
import { getSelectedCountry } from "../redux/actions/getSelectedCountry"
import { ThemeContext } from "../ThemeContext"

export default function CountryPage() {
  const id = useParams()
  const selectedCountry = id.id
  const { dark } = useContext(ThemeContext)
  const state = useSelector((state) => state)
  const loading = state.fetchCountryReducer.loading
  const error = state.fetchCountryReducer.error
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountry(selectedCountry))
    dispatch(getSelectedCountry(selectedCountry))
  }, [selectedCountry, dispatch])

  if (error) return <h4>Oops!! An Error Occurred</h4>

  return (
    <div
      style={{
        backgroundColor: dark ? "#435b71" : "inherit",
        color: dark ? "#fff" : "inherit",
      }}
    >
      <MainNavBar />
      {loading ? <LoadingIcon /> : <MainCountryCard />}
      <Footer />
    </div>
  )
}
