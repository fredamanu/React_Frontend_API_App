import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

import "./myswitch.css"
import { ThemeContext } from "../../ThemeContext"
import { MaterialUISwitch } from "./MaterialUISwitch"

export default function MySwitch() {
  const { dark, setDark } = React.useContext(ThemeContext)

  const handleClick = () => {
    setDark(!dark)
    localStorage.setItem("dark", !dark)
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
