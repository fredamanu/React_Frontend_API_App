import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import Grid from "@mui/material/Grid"
import ClearIcon from "@mui/icons-material/Clear"

import { removeFavoriteCountry } from "../../redux/actions/favoriteCountries"
import "./grid.css"

export default function FavoriteGrid() {
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
        style={{ width: 800, margin: "auto" }}
      >
        {list.map((item) => (
          <Grid key={item.name} item>
            <div className="grid-item-container">
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
                  <img className="flag" src={item.flag} alt="pic" />
                </div>
                <p className="name">{item.name}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
