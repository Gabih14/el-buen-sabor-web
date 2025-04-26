import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  setCart: React.Dispatch<React.SetStateAction<Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>>>;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, setCart }) => {
  const updateQuantity = (id: number, change: number) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full">
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Tu Pedido</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
              <ShoppingBag size={48} className="mb-4" />
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-4 border-b"
                  >
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    alert('¡Gracias por tu pedido!');
                    setCart([]);
                    onClose();
                  }}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
                >
                  Realizar Pedido
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;