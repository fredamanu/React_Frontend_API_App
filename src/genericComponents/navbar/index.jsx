import { useContext } from "react"

import { ThemeContext } from "../../ThemeContext"
import MobileNavigation from "./navigation/MobileNavigation"
import "./index.css"
import Navigation from "./navigation"

export default function NavBar() {
  const { dark } = useContext(ThemeContext)

  return (
    <div className={dark ? "navbar-container-dark" : "navbar-container"}>
      <div className="navflex-container">
        <h5 className={dark ? "logo-dark" : "logo"}>Count-Trees</h5>
        <MobileNavigation />
        <Navigation />
      </div>
    </div>
  )
}
