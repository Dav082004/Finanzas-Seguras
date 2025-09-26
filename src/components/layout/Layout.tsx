import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { logoutUser } from '../../services/authService';

const Layout: React.FC = () => {
  const { currentUser, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  // Determinar si estamos en una página pública (login/registro)
  const isPublicPage = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.57.53 1.32 1.47 1.6v-3.35L9.6 12.5c-.94-.47-1.4-1.25-1.4-2.35 0-1.86 1.51-2.78 3.14-3.12V5h2.67v2.02c1.52.38 2.65 1.43 2.79 3.16h-1.97c-.1-.87-.54-1.49-1.32-1.67v3.08l1.41.44c1.26.41 2.01 1.24 2.01 2.62 0 1.7-1.4 2.94-3.1 3.29z"></path>
              </svg>
              <span className="text-xl font-semibold text-gray-800">Finanzas Seguras</span>
            </Link>

            {/* Navegación de escritorio */}
            <nav className="hidden md:flex items-center space-x-6">
              {currentUser ? (
                <>
                  <Link
                    to="/dashboard"
                    className={`text-gray-600 hover:text-primary-600 ${location.pathname === '/dashboard' ? 'text-primary-600 font-medium' : ''}`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/transactions"
                    className={`text-gray-600 hover:text-primary-600 ${location.pathname === '/transactions' ? 'text-primary-600 font-medium' : ''}`}
                  >
                    Transacciones
                  </Link>

                  <div className="flex items-center ml-6 space-x-4">
                    <span className="text-sm text-gray-600">
                      {currentUser.displayName || currentUser.email}
                      {currentUser.role === 'asesor' && (
                        <span className="ml-2 px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded-full">
                          Asesor
                        </span>
                      )}
                    </span>
                    <button onClick={handleLogout} className="text-gray-600 hover:text-red-600">
                      Cerrar sesión
                    </button>
                  </div>
                </>
              ) : (
                !isLoading &&
                !isPublicPage && (
                  <>
                    <Link to="/login" className="text-gray-600 hover:text-primary-600">
                      Iniciar sesión
                    </Link>
                    <Link to="/register" className="btn-primary">
                      Registrarse
                    </Link>
                  </>
                )
              )}
            </nav>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <nav className="md:hidden py-3 mt-3 border-t border-gray-200">
              {currentUser ? (
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/dashboard"
                    className={`text-gray-600 hover:text-primary-600 py-2 ${location.pathname === '/dashboard' ? 'text-primary-600 font-medium' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/transactions"
                    className={`text-gray-600 hover:text-primary-600 py-2 ${location.pathname === '/transactions' ? 'text-primary-600 font-medium' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Transacciones
                  </Link>

                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">
                      {currentUser.displayName || currentUser.email}
                      {currentUser.role === 'asesor' && (
                        <span className="ml-2 px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded-full">
                          Asesor
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              ) : (
                !isLoading &&
                !isPublicPage && (
                  <div className="flex flex-col space-y-3">
                    <Link
                      to="/login"
                      className="text-gray-600 hover:text-primary-600 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Iniciar sesión
                    </Link>
                    <Link
                      to="/register"
                      className="btn-primary inline-block text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Registrarse
                    </Link>
                  </div>
                )
              )}
            </nav>
          )}
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Finanzas Seguras S.A.C. Todos los derechos
                reservados.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white">Términos y condiciones</button>
              <button className="text-gray-300 hover:text-white">Política de privacidad</button>
              <button className="text-gray-300 hover:text-white">Contacto</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
