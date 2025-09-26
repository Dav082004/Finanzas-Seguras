import React, { useState } from 'react';
import { useTransactions } from '../hooks/useTransactions';
import TransactionList from '../components/transactions/TransactionList';
import TransactionModal from '../components/transactions/TransactionModal';
import { Transaction } from '../types';

const Transactions: React.FC = () => {
  const {
    transactions,
    loading,
    error,
    createTransaction,
    editTransaction,
    removeTransaction,
    filterByType,
    resetFilters,
  } = useTransactions();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTransaction, setCurrentTransaction] = useState<Transaction | null>(null);
  const [filter, setFilter] = useState<'todos' | 'ingreso' | 'gasto'>('todos');

  // Manejar filtros
  const handleFilterChange = (filterType: 'todos' | 'ingreso' | 'gasto') => {
    setFilter(filterType);

    if (filterType === 'todos') {
      resetFilters();
    } else {
      filterByType(filterType);
    }
  };

  // Manejar edición de transacción
  const handleEditTransaction = (transaction: Transaction) => {
    setCurrentTransaction(transaction);
    setIsModalOpen(true);
  };

  // Manejar guardado (crear o actualizar)
  const handleSaveTransaction = (
    data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt' | 'userId'>
  ) => {
    if (currentTransaction?.id) {
      // Editar existente
      editTransaction(currentTransaction.id, data);
    } else {
      // Crear nueva
      createTransaction(data);
    }

    setIsModalOpen(false);
    setCurrentTransaction(null);
  };

  // Manejar eliminación
  const handleDeleteTransaction = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta transacción?')) {
      removeTransaction(id);
    }
  };

  if (loading && transactions.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Mis Transacciones</h1>
          <p className="text-gray-600">Administra tus ingresos y gastos</p>
        </div>

        <div className="mt-4 md:mt-0">
          <button
            onClick={() => {
              setCurrentTransaction(null);
              setIsModalOpen(true);
            }}
            className="btn-primary flex items-center"
          >
            <span className="mr-2">+</span>
            Nueva Transacción
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p>{error.message}</p>
        </div>
      )}

      <div className="card bg-white shadow-sm rounded-lg mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('todos')}
              className={`px-4 py-2 rounded-md ${
                filter === 'todos'
                  ? 'bg-gray-200 text-gray-800 font-medium'
                  : 'bg-white text-gray-600 border border-gray-300'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => handleFilterChange('ingreso')}
              className={`px-4 py-2 rounded-md ${
                filter === 'ingreso'
                  ? 'bg-green-600 text-white font-medium'
                  : 'bg-white text-green-600 border border-green-600'
              }`}
            >
              Ingresos
            </button>
            <button
              onClick={() => handleFilterChange('gasto')}
              className={`px-4 py-2 rounded-md ${
                filter === 'gasto'
                  ? 'bg-red-600 text-white font-medium'
                  : 'bg-white text-red-600 border border-red-600'
              }`}
            >
              Gastos
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <TransactionList
            transactions={transactions}
            showActions={true}
            onEdit={handleEditTransaction}
            onDelete={handleDeleteTransaction}
          />

          {transactions.length === 0 && !loading && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                {filter === 'todos'
                  ? 'No hay transacciones registradas'
                  : `No hay ${filter === 'ingreso' ? 'ingresos' : 'gastos'} registrados`}
              </p>
              <button
                onClick={() => {
                  setCurrentTransaction(null);
                  setIsModalOpen(true);
                }}
                className="mt-4 btn-secondary"
              >
                Crear tu primera transacción
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal para crear/editar */}
      <TransactionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentTransaction(null);
        }}
        onSave={handleSaveTransaction}
        initialData={currentTransaction || undefined}
      />
    </div>
  );
};

export default Transactions;
