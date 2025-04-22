import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

export default function Cart() {
  const { cart } = useContext(CartContext)
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0)

  if (cart.length === 0) return <p>Your cart is empty 😢</p>

  return (
    <div>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
      <hr />
      <h2 className="title is-4">Total: ${total.toFixed(2)}</h2>
    </div>
  )
}
