import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <a
          key={product.id}
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover-effect bg-white rounded-2xl shadow-card overflow-hidden"
        >
          <div className="relative h-48">
            <img 
              src={product.image} 
              alt={product.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">
              {product.title}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}