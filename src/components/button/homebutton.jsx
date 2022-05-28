import * as React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import MapIcon from "@mui/icons-material/Map"

import "./button.css"

export default function HomeButton({ data }) {
  return (
    <Stack className="button-container" direction="row" spacing={2}>
      <Button className="button" variant="outlined" color="primary">
        <a className="button-link" href="/">
          Home
        </a>
      </Button>

      <Button
        className="button"
        variant="contained"
        color="primary"
        endIcon={<MapIcon />}
      >
        <a
          className="button-link"
          href={data.map((c) => {
            return c.maps.googleMaps
          })}
        >
          Map
        </a>
      </Button>
    </Stack>
  )
}
