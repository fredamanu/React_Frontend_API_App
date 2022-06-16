import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import MapIcon from "@mui/icons-material/Map"

import {
  addFavoriteCountry,
  removeFavoriteCountry,
} from "../../redux/actions/favoriteCountries.ts"
import "./button.css"

export default function CountryButtons() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector((state) => state)
  const country = state.fetchCountryReducer.country
  const selectedCountry = state.getSelectedCountryReducer.selectedCountry
  const favoriteCountries = state.favoriteCountriesReducer.favoriteCountries

  const isDuplicate = favoriteCountries.some((obj) => {
    return obj.fullname === selectedCountry
  })

  const handleClick = () => {
    const newObj = country[0]
    const newName =
      newObj.name.common.length > 15
        ? newObj.name.common.slice(0, 15) + "..."
        : newObj.name.common
    const obj = {
      name: newName,
      fullname: newObj.name.common,
      flag: newObj.flags.png,
    }
    isDuplicate
      ? dispatch(removeFavoriteCountry(obj))
      : dispatch(addFavoriteCountry(obj))

    navigate("/favoritecountries")
  }

  return (
    <Stack className="button-container" direction="row" spacing={2}>
      <Button
        onClick={handleClick}
        className="button"
        variant="contained"
        color="primary"
        endIcon={country.map((c) => {
          return c.flag
        })}
      >
        {isDuplicate ? "REMOVE" : "ADD"}
      </Button>
      <Button
        className="button"
        variant="outlined"
        color="primary"
        endIcon={<MapIcon />}
      >
        <a
          className="button-link"
          href={country.map((c) => {
            return c.maps.googleMaps
          })}
        >
          Map
        </a>
      </Button>
    </Stack>
  )
}
