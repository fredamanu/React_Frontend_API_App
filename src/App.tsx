import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Country from "./pages/country"
import FavoriteCountries from "./pages/favoriteCountry/index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:id" element={<Country />} />
      <Route path="/favoritecountries" element={<FavoriteCountries />} />
    </Routes>
  )
}

export default App
