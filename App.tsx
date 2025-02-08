import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Book, 
  Clock, 
  Edit3, 
  Pen, 
  Image as PosterIcon, 
  Youtube,
  Sparkles,
  ChevronRight,
  Brain
} from 'lucide-react';
import { Category } from './types';
import { ProductPage } from './pages/ProductPage';
import { books, journals, pens, alarms, posters } from './data/products';

const categories: Category[] = [
  {
    title: 'Books',
    description: 'Stoic wisdom to build a strong mind, stay focused, and achieve success',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
    path: '/books'
  },
  {
    title: 'Diaries & Journals',
    description: 'Organize thoughts, set goals, and track progress effortlessly',
    icon: Edit3,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
    path: '/journals'
  },
  {
    title: 'High-Quality Pens',
    description: 'Smooth, durable, and perfect for writing, sketching, or planning',
    icon: Pen,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=800',
    path: '/pens'
  },
  {
    title: 'Alarm Clocks',
    description: 'Reliable wake-up calls to start your day with focus and energy',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1584374295342-39db62a82a8c?auto=format&fit=crop&q=80&w=800',
    path: '/alarms'
  },
  {
    title: 'Wall Posters',
    description: 'Daily motivation and inspiration to keep you driven and focused',
    icon: PosterIcon,
    image: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?auto=format&fit=crop&q=80&w=800',
    path: '/posters'
  }
];

function HomePage() {
  return (
    <div className="min-h-screen gradient-background text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-2">
            <Brain className="w-14 h-14 text-gold" />
          </div>
          <h1 className="text-4xl font-bold text-white">
            Life Mastery
          </h1>
          <p className="flex items-center text-lg text-secondary">
            <Sparkles className="w-5 h-5 text-gold mr-2" />
            Find products that help you grow and improve your life
            <Sparkles className="w-5 h-5 text-gold ml-2" />
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.title}
              to={category.path}
              className="card-hover-effect bg-white rounded-2xl shadow-card overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {category.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 text-primary hover:text-gold transition-colors duration-300">
                      <span className="font-medium">Explore</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          <a 
            href="#" 
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
            aria-label="Visit our YouTube channel"
          >
            <Youtube className="w-6 h-6 text-white" />
          </a>
          <p className="text-secondary text-sm">
            © 2025 Life Mastery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<ProductPage title="Books" products={books} />} />
        <Route path="/journals" element={<ProductPage title="Diaries & Journals" products={journals} />} />
        <Route path="/pens" element={<ProductPage title="High-Quality Pens" products={pens} />} />
        <Route path="/alarms" element={<ProductPage title="Alarm Clocks" products={alarms} />} />
        <Route path="/posters" element={<ProductPage title="Wall Posters" products={posters} />} />
      </Routes>
    </Router>
  );
}

export default App;