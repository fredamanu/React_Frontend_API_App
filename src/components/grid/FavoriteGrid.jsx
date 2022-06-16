import * as React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Grid from "@mui/material/Grid"
import ClearIcon from "@mui/icons-material/Clear"

import { removeFavoriteCountry } from "../../redux/actions/favoriteCountries.ts"
import { ThemeContext } from "../../ThemeContext"
import "./grid.css"

export default function FavoriteGrid() {
  const { dark } = React.useContext(ThemeContext)
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const list = state.favoriteCountriesReducer.favoriteCountries

  const handleClick = (item) => {
    const obj = {
      name: item.name,
      fullname: item.fullname,
      flag: item.flag,
    }
    dispatch(removeFavoriteCountry(obj))
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
        {list.map((item) => (
          <Grid key={item.name} item xs={12} sm={4}>
            <div
              className={
                dark ? "grid-item-container-dark" : "grid-item-container"
              }
            >
              <div className="icon-container">
                <ClearIcon
                  sx={{ fontSize: 30 }}
                  className="icon"
                  onClick={() => {
                    handleClick(item)
                  }}
                />
              </div>
              <div className="flag-name-container">
                <div className="flag-container">
                  <Link to={{ pathname: `/country/${item.fullname}` }}>
                    <img className="flag" src={item.flag} alt="pic" />
                  </Link>
                </div>
                <p className={dark ? "name-dark" : "name"}>{item.name}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
