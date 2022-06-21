import React, { useState } from "react"
import { CgMenuRound } from "react-icons/cg"

import "./navigation.css"
import NavLinks from "./NavLinks"

export default function MobileNavigation({ dark }) {
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
