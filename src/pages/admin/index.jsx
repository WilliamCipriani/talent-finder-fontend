
import AdminLayout from '@/components/AdminLayout';
import CreateJob from '@/components/CreateJob';
import ViewJobs from '@/components/ViewJobs';

const AdminDashboard = () => {
    return (
        <AdminLayout>
            <CreateJob />
            <ViewJobs />
        </AdminLayout>
    );
};

export default AdminDashboard;
