import * as React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Badge from "@mui/material/Badge"
import FavoriteIcon from "@mui/icons-material/Favorite"

import "./countIcon.css"
import { ThemeContext } from "../../ThemeContext"
import {State} from "../../typescript/types"

export default function CountFavorites() {
  const { dark } = React.useContext(ThemeContext)
  const navigate = useNavigate()
  const count = useSelector((state: State) => state.favoriteCountriesReducer.count)
  

  const handleClick = () => {
    navigate("/favoritecountries")
  }

  return (
    <div className="countIcon">
      <Badge badgeContent={count} color="warning">
        <FavoriteIcon
          className={dark ? "fav-icon-main-dark" : "fav-icon-main"}
          onClick={handleClick}
        />
      </Badge>
    </div>
  )
}
