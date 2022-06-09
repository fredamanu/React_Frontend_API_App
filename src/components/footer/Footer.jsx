import React, { useContext } from "react"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"

import { ThemeContext } from "../../ThemeContext"
import "./footer.css"

export default function Footer() {
  const { dark } = useContext(ThemeContext)

  return (
    <div
      className="footer-container"
      style={{ backgroundColor: dark ? "#0F0E0E" : "#FF5D5D" }}
    >
      <p className="copyright-text">Copyright 2022 Count-Trees</p>
      <div className="social">
        <GitHubIcon className="footer-icon" />
        <TwitterIcon className="footer-icon" />
        <FacebookOutlinedIcon className="footer-icon" />
        <a href="www.linkedin.com/in/freda-manu">
          <LinkedInIcon className="footer-icon" />
        </a>
      </div>
    </div>
  )
}
