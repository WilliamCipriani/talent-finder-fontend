import Layout from "@/components/Layout"
import SearchJob from "@/components/SearchJob"
import JobCard from "@/components/JobCard"
import Header from "@/components/Header";
import jobs from "../../../data/jobs.json"

export default function IncioPage ()  {
  
    return(
        <>
            <Header  
                title="Trabajos Disponibles" 
                subtitle="Conoce más sobre nuestras oportunidades de empleo."
                backgroundClass="bg-hero-inicio"
            />
            <Layout >
                <SearchJob />
                <div className="flex justify-center items-center flex-wrap m-4">
                {jobs.map((job, index) => (
                    <JobCard key={index} job={job} jobId={index} />
                ))}
                </div>
            </Layout>
        </>
    )
}