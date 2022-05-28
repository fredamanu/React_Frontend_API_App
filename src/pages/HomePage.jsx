import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import MyTable from "../components/table/MyTable.jsx"
import useCountries from "../custom-hooks/useCountries.js"
import React, { useState } from "react"

import SearchBar from "../components/searchbar/SeachBar"

export default function HomePage() {
  const [keyword, setKeyword] = useState("")
  const { data, error } = useCountries("https://restcountries.com/v3.1/all")
  const filterCountry = data?.filter((country) => {
    return country.name.common.toLowerCase().includes(keyword)
  })
  if (error) return <p>Opps!! Please Refresh Page</p>
  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <div>
      {data ? (
        <div>
          <SearchBar handleSearch={handleSearch} />
          <MyTable data={filterCountry} error={error} />
        </div>
      ) : (
        <LoadingIcon />
      )}
    </div>
  )
}
