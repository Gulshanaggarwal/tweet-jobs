import '../styles/globals.css'
import 'react-static-tweets/styles.css'
import LocalContextProvider from '../contexts/localStateProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {


  const queryClient = new QueryClient();
  return <SessionProvider session={session}>
    <QueryClientProvider client={queryClient}>
      <LocalContextProvider>
        <Component {...pageProps} />
      </LocalContextProvider>
    </QueryClientProvider>
  </SessionProvider>
}

export default MyApp
