import React, { useContext } from "react"
import { useDispatch } from "react-redux"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"

import PopOver from "../popover/PopOver"
import { setSearchTermTwo } from "../../redux/actions/searchTerm.ts"
import { ThemeContext } from "../../ThemeContext"
import "./searchbar.css"

export default function SearchFav() {
  const dispatch = useDispatch()
  const { dark } = useContext(ThemeContext)

  const handleChange = (e) => {
    dispatch(setSearchTermTwo(e.target.value))
  }

  return (
    <Paper
      className="searchfav-container"
      component="form"
      elevation={0}
      sx={{
        p: "0px 1px",
        display: "flex",
        alignItems: "center",
        width: 500,
        backgroundColor: dark ? "#F9F9F9" : "#fff",
        color: dark ? "#ccc" : "#fff",
      }}
    >
      <InputBase
        className="text-field-2"
        sx={{ ml: 5, flex: 1, color: "black" }}
        placeholder="Find more countries to add to your list"
        inputProps={{ "aria-label": "search for a country" }}
        onChange={handleChange}
      />
      <PopOver />
    </Paper>
  )
}