import "@/styles/globals.css";
import { JobProvider } from '../context/JobContext';

function MyApp({ Component, pageProps }) {
    return (
        <JobProvider>
            <Component {...pageProps} />
        </JobProvider>
    );
}

export default MyApp;
