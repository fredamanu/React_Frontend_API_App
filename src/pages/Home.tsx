import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Footer from "../components/footer"
import LoadingIcon from "../components/content/loadingIcon"
import CountriesTable from "../components/content/countriesTable"
import NavBar from "../components/navbar"
import { fetchCountries } from "../redux/actions/fetchCountries"
import { ThemeContext } from "../ThemeContext"
import Sort from "../components/content/sort"
import SearchBar from "../components/content/searchbar"
import Hero from "../components/hero"
import { State } from "../typescript"

export default function Home() {
  const { dark } = useContext(ThemeContext)
  const dispatch = useDispatch<any>()
  const { data, error, loading } = useSelector(
    (state: State) => state.countries
  )
  const keyword = useSelector((state: State) => state.searchTerm.keyword)

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
