import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Header() {
  const { cart } = useContext(CartContext)

  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">🛍 Click & Get</Link>
      </div>
      <div className="navbar-end">
        <Link to="/cart" className="navbar-item">
          🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </Link>
      </div>
    </nav>
  )
}
