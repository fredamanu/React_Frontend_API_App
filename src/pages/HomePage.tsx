import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Footer from "../components/footer/Footer"
import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import MainCountriesTable from "../components/countriesTable/mainCountriesTable/MainCountriesTable"
import MainNavBar from "../components/navbar/mainNav/MainNavBar"
import { fetchCountries } from "../redux/actions/fetchCountries"
import { ThemeContext } from "../ThemeContext"
import SortTable from "../components/countriesTable/sort/SortTable"
import SearchBar from "../components/countriesTable/searchbar/SeachBar"
import MainHero from "../components/hero/mainHero/MainHero"
import { State } from "../typescript/types"

export default function HomePage() {
  const { dark } = useContext(ThemeContext)
  const dispatch = useDispatch<any>()
  const { countries, error, loading } = useSelector(
    (state: State) => state.fetchCountriesReducer
  )
  const keyword = useSelector((state: State) => state.searchTermReducer.keyword)

  const filterCountries = countries?.filter((country) => {
    return country.name.common.toLowerCase().includes(keyword.toLowerCase())
  })

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  if (error) return <h4>OOps!! An Error Occured</h4>

  return (
    <div style={{ backgroundColor: dark ? "#435b71" : "#fff" }}>
      <MainNavBar />
      <MainHero />
      {loading ? (
        <LoadingIcon />
      ) : (
        <div style={{ backgroundColor: dark ? "#435b71" : "#fff" }}>
          <SearchBar />
          <SortTable />
          <MainCountriesTable data={filterCountries} />
        </div>
      )}
      <Footer />
    </div>
  )
}
