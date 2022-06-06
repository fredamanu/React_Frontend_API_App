import React from "react"
import { useSelector } from "react-redux"

import CountryButtons from "../countryButtons/CountryButtons"
import MyCarousel from "../carousel/MyCarousel"
import FunFacts from "../fun-facts/FunFacts"
import "./card.css"

export default function CardBody() {
  const state = useSelector((state) => state)
  const country = state.fetchCountryReducer.country

  return (
    <div className="hero-container">
      <h1>
        {country.map((c) => {
          return c.name.common
        })}
      </h1>
      <div className="hero">
        <MyCarousel />
        <div className="text">
          <FunFacts />
          <hr />
          <p>
            Want to know more? Click on the button below to find it on google
            maps or click on the other button to go back to homepage.
          </p>
          <hr />
          <CountryButtons />
        </div>
      </div>
    </div>
  )
}
