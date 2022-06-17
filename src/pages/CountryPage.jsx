import React, { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { getSelectedCountry } from "../redux/actions/getSelectedCountry.ts"
import CardBody from "../components/card/Card"
import Footer from "../components/footer/Footer"
import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import MainNavBar from "../components/navbar/mainNav/MainNavBar"
import { fetchCountry } from "../redux/actions/fetchCountry.ts"
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
      {loading ? <LoadingIcon /> : <CardBody />}
      <Footer />
    </div>
  )
}
