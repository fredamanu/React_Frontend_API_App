import "./App.css"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import CountryPage from "./pages/CountryPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:id" element={<CountryPage />} />
    </Routes>
  )
}

export default App
