import React, { useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceType: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementaría el envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    // Reset del formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      serviceType: '',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a alcanzar tus metas financieras. Contáctanos y descubre cómo
            podemos transformar tu situación financiera.
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Información de la empresa */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Oficina Principal</h3>
                    <p className="text-gray-600">
                      Av. El Sol 123, San Isidro
                      <br />
                      Lima 15036, Perú
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      +51 1 234-5678
                      <br />
                      +51 999 888 777
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@finanzasseguras.pe
                      <br />
                      asesoria@finanzasseguras.pe
                    </p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Horarios de Atención
                    </h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 8:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 2:00 PM
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>

                {/* Soporte Online */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Soporte Online</h3>
                    <p className="text-gray-600">
                      Chat en vivo: 24/7
                      <br />
                      Tiempo de respuesta promedio: 2 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/finanzasseguras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition duration-300"
                  >
                    <span className="text-white font-bold">f</span>
                  </a>
                  <a
                    href="https://twitter.com/finanzasseguras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition duration-300"
                  >
                    <span className="text-white font-bold">T</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/finanzasseguras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition duration-300"
                  >
                    <span className="text-white font-bold">in</span>
                  </a>
                  <a
                    href="https://instagram.com/finanzasseguras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition duration-300"
                  >
                    <span className="text-white font-bold">ig</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+51 999 888 777"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Empresa (Opcional)
                    </label>
                    <div className="relative">
                      <BuildingOfficeIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tipo de Servicio de Interés
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="asesoria">Asesoría Personalizada</option>
                    <option value="control-gastos">Control de Gastos</option>
                    <option value="educacion">Educación Financiera</option>
                    <option value="plan-basico">Plan Básico</option>
                    <option value="plan-premium">Plan Premium</option>
                    <option value="plan-empresarial">Plan Empresarial</option>
                    <option value="consulta-general">Consulta General</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Tiempo de respuesta:</strong> Nos comprometemos a responder en menos de 24
                  horas hábiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa y Oficina */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visítanos en Nuestra Oficina</h2>
            <p className="text-xl text-gray-600">
              Estamos ubicados en el corazón financiero de Lima
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Información de la oficina */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué visitarnos?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Consulta Personalizada Gratuita</h4>
                    <p className="text-gray-600">
                      Primera sesión sin costo para evaluar tu situación financiera
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Demostración de la Plataforma</h4>
                    <p className="text-gray-600">
                      Conoce en vivo todas las funcionalidades de nuestro sistema
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Material Educativo</h4>
                    <p className="text-gray-600">
                      Acceso a guías y recursos exclusivos para mejorar tus finanzas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parking Gratuito</h4>
                    <p className="text-gray-600">
                      Estacionamiento disponible para nuestros visitantes
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">¡Promoción Especial!</h4>
                <p className="text-yellow-700">
                  Si agendas tu cita este mes, recibe un{' '}
                  <strong>análisis completo de tu situación financiera totalmente gratuito</strong>{' '}
                  (valor S/150)
                </p>
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPinIcon className="w-16 h-16 mx-auto mb-4" />
                <p className="font-semibold">Mapa Interactivo</p>
                <p className="text-sm">Av. El Sol 123, San Isidro, Lima</p>
                <p className="text-sm mt-2">(Aquí se integraría Google Maps)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes de nuestros clientes
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Cuánto tiempo toma ver resultados?
              </h3>
              <p className="text-gray-600">
                La mayoría de nuestros clientes comienzan a ver mejoras en sus finanzas durante el
                primer mes. Los resultados significativos típicamente se observan entre 3-6 meses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Es segura mi información financiera?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Utilizamos encriptación de nivel bancario y cumplimos con todos los
                estándares de seguridad internacional. Tu información está completamente protegida.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Puedo cambiar de plan después?
              </h3>
              <p className="text-gray-600">
                Sí, puedes upgradar o downgradar tu plan en cualquier momento. Los cambios se
                reflejan inmediatamente y se ajusta el pago proporcionalmente.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Ofrecen garantía de satisfacción?
              </h3>
              <p className="text-gray-600">
                Ofrecemos 30 días de garantía. Si no estás completamente satisfecho, te devolvemos
                el 100% de tu inversión, sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Tienes más preguntas?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Nuestro equipo de expertos está listo para ayudarte a tomar la mejor decisión financiera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+51123456789"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Llamar Ahora: +51 1 234-5678
            </a>
            <a
              href="mailto:info@finanzasseguras.pe"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Escribir Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
