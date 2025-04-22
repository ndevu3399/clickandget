import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext)

  return (
    <div className="box">
      <div className="columns is-vcentered">
        <div className="column is-3">
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="column">
          <p className="title is-6">{item.title}</p>
          <p>${item.price}</p>
          <div className="buttons">
            <button className="button is-small" onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span className="mx-2">{item.quantity}</span>
            <button className="button is-small" onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button className="button is-danger is-small ml-3" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}
