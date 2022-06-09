import * as React from "react"
import { useDispatch } from "react-redux"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

import {
  sortCountriesByName,
  sortCountriesByPopulation,
  sortCountriesByRegion,
} from "../../redux/actions/sortCountries"
import "./sort.css"

export default function SortTable() {
  const dispatch = useDispatch()
  const [sort, setSort] = React.useState("")

  const handleChange = (event) => {
    setSort(event.target.value)
  }

  const handleNameSorting = (orderBy) => {
    dispatch(sortCountriesByName())
  }

  const handlePopulationSorting = (orderBy) => {
    dispatch(sortCountriesByPopulation())
  }

  const handleRegionSorting = (orderBy) => {
    dispatch(sortCountriesByRegion())
  }
  return (
    <div className="sort-container">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          sx={{ color: "rgb(206, 204, 204)" }}
          id="demo-simple-select-standard-label"
        >
          Sort Table
        </InputLabel>
        <Select
          sx={{ color: "rgb(206, 204, 204)" }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={handleChange}
          label="Sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={handleNameSorting} value="name">
            Name
          </MenuItem>
          <MenuItem onClick={handlePopulationSorting} value="population">
            Population
          </MenuItem>
          <MenuItem onClick={handleRegionSorting} value="region">
            Region
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
