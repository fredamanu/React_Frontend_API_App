import React from "react"
import Popover from "@mui/material/Popover"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

import CountriesGrid from "../countriesGrid/CountriesGrid"

export default function CountriesPopOver() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <div>
      <IconButton
        sx={{ p: "10px", color: "#ccc" }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <SearchIcon />
      </IconButton>
      <Popover
        className="popover-container"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <CountriesGrid />
      </Popover>
    </div>
  )
}
