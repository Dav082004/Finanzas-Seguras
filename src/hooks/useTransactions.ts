import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  getUserTransactions,
  getUserTransactionsByType,
  calculateUserBalance,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from '../services/transactionsService';
import { Transaction, Balance } from '../types';

export const useTransactions = () => {
  const { currentUser } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({ ingresos: 0, gastos: 0, total: 0 });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Cargar todas las transacciones del usuario
  const fetchTransactions = useCallback(async () => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const userTransactions = await getUserTransactions(currentUser.uid);
      setTransactions(userTransactions);

      // Calcular balance
      const userBalance = await calculateUserBalance(currentUser.uid);
      setBalance(userBalance);

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al cargar transacciones'));
      console.error('Error en useTransactions:', err);
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  // Cargar transacciones al iniciar y cuando cambia el usuario
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  // Filtrar transacciones por tipo
  const filterByType = async (type: Transaction['type']) => {
    if (!currentUser) return;

    setLoading(true);
    try {
      const filteredTransactions = await getUserTransactionsByType(currentUser.uid, type);
      setTransactions(filteredTransactions);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(`Error al filtrar por ${type}`));
    } finally {
      setLoading(false);
    }
  };

  // Crear nueva transacción
  const createTransaction = async (
    transactionData: Omit<Transaction, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
  ) => {
    if (!currentUser) return;

    try {
      setLoading(true);

      // Añadir userId al objeto de transacción
      const newTransaction = {
        ...transactionData,
        userId: currentUser.uid,
      };

      await addTransaction(newTransaction);

      // Recargar transacciones y balance
      await fetchTransactions();

      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al crear transacción'));
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Actualizar transacción existente
  const editTransaction = async (
    id: string,
    transactionData: Partial<Omit<Transaction, 'id' | 'userId' | 'createdAt' | 'updatedAt'>>
  ) => {
    if (!currentUser) return;

    try {
      setLoading(true);
      await updateTransaction(id, transactionData);

      // Recargar transacciones y balance
      await fetchTransactions();

      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al actualizar transacción'));
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Eliminar transacción
  const removeTransaction = async (id: string) => {
    if (!currentUser) return;

    try {
      setLoading(true);
      await deleteTransaction(id);

      // Recargar transacciones y balance
      await fetchTransactions();

      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al eliminar transacción'));
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Resetear filtros y cargar todas las transacciones
  const resetFilters = () => {
    fetchTransactions();
  };

  return {
    transactions,
    balance,
    loading,
    error,
    filterByType,
    createTransaction,
    editTransaction,
    removeTransaction,
    resetFilters,
    fetchTransactions,
  };
};
