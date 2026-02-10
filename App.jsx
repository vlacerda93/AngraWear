import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FilterBar from './components/FilterBar';
import SustainabilitySection from './components/SustainabilitySection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { products } from './data';

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeColor, setActiveColor] = useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const colorMatch = activeColor === "All" || product.colors.some(c => c.toLowerCase() === activeColor.toLowerCase());
    return categoryMatch && colorMatch;
  });

  return (
    <div className="font-sans antialiased text-primary selection:bg-secondary selection:text-white bg-white min-h-screen">
      <Navbar toggleCart={toggleCart} />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main>
        <Hero />

        <section id="shop" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-[0.2em]">Our Collection</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4">Curated for the Coast</h2>
          </div>

          <FilterBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p>No products found for your selection.</p>
              <button
                onClick={() => { setActiveCategory("All"); setActiveColor("All"); }}
                className="mt-4 text-secondary underline hover:text-primary transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        <SustainabilitySection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
