import React from "react"
import { useSelector } from "react-redux"

import "./fun-facts.css"

export default function FunFacts() {
  const state = useSelector((state) => state)
  const country = state.fetchCountryReducer.country

  return (
    <div>
      <h5>Fun Facts</h5>
      <p>
        Official Name:
        <span className="fun-facts">
          {country.map((c) => {
            return c.name.official
          })}
        </span>
      </p>
      <p>
        Capital:
        <span className="fun-facts">
          {country.map((c) => {
            return c.capital
          })}
        </span>
      </p>
      <p>
        Start of Week:
        <span className="fun-facts">
          {country.map((c) => {
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
        <span className="fun-facts">
          {country.map((c) => {
            return c.currencies
              ? Object.values(c.currencies).map((entry) => {
                  return `${entry.name}(${entry.symbol})`
                })
              : NaN
          })}
        </span>
      </p>
    </div>
  )
}
