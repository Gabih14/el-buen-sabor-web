import React from 'react';
import MenuItem from './MenuItem';

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
    { id: 1, name: "Paella Valenciana", price: 24.99, image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=500", description: "Arroz, mariscos, pollo y verduras" },
    { id: 2, name: "Tacos al Pastor", price: 12.99, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=500", description: "Tortillas de maíz con cerdo marinado y piña" },
    { id: 3, name: "Lomo Saltado", price: 18.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=500", description: "Carne de res salteada con verduras" },
    { id: 4, name: "Ceviche", price: 16.99, image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&q=80&w=500", description: "Pescado fresco marinado en limón" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
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
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition">
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
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Menú</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regularItems.map(item => (
            <MenuItem key={item.id} item={item} onAddToCart={() => {}} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;