import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp"

import { addFavoriteCountry } from "../../../../redux/actions/favoriteCountries"
import {Country} from "../../../../typescript/types"
import { useContext } from "react"
import { ThemeContext } from "../../../../ThemeContext"
import "./main-table.css"

type Props = {
  data: Country[],
  page: number,
  rowsPerPage: number
}

const CountriesTableBody: React.FC<Props> = ({ data, page, rowsPerPage }) =>{
  const { dark } = useContext(ThemeContext)
  const dispatch = useDispatch()
 

  const handleCountClick = (country: Country) => {
    const newName =
      country.name.common.length > 15
        ? country.name.common.slice(0, 15) + "..."
        : country.name.common
    const obj = {
      name: newName,
      fullname: country.name.common,
      flag: country.flags.png,
    }
    dispatch(addFavoriteCountry(obj))
  }

  return (
    <TableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((country) => {
          return (
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              key={country.name.common}
            >
              <TableCell sx={{ fontSize: 100 }}>{country.flag}</TableCell>
              <TableCell 
              >
                <Link
                  className={dark ? "a-dark" : "a-light"}
                  to={{ pathname: `/country/${country.name.common}` }}
                >
                  {country.name.common}
                </Link>
              </TableCell>
              <TableCell
                sx={{ color: dark ? "#fff" : "#inherit" }}
              >
                {country.population.toLocaleString("en-US")}
              </TableCell>
              <TableCell
                sx={{ color: dark ? "#fff" : "inherit" }}
              >
                {country.region}
              </TableCell>
              <TableCell
                sx={{ color: dark ? "#fff" : "inherit" }}
              >
                <ul>
                  {country.languages
                    ? Object.values(country.languages).map((language) => {
                        return (
                          <li key={language}>
                            {language}
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
                  onClick={() => handleCountClick(country)}
                />
              </TableCell>
            </TableRow>
          )
        })}
    </TableBody>
  )
}


export default CountriesTableBody