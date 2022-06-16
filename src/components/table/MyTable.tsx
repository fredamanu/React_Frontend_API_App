import { useContext, useState } from "react"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import TablePagination from "@mui/material/TablePagination"

import MyTableHead from "./MyTableHead"
import MyTableBody from "./MyTableBody"
import { ThemeContext } from "../../ThemeContext"
import { Country } from "../../typescript/types"
import "./mytable.css"

const columns = [
  {
    id: "flag",
    label: "Flag",
    minWidth: 170,
  },
  { 
    id: "name.common", 
    label: "Name", 
    minWidth: 100, 
    align: "left" 
  },
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

type Props = {
  data: Country[]
}


 const MyTable: React.FC<Props> = ({ data }) =>{
  const { dark } = useContext(ThemeContext)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div
      className="main-table"
      style={{
        width: "80%",
        overflow: "hidden",
        backgroundColor: dark ? "#435b71" : "#fff",
      }}
    >
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table stickyHeader aria-label="sticky table">
          <MyTableHead columns={columns} />
          <MyTableBody
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

export default MyTable