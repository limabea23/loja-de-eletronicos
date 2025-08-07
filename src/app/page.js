'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import { productsData } from '../../data/products';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 500);
  }, []);

  return (
    <div>
      <Header
        title="Loja de Eletrônicos"
        subtitle="Tecnologia de qualidade com preço justo"
        totalProducts={products.length}
      />

      <div className="products" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '0 20px'
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}