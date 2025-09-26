// Importamos el tipo FieldValue de Firebase
import { FieldValue } from 'firebase/firestore';

export type UserRole = 'cliente' | 'asesor';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: UserRole;
  createdAt: Date | number | FieldValue;
  updatedAt?: Date | number | FieldValue;
  photoURL?: string;
}

export type TransactionType = 'ingreso' | 'gasto';

export interface Transaction {
  id?: string;
  userId: string;
  amount: number;
  type: TransactionType;
  category: string;
  description: string;
  date: Date | number;
  createdAt: Date | number;
  updatedAt?: Date | number;
}

export interface Balance {
  ingresos: number;
  gastos: number;
  total: number;
}

// Categorías predefinidas para transacciones
export const INCOME_CATEGORIES = ['Salario', 'Freelance', 'Inversiones', 'Regalo', 'Otro'];

export const EXPENSE_CATEGORIES = [
  'Alimentos',
  'Vivienda',
  'Transporte',
  'Servicios',
  'Salud',
  'Educación',
  'Entretenimiento',
  'Ropa',
  'Deudas',
  'Otro',
];

// Función auxiliar para formatear montos en nuevos soles peruanos
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  }).format(amount);
};
