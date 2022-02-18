import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from 'react-query'
import 'react-static-tweets/styles.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Login from '../components/login'
import ScrollToTop from '../components/scrollToTop'
import LocalContextProvider from '../contexts/localStateProvider'
import '../styles/globals.css'

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
    <Footer />
  </SessionProvider>
}

export default MyApp
