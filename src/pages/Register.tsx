import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import RegisterForm from '../components/auth/RegisterForm';

const Register: React.FC = () => {
  const { currentUser, isLoading } = useAuth();

  // Si ya hay usuario logueado, redirigir al dashboard
  if (currentUser && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Finanzas Seguras</h1>
          <p className="mt-2 text-sm text-gray-600">
            Crea tu cuenta para gestionar tus finanzas personales
          </p>
        </div>

        <RegisterForm onSwitchToLogin={() => (window.location.href = '/login')} />
      </div>
    </div>
  );
};

export default Register;
