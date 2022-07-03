import React, { useContext } from "react"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"

import { ThemeContext } from "../../ThemeContext"
import "./index.css"

export default function Footer() {
  const { dark } = useContext(ThemeContext)

  return (
    <div
      className="footer-container"
      style={{ backgroundColor: dark ? "#435b71" : "#fff" }}
    >
      <p className={dark ? "copyright-text-dark" : "copyright-text"}>
        Copyright 2022 Count-Trees
      </p>
      <div className="social">
        <GitHubIcon className={dark ? "footer-icon-dark" : "footer-icon"} />
        <TwitterIcon className={dark ? "footer-icon-dark" : "footer-icon"} />
        <FacebookOutlinedIcon
          className={dark ? "footer-icon-dark" : "footer-icon"}
        />
        <a href="www.linkedin.com/in/freda-manu">
          <LinkedInIcon className={dark ? "footer-icon-dark" : "footer-icon"} />
        </a>
      </div>
    </div>
  )
}
