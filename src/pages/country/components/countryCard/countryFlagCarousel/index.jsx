import React from "react"
import { v4 as uuidv4 } from "uuid"
import Carousel from "react-bootstrap/Carousel"
import { useSelector } from "react-redux"

import "./index.css"

export default function CountryFlagCarousel() {
  const country = useSelector((state) => state.country.data)

  return (
    <div className="carousel-container">
      {country.map((property) => {
        return (
          <Carousel
            key={uuidv4()}
            className="carousel"
            style={{ width: "100%", height: "100%" }}
          >
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
