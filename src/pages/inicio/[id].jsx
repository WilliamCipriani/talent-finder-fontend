import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import axios from 'axios';

export default function DetalleTrabajo({  job }) {

    const router = useRouter();
    const [userCV, setUserCV] = useState(null);

    useEffect(() => {
        // Obtener el CV del usuario
        const fetchUserCV = async () => {
            try {
                const response = await axios.get('/cv/user-cv', { withCredentials: true });
                setUserCV(response.data.id); // Asegúrate de que response.data.id sea el ID del CV
            } catch (error) {
                console.error('Error al obtener el CV del usuario:', error);
            }
        };

        fetchUserCV();
    }, []);

    const handleApply = async () => {
        if (!userCV) {
            alert('No tienes un CV seleccionado.');
            return;
        }

        try {
            await axios.post('/applications/apply', { job_id: job.id, cv_id: userCV }, { withCredentials: true });
            alert('Postulación realizada con éxito');
        } catch (error) {
            console.error('Error al postular:', error);
            alert('Hubo un error al postular. Inténtalo de nuevo más tarde.');
        }
    };

    // Asegúrate de que el trabajo existe
    if (!job) {
        return <p>Job not found</p>;
    }

    return (
        <>
            <Header  
                title="Detalles del trabajo" 
                subtitle="Conoce más sobre nuestras oportunidades de empleo."
                backgroundClass="bg-hero-detalles"
            />
            <Layout>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <h1 className="text-xl font-bold">{job.title}</h1>
                    <p className="text-sm text-gray-500">{job.company} - {job.type}</p>
                    <p className="text-sm">{job.location}</p>
                    <p className="text-sm">{job.salaryRange}</p>
                    <hr className="my-4"/>
                    <p>{job.description}</p>

                    <h2 className="mt-6 mb-2 font-bold">Responsabilidad Laboral</h2>
                    <p>{job.responsibilities}</p>
                </div>

                <div>
                    <h2 className="font-bold">Cualidades</h2>
                    <p>{job.qualifications}</p>
                </div>
                </div>

                <div className="mt-6">
                        <h2 className="font-bold">Postular al Trabajo</h2>
                        <div className="flex justify-center items-center w-full">
                            <div className="flex flex-col w-full">
                                <select
                                    className="border-2 border-gray-300 rounded-md p-2 w-full text-gray-700"
                                    value={userCV || ''}
                                    onChange={(e) => setUserCV(e.target.value)}
                                    disabled
                                >
                                    <option value="">Seleccionar CV</option>
                                    {userCV && <option value={userCV}>CV {userCV}</option>}
                                </select>
                                <button
                                    onClick={handleApply}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                >
                                    Postular
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    try {
        const response = await axios.get('http://localhost:8000/jobs/jobs'); // Usa el endpoint de tu API
        const jobs = response.data;

        const paths = jobs.map((job) => ({
            params: { id: job.id.toString() },
        }));

        return { paths, fallback: false };
    } catch (error) {
        console.error('Error fetching job IDs:', error);
        return { paths: [], fallback: false };
    }
}

export async function getStaticProps({ params }) {
    try {
        const response = await axios.get(`http://localhost:8000/jobs/jobs/${params.id}`); // Usa el endpoint de tu API
        const job = response.data;

        return {
            props: {
                job,
            },
        };
    } catch (error) {
        console.error('Error fetching job data:', error);
        return {
            props: {
                job: null,
            },
        };
    }
}