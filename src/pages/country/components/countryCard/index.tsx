import React from "react"
import { useSelector } from "react-redux"
import { State } from "../../../../typescript"

import CountryButtons from "./countryButtons"
import CountryFlagCarousel from "./countryFlagCarousel"
import FunFacts from "./funFacts"
import "./index.css"

export default function CountryCard() {
  const selectedCountry = useSelector((state: State) => state.selectedCountry.name)

  return (
    <div className="hero-container">
      <h1>{selectedCountry}</h1>
      <div className="hero">
        <CountryFlagCarousel />
        <div className="text">
          <FunFacts />
          <hr />
          <p className="reaction">
            Want to know more? Click on the right button below to find it on
            google maps. You can also add to or remove it from your favorite
            countries by clicking on the left button.
          </p>
          <hr />
          <CountryButtons />
        </div>
      </div>
    </div>
  )
}
