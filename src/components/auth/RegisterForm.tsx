import React, { useState } from 'react';
import { registerUser } from '../../services/authService';
import { UserRole } from '../../types';

interface RegisterFormProps {
  onRegisterSuccess?: () => void;
  onSwitchToLogin?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegisterSuccess, onSwitchToLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [role, setRole] = useState<UserRole>('cliente');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      setLoading(true);
      setError('');

      await registerUser(email, password, displayName, role);

      if (onRegisterSuccess) {
        onRegisterSuccess();
      }
    } catch (err) {
      console.error('Error al registrar:', err);

      // Manejar errores comunes de Firebase Auth
      if (err instanceof Error) {
        switch (err.message) {
          case 'Firebase: Error (auth/email-already-in-use).':
            setError('Este correo ya está registrado');
            break;
          case 'Firebase: Error (auth/invalid-email).':
            setError('El correo electrónico no es válido');
            break;
          default:
            setError('Error al registrar. Intenta nuevamente.');
        }
      } else {
        setError('Error desconocido al registrar');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registro</h2>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre completo
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Mínimo 6 caracteres</p>
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirmar contraseña
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Tipo de usuario</label>
          <div className="flex">
            <label
              className={`flex-1 text-center py-2 rounded-l-md cursor-pointer ${
                role === 'cliente'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <input
                type="radio"
                value="cliente"
                checked={role === 'cliente'}
                onChange={() => setRole('cliente')}
                className="sr-only"
              />
              Cliente
            </label>
            <label
              className={`flex-1 text-center py-2 rounded-r-md cursor-pointer ${
                role === 'asesor'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <input
                type="radio"
                value="asesor"
                checked={role === 'asesor'}
                onChange={() => setRole('asesor')}
                className="sr-only"
              />
              Asesor
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button
            type="submit"
            disabled={loading}
            className={`btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Registrando...' : 'Registrarme'}
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="text-gray-600 text-sm">
          ¿Ya tienes una cuenta?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            Inicia sesión
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
