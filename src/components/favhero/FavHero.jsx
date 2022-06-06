import React from "react"

import SearchFav from "../searchbar/SearchFav"
import "./favhero.css"

export default function FavHero() {
  return (
    <div className="fav-hero-container">
      <h5 className="fav-hero-text">Add countries to your list.</h5>
      <div className="flex-container">
        <SearchFav />
        <p className="note">Click search icon</p>
      </div>
    </div>
  )
}
