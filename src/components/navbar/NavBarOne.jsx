import React, { useContext } from "react"

import { ThemeContext } from "../../ThemeContext"
import MySwitch from "../switch/MySwitch"
import HomeIcon from "@mui/icons-material/Home"
import CountFavorites from "../count/CountFavorites"
import "./navbar.css"

export default function NavBarOne({ handleClick }) {
  const { dark } = useContext(ThemeContext)
  return (
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
  )
}
