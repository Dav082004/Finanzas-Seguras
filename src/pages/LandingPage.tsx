import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  BanknotesIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforma tu
              <span className="block text-yellow-400">Futuro Financiero</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Plataforma digital inteligente que te ayuda a tomar decisiones financieras informadas
              con asesoría personalizada y herramientas modernas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/register"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
              >
                Comenzar Ahora - Gratis
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300"
              >
                Conoce Más
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">350+</div>
                <div className="text-blue-200">Clientes Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">7+</div>
                <div className="text-blue-200">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">80%</div>
                <div className="text-blue-200">Procesos Digitalizados</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M1200 120L0 16.48L0 120L1200 120Z"></path>
          </svg>
        </div>
      </section>

      {/* Quick Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Finanzas Seguras?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre las ventajas que nos convierten en la mejor opción para tus finanzas personales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seguridad Garantizada</h3>
              <p className="text-gray-600 mb-6">
                Protección bancaria de tus datos con encriptación avanzada y autenticación segura.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-semibold">
                Ver más detalles →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Análisis Inteligente</h3>
              <p className="text-gray-600 mb-6">
                Reportes automáticos con IA que te ayudan a entender y mejorar tus hábitos financieros.
              </p>
              <Link to="/services" className="text-green-600 hover:text-green-800 font-semibold">
                Explorar servicios →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Asesoría Experta</h3>
              <p className="text-gray-600 mb-6">
                Acceso directo a asesores financieros certificados para guiarte en cada decisión.
              </p>
              <Link to="/about" className="text-purple-600 hover:text-purple-800 font-semibold">
                Conocer equipo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para tomar el control de tus finanzas?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a más de 350 personas que ya transformaron su vida financiera con nuestra plataforma.
            Comienza gratis y descubre el poder de las finanzas inteligentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Empezar Gratis Ahora
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300"
            >
              Hablar con un Experto
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5" />
              <span className="text-sm">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <BanknotesIcon className="w-5 h-5" />
              <span className="text-sm">Sin costo inicial</span>
            </div>
            <div className="flex items-center gap-2">
              <LightBulbIcon className="w-5 h-5" />
              <span className="text-sm">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
