import { useState } from 'react';
import axios from '../lib/axios';

const CreateJob = () => {
    const [company, setCompany] = useState('');
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
    const [description, setDescription] = useState('');
    const [daysPosted, setDaysPosted] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/jobs', {
                company,
                type,
                title,
                location,
                salaryRange,
                description,
                daysPosted
            });
            alert('Puesto creado exitosamente');
            // Limpiar el formulario
            setCompany('');
            setType('');
            setTitle('');
            setLocation('');
            setSalaryRange('');
            setDescription('');
            setDaysPosted('');
        } catch (error) {
            console.error('Error al crear el puesto:', error);
            alert('Hubo un error al crear el puesto. Inténtalo de nuevo más tarde.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Empresa</label>
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Tipo</label>
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Título</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Ubicación</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Rango Salarial</label>
                <input
                    type="text"
                    value={salaryRange}
                    onChange={(e) => setSalaryRange(e.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Descripción</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                ></textarea>
            </div>
            <div>
                <label className="block">Días Publicados</label>
                <input
                    type="number"
                    value={daysPosted}
                    onChange={(e) => setDaysPosted(e.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Crear Puesto
            </button>
        </form>
    );
};

export default CreateJob;
