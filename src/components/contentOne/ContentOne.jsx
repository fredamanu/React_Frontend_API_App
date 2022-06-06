import React from "react"
import { useNavigate } from "react-router-dom"

import "./contentOne.css"

export default function ContentOne() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="content-one-container">
      <div>
        <h4>There's so much space in here!</h4>
        <p>It could be filled with your favorite countries in the world.</p>
      </div>
      <div>
        <h6>Want to know How?</h6>
        <p>
          Click on the button below to select your favorite country/countries
          from a list of all countries in the world
        </p>
      </div>
      <div>
        <button onClick={handleClick}>SEE COUNTRY LIST</button>
      </div>
    </div>
  )
}
