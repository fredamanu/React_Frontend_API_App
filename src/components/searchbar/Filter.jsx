import * as React from "react"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

import "./searchbar.css"

export default function Filter({ handleSearch }) {
  return (
    <Paper
      className="filter-container"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: 10,
      }}
    >
      <InputBase
        className="text-field"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Filter Search"
        inputProps={{ "aria-label": "search for a country" }}
        onChange={handleSearch}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
