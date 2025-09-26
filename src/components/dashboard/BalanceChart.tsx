import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Transaction } from '../../types';

interface BalanceChartProps {
  transactions: Transaction[];
}

const BalanceChart: React.FC<BalanceChartProps> = ({ transactions }) => {
  // Transformar los datos para el gráfico por mes
  const chartData = useMemo(() => {
    // Obtener la fecha de hace 6 meses
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    // Crear objeto para almacenar datos por mes
    const monthlyData: { [key: string]: { month: string; ingresos: number; gastos: number } } = {};

    // Inicializar los últimos 6 meses
    for (let i = 0; i <= 5; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const monthKey = `${date.getMonth()}-${date.getFullYear()}`;
      const monthName = new Intl.DateTimeFormat('es', { month: 'short' }).format(date);

      monthlyData[monthKey] = {
        month: monthName,
        ingresos: 0,
        gastos: 0,
      };
    }

    // Agregar transacciones a sus respectivos meses
    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);

      // Solo considerar transacciones de los últimos 6 meses
      if (date >= sixMonthsAgo) {
        const monthKey = `${date.getMonth()}-${date.getFullYear()}`;

        if (monthlyData[monthKey]) {
          if (transaction.type === 'ingreso') {
            monthlyData[monthKey].ingresos += transaction.amount;
          } else {
            monthlyData[monthKey].gastos += transaction.amount;
          }
        }
      }
    });

    // Convertir a array y ordenar por fecha
    return Object.values(monthlyData).reverse();
  }, [transactions]);

  // Personalizar tooltips
  interface TooltipProps {
    active?: boolean;
    payload?: Array<{
      value: number;
      name: string;
      dataKey: string;
    }>;
    label?: string;
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow rounded border border-gray-200">
          <p className="font-semibold">{label}</p>
          <p className="text-sm text-green-600">Ingresos: S/ {payload[0].value.toFixed(2)}</p>
          <p className="text-sm text-red-600">Gastos: S/ {payload[1].value.toFixed(2)}</p>
          <p className="text-sm font-semibold mt-1">
            Balance: S/ {(payload[0].value - payload[1].value).toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="ingresos" name="Ingresos" fill="#22c55e" />
        <Bar dataKey="gastos" name="Gastos" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BalanceChart;
