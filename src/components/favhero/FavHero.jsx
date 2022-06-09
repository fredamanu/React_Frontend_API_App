import React, { useContext } from "react"
import { ThemeContext } from "../../ThemeContext"

import SearchFav from "../searchbar/SearchFav"
import "./favhero.css"

export default function FavHero() {
  const { dark } = useContext(ThemeContext)
  return (
    <div className={dark ? "fav-hero-container-dark" : "fav-hero-container"}>
      <h5 className={dark ? "fav-hero-text-dark" : "fav-hero-text"}>
        Add countries to your list.
      </h5>
      <div className={dark ? "flex-container-dark" : "flex-container"}>
        <SearchFav />
        <p className="note">Click search icon</p>
      </div>
    </div>
  )
}
