import React from "react"
import CountFavorites from "../countFavorites/CountFavorites"
import NavHomeIcon from "../homeIcon/NavHomeIcon"
import MySwitch from "../switch/MySwitch"

import "./navigation.css"

export default function NavLinks() {
  return (
    <div className="navlinks-container">
      <NavHomeIcon />
      <CountFavorites />
      <MySwitch />
    </div>
  )
}
