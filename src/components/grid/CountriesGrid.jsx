import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Grid from "@mui/material/Grid"
import AddIcon from "@mui/icons-material/Add"

import { addFavoriteCountry } from "../../redux/actions/favoriteCountries"
import "./grid.css"

export default function CountriesGrid() {
  const dispatch = useDispatch()
  const keyword = useSelector((state) => state.searchTermReducer.keywordTwo)
  const state = useSelector((state) => state)
  const countries = state.fetchCountriesReducer.countries

  const newCountries = countries.filter((c) => {
    return c.name.common.toLowerCase().includes(keyword.toLowerCase())
  })

  const handleClick = (item) => {
    const newName =
      item.name.common.length > 15
        ? item.name.common.slice(0, 15) + "..."
        : item.name.common
    const obj = {
      name: newName,
      fullname: item.name.common,
      flag: item.flags.png,
    }
    dispatch(addFavoriteCountry(obj))
  }

  return (
    <div className=" favs-container">
      <Grid
        container
        justifyContent="center"
        rowSpacing={0.2}
        columnSpacing={{ xs: 0.2, sm: 0.2, md: 0.2 }}
        style={{ width: 700, margin: "auto" }}
      >
        {newCountries.map((item) => (
          <Grid key={item.name.common} item>
            <div className="grid-item-container">
              <div className="icon-container">
                <AddIcon
                  sx={{ fontSize: 30 }}
                  className="icon"
                  onClick={() => {
                    handleClick(item)
                  }}
                />
              </div>
              <div className="flag-name-container">
                <div className="flag-container">
                  <Link to={{ pathname: `/country/${item.name.common}` }}>
                    <img className="flag" src={item.flags.png} alt="pic" />
                  </Link>
                </div>
                <p className="name">{item.name.common}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
