import Image from 'next/image';
import React from 'react';

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100">
      <div className="flex-1 hidden lg:flex justify-center items-center">
        <Image
          src="/img/order-confirmed-2-78.png"
          alt="Imagen Descriptiva"
          layout="responsive"
          height={500}
          width={500}
          className="w-full"
        />
      </div>
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl mx-4 my-6 lg:mx-8 lg:max-w-lg z-50">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Crear Cuenta</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Nombre de Usuario</label>
            <input type="text" id="username" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
            <input type="email" id="email" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
            <input type="password" id="password" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirmar Contraseña</label>
            <input type="password" id="confirmPassword" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Número Telefónico</label>
            <input type="tel" id="phone" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" type="submit">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
