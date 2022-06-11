import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../../ThemeContext"
import "./navbar.css"
import NavBarOne from "./NavBarOne"

export default function NavBar() {
  const navigate = useNavigate()
  const { dark } = useContext(ThemeContext)

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className={dark ? "navbar-container-dark" : "navbar-container"}>
      <NavBarOne handleClick={handleClick} />
    </div>
  )
}
