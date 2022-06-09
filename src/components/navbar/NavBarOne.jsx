import React from "react"

import MySwitch from "../switch/MySwitch"
import HomeIcon from "@mui/icons-material/Home"
import CountFavorites from "../count/CountFavorites"
import "./navbar.css"

export default function NavBarOne({ handleClick }) {
  return (
    <div className="children1">
      <h5 className="logo">Count-Trees</h5>
      <div className="sub-children1">
        <HomeIcon className="home-icon" onClick={handleClick} />
        <CountFavorites />
        <MySwitch />
      </div>
    </div>
  )
}
