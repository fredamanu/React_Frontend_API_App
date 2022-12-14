import React, { useContext } from "react"
import { useDispatch } from "react-redux"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

import { setSearchTerm } from "../../../../redux/actions/searchTerm"
import { ThemeContext } from "../../../../ThemeContext"
import "./index.css"

export default function SearchBar() {
  const { dark } = useContext(ThemeContext)
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  return (
    <div
      className="filter-container"
      component="form"
      style={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        width: "80%",
        backgroundColor: dark ? "#F9F9F9" : "#EEEEEE",
        color: "white",
      }}
    >
      <InputBase
        className="text-field"
        sx={{ ml: 5, flex: 1, color: "black" }}
        placeholder="Search for a country by name"
        inputProps={{ "aria-label": "search for a country" }}
        onChange={handleSearch}
      />
      <IconButton sx={{ p: "10px", color: "#D1D1D1" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  )
}
