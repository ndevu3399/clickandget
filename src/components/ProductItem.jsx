import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div
      className="card product-card"
      style={{
        padding: '1rem',
        backgroundColor: '#ffffff',
        border: 'none',
      }}
    >
      <div className="card-image">
        <figure className="image is-4by3" style={{ borderRadius: '10px' }}>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ borderRadius: '10px' }}
          />
        </figure>
      </div>
      <div className="card-content">
        <p
          className="title is-6 has-text-black is-uppercase"
          style={{ fontWeight: '600', letterSpacing: '0.5px' }}
        >
          {product.title}
        </p>
        <p
          className="subtitle is-6 has-text-grey-dark"
          style={{ fontSize: '1rem', fontWeight: '700' }}
        >
          ${product.price}
        </p>
        <button
          className="button is-primary is-fullwidth is-small"
          style={{
            backgroundColor: '#111111',
            color: '#fff',
            borderRadius: '50px',
            padding: '12px',
            fontSize: '1rem',
            letterSpacing: '0.5px',
            transition: 'background-color 0.3s',
          }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
