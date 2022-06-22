import React from "react"
import { useSelector } from "react-redux"

import CountryButtons from "../countryButtons/CountryButtons"
import CountryFlagCarousel from "../countryFlagCarousel/CountryFlagCarousel"
import FunFacts from "../funFacts/FunFacts"
import "./main-countrycard.css"

export default function MainCountryCard() {
  const selectedCountry = useSelector(
    (state) => state.getSelectedCountryReducer.selectedCountry
  )

  return (
    <div className="hero-container">
      <h1>{selectedCountry}</h1>
      <div className="hero">
        <CountryFlagCarousel />
        <div className="text">
          <FunFacts />
          <hr />
          <p>
            Want to know more? Click on the button below to find it on google
            maps or click add button to add to your favorites.
          </p>
          <hr />
          <CountryButtons />
        </div>
      </div>
    </div>
  )
}
