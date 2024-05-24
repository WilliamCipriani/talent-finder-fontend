import Link from "next/link";

export default function JobCard({ job }) {
    return (
      <div className="bg-white shadow-4xl rounded-lg p-6 mx-10 m-4 max-w-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-gray-300 rounded-full h-10 w-10"></div>
          <div>
            <h4 className="text-lg font-bold">{job.company}</h4>
            <p className="text-gray-600 text-sm">{job.type}</p>
          </div>
        </div>
  
        <h5 className="text-md font-bold">{job.title}</h5>
        <p className="text-gray-800 text-sm mb-4">{job.location}</p>
        <p className="text-gray-600 text-sm mb-4">{job.description}</p>
        <p className="text-gray-600 text-xs mb-6">hace {job.daysPosted} días</p>

        <Link href={`/inicio/${job.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Aplicar
        </button>
        </Link>
      </div>
    );
  }