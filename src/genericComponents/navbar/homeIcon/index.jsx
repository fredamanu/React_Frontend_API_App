import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"

import "./index.css"
import { ThemeContext } from "../../../ThemeContext"

export default function NavHomeIcon() {
  const navigate = useNavigate()
  const { dark } = useContext(ThemeContext)

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
