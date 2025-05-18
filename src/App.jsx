import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import MapPage from './pages/Map'
import { RoutesProvider } from './context/RouteContext'

function App() {
  return (
    <RoutesProvider>
      <header>
        <nav>
          <ul className="nav">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/map">Visor</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </main>
    </RoutesProvider>
  )
}

export default App
