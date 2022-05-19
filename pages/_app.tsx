import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

function MyApp({Component, pageProps}: AppProps) {
    return <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
    </QueryClientProvider>
}

export default MyApp
