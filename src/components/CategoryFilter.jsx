import React from 'react'

export default function CategoryFilter({ products, selected, setSelected }) {
  const categories = ['All', ...new Set(products.map(p => p.category))]

  return (
    <div className="field is-grouped mb-4">
      {categories.map(cat => (
        <p className="control" key={cat}>
          <button
            className={`button ${selected === cat ? 'is-info' : ''}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        </p>
      ))}
    </div>
  )
}
