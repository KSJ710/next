import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/destyle.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
