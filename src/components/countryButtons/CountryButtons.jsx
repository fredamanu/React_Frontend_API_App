import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import MapIcon from "@mui/icons-material/Map"

import {
  addFavoriteCountry,
  removeFavoriteCountry,
} from "../../redux/actions/favoriteCountries"
import "./country-button.css"

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
    <div className="button-container">
      {country.map((property) => {
        return (
          <div key={property.name.common} className="flex-container">
            <button onClick={handleClick} className="button">
              {isDuplicate ? "REMOVE" : "ADD"}
              <span style={{ marginLeft: 10 }}>{property.flag}</span>
            </button>
            <button className="button map-button">
              <a className="map-button-link" href={property.maps.googleMaps}>
                MAP
                <span style={{ marginLeft: 10 }}>
                  <MapIcon />
                </span>
              </a>
            </button>
          </div>
        )
      })}
    </div>
  )
}
