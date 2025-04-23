import React from 'react';

export default function CategoryFilter({ products, selected, setSelected }) {
  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <div className="field is-grouped is-centered mb-5">
      {categories.map(cat => (
        <p className="control" key={cat}>
          <button
            className={`button ${selected === cat ? 'is-info is-outlined' : 'is-light'}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        </p>
      ))}
    </div>
  );
}
