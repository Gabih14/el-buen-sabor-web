import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; quantity: number }>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;