import React, { useContext, useState } from "react"
import { CgMenuRound } from "react-icons/cg"
import { ThemeContext } from "../../../ThemeContext"
import NavLinks from "./NavLinks"

export default function MobileNavigation() {
  const { dark } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  return (
    <nav className="mobile-navigation">
      <CgMenuRound
        className="hamMenu"
        size="40px"
        color={dark ? "white" : "black"}
        onClick={() => setOpen(!open)}
      />
      {open && <NavLinks />}
    </nav>
  )
}
