import React from 'react'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <div>
      <h1 className="title is-3 mb-5">Products</h1>
      <ProductList />
    </div>
  )
}
