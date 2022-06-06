import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { useSelector } from "react-redux"

import "./carousel.css"

export default function MyCarousel() {
  const state = useSelector((state) => state)
  const country = state.fetchCountryReducer.country

  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src={country.map((c) => {
            return c.flags.png
          })}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={country.map((c) => {
            return c.coatOfArms.png ? c.coatOfArms.png : c.flags.png
          })}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
