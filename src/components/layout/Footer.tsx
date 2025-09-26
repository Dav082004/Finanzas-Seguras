import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                className="h-8 w-8 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.57.53 1.32 1.47 1.6v-3.35L9.6 12.5c-.94-.47-1.4-1.25-1.4-2.35 0-1.86 1.51-2.78 3.14-3.12V5h2.67v2.02c1.52.38 2.65 1.43 2.79 3.16h-1.97c-.1-.87-.54-1.49-1.32-1.67v3.08l1.41.44c1.26.41 2.01 1.24 2.01 2.62 0 1.7-1.4 2.94-3.1 3.29z"></path>
              </svg>
              <span className="text-xl font-bold">Finanzas Seguras S.A.C.</span>
            </div>
            <p className="text-blue-200 mb-4">
              Transformando vidas financieras desde 2018 con tecnología
              innovadora y asesoría personalizada para más de 350 clientes en
              todo el Perú.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition duration-300">
                <span className="text-white font-bold text-sm">f</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition duration-300">
                <span className="text-white font-bold text-sm">T</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition duration-300">
                <span className="text-white font-bold text-sm">in</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition duration-300">
                <span className="text-white font-bold text-sm">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Asesoría Personalizada
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Control de Gastos
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Planificación Financiera
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-200 hover:text-yellow-400 transition duration-300">
                  Educación Financiera
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2025 Finanzas Seguras S.A.C. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-blue-200 hover:text-yellow-400 text-sm transition duration-300">
                Política de Privacidad
              </a>
              <a
                href="/terms"
                className="text-blue-200 hover:text-yellow-400 text-sm transition duration-300">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
