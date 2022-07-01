import React from "react"

import NavHomeIcon from "../homeIcon"
import CountFavorites from "../countFavorites"
import Switch from "../switch"
import "./index.css"

export default function NavLinks() {
  return (
    <div className="navlinks-container">
      <NavHomeIcon />
      <CountFavorites />
      <Switch />
    </div>
  )
}
