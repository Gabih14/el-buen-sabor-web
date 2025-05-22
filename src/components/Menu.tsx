import React from 'react';
import MenuItem from './MenuItem';
import { motion, AnimatePresence } from 'framer-motion';
import { Categorias } from './Categorias';

const Menu = () => {
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

  const regularItems = [
    { id: 1, name: "Paella Valenciana", price: 24.99, image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=500", description: "Arroz, mariscos, pollo y verduras", category:"Guisos" },
    { id: 2, name: "Tacos al Pastor", price: 12.99, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=500", description: "Tortillas de maíz con cerdo marinado y piña", category:"Tacos" },
    { id: 3, name: "Lomo Saltado", price: 18.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=500", description: "Carne de res salteada con verduras", category:"Lomo" },
    { id: 4, name: "Ceviche", price: 16.99, image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&q=80&w=500", description: "Pescado fresco marinado en limón", category:"Guisos" },
    { id: 5, name: "Spaghetti Bolognese", price: 17.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQb4z2wCheG9m7ccS1WtiKEgsUthWVvf0Ww&s", description: "Pasta con salsa de carne",category:"Pastas" },
    { id: 6, name: "Calzone", price: 15.99, image: "https://whiskedawaykitchen.com/wp-content/uploads/2024/08/italian-sausage-calzone-11.jpg", description:" Masa rellena de jamón, queso y champiñones", category:"Empanadas" },
    { id: 7, name: "Pizza Margarita", price: 14.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7RbPLpeQGEKr-JMLB6L9kRdCTMtUbFJfJw&s", description: "Pizza con tomate, mozzarella y albahaca", category:"Pizzas"},
    { id: 8, name: "Lasaña", price: 19.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjCnEj8ga3_zb4XhCuNyXm9oke8Q2ZDSGQA&s", description: "Capas de pasta con salsa de carne y queso parmesano rayado", category:"Pastas" },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("Todas");
  const filteredItems = selectedCategory === "Todas"
    ? regularItems
    : regularItems.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-row gap-4 px-4 sm:px-6 lg:px-12 py-10">
      {/* Categorías (lateral o superior) */}
      {/* Contenido principal */}
    <div className="flex-1">
        {/* Ofertas Especiales */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Ofertas Especiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialOffers.map(item => (
              <div key={item.id} className="bg-orange-50 rounded-xl p-4 sm:p-6 transition-transform hover:scale-105">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                      <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-orange-700 transition">
                        Ordenar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Menú regular */}
        <section>

          <div className="p-4">
          
            <Categorias onSelect={(category) => setSelectedCategory(category)} />

            <h2 className="text-xl font-bold mt-4">Mostrando: {selectedCategory}</h2>
      
          {/* Aquí podrías filtrar los productos según selectedCategory */}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Nuestro Menú</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuItem item={item} onAddToCart={() => {}} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
