import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp"

import { addFavoriteCountry } from "../../../redux/actions/favoriteCountries"
import "./main-table.css"

export default function CountriesTableBody({ data, page, rowsPerPage, dark }) {
  const dispatch = useDispatch()
  const style = {
    align: "left",
  }

  const handleCountClick = (row) => {
    const newName =
      row.name.common.length > 15
        ? row.name.common.slice(0, 15) + "..."
        : row.name.common
    const obj = {
      name: newName,
      fullname: row.name.common,
      flag: row.flags.png,
    }
    dispatch(addFavoriteCountry(obj))
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
                <Link
                  className={dark ? "a-dark" : "a-light"}
                  to={{ pathname: `/country/${row.name.common}` }}
                >
                  {row.name.common}
                </Link>
              </TableCell>
              <TableCell
                align={style.align}
                sx={{ color: dark ? "#fff" : "#inherit" }}
              >
                {row.population.toLocaleString("en-US")}
              </TableCell>
              <TableCell
                align={style.align}
                sx={{ color: dark ? "#fff" : "inherit" }}
              >
                {row.region}
              </TableCell>
              <TableCell
                align={style.align}
                sx={{ color: dark ? "#fff" : "inherit" }}
              >
                <ul>
                  {row.languages
                    ? Object.values(row.languages).map((lang) => {
                        return (
                          <li key={lang} align={style.align}>
                            {lang}
                          </li>
                        )
                      })
                    : ""}
                </ul>
              </TableCell>
              <TableCell>
                <FavoriteSharpIcon
                  className={dark ? "favIcon-dark" : "favIcon"}
                  sx={{ fontSize: 40 }}
                  onClick={() => handleCountClick(row)}
                />
              </TableCell>
            </TableRow>
          )
        })}
    </TableBody>
  )
}
