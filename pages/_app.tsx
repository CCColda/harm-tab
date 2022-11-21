import { Provider } from 'react-redux'
import store from '../app/store'
import Head from '../node_modules/next/head'
import '../styles/Globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Harm-tab</title>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
