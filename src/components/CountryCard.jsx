import React from "react"

export default function CountryCard({ country, error }) {
  return (
    <div>
      {country.map((country) => {
        return <h1>{country.population}</h1>
      })}
    </div>
  )
}
