import React, { useState } from 'react';
import { useRouter } from 'next/router';
import UploadCVModal from './UploadCVModal';
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useUser } from '@/context/UserContext';

export default function Header({ title, subtitle, backgroundClass }) {
  const { user, setUser } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  return (
    <div>
      <div className="w-full h-16 bg-gray-800 flex justify-between items-center px-4 md:px-6">
        <div className="text-white text-xl font-bold">Logo</div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden md:flex text-white flex gap-x-2 md:gap-x-4 items-center"><FaRegUser />{user ? user.full_name : 'Usuario'}</div>
          <button onClick={openModal} className="hidden md:block bg-blue-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-500 transition duration-300">
            Subir CV
          </button>
          {user && (
            <button
              onClick={handleLogout}
              className="hidden md:block bg-red-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-500 transition duration-300"
            >
              Cerrar sesión
            </button>
          )}
          <button onClick={toggleMenu} className="block md:hidden text-white focus:outline-none">
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
        <UploadCVModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      
      {menuOpen && (
        <div className="w-full bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <div className="flex flex-col items-center gap-y-2">
            <FaRegUser />
            <span>{user ? user.full_name : 'Usuario'}</span>
          </div>
          <button onClick={openModal} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
            Subir CV
          </button>
          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      )}

      <div
        className={`relative ${backgroundClass} h-64 md:h-80 flex items-center justify-center text-center bg-cover bg-center`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{title}</h1>
            <p className="text-lg md:text-xl">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
