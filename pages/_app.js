import Footer from '../components/Layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Layout/Header';
import store from '../utils/store.js/store'
import { Provider } from 'react-redux'
import Message from '../components/Message/message';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header/>
      <Component {...pageProps} />
      <Message message={`Olá mundo`}/>
      <Footer />
    </Provider>
  )
}

export default MyApp
