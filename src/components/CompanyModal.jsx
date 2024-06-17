// src/components/CompanyModal.jsx
import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const CompanyModal = ({ isOpen, closeModal, details = [] }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Detalles de Usuarios por Empresa
                                </Dialog.Title>
                                <div className="mt-2">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr>
                                                <th className="py-2">Convocatoria</th>
                                                <th className="py-2">Nombre</th>
                                                <th className="py-2">Empresa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {details.length > 0 ? (
                                                details.map((applicant, index) => (
                                                    <tr key={index}>
                                                        <td className="py-2">{applicant.title}</td>
                                                        <td className="py-2">{applicant.name}</td>
                                                        <td className="py-2">{applicant.company}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td className="py-2" colSpan="3">No hay detalles disponibles</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CompanyModal;
