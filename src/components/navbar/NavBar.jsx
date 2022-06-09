import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"

import CountFavorites from "../count/CountFavorites"
import SearchBar from "../searchbar/SeachBar"
import "./navbar.css"
import SortTable from "../sort/SortTable"
import MySwitch from "../switch/MySwitch"
import { ThemeContext } from "../../ThemeContext"

export default function NavBar() {
  const navigate = useNavigate()
  const { dark } = useContext(ThemeContext)

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className={dark ? "navbar-container-dark" : "navbar-container"}>
      <h5 className="logo">Count-Trees</h5>
      <SearchBar />
      <MySwitch />
      <SortTable />
      <HomeIcon className="home-icon" onClick={handleClick} />
      <CountFavorites />
    </div>
  )
}
