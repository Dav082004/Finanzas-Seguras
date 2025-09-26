import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRole?: 'cliente' | 'asesor';
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredRole }) => {
  const { currentUser, isLoading } = useAuth();
  const location = useLocation();

  // Mientras carga la autenticación, mostramos un loader
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Si no hay usuario autenticado, redirigir al login
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si se requiere un rol específico y el usuario no lo tiene
  if (requiredRole && currentUser.role !== requiredRole) {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
          <h3 className="font-bold mb-2">Acceso denegado</h3>
          <p>No tienes permisos para acceder a esta sección.</p>
        </div>
        <button onClick={() => window.history.back()} className="mt-4 btn-primary">
          Volver
        </button>
      </div>
    );
  }

  // Si todo está bien, mostrar el contenido protegido
  return <>{children}</>;
};

export default PrivateRoute;
