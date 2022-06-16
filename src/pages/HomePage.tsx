import React, { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Footer from "../components/footer/Footer"
import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import MyTable from "../components/table/MyTable"
import NavBar from "../components/navbar/NavBar"
import { fetchCountries } from "../redux/actions/fetchCountries"
import { ThemeContext } from "../ThemeContext"
import SortTable from "../components/sort/SortTable"
import SearchBar from "../components/searchbar/SeachBar"
import HomeHero from "../components/homehero/HomeHero"
import { State } from "../typescript/types"

export default function HomePage() {
  const { dark } = useContext(ThemeContext)
  const dispatch = useDispatch<any>()
  const { countries, error, loading } = useSelector(
    (state: State) => state.fetchCountriesReducer
  )
  const keyword = useSelector((state: State) => state.searchTermReducer.keywordOne)

  const filterCountries = countries?.filter((country) => {
    return country.name.common.toLowerCase().includes(keyword.toLowerCase())
  })

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  if (error) return <h4>OOps!! An Error Occured</h4>

  return (
    <div style={{ backgroundColor: dark ? "#435b71" : "#fff" }}>
      <NavBar />
      <HomeHero />
      {loading ? (
        <LoadingIcon />
      ) : (
        <div style={{ backgroundColor: dark ? "#435b71" : "#fff" }}>
          <SearchBar />
          <SortTable />
          <MyTable data={filterCountries} />
        </div>
      )}
      <Footer />
    </div>
  )
}
