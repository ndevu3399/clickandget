import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={product.thumbnail} alt={product.title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-6">{product.title}</p>
        <p className="subtitle is-6">${product.price}</p>
        <button className="button is-primary" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}
