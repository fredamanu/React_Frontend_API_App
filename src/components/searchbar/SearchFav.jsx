import React from "react"
import { useDispatch } from "react-redux"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"

import PopOver from "../popover/PopOver"
import { setSearchTermTwo } from "../../redux/actions/searchTerm"
import "./searchbar.css"

export default function SearchFav() {
  const dispatch = useDispatch()

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
        width: 400,
        backgroundColor: "#fff",
        color: "#ccc",
      }}
    >
      <InputBase
        className="text-field"
        sx={{ ml: 5, flex: 1, color: "black" }}
        placeholder="Find more countries to add to your list"
        inputProps={{ "aria-label": "search for a country" }}
        onChange={handleChange}
      />
      <PopOver />
    </Paper>
  )
}
