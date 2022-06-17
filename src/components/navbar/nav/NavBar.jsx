import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import MySwitch from "../switch/MySwitch"
import HomeIcon from "@mui/icons-material/Home"
import CountFavorites from "../countFavorites/CountFavorites"
import { ThemeContext } from "../../../ThemeContext"
import "./navbar.css"

export default function NavBar() {
  const navigate = useNavigate()
  const { dark } = useContext(ThemeContext)

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className={dark ? "navbar-container-dark" : "navbar-container"}>
      <div className="children1">
        <h5 className={dark ? "logo-dark" : "logo"}>Count-Trees</h5>
        <div className="sub-children1">
          <HomeIcon
            className={dark ? "home-icon-dark" : "home-icon"}
            onClick={handleClick}
          />
          <CountFavorites />
          <MySwitch />
        </div>
      </div>
    </div>
  )
}
