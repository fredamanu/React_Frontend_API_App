import React, { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import CountryCard from "./components/countryCard"
import Footer from "../../genericComponents/footer"
import LoadingIcon from "../../genericComponents/loadingIcon"
import NavBar from "../../genericComponents/navbar"
import { fetchCountry } from "../../redux/actions/fetchCountry"
import { getSelectedCountry } from "../../redux/actions/getSelectedCountry"
import { ThemeContext } from "../../ThemeContext"

export default function Country() {
  const name = useParams()
  const selectedCountry = name.id
  const { dark } = useContext(ThemeContext)
  const { loading, error } = useSelector((state) => state.country)

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
      <NavBar />
      {loading ? <LoadingIcon /> : <CountryCard />}
      <Footer />
    </div>
  )
}
