import React, { useState } from 'react';
import UploadCVModal from './UploadCVModal';

export default function Header({ title, subtitle, backgroundClass }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
     <div className="w-full h-16 bg-gray-800 flex justify-between items-center px-6">
      <div className="text-white text-xl font-bold">Logo</div>
      <div className="flex items-center space-x-4">
        <div className="text-white">Nombre del usuario</div>
        <button onClick={openModal} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300">
          Subir CV
        </button>
      </div>
      <UploadCVModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    <div
      className={`relative ${backgroundClass} h-80 flex items-center justify-center text-center bg-cover bg-center`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
      
    </div>
    </div>
  );
}
