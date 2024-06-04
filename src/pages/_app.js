import "@/styles/globals.css";
import { JobProvider } from '../context/JobContext';
import { UserProvider } from '@/context/UserContext';

function MyApp({ Component, pageProps }) {
    return (
    <UserProvider>
        <JobProvider>
            <Component {...pageProps} />
        </JobProvider>
    </UserProvider>
    );
}

export default MyApp;
