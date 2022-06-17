import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CountryPage from "./pages/CountryPage"
import FavoriteCountriesPage from "./pages/FavoriteCountriesPage"

import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:id" element={<CountryPage />} />
      <Route path="/favoritecountries" element={<FavoriteCountriesPage />} />
    </Routes>
  )
}

export default App
