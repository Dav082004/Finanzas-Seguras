import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { logoutUser } from "../../services/authService";

interface NavbarProps {
  variant?: "landing" | "app";
}

const Navbar: React.FC<NavbarProps> = ({ variant = "app" }) => {
  const { currentUser, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const navbarClasses =
    variant === "landing"
      ? "absolute top-0 left-0 right-0 z-20 bg-transparent"
      : "bg-white border-b border-gray-200 sticky top-0 z-10";

  const logoTextClasses =
    variant === "landing" ? "text-white" : "text-gray-800";

  const linkClasses =
    variant === "landing"
      ? "text-white/90 hover:text-white"
      : "text-gray-600 hover:text-blue-600";

  const activeLinkClasses =
    variant === "landing"
      ? "text-white font-medium"
      : "text-blue-600 font-medium";

  return (
    <header className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg
              className={`h-8 w-8 ${
                variant === "landing" ? "text-yellow-400" : "text-blue-600"
              }`}
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.57.53 1.32 1.47 1.6v-3.35L9.6 12.5c-.94-.47-1.4-1.25-1.4-2.35 0-1.86 1.51-2.78 3.14-3.12V5h2.67v2.02c1.52.38 2.65 1.43 2.79 3.16h-1.97c-.1-.87-.54-1.49-1.32-1.67v3.08l1.41.44c1.26.41 2.01 1.24 2.01 2.62 0 1.7-1.4 2.94-3.1 3.29z"></path>
            </svg>
            <span className={`text-xl font-bold ${logoTextClasses}`}>
              Finanzas Seguras
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {currentUser ? (
              // Usuario autenticado - Navegación de la app
              <>
                <Link
                  to="/dashboard"
                  className={`${linkClasses} ${
                    location.pathname === "/dashboard" ? activeLinkClasses : ""
                  }`}>
                  Dashboard
                </Link>
                <Link
                  to="/transactions"
                  className={`${linkClasses} ${
                    location.pathname === "/transactions"
                      ? activeLinkClasses
                      : ""
                  }`}>
                  Transacciones
                </Link>

                <div className="flex items-center ml-6 space-x-4">
                  <span
                    className={`text-sm ${
                      variant === "landing" ? "text-white/80" : "text-gray-600"
                    }`}>
                    {currentUser.displayName || currentUser.email}
                    {currentUser.role === "asesor" && (
                      <span
                        className={`ml-2 px-2 py-1 text-xs rounded-full ${
                          variant === "landing"
                            ? "bg-yellow-400 text-blue-900"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                        Asesor
                      </span>
                    )}
                  </span>
                  <button
                    onClick={handleLogout}
                    className={`${linkClasses} hover:text-red-500 font-medium`}>
                    Cerrar sesión
                  </button>
                </div>
              </>
            ) : (
              // Usuario no autenticado - Navegación pública
              !isLoading && (
                <>
                  <Link
                    to="/about"
                    className={`${linkClasses} ${
                      location.pathname === "/about" ? activeLinkClasses : ""
                    }`}>
                    Nosotros
                  </Link>
                  <Link
                    to="/services"
                    className={`${linkClasses} ${
                      location.pathname === "/services" ? activeLinkClasses : ""
                    }`}>
                    Servicios
                  </Link>
                  <Link
                    to="/contact"
                    className={`${linkClasses} ${
                      location.pathname === "/contact" ? activeLinkClasses : ""
                    }`}>
                    Contacto
                  </Link>
                  <Link
                    to="/login"
                    className={`${linkClasses} ${
                      location.pathname === "/login" ? activeLinkClasses : ""
                    }`}>
                    Iniciar sesión
                  </Link>
                  <Link
                    to="/register"
                    className={`${
                      variant === "landing"
                        ? "bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-6 rounded-lg transition duration-300"
                        : "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    } ${
                      location.pathname === "/register"
                        ? "ring-2 ring-offset-2 ring-blue-500"
                        : ""
                    }`}>
                    Registrarse
                  </Link>
                </>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${
              variant === "landing" ? "text-white" : "text-gray-600"
            } focus:outline-none`}>
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`md:hidden mt-4 pb-4 ${
              variant === "landing"
                ? "bg-blue-900/95 backdrop-blur-sm rounded-lg"
                : "bg-white border-t border-gray-200"
            }`}>
            <div
              className={`${variant === "landing" ? "p-4" : "py-3"} space-y-3`}>
              {currentUser ? (
                // Usuario autenticado - Menú móvil
                <>
                  <Link
                    to="/dashboard"
                    className={`block ${linkClasses} ${
                      location.pathname === "/dashboard"
                        ? activeLinkClasses
                        : ""
                    } py-2`}
                    onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <Link
                    to="/transactions"
                    className={`block ${linkClasses} ${
                      location.pathname === "/transactions"
                        ? activeLinkClasses
                        : ""
                    } py-2`}
                    onClick={() => setIsMenuOpen(false)}>
                    Transacciones
                  </Link>

                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div
                      className={`text-sm ${
                        variant === "landing"
                          ? "text-white/80"
                          : "text-gray-600"
                      } mb-2`}>
                      {currentUser.displayName || currentUser.email}
                      {currentUser.role === "asesor" && (
                        <span
                          className={`ml-2 px-2 py-1 text-xs rounded-full ${
                            variant === "landing"
                              ? "bg-yellow-400 text-blue-900"
                              : "bg-blue-100 text-blue-800"
                          }`}>
                          Asesor
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block text-red-500 hover:text-red-700 font-medium py-2">
                      Cerrar sesión
                    </button>
                  </div>
                </>
              ) : (
                // Usuario no autenticado - Menú móvil
                !isLoading && (
                  <>
                    <Link
                      to="/about"
                      className={`block ${linkClasses} ${
                        location.pathname === "/about" ? activeLinkClasses : ""
                      } py-2`}
                      onClick={() => setIsMenuOpen(false)}>
                      Nosotros
                    </Link>
                    <Link
                      to="/services"
                      className={`block ${linkClasses} ${
                        location.pathname === "/services"
                          ? activeLinkClasses
                          : ""
                      } py-2`}
                      onClick={() => setIsMenuOpen(false)}>
                      Servicios
                    </Link>
                    <Link
                      to="/contact"
                      className={`block ${linkClasses} ${
                        location.pathname === "/contact"
                          ? activeLinkClasses
                          : ""
                      } py-2`}
                      onClick={() => setIsMenuOpen(false)}>
                      Contacto
                    </Link>

                    <div className="border-t border-gray-300 pt-3 mt-3 space-y-2">
                      <Link
                        to="/login"
                        className={`block ${linkClasses} ${
                          location.pathname === "/login"
                            ? activeLinkClasses
                            : ""
                        } py-2`}
                        onClick={() => setIsMenuOpen(false)}>
                        Iniciar sesión
                      </Link>
                      <Link
                        to="/register"
                        className={`block text-center ${
                          variant === "landing"
                            ? "bg-yellow-500 hover:bg-yellow-600 text-blue-900"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        } font-bold py-3 px-6 rounded-lg transition duration-300 ${
                          location.pathname === "/register"
                            ? "ring-2 ring-offset-2 ring-blue-500"
                            : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}>
                        Registrarse
                      </Link>
                    </div>
                  </>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
