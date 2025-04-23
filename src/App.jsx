import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CartPage from './pages/CartPage.jsx'
import Header from './components/Header.jsx'
import NotFound from './pages/NotFound.jsx'  // Importing a NotFound page for 404
import './custom.css';  // Import your custom styles


export default function App() {
  return (
    <Router>
      <Header />
      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} /> {/* 404 fallback */}
        </Routes>
      </div>
    </Router>
  )
}
