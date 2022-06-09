import * as React from "react"
import { useDispatch } from "react-redux"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

import { setSearchTermOne } from "../../redux/actions/searchTerm"
import { ThemeContext } from "../../ThemeContext"
import "./searchbar.css"

export default function SearchBar() {
  const { dark } = React.useContext(ThemeContext)
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
        width: 780,
        backgroundColor: dark ? "#413F42" : "#EEEEEE",
        color: "white",
      }}
    >
      <InputBase
        className="text-field"
        sx={{ ml: 5, flex: 1, color: "black" }}
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
