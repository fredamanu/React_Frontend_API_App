import React, { useState } from "react"
import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import MyTable from "../components/table/MyTable.jsx"
import useCountries from "../custom-hooks/useCountries"
import Filter from "../components/searchbar/Filter"

export default function HomePage() {
  const [keyword, setKeyword] = useState("")
  const { data, error } = useCountries("https://restcountries.com/v3.1/all")

  const filterCountry = data?.filter((country) => {
    return country.name.common.toLowerCase().includes(keyword)
  })

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <div>
      <Filter handleSearch={handleSearch} />
      {data ? <MyTable data={filterCountry} error={error} /> : <LoadingIcon />}
    </div>
  )
}
