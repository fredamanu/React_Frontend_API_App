import React, { useContext } from "react"
import { useSelector } from "react-redux"

import Globe from "../components/globe/Globe"
import Heading from "../components/heading/Heading"
import ContentOne from "../components/contentOne/ContentOne"
import FavoriteCountriesGrid from "../components/favoriteCountriesGrid/FavoriteCountriesGrid"
import MainSearchField from "../components/searchField/mainSearchField/MainSearchField"
import Footer from "../components/footer/Footer"
import { ThemeContext } from "../ThemeContext"
import MainNavBar from "../components/navbar/mainNavbar/MainNavBar"

export default function FavoriteCountries() {
  const { dark } = useContext(ThemeContext)
  const state = useSelector((state) => state)
  const count = state.favoriteCountriesReducer.count

  return (
    <div
      style={{
        backgroundColor: dark ? "#435b71" : "#fff",
        color: dark ? "#fff" : "inherit",
      }}
    >
      <MainNavBar />
      <Heading />
      {count > 0 ? (
        <div>
          <MainSearchField />
          <FavoriteCountriesGrid />
        </div>
      ) : (
        <div>
          <Globe />
          <ContentOne />
        </div>
      )}
      <Footer />
    </div>
  )
}
