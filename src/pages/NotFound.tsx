import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Error 404
        </h1>
        <p className="mt-4 text-lg text-gray-500">Página no encontrada</p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
