import * as React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

import "./loadingIcon.css"

export default function LoadingIcon() {
  return (
    <Box className="loadingIcon">
      <CircularProgress color="secondary" />
    </Box>
  )
}
