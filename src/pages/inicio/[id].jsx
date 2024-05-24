import { useRouter } from 'next/router';
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import jobs from '../../../data/jobs.json';

export default function DetalleTrabajo() {

    const router = useRouter();
    const { id } = router.query;

    const job = jobs.find(job => job.id === Number(id));
    
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
                <h2 className="font-bold">Upload File Here</h2>
                <div className="flex justify-center items-center w-full">
                    <button className="border-2 border-dashed border-gray-300 rounded-md p-6 w-full text-gray-500 hover:border-blue-500">
                    + Upload File Here
                    </button>
                </div>
                </div>
            </div>
            </Layout>
        </>
    );
}