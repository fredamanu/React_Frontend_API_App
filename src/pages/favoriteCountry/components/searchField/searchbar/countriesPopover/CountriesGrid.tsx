import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Grid from "@mui/material/Grid"
import AddIcon from "@mui/icons-material/Add"

import { addFavoriteCountry } from "../../../../../../redux/actions/favoriteCountries"
import { ThemeContext } from "../../../../../../ThemeContext"
import { Country, State } from "../../../../../../typescript"
import "./index.css"

export default function CountriesGrid() {
  const { dark } = React.useContext(ThemeContext)
  const dispatch = useDispatch<any>()
  const keyword = useSelector((state: State) => state.searchTerm.keyword)
  const state = useSelector((state: State) => state)
  const countries = state.countries.data

  const newCountries = countries.filter((c) => {
    return c.name.common.toLowerCase().includes(keyword.toLowerCase())
  })

  const handleClick = (item: Country) => {
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
    <div className=" countries-container">
      <Grid
        container
        justifyContent="center"
        rowSpacing={0.2}
        columnSpacing={{ xs: 0.2, sm: 0.2, md: 0.2 }}
        style={{
          backgroundColor: dark ? "#354556" : "#f0f0f0",
        }}
      >
        {newCountries.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.name.common}
            sx={{ backgroundColor: "#fff" }}
          >
            <div
              className={
                dark
                  ? "countries-grid-item-container-dark"
                  : "countries-grid-item-container"
              }
            >
              <div className="countries-icon-container">
                <AddIcon
                  sx={{ fontSize: 30 }}
                  className={dark ? "countries-icon-dark" : "countries-icon"}
                  onClick={() => {
                    handleClick(item)
                  }}
                />
              </div>
              <div className="countries-flag-name-container">
                <div className="countries-flag-container">
                  <Link to={{ pathname: `/country/${item.name.common}` }}>
                    <img
                      className="countries-flag"
                      src={item.flags.png}
                      alt="pic"
                    />
                  </Link>
                </div>
                <p className={dark ? "countries-name-dark" : "countries-name"}>
                  {item.name.common}
                </p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}