// HoldingsChart.js
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

// Register components once inside this dedicated file scope
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HoldingsChart = ({ holdingsData }) => {
  
  const labels = holdingsData.map((stock) => stock.name);
  const prices = holdingsData.map((stock) => stock.price);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: prices,
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Holdings Price Breakdown',
      },
    },
  };

  
  if (!holdingsData || holdingsData.length === 0) {
    return <p>No data available to display chart.</p>;
  }

  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default HoldingsChart;