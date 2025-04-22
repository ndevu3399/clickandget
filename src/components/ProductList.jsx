import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'
import ProductItem from './ProductItem'
import CategoryFilter from './CategoryFilter'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [category, setCategory] = useState('All')

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data)
      setFiltered(data)
    })
  }, [])

  useEffect(() => {
    if (category === 'All') {
      setFiltered(products)
    } else {
      setFiltered(products.filter(p => p.category === category))
    }
  }, [category, products])

  return (
    <>
      <CategoryFilter products={products} selected={category} setSelected={setCategory} />
      <div className="columns is-multiline">
        {filtered.map(product => (
          <div className="column is-one-quarter" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </>
  )
}
