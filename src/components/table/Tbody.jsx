import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import { Link } from "react-router-dom"

import "./mytable.css"

export default function Tbody({ data, error, page, rowsPerPage }) {
  const style = {
    align: "left",
  }

  return (
    <TableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.name.common}>
              <TableCell sx={{ fontSize: 100 }}>{row.flag}</TableCell>
              <TableCell align={style.align}>
                <Link to={{ pathname: `/country/${row.name.common}` }}>
                  {row.name.common}
                </Link>
              </TableCell>
              <TableCell align={style.align}>
                {row.population.toLocaleString("en-US")}
              </TableCell>
              <TableCell align={style.align}>{row.region}</TableCell>
              <TableCell align={style.align}>
                <ul>
                  {Object.values(row.languages).map((lang) => {
                    return (
                      <li key={lang} align={style.align}>
                        {lang}
                      </li>
                    )
                  })}
                </ul>
              </TableCell>
            </TableRow>
          )
        })}
    </TableBody>
  )
}
