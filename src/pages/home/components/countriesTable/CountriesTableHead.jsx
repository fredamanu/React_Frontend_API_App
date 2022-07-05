import { v4 as uuidv4 } from "uuid"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

export default function CountriesTableHead({ columns, dark }) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={uuidv4()}
            align={column.align}
            style={{
              minWidth: column.minWidth,
              backgroundColor: dark ? "#354556" : "#ccc",
              color: dark ? "#fff" : "inherit",
              fontSize: 20,
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
