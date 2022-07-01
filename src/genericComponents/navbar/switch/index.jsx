import { useContext } from "react"
import ToggleOffIcon from "@mui/icons-material/ToggleOff"
import ToggleOnIcon from "@mui/icons-material/ToggleOn"

import { ThemeContext } from "../../../ThemeContext"
import "./index.css"

export default function Switch() {
  const { dark, setDark } = useContext(ThemeContext)

  const handleClick = () => {
    setDark(!dark)
    localStorage.setItem("dark", JSON.stringify(!dark))
  }

  const toggleOff = (
    <ToggleOffIcon
      className="switchOff"
      onClick={handleClick}
      sx={{ fontSize: 40 }}
    />
  )
  const toggleOn = (
    <ToggleOnIcon
      className="switchOn"
      onClick={handleClick}
      sx={{ fontSize: 40 }}
    />
  )

  return <div>{dark ? toggleOff : toggleOn}</div>
}
