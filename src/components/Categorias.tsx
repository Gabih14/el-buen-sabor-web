import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const categories = [
  'Pizzas',
  'Empanadas',
  'Pastas',
  'Lomo',
  'Bebidas',
  'Tacos',
  'Guisos',
  'Postres',
  'Salsas'
];

export const Categorias = ({ onSelect }: { onSelect: (category: string) => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Categorías
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>

      {open && (
        <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onSelect(category);
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorias;
