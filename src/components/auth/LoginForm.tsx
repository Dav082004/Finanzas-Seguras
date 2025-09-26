import React, { useState } from 'react';
import { loginUser } from '../../services/authService';

interface LoginFormProps {
  onLoginSuccess?: () => void;
  onSwitchToRegister?: () => void;
  onSwitchToForgotPassword?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLoginSuccess,
  onSwitchToRegister,
  onSwitchToForgotPassword,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');

      await loginUser(email, password);

      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);

      // Manejar errores comunes de Firebase Auth
      if (err instanceof Error) {
        switch (err.message) {
          case 'Firebase: Error (auth/invalid-email).':
            setError('El correo electrónico no es válido');
            break;
          case 'Firebase: Error (auth/user-not-found).':
            setError('Usuario no encontrado');
            break;
          case 'Firebase: Error (auth/wrong-password).':
            setError('Contraseña incorrecta');
            break;
          case 'Firebase: Error (auth/too-many-requests).':
            setError('Demasiados intentos fallidos. Intenta más tarde');
            break;
          default:
            setError('Error al iniciar sesión. Intenta nuevamente.');
        }
      } else {
        setError('Error desconocido al iniciar sesión');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
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

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold">
              Contraseña
            </label>
            {onSwitchToForgotPassword && (
              <button
                type="button"
                onClick={onSwitchToForgotPassword}
                className="text-sm text-primary-600 hover:text-primary-800"
              >
                ¿Olvidaste tu contraseña?
              </button>
            )}
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <button
            type="submit"
            disabled={loading}
            className={`btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="text-gray-600 text-sm">
          ¿No tienes una cuenta?{' '}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
