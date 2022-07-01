import React, { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Footer from "../../genericComponents/footer"
import LoadingIcon from "../../genericComponents/loadingIcon"
import CountriesTable from "./components/countriesTable"
import NavBar from "../../genericComponents/navbar"
import { fetchCountries } from "../../redux/actions/fetchCountries"
import { ThemeContext } from "../../ThemeContext"
import Sort from "./components/sort"
import SearchBar from "./components/searchbar"
import Hero from "./components/hero"

export default function Home() {
  const { dark } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.countries)
  const keyword = useSelector((state) => state.searchTerm.keyword)

  const filterCountries = data?.filter((country) => {
    return country.name.common.toLowerCase().includes(keyword.toLowerCase())
  })

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  if (error) return <h4>OOps!! An Error Occured</h4>

  return (
    <div style={{ backgroundColor: dark ? "#435b71" : "#fff" }}>
      <NavBar />
      <Hero />
      {loading ? (
        <LoadingIcon />
      ) : (
        <div style={{ backgroundColor: dark ? "#435b71" : "#fff" }}>
          <SearchBar />
          <Sort />
          <CountriesTable data={filterCountries} />
        </div>
      )}
      <Footer />
    </div>
  )
}
