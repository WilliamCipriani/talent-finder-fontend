import { useState } from "react";
import Layout from "@/components/Layout";
import SearchJob from "@/components/SearchJob";
import JobCard from "@/components/JobCard";
import Header from "@/components/Header";
import jobs from "../../../data/jobs.json";

export default function InicioPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = (term, type) => {
    setSearchTerm(term);
    setJobType(type);
    filterJobs(term, type);
  };

  const filterJobs = (term, type) => {
    let filtered = jobs;

    if (term) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter((job) =>
        job.type.toLowerCase() === type.toLowerCase()
      );
    }

    setFilteredJobs(filtered);
  };

  return (
    <>
      <Header
        title="Trabajos Disponibles"
        subtitle="Conoce más sobre nuestras oportunidades de empleo."
        backgroundClass="bg-hero-inicio"
      />
      <Layout>
        <SearchJob onSearch={handleSearch} />
        <div className="flex justify-center items-center flex-wrap m-4">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} jobId={index} />
          ))}
        </div>
      </Layout>
    </>
  );
}
