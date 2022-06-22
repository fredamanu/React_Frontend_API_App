import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"

import { ThemeContext } from "../../../ThemeContext"
import "./home-icon.css"

export default function NavHomeIcon() {
  const { dark } = useContext(ThemeContext)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  return (
    <HomeIcon
      className={dark ? "home-icon-dark" : "home-icon"}
      onClick={handleClick}
      sx={{ fontSize: 30 }}
    />
  )
}
