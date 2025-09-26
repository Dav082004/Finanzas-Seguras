import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Finanzas Seguras S.A.C.</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conoce nuestra historia, misión y el equipo que está transformando la educación
            financiera en el Perú desde 2018.
          </p>
        </div>
      </section>

      {/* Descripción de la Empresa */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Descripción de la Empresa
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Finanzas Seguras S.A.C.</strong> es una empresa peruana fundada en 2018 y
                ubicada en Lima. Nos dedicamos a ofrecer asesoría financiera personalizada y
                educación en finanzas personales, sirviendo como guía estratégica para quienes
                buscan mejorar su bienestar económico.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Actualmente contamos con más de <strong>350 clientes activos</strong>,
                principalmente jóvenes profesionales y familias de clase media que buscan organizar
                sus ingresos, planificar gastos y fomentar el ahorro como parte fundamental de su
                estabilidad financiera.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nuestra propuesta de valor combina talleres educativos presenciales y virtuales,
                asesorías individuales personalizadas y reportes detallados de control de gastos,
                todo respaldado por una plataforma tecnológica moderna.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">350+</div>
                  <div className="text-gray-600">Clientes Activos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Equipo Finanzas Seguras"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rubro del Negocio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Rubro del Negocio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sector de servicios financieros y asesoría en finanzas personales
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Asesoría Personalizada</h3>
                <p className="text-gray-600">
                  Acompañamiento individual en la administración de recursos económicos
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educación Financiera</h3>
                <p className="text-gray-600">
                  Talleres y programas educativos para decisiones financieras informadas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Planificación Económica
                </h3>
                <p className="text-gray-600">
                  Estrategias de ahorro y planificación para alcanzar metas financieras
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Misión y Visión</h2>
            <p className="text-xl text-blue-200">
              Los pilares que guían nuestro compromiso con la excelencia financiera
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Brindar <strong>soluciones accesibles e innovadoras</strong> que permitan a las
                personas tomar decisiones financieras informadas, fomentando el ahorro y la
                planificación económica como herramientas fundamentales para el bienestar y
                crecimiento personal.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-8 h-8 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Convertirnos en la{' '}
                <strong>empresa líder en educación y control financiero digital</strong>
                en el Perú, mediante una plataforma moderna y confiable que empodere a los clientes
                en la gestión de sus recursos económicos y les permita alcanzar sus metas
                financieras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformación Digital */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformación Digital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evolucionando hacia el futuro de la asesoría financiera con tecnología innovadora
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  De Procesos Manuales a Inteligencia Artificial
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Hemos evolucionado de procesos manuales basados en hojas de cálculo de Excel hacia
                  una <strong>plataforma tecnológica moderna</strong> que aprovecha la Inteligencia
                  Artificial para brindar el mejor servicio a nuestros clientes.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Esta transformación nos permite ofrecer reportes automáticos, análisis predictivo
                  y recomendaciones personalizadas, mejorando significativamente la experiencia del
                  usuario y la eficiencia operativa.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Cloud Computing con Firebase</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Inteligencia Artificial con Gemini</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Análisis en tiempo real</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Reportes automatizados</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                  <h4 className="text-3xl font-bold mb-4">80%</h4>
                  <p className="text-blue-100 mb-6">Procesos Digitalizados</p>

                  <h4 className="text-3xl font-bold mb-4">50%</h4>
                  <p className="text-blue-100 mb-6">Reducción en Tiempo de Reportes</p>

                  <h4 className="text-3xl font-bold mb-4">20%</h4>
                  <p className="text-blue-100">Aumento en Satisfacción del Cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            ¿Quieres Ser Parte de Nuestra Historia?
          </h2>
          <p className="text-xl text-blue-800 mb-8">
            Únete a los más de 350 clientes que confían en nosotros para transformar su futuro
            financiero
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Comenzar Ahora
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
