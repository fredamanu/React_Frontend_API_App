import React, { useContext } from "react"
import { useSelector } from "react-redux"

import Globe from "./components/globe"
import Heading from "./components/heading"
import PageInformation from "./components/pageInformation"
import FavoriteCountriesGrid from "./components/favoriteCountriesGrid"
import SearchField from "./components/searchField"
import Footer from "../../genericComponents/footer"
import { ThemeContext } from "../../ThemeContext"
import NavBar from "../../genericComponents/navbar"

export default function FavoriteCountries() {
  const { dark } = useContext(ThemeContext)
  const count = useSelector((state) => state.favoriteCountries.count)

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
