import React from "react"

import SearchBar from "../searchbar/SeachBar"
import SortTable from "../sort/SortTable"
import "./navbar.css"

export default function NavBarTwo() {
  return (
    <div className="children2">
      <SearchBar />
      <SortTable />
    </div>
  )
}
