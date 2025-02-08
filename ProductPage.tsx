import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../types';

interface ProductPageProps {
  title: string;
  products: Product[];
}

export function ProductPage({ title, products }: ProductPageProps) {
  return (
    <div className="min-h-screen gradient-background text-white">
      <header className="container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-white">Life Mastery</h1>
        </Link>
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      </header>

      <main className="container mx-auto px-4 py-8">
        <ProductGrid products={products} />
      </main>

      <footer className="container mx-auto px-4 py-8">
        <p className="text-center text-secondary text-sm">
          © 2025 Life Mastery. All rights reserved.
        </p>
      </footer>
    </div>
  );
}