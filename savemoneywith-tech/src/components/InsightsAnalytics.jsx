import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InsightsAnalytics = () => {
  // Mock data for insights (replace with real insights data)
  const mockInsights = [
    { label: 'Income Growth', value: 30 },
    { label: 'Expense Reduction', value: 15 },
    { label: 'Investment Gains', value: 40 },
    { label: 'Tax Savings', value: 10 },
  ];

  // Data for the Bar chart
  const data = {
    labels: mockInsights.map((insight) => insight.label),
    datasets: [
      {
        label: 'Financial Insights',
        data: mockInsights.map((insight) => insight.value),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Financial Insights',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Insights & Analytics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default InsightsAnalytics;
