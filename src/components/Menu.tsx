import MenuItem from './MenuItem';
import { useCartStore } from '../store/cartStore'; // Importa el store
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';

const Menu = () => {
  const addToCart = useCartStore(state => state.addToCart); // Obtiene la función
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

   const categories = [
    { id: 'all', name: 'Todo' },
    { id: 'main', name: 'Platos Principales' },
    { id: 'appetizers', name: 'Entradas' },
    { id: 'desserts', name: 'Postres' },
    { id: 'drinks', name: 'Bebidas' },
  ];

  const specialOffers = [
    {
      id: 5,
      name: "Combo Familiar",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=500",
      description: "4 platos principales + 4 bebidas + 2 postres",
      isSpecial: true
    },
    {
      id: 6,
      name: "Menú del Día",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500",
      description: "Entrada + Plato principal + Postre + Bebida",
      isSpecial: true
    }
  ];

 const menuItems = [
    { 
      id: 1, 
      name: "Paella Valenciana", 
      price: 24.99, 
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=500", 
      description: "Arroz, mariscos, pollo y verduras",
      category: 'main'
    },
    { 
      id: 2, 
      name: "Tacos al Pastor", 
      price: 12.99, 
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=500", 
      description: "Tortillas de maíz con cerdo marinado y piña",
      category: 'main'
    },
    { 
      id: 3, 
      name: "Empanadas", 
      price: 8.99, 
      image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?auto=format&fit=crop&q=80&w=500", 
      description: "Rellenas de carne o pollo",
      category: 'appetizers'
    },
    { 
      id: 4, 
      name: "Ceviche", 
      price: 16.99, 
      image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&q=80&w=500", 
      description: "Pescado fresco marinado en limón",
      category: 'appetizers'
    },
    { 
      id: 7, 
      name: "Flan Casero", 
      price: 6.99, 
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=500", 
      description: "Con caramelo y crema",
      category: 'desserts'
    },
    { 
      id: 8, 
      name: "Tres Leches", 
      price: 7.99, 
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=500", 
      description: "Pastel húmedo tradicional",
      category: 'desserts'
    },
    { 
      id: 9, 
      name: "Sangría", 
      price: 5.99, 
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=500", 
      description: "Vino tinto con frutas",
      category: 'drinks'
    },
    { 
      id: 10, 
      name: "Limonada Casera", 
      price: 3.99, 
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=500", 
      description: "Con menta y jengibre",
      category: 'drinks'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);


  return (
    <div className="flex px-6 py-12 gap-6">


      {/* Contenido principal: ofertas + menú */}
      <div className="flex-1">
        {/* Special Offers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Ofertas Especiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialOffers.map(item => (
              <div key={item.id} className="bg-orange-50 rounded-xl p-6 transform transition hover:scale-105">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold text-orange-600">${item.price}</span>
                      <button
                        className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
                        onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, quantity: 1 })}
                      >
                        Ordenar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regular Menu Section */}
         {/* Categories Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Nuestro Menú</h2>
          <button
            onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            className="md:hidden bg-orange-600 text-white p-2 rounded-lg"
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Mobile Categories Dropdown */}
        <div className={`md:hidden ${isCategoryMenuOpen ? 'block' : 'hidden'} mb-6`}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsCategoryMenuOpen(false);
                }}
                className={`w-full px-4 py-3 text-left transition
                  ${selectedCategory === category.id 
                    ? 'bg-orange-600 text-white' 
                    : 'hover:bg-orange-50'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition
                ${selectedCategory === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-orange-100 hover:bg-orange-200'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <MenuItem key={item.id} item={item} onAddToCart={() => addToCart({ ...item, quantity: 1 })} />
          ))}
        </div>
      </section>
      </div >
    </div >
  );
};



export default Menu;