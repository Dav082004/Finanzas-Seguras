import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  BanknotesIcon,
  LightBulbIcon,
  AcademicCapIcon,
  DocumentChartBarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Descubre cómo nuestros servicios especializados y tecnología innovadora pueden
            transformar tu relación con el dinero y alcanzar tus metas financieras.
          </p>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios diseñados para cubrir todas tus necesidades
              financieras
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Asesoría Personalizada */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <UserGroupIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Asesoría Personalizada</h3>
              <p className="text-gray-600 mb-6">
                Sesiones individuales con asesores financieros certificados que analizan tu
                situación específica y diseñan estrategias adaptadas a tus objetivos.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Análisis completo de ingresos y gastos</li>
                <li>• Plan personalizado de ahorro e inversión</li>
                <li>• Seguimiento mensual del progreso</li>
                <li>• Recomendaciones específicas por perfil</li>
              </ul>
            </div>

            {/* Control de Gastos */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <ChartBarIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Control de Gastos</h3>
              <p className="text-gray-600 mb-6">
                Plataforma digital que te permite registrar, categorizar y analizar todos tus gastos
                con gráficos interactivos y reportes automáticos.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Registro automático de transacciones</li>
                <li>• Categorización inteligente</li>
                <li>• Gráficos y visualizaciones</li>
                <li>• Alertas de presupuesto</li>
              </ul>
            </div>

            {/* Educación Financiera */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <AcademicCapIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Educación Financiera</h3>
              <p className="text-gray-600 mb-6">
                Talleres presenciales y virtuales diseñados para mejorar tus conocimientos
                financieros y habilidades de gestión del dinero.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Talleres presenciales y online</li>
                <li>• Contenido educativo interactivo</li>
                <li>• Certificaciones financieras</li>
                <li>• Material didáctico especializado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Tecnológicos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnología que Marca la Diferencia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprovechamos las últimas innovaciones tecnológicas para ofrecerte la mejor experiencia
              financiera
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seguridad Garantizada</h3>
              <p className="text-gray-700">
                Encriptación de nivel bancario y autenticación de dos factores protegen tu
                información financiera.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automatización IA</h3>
              <p className="text-gray-700">
                Reportes automáticos y recomendaciones inteligentes generadas por Inteligencia
                Artificial.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <BanknotesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Control Total</h3>
              <p className="text-gray-700">
                Accede a toda tu información financiera desde cualquier dispositivo, en tiempo real.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <DocumentChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reportes Inteligentes</h3>
              <p className="text-gray-700">
                Análisis detallados con insights personalizados para optimizar tus finanzas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Soporte 24/7</h3>
              <p className="text-gray-700">
                Asistencia continua para resolver dudas y acompañarte en tu proceso financiero.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-6">
                <LightBulbIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovación Constante</h3>
              <p className="text-gray-700">
                Actualizaciones regulares con nuevas funcionalidades basadas en feedback de
                usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cómo Trabajamos Contigo
            </h2>
            <p className="text-xl text-blue-200">
              Un proceso estructurado para garantizar tu éxito financiero
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Diagnóstico Inicial</h3>
              <p className="text-blue-200">
                Evaluamos tu situación financiera actual y identificamos áreas de mejora.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Plan Personalizado</h3>
              <p className="text-blue-200">
                Diseñamos una estrategia específica adaptada a tus objetivos y perfil.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Implementación</h3>
              <p className="text-blue-200">
                Te acompañamos en la ejecución del plan con herramientas digitales.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Seguimiento</h3>
              <p className="text-blue-200">
                Monitoreamos tu progreso y ajustamos la estrategia según sea necesario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planes Diseñados Para Ti
            </h2>
            <p className="text-xl text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades y presupuesto
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Básico</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">S/99</div>
                <div className="text-gray-600">/mes</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Control de gastos digital</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Reportes mensuales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Acceso a talleres online</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition duration-300 block text-center"
              >
                Comenzar
              </Link>
            </div>

            {/* Plan Premium */}
            <div className="bg-blue-900 rounded-2xl shadow-xl p-8 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Plan Premium</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">S/199</div>
                <div className="text-blue-200">/mes</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-xs">✓</span>
                  </div>
                  <span className="text-white">Todo del Plan Básico</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-xs">✓</span>
                  </div>
                  <span className="text-white">Asesoría personalizada mensual</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-xs">✓</span>
                  </div>
                  <span className="text-white">Análisis con IA</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-xs">✓</span>
                  </div>
                  <span className="text-white">Soporte prioritario</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-lg transition duration-300 block text-center"
              >
                Comenzar
              </Link>
            </div>

            {/* Plan Empresarial */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Empresarial</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">S/399</div>
                <div className="text-gray-600">/mes</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Todo del Plan Premium</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Asesoría semanal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Plan de inversiones personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Asesor dedicado</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 block text-center"
              >
                Comenzar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            ¿Listo para Transformar tus Finanzas?
          </h2>
          <p className="text-xl text-blue-800 mb-8">
            Comienza hoy mismo y descubre cómo nuestros servicios pueden cambiar tu vida financiera
          </p>
          <Link
            to="/register"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            Comenzar Ahora - Gratis por 30 días
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
