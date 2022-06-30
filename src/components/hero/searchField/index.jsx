import React, { useContext } from "react"
import { ThemeContext } from "../../../ThemeContext"

import SearchBar from "./searchbar"
import "./index.css"

export default function SearchField() {
  const { dark } = useContext(ThemeContext)
  return (
    <div className={dark ? "fav-hero-container-dark" : "fav-hero-container"}>
      <h5 className={dark ? "fav-hero-text-dark" : "fav-hero-text"}>
        Add countries to your list.
      </h5>
      <div className={dark ? "flex-container-dark" : "flex-container"}>
        <SearchBar />
        <p className="note">Click search icon</p>
      </div>
    </div>
  )
}
