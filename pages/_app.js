import '../styles/globals.css'
import 'react-static-tweets/styles.css'
import LocalContextProvider from '../contexts/localStateProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SessionProvider } from "next-auth/react"
import Header from '../components/header'
import ScrollToTop from '../components/scrollToTop'
import Login from '../components/login'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {


  const queryClient = new QueryClient();
  return <SessionProvider session={session}>
    <QueryClientProvider client={queryClient}>
      <LocalContextProvider>
        <Header />
        <Login />
        <Component {...pageProps} />
        <ScrollToTop />
      </LocalContextProvider>
    </QueryClientProvider>
  </SessionProvider>
}

export default MyApp
