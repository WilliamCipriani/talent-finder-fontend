import React, { useState, useEffect } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import axios from '../lib/axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const Dashboard = () => {
  const [data, setData] = useState({ passed: 0, notPassed: 0, byJob: {}, byCompany: {} });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/approved-applicants/approvedApplicants');
        const { passed, notPassed, byJob, byCompany } = response.data || { passed: 0, notPassed: 0, byJob: {}, byCompany: {} };

        console.log('Fetched Data:', { passed, notPassed, byJob, byCompany });

        // Verificar si los datos son correctos
        setData({ passed, notPassed, byJob, byCompany });
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

  const lineData = {
    labels: Object.keys(data.byJob),
    datasets: [
      {
        label: 'Usuarios por Título de Trabajo',
        data: Object.values(data.byJob),
        fill: false,
        borderColor: '#4CAF50',
      },
    ],
  };

  const pieData = {
    labels: Object.keys(data.byCompany),
    datasets: [
      {
        data: Object.values(data.byCompany),
        backgroundColor: Object.keys(data.byCompany).map((_, index) => {
          const colors = ['#4CAF50', '#F44336', '#FFC107', '#00BCD4', '#9C27B0'];
          return colors[index % colors.length];
        }),
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard de Usuarios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Usuarios que Pasaron vs No Pasaron</h2>
          <div style={{ height: '300px' }}>
            <Bar data={barData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Distribución de Usuarios por Título de Trabajo</h2>
          <div style={{ height: '300px' }}>
            <Line data={lineData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Distribución de Usuarios por Empresa</h2>
          <div style={{ height: '300px' }}>
            <Pie data={pieData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
