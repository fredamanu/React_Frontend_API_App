// This hook is used to fetch one specific country
import React, { useEffect, useState } from "react"

export default function useCountry(selectedCountry) {
  const [country, setCountry] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`)
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => setError(err))
  }, [selectedCountry])

  if (error) return <h1>Opps!! Try Agian</h1>
  return { country, error }
}
