import React, { useState, useEffect } from 'react';
import axios from '../lib/axios';

export default function UploadCVModal({ isOpen, onClose }) {
  const [file, setFile] = useState(null);
  const [userCV, setUserCV] = useState(null);

  useEffect(() => {
    const fetchUserCV = async () => {
      try {
        const response = await axios.get('/cv/user-cv', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` // Asegúrate de que el token se está enviando
          }
        });
        setUserCV(response.data);
      } catch (error) {
        console.error('Error al obtener el CV:', error.response?.data || error.message);
      }
    };

    if (isOpen) {
      fetchUserCV();
    }
  }, [isOpen]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('cv', file);

    try {
      const response = await axios.post('/cv/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}` // Asegúrate de que el token se está enviando
        }
      });

      if (response.status === 201) {
        alert('CV subido exitosamente');
        onClose(); // Cierra el modal
      }
    } catch (error) {
      alert('Error al subir el CV');
      console.error('Error:', error.response?.data || error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Subir CV</h2>
        {userCV && (
          <div className="mb-4">
            <p className="text-gray-700">Ya tienes un CV subido:</p>
            <a
              href={userCV.secure_url} // Utiliza secure_url para el enlace de descarga
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              download={`${userCV.public_id}.pdf`}
            >
              Descargar CV
            </a>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cv" className="block text-gray-700 text-sm font-bold mb-2">Seleccione su CV</label>
            <input 
              type="file"
              id="cv"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Subir CV
            </button>
            <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
