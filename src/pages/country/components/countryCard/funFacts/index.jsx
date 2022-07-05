import React from "react"
import { v4 as uuidv4 } from "uuid"
import { useSelector } from "react-redux"

import "./index.css"

export default function FunFacts() {
  const country = useSelector((state) => state.country.data)

  return (
    <div className="fun-facts-container">
      <h5>Fun Facts</h5>
      {country.map((property) => {
        const day = property.startOfWeek
        const first = day.slice(0, 1)
        const rest = day.slice(1)
        const cap = first.toUpperCase()
        const newDay = cap + rest
        return (
          <div key={uuidv4()}>
            <p>
              Official Name:
              <span className="fun-facts">{property.name.official}</span>
            </p>
            <p>
              Capital:
              <span className="fun-facts">{property.capital}</span>
            </p>
            <p>
              Start of Week:
              <span className="fun-facts">{newDay}</span>
            </p>
            <p>
              Currency(symbol):
              <span className="fun-facts">
                {property.currencies
                  ? Object.values(property.currencies).map((entry) => {
                      return `${entry.name}(${entry.symbol})`
                    })
                  : NaN}
              </span>
            </p>
          </div>
        )
      })}
    </div>
  )
}
