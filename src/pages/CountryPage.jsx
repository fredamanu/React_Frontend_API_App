import React from "react"
import CardBody from "../components/card/cardbody"
import { useParams } from "react-router-dom"
import useCountries from "../custom-hooks/useCountries.js"
import LoadingIcon from "../components/loadingIcon/LoadingIcon"

export default function CountryPage() {
  let slug = useParams()
  const selectedCountry = slug.id
  const url = `https://restcountries.com/v3.1/name/${selectedCountry}?fullText=true`
  const { data, error } = useCountries(url)
  if (error) <h4>Opps!! Please Refresh Page</h4>
  return (
    <div>
      {data ? (
        <CardBody selectedCountry={selectedCountry} data={data} error={error} />
      ) : (
        <LoadingIcon />
      )}
    </div>
  )
}
