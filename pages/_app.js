import Footer from '../components/Layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Layout/Header';
import store from '../utils/store/ducks/store'
import { Provider } from 'react-redux'
import '../styles/messages.css';
import Head from 'next/head'
import Messages from '../components/Message/MessagesAll'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Redux Example</title>
      </Head>
      <Header/>
      <Messages />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
