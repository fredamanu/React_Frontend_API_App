import React, { useContext } from "react"
import { useSelector } from "react-redux"

import Globe from "../components/content/globe"
import Heading from "../components/hero/heading"
import PageInformation from "../components/content/pageInfomation"
import FavoriteCountriesGrid from "../components/content/favoriteCountriesGrid"
import SearchField from "../components/hero/searchField"
import Footer from "../components/footer"
import { ThemeContext } from "../ThemeContext"
import NavBar from "../components/navbar"

export default function FavoriteCountries() {
  const { dark } = useContext(ThemeContext)
  const state = useSelector((state) => state)
  const count = state.favoriteCountries.count

  return (
    <div
      style={{
        backgroundColor: dark ? "#435b71" : "#fff",
        color: dark ? "#fff" : "inherit",
      }}
    >
      <NavBar />
      <Heading />
      {count > 0 ? (
        <div>
          <SearchField />
          <FavoriteCountriesGrid />
        </div>
      ) : (
        <div>
          <Globe />
          <PageInformation />
        </div>
      )}
      <Footer />
    </div>
  )
}
