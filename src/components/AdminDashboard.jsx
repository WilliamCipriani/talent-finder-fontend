import React, { useState } from 'react';
import Sidebar from './Slidebar';
import Navbar from './Navbar';
import JobTable from './JobTable';
import ApplicantList from './ApplicantList';


const AdminDashboard = () => {
  const [view, setView] = useState('jobTable'); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderView = () => {
    switch(view) {
      case 'jobTable':
        return <JobTable />;
      case 'applicantList':
        return <ApplicantList />;
      default:
        return <JobTable />;
    }
  }

  const handleCreateJob = (job) => {
    console.log(job);
    setIsModalOpen(false);
    // Lógica para guardar el nuevo trabajo
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setView={setView} /> 
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4">
        {view.view === 'jobTable' && <JobTable />}
        {view.view === 'applicantList' && <ApplicantList company={view.company} />}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
