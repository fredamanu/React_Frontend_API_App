import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp"

import { addFavoriteCountry } from "../../../../redux/actions/favoriteCountries"
import "./main-table.css"
import CountryFlagCarousel from "../../countryCard/countryFlagCarousel/CountryFlagCarousel"

export default function CountriesTableBody({ data, page, rowsPerPage, dark }) {
  const dispatch = useDispatch()
  const style = {
    align: "left",
  }

  const handleCountClick = (country) => {
    const newName =
      country.name.common.length > 15
        ? country.name.common.slice(0, 15) + "..."
        : CountryFlagCarousel.name.common
    const favoriteCountry = {
      name: newName,
      fullname: country.name.common,
      flag: country.flags.png,
    }
    dispatch(addFavoriteCountry(favoriteCountry))
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
              <TableCell align={style.align}>
                <Link
                  className={dark ? "a-dark" : "a-light"}
                  to={{ pathname: `/country/${country.name.common}` }}
                >
                  {country.name.common}
                </Link>
              </TableCell>
              <TableCell
                align={style.align}
                sx={{ color: dark ? "#fff" : "#inherit" }}
              >
                {country.population.toLocaleString("en-US")}
              </TableCell>
              <TableCell
                align={style.align}
                sx={{ color: dark ? "#fff" : "inherit" }}
              >
                {country.region}
              </TableCell>
              <TableCell
                align={style.align}
                sx={{ color: dark ? "#fff" : "inherit" }}
              >
                <ul>
                  {country.languages
                    ? Object.values(country.languages).map((lang) => {
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
                  onClick={() => handleCountClick(country)}
                />
              </TableCell>
            </TableRow>
          )
        })}
    </TableBody>
  )
}
