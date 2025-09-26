import React, { useState } from 'react';
import { Transaction, INCOME_CATEGORIES, EXPENSE_CATEGORIES } from '../../types';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) => void;
  initialData?: Partial<Transaction>;
}

const TransactionModal: React.FC<TransactionModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [type, setType] = useState<'ingreso' | 'gasto'>(initialData?.type || 'ingreso');
  const [amount, setAmount] = useState<string>(
    initialData?.amount ? initialData.amount.toString() : ''
  );
  const [category, setCategory] = useState<string>(initialData?.category || '');
  const [description, setDescription] = useState<string>(initialData?.description || '');
  const [date, setDate] = useState<string>(
    initialData?.date
      ? new Date(initialData.date).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0]
  );

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      amount: parseFloat(amount),
      type,
      category,
      description,
      date: new Date(date),
    });
    // Resetear formulario
    setType('ingreso');
    setAmount('');
    setCategory('');
    setDescription('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  // Opciones de categorías según el tipo
  const categoryOptions = type === 'ingreso' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center pb-3">
          <h3 className="text-xl font-semibold text-gray-700">
            {initialData?.id ? 'Editar Transacción' : 'Nueva Transacción'}
          </h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tipo</label>
            <div className="flex">
              <label
                className={`flex-1 text-center py-2 rounded-l-md cursor-pointer ${
                  type === 'ingreso'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <input
                  type="radio"
                  value="ingreso"
                  checked={type === 'ingreso'}
                  onChange={() => setType('ingreso')}
                  className="sr-only"
                />
                Ingreso
              </label>
              <label
                className={`flex-1 text-center py-2 rounded-r-md cursor-pointer ${
                  type === 'gasto'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <input
                  type="radio"
                  value="gasto"
                  checked={type === 'gasto'}
                  onChange={() => setType('gasto')}
                  className="sr-only"
                />
                Gasto
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
              Monto (S/)
            </label>
            <input
              id="amount"
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
              Categoría
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-field"
              required
            >
              <option value="">Selecciona una categoría</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Descripción
            </label>
            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
              Fecha
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="flex justify-end pt-2">
            <button type="button" onClick={onClose} className="btn-secondary mr-2">
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
