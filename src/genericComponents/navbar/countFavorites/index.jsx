import { useContext } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Badge from "@mui/material/Badge"
import FavoriteIcon from "@mui/icons-material/Favorite"

import { ThemeContext } from "../../../ThemeContext"
import "./index.css"

export default function CountFavorites() {
  const { dark } = useContext(ThemeContext)
  const navigate = useNavigate()
  const state = useSelector((state) => state)
  const count = state.favoriteCountries.count

  const handleClick = () => {
    navigate("/favoritecountries")
  }

  return (
    <div className="countIcon">
      <Badge badgeContent={count} color="warning">
        <FavoriteIcon
          className={dark ? "fav-icon-main-dark" : "fav-icon-main"}
          onClick={handleClick}
          sx={{ fontSize: 30 }}
        />
      </Badge>
    </div>
  )
}
