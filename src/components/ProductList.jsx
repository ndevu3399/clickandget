import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductItem from './ProductItem';
import CategoryFilter from './CategoryFilter';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setError('Oops! Could not load products.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (category === 'All') {
      setFiltered(products);
    } else {
      setFiltered(products.filter(p => p.category === category));
    }
  }, [category, products]);

  if (loading) return <p className="has-text-centered">Loading products...</p>;
  if (error) return <p className="has-text-danger has-text-centered">{error}</p>;

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
  );
}
