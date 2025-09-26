import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseClient';
import { formatUserData } from '../services/authService';
import { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  error: Error | null;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoading: true,
  error: null,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoading(true);
      try {
        if (firebaseUser) {
          const userData = await formatUserData(firebaseUser);
          setCurrentUser(userData);
        } else {
          setCurrentUser(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error de autenticación desconocido'));
        console.error('Error en AuthContext:', err);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
