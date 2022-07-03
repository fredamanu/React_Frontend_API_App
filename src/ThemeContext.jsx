import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")))

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
