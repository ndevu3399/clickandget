import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CartPage from './pages/CartPage.jsx'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <Router>
      <Header />
      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  )
}
