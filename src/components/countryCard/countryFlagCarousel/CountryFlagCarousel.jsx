import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { useSelector } from "react-redux"

import "./carousel.css"

export default function CountryFlagCarousel() {
  const state = useSelector((state) => state)
  const country = state.fetchCountryReducer.country

  return (
    <div className="carousel-container">
      {country.map((property) => {
        return (
          <Carousel key={property.name.common} className="carousel">
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src={property.flags.png}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  property.coatOfArms.png
                    ? property.coatOfArms.png
                    : property.flags.png
                }
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        )
      })}
    </div>
  )
}
