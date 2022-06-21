import React from "react"

import NavHomeIcon from "../homeIcon/NavHomeIcon"
import CountFavorites from "../countFavorites/CountFavorites"
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
