import React, { useContext } from "react"
import { useSelector } from "react-redux"

import Globe from "../components/globe/Globe"
import MainHeadingOne from "../components/mainHeadingOne/MainHeading"
import ContentOne from "../components/contentOne/ContentOne"
import FavoriteGrid from "../components/grid/FavoriteGrid"
import FavHero from "../components/favhero/FavHero"
import Footer from "../components/footer/Footer"
import { ThemeContext } from "../ThemeContext"
import NavBar from "../components/navbar/NavBar"

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
      <NavBar />
      <MainHeadingOne />
      {count > 0 ? (
        <div>
          <FavHero />
          <FavoriteGrid />
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
