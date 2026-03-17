import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/home'
import Privacy from './screens/privacy'
import Terms from './screens/terms'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

