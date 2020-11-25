import Footer from '../components/Layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Layout/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
