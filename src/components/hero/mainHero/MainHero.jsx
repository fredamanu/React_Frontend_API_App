import { useContext } from "react"
import Phone from "../phone/Phone"
import { ThemeContext } from "../../../ThemeContext"

import "./main-hero.css"

export default function MainHero() {
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