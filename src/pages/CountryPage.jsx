import React from "react"
import CountryCard from "../components/CountryCard"
import useCountry from "../custom-hooks/useCountry"

export default function CountryPage() {
  const { country, error } = useCountry("Ghana")
  return (
    <div>
      {country ? (
        <CountryCard country={country} error={error} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
