import React from "react"
import { useNavigate } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"

import CountFavorites from "../count/CountFavorites"
import SearchBar from "../searchbar/SeachBar"
import "./navbar.css"

export default function NavBar() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="navbar-container">
      <h5 className="logo">Count-Trees</h5>
      <SearchBar className="input-field" />
      <HomeIcon className="home-icon" onClick={handleClick} />
      <CountFavorites />
    </div>
  )
}
