import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './screens/home'
import Privacy from './screens/privacy'
import Terms from './screens/terms'
import Support from './screens/support'
import './App.css'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter basename="/CheckVaultLanding">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

