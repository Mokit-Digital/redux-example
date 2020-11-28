import Footer from '../components/Layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Layout/Header';
import store from '../utils/store/ducks/store'
import { Provider } from 'react-redux'
import Message from '../components/Message/message';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Redux Example</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Message message={`Carro Adicionado!`}/>
      <Footer />
    </Provider>
  )
}

export default MyApp
