import React, { useContext } from "react"
import Phone from "./phone"
import { ThemeContext } from "../../../../ThemeContext"

import "./index.css"

export default function Hero() {
  const { dark } = useContext(ThemeContext)
  
  return (
    <div className={dark ? "homehero-container-dark" : "homehero-container"}>
      <h1 className={dark ? "hero-heading-dark" : "hero-heading"}>
        Find Your Next Destination
      </h1>
      <Phone />
    </div>
  )
}
