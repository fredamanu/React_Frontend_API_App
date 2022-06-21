import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true)
  // JSON.parse(localStorage.getItem("dark"))
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
