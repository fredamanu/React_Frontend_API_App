import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import CardBody from "../components/card/Card"
import Footer from "../components/footer/Footer"
import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import NavBar from "../components/navbar/NavBar"
import { fetchCountry } from "../redux/actions/fetchCountry"

export default function CountryPage() {
  const state = useSelector((state) => state)
  const loading = state.fetchCountryReducer.loading
  const error = state.fetchCountryReducer.error
  const dispatch = useDispatch()
  let slug = useParams()
  const selectedCountry = slug.id

  useEffect(() => {
    dispatch(fetchCountry(selectedCountry))
  }, [selectedCountry, dispatch])

  if (error) return <h4>Oops!! An Error Occurred</h4>

  return (
    <div>
      <NavBar />
      {loading ? <LoadingIcon /> : <CardBody />}
      <Footer />
    </div>
  )
}
