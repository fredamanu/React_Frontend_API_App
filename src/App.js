import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import CountryPage from "./pages/CountryPage"
import FavoriteCountries from "./pages/FavoriteCountriesPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:id" element={<CountryPage />} />
      <Route path="/favoritecountries" element={<FavoriteCountries />} />
    </Routes>
  )
}

export default App
