import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Country from "./pages/Country"
import FavoriteCountries from "./pages/FavoriteCountries"

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
