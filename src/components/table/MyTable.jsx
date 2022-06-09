import * as React from "react"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import TablePagination from "@mui/material/TablePagination"

import THead from "./THead"
import Tbody from "./Tbody"
import "./mytable.css"
import { ThemeContext } from "../../ThemeContext"

const columns = [
  {
    id: "flag",
    label: "Flag",
    minWidth: 170,
  },
  { id: "name.common", label: "Name", minWidth: 100, align: "left" },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "left",
  },
  {
    id: "region",
    label: "Region",
    minWidth: 170,
    align: "left",
  },
  {
    id: "languages",
    label: "Languages",
    minWidth: 170,
    align: "left",
  },
  {
    id: "add",
    label: "Add",
    minWidth: 100,
    align: "left",
  },
]

export default function MyTable({ data }) {
  const { dark } = React.useContext(ThemeContext)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div
      className="main-table"
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: dark ? "#212121" : "#FFF2F2",
      }}
    >
      <TableContainer sx={{ maxHeight: 450 }}>
        <Table stickyHeader aria-label="sticky table">
          <THead columns={columns} dark={dark} />
          <Tbody
            dark={dark}
            data={data}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: dark ? "#fff" : "inherit" }}
      />
    </div>
  )
}
