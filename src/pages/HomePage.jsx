import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Footer from "../components/footer/Footer"
import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import MyTable from "../components/table/MyTable.jsx"
import NavBar from "../components/navbar/NavBar"
import { fetchCountries } from "../redux/actions/fetchCountries"

export default function HomePage() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const loading = state.fetchCountriesReducer.loading
  const error = state.fetchCountriesReducer.error
  const keyword = state.searchTermReducer.keywordOne
  const countries = state.fetchCountriesReducer.countries

  const filterCountries = countries?.filter((country) => {
    return country.name.common.toLowerCase().includes(keyword.toLowerCase())
  })

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  if (error) return <h4>OOps!! An Error Occured</h4>

  return (
    <div>
      <NavBar />

      {loading ? (
        <LoadingIcon />
      ) : (
        <div>
          <MyTable data={filterCountries} />
          <Footer />
        </div>
      )}
    </div>
  )
}
