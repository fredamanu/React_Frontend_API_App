import React, { useContext } from "react"
import { useSelector } from "react-redux"

import Globe from "../components/content/infoSection/globe/Globe"
import Heading from "../components/hero/heading/Heading"
import InformationSection from "../components/content/infoSection/InformationSection"
import FavoriteCountriesGrid from "../components/content/favoriteCountriesGrid/FavoriteCountriesGrid"
import MainSearchField from "../components/hero/searchField/mainSearchField/MainSearchField"
import Footer from "../components/footer/Footer"
import { ThemeContext } from "../ThemeContext"
import MainNavBar from "../components/navbar/mainNavbar/MainNavBar"

export default function FavoriteCountriesPage() {
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
          <InformationSection />
        </div>
      )}
      <Footer />
    </div>
  )
}
