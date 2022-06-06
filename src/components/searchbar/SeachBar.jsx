import * as React from "react"
import { useDispatch } from "react-redux"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

import { setSearchTermOne } from "../../redux/actions/searchTerm"
import "./searchbar.css"

export default function SearchBar() {
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch(setSearchTermOne(e.target.value))
  }

  return (
    <Paper
      className="filter-container"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 600,
        borderRadius: 10,
        backgroundColor: "#5B4B8A",
        color: "white",
      }}
    >
      <InputBase
        className="text-field"
        sx={{ ml: 5, flex: 1, color: "white" }}
        placeholder="Filter Search"
        inputProps={{ "aria-label": "search for a country" }}
        onChange={handleSearch}
      />
      <IconButton sx={{ p: "10px", color: "#D1D1D1" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
