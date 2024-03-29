import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

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
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
}

export default MyApp
