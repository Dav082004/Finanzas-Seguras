import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  getDocs,
  getDoc,
  serverTimestamp,
  Timestamp,
  DocumentData,
  limit,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from './firebaseClient';
import { Transaction } from '../types';

const COLLECTION_NAME = 'transactions';

/**
 * Crea una nueva transacción en Firestore
 */
export const addTransaction = async (
  transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>
): Promise<string> => {
  try {
    const transactionWithTimestamp = {
      ...transaction,
      createdAt: serverTimestamp(),
      date:
        transaction.date instanceof Date ? Timestamp.fromDate(transaction.date) : transaction.date,
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), transactionWithTimestamp);
    return docRef.id;
  } catch (error) {
    console.error('Error al añadir transacción:', error);
    throw error;
  }
};

/**
 * Actualiza una transacción existente
 */
export const updateTransaction = async (
  id: string,
  transaction: Partial<Omit<Transaction, 'id' | 'createdAt' | 'userId'>>
): Promise<void> => {
  try {
    const updateData = {
      ...transaction,
      updatedAt: serverTimestamp(),
      ...(transaction.date && {
        date:
          transaction.date instanceof Date
            ? Timestamp.fromDate(transaction.date)
            : transaction.date,
      }),
    };

    await updateDoc(doc(db, COLLECTION_NAME, id), updateData);
  } catch (error) {
    console.error('Error al actualizar transacción:', error);
    throw error;
  }
};

/**
 * Elimina una transacción
 */
export const deleteTransaction = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error('Error al eliminar transacción:', error);
    throw error;
  }
};

/**
 * Obtiene una transacción por su ID
 */
export const getTransactionById = async (id: string): Promise<Transaction | null> => {
  try {
    const docSnap = await getDoc(doc(db, COLLECTION_NAME, id));

    if (!docSnap.exists()) {
      return null;
    }

    // Usamos docSnap directamente en formatTransactionFromFirestore
    return formatTransactionFromFirestore(docSnap);
  } catch (error) {
    console.error('Error al obtener transacción:', error);
    throw error;
  }
};

/**
 * Obtiene todas las transacciones de un usuario
 */
export const getUserTransactions = async (userId: string): Promise<Transaction[]> => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(formatTransactionFromFirestore);
  } catch (error) {
    console.error('Error al obtener transacciones del usuario:', error);
    throw error;
  }
};

/**
 * Obtiene transacciones de un usuario filtradas por tipo
 */
export const getUserTransactionsByType = async (
  userId: string,
  type: Transaction['type']
): Promise<Transaction[]> => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('userId', '==', userId),
      where('type', '==', type),
      orderBy('date', 'desc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(formatTransactionFromFirestore);
  } catch (error) {
    console.error('Error al filtrar transacciones por tipo:', error);
    throw error;
  }
};

/**
 * Obtiene las transacciones recientes de un usuario (últimas N)
 */
export const getRecentTransactions = async (
  userId: string,
  limitCount = 5
): Promise<Transaction[]> => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('userId', '==', userId),
      orderBy('date', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(formatTransactionFromFirestore);
  } catch (error) {
    console.error('Error al obtener transacciones recientes:', error);
    throw error;
  }
};

/**
 * Calcula el balance para un usuario
 */
export const calculateUserBalance = async (
  userId: string
): Promise<{
  ingresos: number;
  gastos: number;
  total: number;
}> => {
  try {
    const transactions = await getUserTransactions(userId);

    const result = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'ingreso') {
          acc.ingresos += transaction.amount;
        } else {
          acc.gastos += transaction.amount;
        }
        return acc;
      },
      { ingresos: 0, gastos: 0 }
    );

    return {
      ingresos: result.ingresos,
      gastos: result.gastos,
      total: result.ingresos - result.gastos,
    };
  } catch (error) {
    console.error('Error al calcular balance del usuario:', error);
    throw error;
  }
};

// Función auxiliar para formatear datos de Firestore a nuestro modelo
const formatTransactionFromFirestore = (doc: QueryDocumentSnapshot<DocumentData>): Transaction => {
  const data = doc.data();

  return {
    id: doc.id,
    userId: data.userId,
    amount: data.amount,
    type: data.type,
    category: data.category,
    description: data.description,
    date: data.date instanceof Timestamp ? data.date.toDate() : data.date,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : data.createdAt,
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : data.updatedAt,
  };
};
