import React from "react"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"

import "./footer.css"

export default function Footer() {
  return (
    <div className="footer-container">
      <p className="copyright-text">Copyright 2022 Count-Tress</p>
      <div className="social">
        <GitHubIcon className="footer-icon" />
        <TwitterIcon className="footer-icon" />
        <FacebookOutlinedIcon className="footer-icon" />
        <LinkedInIcon className="icon" />
      </div>
    </div>
  )
}
