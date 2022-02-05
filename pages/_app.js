import '../styles/globals.css'
import LocalContextProvider from '../contexts/localStateProvider'

function MyApp({ Component, pageProps }) {
  return <LocalContextProvider>
    <Component {...pageProps} />
  </LocalContextProvider>
}

export default MyApp
