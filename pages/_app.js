import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from 'react-query'
import 'react-static-tweets/styles.css'
import Footer from '../components/footer'
import LocalContextProvider from '../contexts/localStateProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {


  const queryClient = new QueryClient();
  return <SessionProvider session={session}>
    <QueryClientProvider client={queryClient}>
      <LocalContextProvider>
        <Component {...pageProps} />
      </LocalContextProvider>
    </QueryClientProvider>
    <Footer />
  </SessionProvider>
}

export default MyApp
