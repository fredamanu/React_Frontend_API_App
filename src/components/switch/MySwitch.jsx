import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

import { ThemeContext } from "../../ThemeContext"
import { MaterialUISwitch } from "./MaterialUISwitch"
import "./myswitch.css"

export default function MySwitch() {
  const { dark, setDark } = React.useContext(ThemeContext)

  const handleClick = () => {
    dark === null ? setDark("true") : setDark(null)
    // localStorage.setItem("dark", dark)
  }

  return (
    <div className="switch-container">
      <FormGroup>
        <FormControlLabel
          control={
            <MaterialUISwitch dark={dark} sx={{ m: 1 }} defaultChecked />
          }
          onClick={handleClick}
        />
      </FormGroup>
    </div>
  )
}