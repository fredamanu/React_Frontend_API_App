import { useContext } from "react"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

import { ThemeContext } from "../../ThemeContext"

type Props = {
  columns: ({
    id: string;
    label: string;
    minWidth: number;
    align?: any;
} | {
    id: string;
    label: string;
    minWidth: number;
    align: any;
})[]
}

 const CountriesTableHead: React.FC<Props> = ({ columns })=> {
  const { dark } = useContext(ThemeContext)
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
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

export default CountriesTableHead