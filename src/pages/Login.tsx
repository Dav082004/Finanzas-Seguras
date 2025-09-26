import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

const Login: React.FC = () => {
  const { currentUser, isLoading } = useAuth();
  const [showRegister, setShowRegister] = useState<boolean>(false);

  // Si ya hay usuario logueado, redirigir al dashboard
  if (currentUser && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Finanzas Seguras</h1>
          <p className="mt-2 text-sm text-gray-600">
            Plataforma inteligente para la gestión de tus finanzas personales
          </p>
        </div>

        {showRegister ? (
          <RegisterForm
            onRegisterSuccess={() => setShowRegister(false)}
            onSwitchToLogin={() => setShowRegister(false)}
          />
        ) : (
          <LoginForm onSwitchToRegister={() => setShowRegister(true)} />
        )}
      </div>
    </div>
  );
};

export default Login;
