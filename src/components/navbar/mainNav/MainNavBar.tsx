import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"

import { ThemeContext } from "../../../ThemeContext"
import MySwitch from "../switch/MySwitch"
import CountFavorites from "../countFavorites/CountFavorites"
import "./navbar.css"


export default function MainNavBar() {
  const navigate = useNavigate()
  const { dark } = useContext(ThemeContext)

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className={dark ? "navbar-container-dark" : "navbar-container"}>
      <div className="children1">
        <h5 className={dark ? "logo-dark" : "logo"}>Count-Trees</h5>
        <div className="sub-children1">
          <HomeIcon
            className={dark ? "home-icon-dark" : "home-icon"}
            onClick={handleClick}
          />
          <CountFavorites />
          <MySwitch />
        </div>
      </div>
    </div>
  )
}
