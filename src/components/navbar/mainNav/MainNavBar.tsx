import React, { useContext } from "react"

import { ThemeContext } from "../../../ThemeContext"
import "./navbar.css"
import MobileNavigation from "../navigation/MobileNavigation"
import Navigation from "../navigation/Navigation"


export default function MainNavBar() {
  const { dark } = useContext(ThemeContext)

  return (
    <div className={dark ? "navbar-container-dark" : "navbar-container"}>
      <div className="navflex-container">
        <h5 className={dark ? "logo-dark" : "logo"}>Count-Trees</h5>
        <MobileNavigation/>
        <Navigation/>
      </div>
    </div>
  )
}
