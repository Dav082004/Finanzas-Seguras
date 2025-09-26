// Importamos el tipo FieldValue de Firebase
import { FieldValue } from "firebase/firestore";

export type UserRole = "cliente" | "asesor";

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: UserRole;
  createdAt: Date | number | FieldValue;
  updatedAt?: Date | number | FieldValue;
  photoURL?: string;
}

export type TransactionType = "ingreso" | "gasto";

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
export const INCOME_CATEGORIES = [
  "Salario",
  "Freelance",
  "Inversiones",
  "Regalo",
  "Otro",
];

export const EXPENSE_CATEGORIES = [
  "Alimentos",
  "Vivienda",
  "Transporte",
  "Servicios",
  "Salud",
  "Educación",
  "Entretenimiento",
  "Ropa",
  "Deudas",
  "Otro",
];

// Nuevos tipos para las funcionalidades del cliente
export interface FinancialGoal {
  id?: string;
  userId: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date | number;
  category: "ahorro" | "inversion" | "deuda" | "emergencia" | "otro";
  status: "activo" | "completado" | "pausado" | "cancelado";
  createdAt: Date | number;
  updatedAt?: Date | number;
}

export interface Budget {
  id?: string;
  userId: string;
  month: number;
  year: number;
  categories: {
    [category: string]: {
      budgeted: number;
      spent: number;
    };
  };
  totalBudgeted: number;
  totalSpent: number;
  createdAt: Date | number;
  updatedAt?: Date | number;
}

export interface FinancialReport {
  id?: string;
  userId: string;
  reportType: "mensual" | "trimestral" | "anual";
  period: {
    start: Date | number;
    end: Date | number;
  };
  summary: {
    totalIncome: number;
    totalExpenses: number;
    netFlow: number;
    savingsRate: number;
  };
  categoryBreakdown: {
    [category: string]: {
      amount: number;
      percentage: number;
      trend: "aumento" | "disminucion" | "estable";
    };
  };
  insights: string[];
  recommendations: string[];
  createdAt: Date | number;
}

export interface AdvisorAssignment {
  id?: string;
  clientId: string;
  advisorId: string;
  assignedAt: Date | number;
  status: "activo" | "inactivo";
  notes?: string;
}

export interface Consultation {
  id?: string;
  clientId: string;
  advisorId: string;
  scheduledDate: Date | number;
  duration: number; // en minutos
  type: "inicial" | "seguimiento" | "revision" | "emergencia";
  status: "programada" | "completada" | "cancelada" | "reprogramada";
  topics: string[];
  notes?: string;
  createdAt: Date | number;
  updatedAt?: Date | number;
}

// Función auxiliar para formatear montos en nuevos soles peruanos
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }).format(amount);
};
