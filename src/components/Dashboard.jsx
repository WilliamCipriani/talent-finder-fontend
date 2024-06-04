import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import axios from '../lib/axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
    const [data, setData] = useState({ passed: 0, notPassed: 0 });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
        const response = await axios.get('/approved-applicants/approvedApplicants'); // Endpoint para obtener los datos de los usuarios
        const { passed, notPassed } = response.data;

        console.log('Fetched Data:', { passed, notPassed });

        setData({ passed, notPassed });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const barData = {
    labels: ['Usuarios que Pasaron', 'Usuarios que No Pasaron'],
    datasets: [
      {
        label: 'Usuarios',
        data: [data.passed, data.notPassed],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  const pieData = {
    labels: ['Usuarios que Pasaron', 'Usuarios que No Pasaron'],
    datasets: [
      {
        data: [data.passed, data.notPassed],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard de Usuarios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Usuarios que Pasaron vs No Pasaron</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Distribución de Usuarios</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;