import { useNavigate } from 'react-router-dom';
import { Star, Award, ChefHat } from 'lucide-react';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-primary px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">El Buen Sabor</h1>
            <p className="text-xl md:text-2xl mb-8">Descubre el auténtico sabor de la cocina latina</p>
            <button
              onClick={() => navigate('/menu')}
              className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105"
            >
              Ver Menú
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">

          <h2 className='text-4xl font-bold text-gray-800 mb-4'>¿Que es El Buen Sabor?</h2>

          <p className ='text-lg text-gray-600 mb-12'>  Años de experiencia y pasión por lo que amamos hacer </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Calidad Premium</h3>
              <p className="text-gray-600">Ingredientes frescos y seleccionados cuidadosamente para cada plato</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Chefs Expertos</h3>
              <p className="text-gray-600">Nuestros chefs tienen años de experiencia en cocina internacional</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premiados</h3>
              <p className="text-gray-600">Reconocidos por la excelencia en servicio y calidad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
     <div className="bg-orange-50 py-20">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">
      Ofertas Especiales
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      Descubre nuestras delicias con precios irresistibles
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* Oferta 1 */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDuurubohEEK1lD_LxVX5EuJ4BhhKjhWZdw&s"
          alt="Menu Especial"
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Menu Especial</h3>
        <p className="text-gray-600 mb-2">Antes: $12.000</p>
        <p className="text-orange-600 font-bold text-lg">Ahora: $9.500</p>
      </div>

      {/* Oferta 2 */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHyWlsE3hOZsGh6hMFWXg4uiIgLHB5JxFwQ&s"
          alt="Oferta del Dia"
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Oferta del Dia</h3>
        <p className="text-gray-600 mb-2">Antes: $10.000</p>
        <p className="text-orange-600 font-bold text-lg">Ahora: $7.800</p>
      </div>

      {/* Oferta 3 */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <img
          src="https://tofuu.getjusto.com/orioneat-local/resized2/g69HbuK9WHjfBNa5g-2400-x.webp"
          alt="Combo Familiar"
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Combo Familiar</h3>
        <p className="text-gray-600 mb-2">Antes: $20.000</p>
        <p className="text-orange-600 font-bold text-lg">Ahora: $16.500</p>
      </div>
    </div>

    <button 
    onClick={() => navigate('/menu')} 
    className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
      
      Ver Menú Completo
    </button>
  </div>
</div>


      {/* About Section */}
      <div className="bg-white-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-700 mb-6">
                Desde 1995, El Buen Sabor ha sido el destino preferido para los amantes de la auténtica cocina latina. 
                Nuestro compromiso con la calidad y el servicio excepcional nos ha convertido en un referente gastronómico.
              </p>
              <button
                onClick={() => navigate('/menu')}
                className="bg-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
              >
                Explorar Menú
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="https://muchosnegociosrentables.com/wp-content/uploads/2017/09/Co%CC%81mo-montar-una-cantina-italiana_opt.jpg"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;