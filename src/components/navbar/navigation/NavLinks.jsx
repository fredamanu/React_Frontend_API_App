import React from "react"
import CountFavorites from "../countFavorites"
import HomeIcon from "../homeIcon"
import Switch from "../switch"

import "./index.css"

export default function NavLinks() {
  return (
    <div className="navlinks-container">
      <HomeIcon />
      <CountFavorites />
      <Switch />
    </div>
  )
}
