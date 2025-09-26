import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Login: React.FC = () => {
  const { currentUser, isLoading } = useAuth();
  const [showRegister, setShowRegister] = useState<boolean>(false);

  // Si ya hay usuario logueado, redirigir al dashboard
  if (currentUser && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        {/* Header simplificado */}
        <div className="text-center mb-6">
          {/* Logo de la empresa */}
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <svg
                className="h-8 w-8 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.57.53 1.32 1.47 1.6v-3.35L9.6 12.5c-.94-.47-1.4-1.25-1.4-2.35 0-1.86 1.51-2.78 3.14-3.12V5h2.67v2.02c1.52.38 2.65 1.43 2.79 3.16h-1.97c-.1-.87-.54-1.49-1.32-1.67v3.08l1.41.44c1.26.41 2.01 1.24 2.01 2.62 0 1.7-1.4 2.94-3.1 3.29z"></path>
              </svg>
            </div>
          </div>

          {/* Nombre de la empresa */}
          <h1 className="text-2xl font-bold text-white mb-2">
            Finanzas Seguras
          </h1>
          <p className="text-sm text-blue-200">
            Gestiona tus finanzas de manera inteligente
          </p>
        </div>

        {/* Formularios con fondo mejorado */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8">
          {showRegister ? (
            <RegisterForm
              onRegisterSuccess={() => setShowRegister(false)}
              onSwitchToLogin={() => setShowRegister(false)}
            />
          ) : (
            <LoginForm onSwitchToRegister={() => setShowRegister(true)} />
          )}
        </div>

        {/* Footer con información adicional */}
        <div className="text-center text-blue-200 text-xs">
          <p className="mb-2">
            Plataforma digital inteligente para la gestión de finanzas
            personales
          </p>
          <p>
            ¿Necesitas ayuda? Contáctanos:
            <a
              href="mailto:info@finanzasseguras.com"
              className="text-yellow-400 hover:text-yellow-300 ml-1">
              info@finanzasseguras.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
