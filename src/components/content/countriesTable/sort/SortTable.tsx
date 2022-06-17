import {useState, useContext} from "react"
import { useDispatch } from "react-redux"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

import {
  sortCountriesByName,
  sortCountriesByPopulation,
  sortCountriesByRegion,
} from "../../../../redux/actions/sortCountries"
import { ThemeContext } from "../../../../ThemeContext"
import "./sort.css"

export default function SortTable() {
  const [sort, setSort] = useState("")
  const { dark } = useContext(ThemeContext)
  const dispatch = useDispatch()
 

  const handleChange = (event: any) => {
    setSort(event.target.value)
  }

  const handleNameSorting = (orderBy: string) => {
    dispatch(sortCountriesByName(orderBy))
  }

  const handlePopulationSorting = (orderBy: string) => {
    dispatch(sortCountriesByPopulation(orderBy))
  }

  const handleRegionSorting = (orderBy: string) => {
    dispatch(sortCountriesByRegion(orderBy))
  }
  return (
    <div className="sort-container">
      <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
        <InputLabel
          sx={{ color: dark ? "#fff" : "black" }}
          id="demo-simple-select-standard-label"
        >
          Sort By:
        </InputLabel>
        <Select
          sx={{ color: dark ? "#fff" : "black" }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={handleChange}
          label="Sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={() => handleNameSorting("asc")} value="name a-z">
            Name(A-Z)
          </MenuItem>
          <MenuItem onClick={() => handleNameSorting("desc")} value="name z-a">
            Name(Z-A)
          </MenuItem>
          <MenuItem
            onClick={() => handlePopulationSorting("asc")}
            value="population asc"
          >
            Population(Low-High)
          </MenuItem>
          <MenuItem
            onClick={() => handlePopulationSorting("desc")}
            value="population desc"
          >
            Population(High-Low)
          </MenuItem>
          <MenuItem
            onClick={() => handleRegionSorting("asc")}
            value="region asc"
          >
            Region(A-Z)
          </MenuItem>
          <MenuItem
            onClick={() => handleRegionSorting("desc")}
            value="region desc"
          >
            Region(Z-A)
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
