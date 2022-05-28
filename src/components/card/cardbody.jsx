import React from "react"
import Carousel from "react-bootstrap/Carousel"
import HomeButton from "../button/homebutton"

import "./card.css"

export default function CardBody({ data, error }) {
  return (
    <div className="hero-container">
      <h1>
        {data.map((c) => {
          return c.name.common
        })}
      </h1>
      <div className="hero">
        <Carousel className="carousel">
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src={data.map((c) => {
                return c.flags.png
              })}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={data.map((c) => {
                return c.coatOfArms.png ? c.coatOfArms.png : c.flags.png
              })}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="text">
          <h5>Fun Facts</h5>
          <p>
            Official Name:
            <span className="fun-facts">
              {data.map((c) => {
                return c.name.official
              })}
            </span>
          </p>
          <p>
            Capital:
            <span className="fun-facts">
              {data.map((c) => {
                return c.capital
              })}
            </span>
          </p>
          <p>
            Start of Week:
            <span className="fun-facts">
              {data.map((c) => {
                const day = c.startOfWeek
                const first = day.slice(0, 1)
                const rest = day.slice(1)
                const cap = first.toUpperCase()
                const newDay = cap + rest
                return newDay
              })}
            </span>
          </p>
          <p>
            Currency(symbol):
            {data.map((c) => {
              return c.currencies ? (
                Object.values(c.currencies).map((entry) => {
                  return (
                    <span className="fun-facts">
                      {entry.name} ({entry.symbol})
                    </span>
                  )
                })
              ) : (
                <span className="fun-facts">NaN</span>
              )
            })}
          </p>
          <hr />
          <p>
            Want to know more? Click on the button below to find it on google
            maps or click on the other button to go back to homepage.
          </p>
          <hr />
          <HomeButton data={data} />
        </div>
      </div>
    </div>
  )
}
