import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTransactions } from "../hooks/useTransactions";
import TransactionList from "../components/transactions/TransactionList";
import BalanceChart from "../components/dashboard/BalanceChart";
import TransactionModal from "../components/transactions/TransactionModal";
import { Transaction } from "../types";

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const { transactions, balance, loading, error, createTransaction } =
    useTransactions();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Comentado temporalmente - se usará en futuras funcionalidades
  // const currentMonth = new Date().getMonth();
  // const currentYear = new Date().getFullYear();
  // const monthlyTransactions = transactions.filter((t) => {
  //   const transactionDate = new Date(t.date);
  //   return (
  //     transactionDate.getMonth() === currentMonth &&
  //     transactionDate.getFullYear() === currentYear
  //   );
  // });

  // const monthlyIncome = monthlyTransactions
  //   .filter((t) => t.type === "ingreso")
  //   .reduce((sum, t) => sum + t.amount, 0);

  // const monthlyExpenses = monthlyTransactions
  //   .filter((t) => t.type === "gasto")
  //   .reduce((sum, t) => sum + t.amount, 0);

  // const savingsRate =
  //   monthlyIncome > 0
  //     ? ((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100
  //     : 0;

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6"
        role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error.message}</span>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold">
          Debes iniciar sesión para ver tu dashboard
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenido, {currentUser.displayName || "Usuario"}
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary flex items-center">
            <span className="mr-2">+</span>
            Nueva Transacción
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Balance Total
          </h2>
          <p
            className={`text-3xl font-bold ${
              balance.total >= 0 ? "text-green-600" : "text-red-600"
            }`}>
            S/ {balance.total.toFixed(2)}
          </p>
        </div>

        <div className="card bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Ingresos</h2>
          <p className="text-3xl font-bold text-green-600">
            S/ {balance.ingresos.toFixed(2)}
          </p>
        </div>

        <div className="card bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Gastos</h2>
          <p className="text-3xl font-bold text-red-600">
            S/ {balance.gastos.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Balance Mensual
          </h2>
          <div className="h-80">
            <BalanceChart transactions={transactions} />
          </div>
        </div>

        <div className="card bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Transacciones Recientes
          </h2>
          <TransactionList transactions={transactions.slice(0, 5)} />
          {transactions.length > 5 && (
            <div className="mt-4 text-center">
              <button className="text-primary-600 hover:text-primary-800 font-medium">
                Ver todas las transacciones
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal para crear nueva transacción */}
      <TransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(
          data: Omit<Transaction, "id" | "userId" | "createdAt" | "updatedAt">
        ) => {
          createTransaction(data);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default Dashboard;
