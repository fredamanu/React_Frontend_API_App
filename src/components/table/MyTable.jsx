import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import TablePagination from "@mui/material/TablePagination"

import THead from "./THead"
import Tbody from "./Tbody"
import "./mytable.css"

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
]

export default function MyTable({ data, error }) {
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
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <THead columns={columns} />
          <Tbody
            data={data}
            error={error}
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
      />
    </Paper>
  )
}
