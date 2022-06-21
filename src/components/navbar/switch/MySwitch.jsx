import { useContext } from "react"
import ToggleOffIcon from "@mui/icons-material/ToggleOff"
import ToggleOnIcon from "@mui/icons-material/ToggleOn"

import { ThemeContext } from "../../../ThemeContext"
import "./myswitch.css"

export default function MySwitch() {
  const { dark, setDark } = useContext(ThemeContext)

  const handleClick = () => {
    // dark === null ? setDark("true") : setDark(null)
    // localStorage.setItem("dark", dark)
    setDark(!dark)
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
