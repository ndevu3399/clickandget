import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Header() {
  const { cart } = useContext(CartContext)

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation" style={{ padding: '1rem 2rem' }}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" style={{ fontSize: '1.8rem', fontWeight: '700', color: '#ffffff' }}>
          🛍 Click & Get
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/" className="navbar-item" style={{ color: '#ffffff', fontSize: '1rem', padding: '0.5rem 1rem' }}>
          Home
        </Link>
        <Link to="/cart" className="navbar-item" style={{ color: '#ffffff', fontSize: '1rem', padding: '0.5rem 1rem' }}>
          🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </Link>
      </div>
    </nav>
  )
}
