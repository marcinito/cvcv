import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
