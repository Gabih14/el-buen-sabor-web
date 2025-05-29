import React from 'react';
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo y Descripción */}
        <div>
          <img 
            src="/src/assets/Logo-banner.webp" 
            alt="El Buen Sabor logo" 
            className="h-16 mx-auto md:mx-0 mb-4"
          />
          <p className="text-gray-400">
            Donde cada plato cuenta una historia de sabor y tradición latina.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Inicio</Link></li>
            <li><Link to="/menu" className="hover:text-white">Menú</Link></li>
            <li><Link to="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
          <p className="text-gray-400">Tel: (123) 456-7890</p>
          <p className="text-gray-400">Email: contacto@elbuensabor.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} El Buen Sabor. Todos los derechos reservados.
      </div>

       {/* Mapa */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Ubicación</h4>
          <div className="rounded-lg overflow-hidden border border-gray-700">
            <iframe 
            title="Ubicación de El Buen Sabor"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0865012362876!2d-122.4206795846814!3d37.77851917975898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cd3f4a5df%3A0x4290aa0c0b062515!2sSan+Francisco%2C+CA!5e0!3m2!1ses-419!2sus!4v1616144538481!5m2!1ses-419!2sus" 
            width="100%"
            height="180"
            style={{border: 0}}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>








    </footer>
  );
};

export default Footer;
